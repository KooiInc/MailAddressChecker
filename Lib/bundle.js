!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).emailValidator=e()}}((function(){const e=function(){const e={};return[{base:"A",letters:"A\u24b6\uff21\xc0\xc1\xc2\u1ea6\u1ea4\u1eaa\u1ea8\xc3\u0100\u0102\u1eb0\u1eae\u1eb4\u1eb2\u0226\u01e0\xc4\u01de\u1ea2\xc5\u01fa\u01cd\u0200\u0202\u1ea0\u1eac\u1eb6\u1e00\u0104\u023a\u2c6f"},{base:"AA",letters:"\ua732"},{base:"AE",letters:"\xc6\u01fc\u01e2"},{base:"AO",letters:"\ua734"},{base:"AU",letters:"\ua736"},{base:"AV",letters:"\ua738\ua73a"},{base:"AY",letters:"\ua73c"},{base:"B",letters:"B\u24b7\uff22\u1e02\u1e04\u1e06\u0243\u0182\u0181"},{base:"C",letters:"C\u24b8\uff23\u0106\u0108\u010a\u010c\xc7\u1e08\u0187\u023b\ua73e"},{base:"D",letters:"D\u24b9\uff24\u1e0a\u010e\u1e0c\u1e10\u1e12\u1e0e\u0110\u018b\u018a\u0189\ua779\xd0"},{base:"DZ",letters:"\u01f1\u01c4"},{base:"Dz",letters:"\u01f2\u01c5"},{base:"E",letters:"E\u24ba\uff25\xc8\xc9\xca\u1ec0\u1ebe\u1ec4\u1ec2\u1ebc\u0112\u1e14\u1e16\u0114\u0116\xcb\u1eba\u011a\u0204\u0206\u1eb8\u1ec6\u0228\u1e1c\u0118\u1e18\u1e1a\u0190\u018e"},{base:"F",letters:"F\u24bb\uff26\u1e1e\u0191\ua77b"},{base:"G",letters:"G\u24bc\uff27\u01f4\u011c\u1e20\u011e\u0120\u01e6\u0122\u01e4\u0193\ua7a0\ua77d\ua77e"},{base:"H",letters:"H\u24bd\uff28\u0124\u1e22\u1e26\u021e\u1e24\u1e28\u1e2a\u0126\u2c67\u2c75\ua78d"},{base:"I",letters:"I\u24be\uff29\xcc\xcd\xce\u0128\u012a\u012c\u0130\xcf\u1e2e\u1ec8\u01cf\u0208\u020a\u1eca\u012e\u1e2c\u0197"},{base:"J",letters:"J\u24bf\uff2a\u0134\u0248"},{base:"K",letters:"K\u24c0\uff2b\u1e30\u01e8\u1e32\u0136\u1e34\u0198\u2c69\ua740\ua742\ua744\ua7a2"},{base:"L",letters:"L\u24c1\uff2c\u013f\u0139\u013d\u1e36\u1e38\u013b\u1e3c\u1e3a\u0141\u023d\u2c62\u2c60\ua748\ua746\ua780"},{base:"LJ",letters:"\u01c7"},{base:"Lj",letters:"\u01c8"},{base:"M",letters:"M\u24c2\uff2d\u1e3e\u1e40\u1e42\u2c6e\u019c"},{base:"N",letters:"N\u24c3\uff2e\u01f8\u0143\xd1\u1e44\u0147\u1e46\u0145\u1e4a\u1e48\u0220\u019d\ua790\ua7a4"},{base:"NJ",letters:"\u01ca"},{base:"Nj",letters:"\u01cb"},{base:"O",letters:"O\u24c4\uff2f\xd2\xd3\xd4\u1ed2\u1ed0\u1ed6\u1ed4\xd5\u1e4c\u022c\u1e4e\u014c\u1e50\u1e52\u014e\u022e\u0230\u022a\u1ece\u0150\u01d1\u020c\u020e\u01a0\u1edc\u1eda\u1ee0\u1ede\u1ee2\u1ecc\u1ed8\u01ea\u01ec\xd8\u01fe\u0186\u019f\ua74a\ua74c"},{base:"OI",letters:"\u01a2"},{base:"OO",letters:"\ua74e"},{base:"OU",letters:"\u0222"},{base:"OE",letters:"\x8c\u0152\xd6"},{base:"oe",letters:"\x9c\u0153\xf6"},{base:"P",letters:"P\u24c5\uff30\u1e54\u1e56\u01a4\u2c63\ua750\ua752\ua754"},{base:"Q",letters:"Q\u24c6\uff31\ua756\ua758\u024a"},{base:"R",letters:"R\u24c7\uff32\u0154\u1e58\u0158\u0210\u0212\u1e5a\u1e5c\u0156\u1e5e\u024c\u2c64\ua75a\ua7a6\ua782"},{base:"S",letters:"S\u24c8\uff33\u015a\u1e64\u015c\u1e60\u0160\u1e66\u1e62\u1e68\u0218\u015e\u2c7e\ua7a8\ua784"},{base:"SS",letters:"\u1e9e"},{base:"T",letters:"T\u24c9\uff34\u1e6a\u0164\u1e6c\u021a\u0162\u1e70\u1e6e\u0166\u01ac\u01ae\u023e\ua786"},{base:"TZ",letters:"\ua728"},{base:"U",letters:"U\u24ca\uff35\xd9\xda\xdb\u0168\u1e78\u016a\u1e7a\u016c\u01db\u01d7\u01d5\u01d9\u1ee6\u016e\u0170\u01d3\u0214\u0216\u01af\u1eea\u1ee8\u1eee\u1eec\u1ef0\u1ee4\u1e72\u0172\u1e76\u1e74\u0244"},{base:"UE",letters:"\xdc"},{base:"V",letters:"V\u24cb\uff36\u1e7c\u1e7e\u01b2\ua75e\u0245"},{base:"VY",letters:"\ua760"},{base:"W",letters:"W\u24cc\uff37\u1e80\u1e82\u0174\u1e86\u1e84\u1e88\u2c72"},{base:"X",letters:"X\u24cd\uff38\u1e8a\u1e8c"},{base:"Y",letters:"Y\u24ce\uff39\u1ef2\xdd\u0176\u1ef8\u0232\u1e8e\u0178\u1ef6\u1ef4\u01b3\u024e\u1efe"},{base:"Z",letters:"Z\u24cf\uff3a\u0179\u1e90\u017b\u017d\u1e92\u1e94\u01b5\u0224\u2c7f\u2c6b\ua762"},{base:"a",letters:"a\u24d0\uff41\u1e9a\xe0\xe1\xe2\u1ea7\u1ea5\u1eab\u1ea9\xe3\u0101\u0103\u1eb1\u1eaf\u1eb5\u1eb3\u0227\u01e1\xe4\u01df\u1ea3\xe5\u01fb\u01ce\u0201\u0203\u1ea1\u1ead\u1eb7\u1e01\u0105\u2c65\u0250"},{base:"aa",letters:"\ua733"},{base:"ae",letters:"\xe6\u01fd\u01e3"},{base:"ao",letters:"\ua735"},{base:"au",letters:"\ua737"},{base:"av",letters:"\ua739\ua73b"},{base:"ay",letters:"\ua73d"},{base:"b",letters:"b\u24d1\uff42\u1e03\u1e05\u1e07\u0180\u0183\u0253"},{base:"c",letters:"c\u24d2\uff43\u0107\u0109\u010b\u010d\xe7\u1e09\u0188\u023c\ua73f\u2184"},{base:"d",letters:"d\u24d3\uff44\u1e0b\u010f\u1e0d\u1e11\u1e13\u1e0f\u0111\u018c\u0256\u0257\ua77a"},{base:"dz",letters:"\u01f3\u01c6"},{base:"e",letters:"e\u24d4\uff45\xe8\xe9\xea\u1ec1\u1ebf\u1ec5\u1ec3\u1ebd\u0113\u1e15\u1e17\u0115\u0117\xeb\u1ebb\u011b\u0205\u0207\u1eb9\u1ec7\u0229\u1e1d\u0119\u1e19\u1e1b\u0247\u025b\u01dd"},{base:"f",letters:"f\u24d5\uff46\u1e1f\u0192\ua77c"},{base:"g",letters:"g\u24d6\uff47\u01f5\u011d\u1e21\u011f\u0121\u01e7\u0123\u01e5\u0260\ua7a1\u1d79\ua77f"},{base:"h",letters:"h\u24d7\uff48\u0125\u1e23\u1e27\u021f\u1e25\u1e29\u1e2b\u1e96\u0127\u2c68\u2c76\u0265"},{base:"hv",letters:"\u0195"},{base:"i",letters:"i\u24d8\uff49\xec\xed\xee\u0129\u012b\u012d\xef\u1e2f\u1ec9\u01d0\u0209\u020b\u1ecb\u012f\u1e2d\u0268\u0131"},{base:"j",letters:"j\u24d9\uff4a\u0135\u01f0\u0249"},{base:"k",letters:"k\u24da\uff4b\u1e31\u01e9\u1e33\u0137\u1e35\u0199\u2c6a\ua741\ua743\ua745\ua7a3"},{base:"l",letters:"l\u24db\uff4c\u0140\u013a\u013e\u1e37\u1e39\u013c\u1e3d\u1e3b\u017f\u0142\u019a\u026b\u2c61\ua749\ua781\ua747"},{base:"lj",letters:"\u01c9"},{base:"m",letters:"m\u24dc\uff4d\u1e3f\u1e41\u1e43\u0271\u026f"},{base:"n",letters:"n\u24dd\uff4e\u01f9\u0144\xf1\u1e45\u0148\u1e47\u0146\u1e4b\u1e49\u019e\u0272\u0149\ua791\ua7a5"},{base:"nj",letters:"\u01cc"},{base:"o",letters:"o\u24de\uff4f\xf2\xf3\xf4\u1ed3\u1ed1\u1ed7\u1ed5\xf5\u1e4d\u022d\u1e4f\u014d\u1e51\u1e53\u014f\u022f\u0231\u022b\u1ecf\u0151\u01d2\u020d\u020f\u01a1\u1edd\u1edb\u1ee1\u1edf\u1ee3\u1ecd\u1ed9\u01eb\u01ed\xf8\u01ff\u0254\ua74b\ua74d\u0275"},{base:"oi",letters:"\u01a3"},{base:"ou",letters:"\u0223"},{base:"oo",letters:"\ua74f"},{base:"p",letters:"p\u24df\uff50\u1e55\u1e57\u01a5\u1d7d\ua751\ua753\ua755"},{base:"q",letters:"q\u24e0\uff51\u024b\ua757\ua759"},{base:"r",letters:"r\u24e1\uff52\u0155\u1e59\u0159\u0211\u0213\u1e5b\u1e5d\u0157\u1e5f\u024d\u027d\ua75b\ua7a7\ua783"},{base:"s",letters:"s\u24e2\uff53\u015b\u1e65\u015d\u1e61\u0161\u1e67\u1e63\u1e69\u0219\u015f\u023f\ua7a9\ua785\u1e9b"},{base:"ss",letters:"\xdf"},{base:"t",letters:"t\u24e3\uff54\u1e6b\u1e97\u0165\u1e6d\u021b\u0163\u1e71\u1e6f\u0167\u01ad\u0288\u2c66\ua787"},{base:"tz",letters:"\ua729"},{base:"u",letters:"u\u24e4\uff55\xf9\xfa\xfb\u0169\u1e79\u016b\u1e7b\u016d\xfc\u01dc\u01d8\u01d6\u01da\u1ee7\u016f\u0171\u01d4\u0215\u0217\u01b0\u1eeb\u1ee9\u1eef\u1eed\u1ef1\u1ee5\u1e73\u0173\u1e77\u1e75\u0289"},{base:"ue",letters:"\xfc"},{base:"v",letters:"v\u24e5\uff56\u1e7d\u1e7f\u028b\ua75f\u028c"},{base:"vy",letters:"\ua761"},{base:"w",letters:"w\u24e6\uff57\u1e81\u1e83\u0175\u1e87\u1e85\u1e98\u1e89\u2c73"},{base:"x",letters:"x\u24e7\uff58\u1e8b\u1e8d"},{base:"y",letters:"y\u24e8\uff59\u1ef3\xfd\u0177\u1ef9\u0233\u1e8f\xff\u1ef7\u1e99\u1ef5\u01b4\u024f\u1eff"},{base:"z",letters:"z\u24e9\uff5a\u017a\u1e91\u017c\u017e\u1e93\u1e95\u01b6\u0225\u0240\u2c6c\ua763"}].forEach(t=>t.letters.split("").forEach(s=>e[s]=t.base)),e}();var t=function(t){return(s=t)?s.replace(/[^\u0000-\u007E]/g,t=>e[t]||t):s;var s};return function(e,s){const r=(e=e&&e.length&&e.trim&&e.trim()||"invalid@input.info").split("@"),[a,l]=r,[b,n,o,i,d,u,c,f,p,m,h,g]="Domain|Name part|moreThanOneAt|noDomain|startsOrEndsWithDot|doubleDot|insufficientDomain|noValidStartChr|invalidChrs|noParam|space|space, tab or new line".split("|"),v={[d]:/\.$|^\./,[u]:/\.{2,}/g,[f]:/^[\p{L}]/iu,[h]:/\s/,[p]:{[n]:/[^\p{L}~+_.#\-0-9|=!]/giu,[b]:/[^\p{L}_\-.]/giu}},O={[b]:e=>[...new Set(e.match(v[p][b]))].map(e=>v[h].test(e)?g:e.trim()).join("|"),[n]:e=>[...new Set(e.match(v[p][n]))].map(e=>v[h].test(e)?g:e.trim()).join("|")},j={[m]:()=>"Please provide an email address",[o]:()=>"More than one @ in given address",[i]:()=>"No recognizable domain part (lacking domein/@ or too many @ in given address)",[d]:e=>e+" can't start or end with a dot (.)",[u]:e=>e+" contains consecutive dots (.)",[c]:e=>e+" part should be at least a subdomain of a top level domain",[f]:e=>e+" does not start with a valid character",[p]:e=>t=>`${e} [${O[e](t)}] not allowed`},w=(e,t,s)=>e&&{error:e,errors:[],get message(){return this.error&&this.errors.push(t.constructor===Function?t(s):t),this.errors}}||{};let A=Object.entries({[m]:w("invalid@input.info"===e,j[m]()),[o]:w(r.length>2,j[o]()),[i]:w(!l,j[i]())}).reduce((e,[,t])=>t.error?[...e,t]:e,[]);const y=A.length>0;y||(A=a?Object.entries({[d]:w(v[d].test(a),j[d](n)),[u]:w(v[u].test(a),j[u](n)),[f]:w(!v[f].test(a),j[f](n)),[p]:w(v[p][n].test(a),j[p](n),a)}).reduce((e,[,t])=>t.error?[...e,t]:e,A):A,A=l?Object.entries({[d]:w(v[d].test(l),j[d](b)),[u]:w(v[u].test(l),j[u](b)),[c]:w(l.split(/\./).length<2,j[c](b)),[f]:w(!v[f].test(l),j[f](b)),[p]:w(v[p][b].test(l),j[p](b),l)}).reduce((e,[,t])=>t.error?[...e,t]:e,A):A);let D=y?"fatal error(s) occured":`${A.length} ${A.length<2?"error":"errors"}`;return A.length<1?{error:!1,validatedAddress:s?t(e):e}:{error:!0,validatedAddress:`${s?t(e):e} - ${D}:`,errors:A.map(e=>e.message).flat()}}}));