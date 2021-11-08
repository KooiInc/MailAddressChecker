// noinspection JSUnusedGlobalSymbols
module.exports = {
  mailAddressCheck: addr => {
    addr = addr && addr.length && addr.trim && addr.trim() || `invalid@input.info`;
    const addrSplitted = addr.split(`@`);
    const [localPart, domain] = addrSplitted;
    const [d, l, moreThanOneAt, noDomain, startsOrEndsWithDot, doubleDot,
      insufficientDomain, noValidStartChr, invalidChrs, noParam, space, spacing] =
      (`domain|local part|moreThanOneAt|noDomain|startsOrEndsWithDot|doubleDot|` +
        `insufficientDomain|noValidStartChr|invalidChrs|noParam|space|` +
        `space, tab or new line`)
        .split(`|`);
    const REs = {
      [startsOrEndsWithDot]: /\.$|^\./,
      [doubleDot]: /\.{2,}/g,
      [noValidStartChr]: /^[\p{L}]/ui,
      [space]: /\s/,
      [invalidChrs]: {
        [l]: /[^\p{L}_.#\-\d+~|=!]+/uig,
        [d]: /[^\p{L}_\-.]+/ui
      }, };
    const invalidChrsFound = {
      [d]: str => str.match(REs[invalidChrs][d]).map(v => REs[space].test(v) ? spacing : v.trim()).join(`|`),
      [l]: str => str.match(REs[invalidChrs][d]).map(v => REs[space].test(v) ? spacing : v.trim()).join(`|`),
    };
    const msgFactory = {
      [noParam]: () => `*fatal* please provide an email address`,
      [moreThanOneAt]: () => `*fatal* more than one @ in given address`,
      [noDomain]: () => `*fatal* no domain part (lacking @ in given address)`,
      [startsOrEndsWithDot]: dl => `${dl} can't start or end with a dot (.)`,
      [doubleDot]: dl => `${dl} contains consecutive dots (.)`,
      [insufficientDomain]: dl => `${dl} part should be at least a subdomain of a top level domain`,
      [noValidStartChr]: dl => `${dl} does not start with a valid character`,
      [invalidChrs]: dl => domain => `[${invalidChrsFound[dl](domain)}] not allowed in ${dl}`,
    };
    const createCheck = (err, msg, str2Check) => err && {
      error: err,
      get message() { return this.error && msg.constructor === Function ? msg(str2Check) : msg; } } || {};
    // full address error checks
    let result = Object.entries({
      [noParam]: createCheck(addr === `invalid@input.info`, msgFactory[noParam]()),
      [moreThanOneAt]: createCheck(addrSplitted.length > 2, msgFactory[moreThanOneAt]()),
      [noDomain]: createCheck(!domain, msgFactory[noDomain]())
    }).reduce( (acc, [, value]) => value.error ? [...acc, value] : acc, [] );
    // local part error checks if applicable
    result = addrSplitted.length === 2
      ? Object.entries({
        [startsOrEndsWithDot]: createCheck(REs[startsOrEndsWithDot].test(localPart), msgFactory[startsOrEndsWithDot](l)),
        [doubleDot]: createCheck(REs[doubleDot].test(localPart), msgFactory[doubleDot](l)),
        [noValidStartChr]: createCheck(!REs[noValidStartChr].test(localPart), msgFactory[noValidStartChr](l)),
        [invalidChrs]: createCheck(REs[invalidChrs][l].test(localPart), msgFactory[invalidChrs](l), localPart)
      }).reduce( (acc, [, value]) => value.error ? [...acc, value] : acc, result ) : result;
    // domain error checks (if applicable)
    result = domain && addrSplitted.length === 2
      ? Object.entries({
        [startsOrEndsWithDot]: createCheck(REs[startsOrEndsWithDot].test(domain), msgFactory[startsOrEndsWithDot](d)),
        [doubleDot]: createCheck(REs[doubleDot].test(domain), msgFactory[doubleDot](d)),
        [insufficientDomain]: createCheck(domain.split(/\./).length < 2, msgFactory[insufficientDomain](d)),
        [noValidStartChr]: createCheck(!REs[noValidStartChr].test(domain), msgFactory[noValidStartChr](d)),
        [invalidChrs]: createCheck(REs[invalidChrs][d].test(domain), msgFactory[invalidChrs](d), domain),
      }).reduce( (acc, [, value]) => value.error ? [...acc, value] : acc, result ) : result;
    let nErrors = `${result.length} ${result.length < 2 ? `error` : `errors`}`;

    return result.length < 1
      ? { error: false, message: addr, }
      : { error: true, message: `${addr} - ${nErrors}: ${
          result.map( (v, i) => `${i + 1}. ${v.message}`).join(`; `)}`, };
  }
};