// noinspection JSUnusedGlobalSymbols,DuplicatedCode
// ^ for webstorm, may be removed
// use ./lib/bundle.js for browser
const cleanDiacritics = require("./diacriticReplacer.js");
module.exports = validateEMailAddress;

function validateEMailAddress(addr, removeDiacritics) {
  addr = addr && addr.length && addr.trim && addr.trim() || `invalid@input.info`;
  const addrSplitted = addr.split(`@`);
  const [localPart, domain] = addrSplitted;
  const [d, l, moreThanOneAt, noDomain, startsOrEndsWithDot, doubleDot,
    insufficientDomain, noValidStartChr, invalidChrs, noParam, space, spacing] =
    (`Domain|Name part|moreThanOneAt|noDomain|startsOrEndsWithDot|doubleDot|` +
      `insufficientDomain|noValidStartChr|invalidChrs|noParam|space|` +
      `space, tab or new line`)
      .split(`|`);
  const RegExpStore = {
    [startsOrEndsWithDot]: /\.$|^\./,
    [doubleDot]: /\.{2,}/g,
    [noValidStartChr]: /^[\p{L}]/ui,
    [space]: /\s/,
    [invalidChrs]: {
      [l]: /[^\p{L}~+_.#\-0-9|=!]/ui,
      [d]: /[^\p{L}_\-.]/ui
    },
  };
  const invalidChrsFound = {
    [d]: str => str.match(RegExpStore[invalidChrs][d]).map(v => RegExpStore[space].test(v) ? spacing : v.trim()).join(`|`),
    [l]: str => str.match(RegExpStore[invalidChrs][l]).map(v => RegExpStore[space].test(v) ? spacing : v.trim()).join(`|`),
  };
  const msgFactory = {
    [noParam]: () => `Please provide an email address`,
    [moreThanOneAt]: () => `More than one @ in given address`,
    [noDomain]: () => `No recognizable domain part (lacking domein/@ or too many @ in given address)`,
    [startsOrEndsWithDot]: dl => `${dl} can't start or end with a dot (.)`,
    [doubleDot]: dl => `${dl} contains consecutive dots (.)`,
    [insufficientDomain]: dl => `${dl} part should be at least a subdomain of a top level domain`,
    [noValidStartChr]: dl => `${dl} does not start with a valid character`,
    [invalidChrs]: dl => domainOrLocal => `${dl} [${invalidChrsFound[dl](domainOrLocal)}] not allowed`,
  };
  const createCheck = (err, msg, str2Check) => err && {
    error: err,
    errors: [],
    get message() {
      if (this.error) {
        this.errors.push(msg.constructor === Function ? msg(str2Check) : msg);
      }
      return this.errors;
    }
  } || {};
  // full address error checks
  let result = Object.entries({
    [noParam]: createCheck(addr === `invalid@input.info`, msgFactory[noParam]()),
    [moreThanOneAt]: createCheck(addrSplitted.length > 2, msgFactory[moreThanOneAt]()),
    [noDomain]: createCheck(!domain, msgFactory[noDomain]())
  }).reduce((acc, [, value]) => value.error ? [...acc, value] : acc, []);
  const fatal = result.length > 0;
  // nothing fatal occured, so more checks
  if (!fatal) {
    // local part error checks if applicable
    result = localPart
      ? Object.entries({
        [startsOrEndsWithDot]: createCheck(RegExpStore[startsOrEndsWithDot].test(localPart), msgFactory[startsOrEndsWithDot](l)),
        [doubleDot]: createCheck(RegExpStore[doubleDot].test(localPart), msgFactory[doubleDot](l)),
        [noValidStartChr]: createCheck(!RegExpStore[noValidStartChr].test(localPart), msgFactory[noValidStartChr](l)),
        [invalidChrs]: createCheck(RegExpStore[invalidChrs][l].test(localPart), msgFactory[invalidChrs](l), localPart)
      }).reduce((acc, [, value]) => value.error ? [...acc, value] : acc, result) : result;
    // domain error checks (if applicable)
    result = domain
      ? Object.entries({
        [startsOrEndsWithDot]: createCheck(RegExpStore[startsOrEndsWithDot].test(domain), msgFactory[startsOrEndsWithDot](d)),
        [doubleDot]: createCheck(RegExpStore[doubleDot].test(domain), msgFactory[doubleDot](d)),
        [insufficientDomain]: createCheck(domain.split(/\./).length < 2, msgFactory[insufficientDomain](d)),
        [noValidStartChr]: createCheck(!RegExpStore[noValidStartChr].test(domain), msgFactory[noValidStartChr](d)),
        [invalidChrs]: createCheck(RegExpStore[invalidChrs][d].test(domain), msgFactory[invalidChrs](d), domain),
      }).reduce((acc, [, value]) => value.error ? [...acc, value] : acc, result) : result;
  }

  let nErrors = fatal ? `fatal error(s) occured` : `${result.length} ${result.length < 2 ? `error` : `errors`}`;

  return result.length < 1
    ? {error: false, validatedAddress: removeDiacritics ? cleanDiacritics(addr) : addr,}
      : {
          error: true,
          validatedAddress: `${removeDiacritics ? cleanDiacritics(addr) : addr} - ${nErrors}:`,
          errors: result.map(v => v.message).flat()
    };
}