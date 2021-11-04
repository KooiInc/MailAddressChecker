// noinspection JSUnusedGlobalSymbols
export default addr => {
  addr = addr && addr.length && addr.trim && addr.trim() || `unknown@unknown.unknown`;
  const addrSplitted = addr.split(`@`);
  const [localPart, domain] = addrSplitted;
  const [d, l, moreThanOneAt, noDomain, startsOrEndsWithDot, doubleDot,
    insufficientDomain, noValidStartChr, invalidChrs, noParam] =
    (`domain,local part,moreThanOneAt,noDomain,startsOrEndsWithDot,doubleDot,` +
      `insufficientDomain,noValidStartChr,invalidChrs,noParam`).split(`,`);
  const invalidChrsFound = {
    [d]: str =>
      str.match(/[^\p{L}_\-.]/gui)
        .map(v => /\s/.test(v) ? `space, tab or new line` : v.trim())
        .join(`|`),
    [l]: str =>
      str.match(/[^\p{L}_.#\-\d+~|=!]+/uig)
        .map(v => /\s/.test(v) ? `space, tab or new line` : v.trim())
        .join(`|`),
  };
  const errorMsgFactory = {
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
    get message() { return this.error && msg.constructor === Function ? msg(str2Check) : msg; }
  } || {};
  const checkRegExps = {
    [startsOrEndsWithDot]: /\.$|^\./,
    [doubleDot]: /\.{2,}/g,
    [noValidStartChr]: /^[\p{L}]/ui,
    [invalidChrs]: {
      [l]: /[^\p{L}_.#\-\d+~|=!]+/uig,
      [d]: /[^\p{L}_\-.]+/ui
    }, };
  let result = Object.entries({
    // address error checks
    [noParam]: createCheck(addr === `unknown@unknown.unknown`, errorMsgFactory[noParam]()),
    [moreThanOneAt]: createCheck(addrSplitted.length > 2, errorMsgFactory[moreThanOneAt]()),
    [noDomain]: createCheck(!domain, errorMsgFactory[noDomain]())
  }).reduce( (acc, [, value]) => value.error ? [...acc, value] : acc, [] );
  // local part error check if applicable
  result = addrSplitted.length === 2
    ? Object.entries({
      [startsOrEndsWithDot]: createCheck(checkRegExps[startsOrEndsWithDot].test(localPart), errorMsgFactory[startsOrEndsWithDot](l)),
      [doubleDot]: createCheck(checkRegExps[doubleDot].test(localPart), errorMsgFactory[doubleDot](l)),
      [noValidStartChr]: createCheck(!checkRegExps[noValidStartChr].test(localPart), errorMsgFactory[noValidStartChr](l)),
      [invalidChrs]: createCheck(checkRegExps[invalidChrs][l].test(localPart), errorMsgFactory[invalidChrs](l), localPart)
    }).reduce( (acc, [, value]) => value.error ? [...acc, value] : acc, result ) : result;
  // domain error checks (if applicable)
  result = domain && addrSplitted.length === 2
    ? Object.entries({
      [startsOrEndsWithDot]: createCheck(checkRegExps[startsOrEndsWithDot].test(domain), errorMsgFactory[startsOrEndsWithDot](d)),
      [doubleDot]: createCheck(checkRegExps[doubleDot].test(domain), errorMsgFactory[doubleDot](d)),
      [insufficientDomain]: createCheck(domain.split(/\./).length < 2, errorMsgFactory[insufficientDomain](d)),
      [noValidStartChr]: createCheck(!checkRegExps[noValidStartChr].test(domain), errorMsgFactory[noValidStartChr](d)),
      [invalidChrs]: createCheck(checkRegExps[invalidChrs][d].test(domain), errorMsgFactory[invalidChrs](d), domain),
    }).reduce( (acc, [, value]) => value.error ? [...acc, value] : acc, result ) : result;

  if (result.length < 1) {
    return { error: false, message: addr, }
  }

  let nErrors = `${result.length} ${result.length < 2 ? `error` : `errors`}`;

  return {error: true, message: `${addr} - ${nErrors}: ${
      result.map( v => v.message).join(`; `)}`};
};