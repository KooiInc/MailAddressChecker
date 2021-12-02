# MailAddressChecker

A small library to check the validity of an email address string. The check returns an array of detailed errors if something did not add up in the provided email address. It can optionally convert diacritics in the result(ing e-mailaddress) to plain ascii (e.g. ë = e, Ù = U). 

The [bundled version](https://kooiinc.github.io/MailAddressChecker/lib/bundle.js) can either be used as nodejs module (`import emailValidator from './lib/bundle.js'`, provided that `package.json` contains *"type": "module"*) or as browser script module.

## Examples on Stackblitz.com

- [a nodejs example](https://stackblitz.com/edit/node-wcpuam?file=index.js).
- [a browser script example](https://stackblitz.com/edit/web-platform-xcpv4a?file=script.js).

<a target="_blank" href="https://en.wikipedia.org/wiki/Email_address">Also see wikipedia</a> for email address requirements. The requirements in this checker are an interpretation: feel free to fork the MailAddressChecker repository to change them to your specific needs.
