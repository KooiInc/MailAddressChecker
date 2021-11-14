# MailAddressChecker

A small library to check the validity of an email address string. The check returns detailed errors if something did not add up. It can optionally replace diacritics in the result(ing e-mailaddress) to plain ascii letters (e.g. ë = e, Ù = U). The [bundled version](https://kooiinc.github.io/MailAddressChecker/lib/bundle.js) can either be used as nodejs module (`require emailValidator from './lib/bundle.js'`) or as browser script (`<script src="./lib/bundle.js"></script>`).

<a target="_blank" href="https://en.wikipedia.org/wiki/Email_address">See wikipedia</a>, 
and <a target="_blank" href="https://stackblitz.com/edit/web-platform-kabila?file=script.js">a stackblitz script using this library</a>
