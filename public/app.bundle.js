!function(e){function t(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var a={};t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/classtoggler",t(t.s=0)}([function(e,t,a){"use strict";function n(){var e=document.createElement("span");e.innerHTML='<button class="btn btn-primary" data-toggler-class="show" data-toggler-target="#div-2, #div-3">BLUE</button>',document.getElementById("update").appendChild(e);var t=document.getElementById("update-cards"),a=document.createElement("div");a.classList.add("col-md-6","collapsed","show"),a.setAttribute("id","div-3"),a.innerHTML='\n         <div class="card bg-primary text-white">\n            <div class="card-header">\n               <h2 class="mb-0">DIV 3</h2>\n            </div>\n            <div class="card-body">\n               <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n            </div>\n         </div>',console.log(a),t.appendChild(a),(0,r.classtogglerUpdate)()}var r=a(1);a(2),a(4),(0,r.classtoggler)(),(0,r.classtogglerForm)("#test-form");var i=document.getElementById("primary-nav");document.onclick=function(e){e.target===i||i.contains(e.target)||(0,r.classtogglerRemoveClassByGroup)("navigation")},document.getElementById("addBtn").addEventListener("click",function(e){e.preventDefault(),this.classList.add("fadeOut"),n()})},function(e,t,a){"use strict";function n(e,t){for(var a=0;a<e.length;a++){var n=e[a];n.classList.remove("active");document.querySelector(n.getAttribute("data-toggler-target")).classList.remove(t)}}function r(e){e.preventDefault();var t=this,a=t.getAttribute("data-toggler-target").replace(/\s+/g,"").split(","),r=t.getAttribute("data-toggler-class"),i=t.getAttribute("data-toggler-group"),s=r||"active",o=document.querySelectorAll("[data-toggler-group="+i+"]");if(o.length>0)if(this.classList.contains("active"))n(o,s);else{n(o,s),t.classList.add("active");for(var l=0;l<a.length;l++){var u=a[l];document.querySelector(u).classList.add(s)}}else{t.classList.toggle("active");for(var c=0;c<a.length;c++)for(var g=a[c],d=document.querySelector(g),p=d.classList,m=s.replace(/\s/g,"").split(","),f=0;f<m.length;f++){var h=m[f];p.toggle(h)}}}function i(){window.togglers=document.querySelectorAll("[data-toggler-target]");for(var e=0;e<togglers.length;e++){togglers[e].addEventListener("click",r,!0)}}function s(e){for(var t=document.querySelectorAll('[data-toggler-group="'+e+'"]'),a=0;a<t.length;a++){var n=t[a],r=n.getAttribute("data-toggler-class"),i=r||"active";n.classList.remove("active");var s=n.getAttribute("data-toggler-target");document.querySelector(s).classList.remove(i)}}function o(){for(var e=0;e<togglers.length;e++){togglers[e].removeEventListener("click",r,!0)}togglers=document.querySelectorAll("[data-toggler-target]"),i()}function l(e){var t=document.querySelector(e);if(t)for(var a=t.querySelectorAll("[data-toggler-form-target]"),n=0;n<a.length;n++)!function(e){var t=a[e],n=t.getAttribute("data-toggler-form-class");n=n||"show",u(t,n),t.addEventListener("change",function(){u(t,n)})}(n);else console.warn("the form you defined '"+e+"' doesn't exist in the DOM")}function u(e,t){var a=e.getAttribute("name");if(a)for(var n=document.querySelectorAll('[name="'+a+'"]'),r=0;r<n.length;r++){var i=n[r],s=i.getAttribute("data-toggler-form-target");if(""!==s){var o=document.querySelector(s);if(o){var l=document.querySelector(s);i.checked?l.classList.add(t):l.classList.remove(t)}}}else{var u=e.getAttribute("id")||e.getAttribute("class");console.warn("classtoggler: Please define the [name=''] attribute for "+u)}}Object.defineProperty(t,"__esModule",{value:!0}),t.classtoggler=i,t.classtogglerRemoveClassByGroup=s,t.classtogglerUpdate=o,t.classtogglerForm=l},function(e,t,a){"use strict";(function(t){var a="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},n=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,t=0,n=a.Prism={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof r?new r(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e,t){var a=n.util.type(e);switch(t=t||{},a){case"Object":if(t[n.util.objId(e)])return t[n.util.objId(e)];var r={};t[n.util.objId(e)]=r;for(var i in e)e.hasOwnProperty(i)&&(r[i]=n.util.clone(e[i],t));return r;case"Array":if(t[n.util.objId(e)])return t[n.util.objId(e)];var r=[];return t[n.util.objId(e)]=r,e.forEach(function(e,a){r[a]=n.util.clone(e,t)}),r}return e}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var r in t)a[r]=t[r];return a},insertBefore:function(e,t,a,r){r=r||n.languages;var i=r[e];if(2==arguments.length){a=arguments[1];for(var s in a)a.hasOwnProperty(s)&&(i[s]=a[s]);return i}var o={};for(var l in i)if(i.hasOwnProperty(l)){if(l==t)for(var s in a)a.hasOwnProperty(s)&&(o[s]=a[s]);o[l]=i[l]}return n.languages.DFS(n.languages,function(t,a){a===r[e]&&t!=e&&(this[t]=o)}),r[e]=o},DFS:function(e,t,a,r){r=r||{};for(var i in e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],a||i),"Object"!==n.util.type(e[i])||r[n.util.objId(e[i])]?"Array"!==n.util.type(e[i])||r[n.util.objId(e[i])]||(r[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,i,r)):(r[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,null,r)))}},plugins:{},highlightAll:function(e,t){n.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,a){var r={callback:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",r);for(var i,s=r.elements||e.querySelectorAll(r.selector),o=0;i=s[o++];)n.highlightElement(i,!0===t,r.callback)},highlightElement:function(t,r,i){for(var s,o,l=t;l&&!e.test(l.className);)l=l.parentNode;l&&(s=(l.className.match(e)||[,""])[1].toLowerCase(),o=n.languages[s]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+s,t.parentNode&&(l=t.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+s));var u=t.textContent,c={element:t,language:s,grammar:o,code:u};if(n.hooks.run("before-sanity-check",c),!c.code||!c.grammar)return c.code&&(n.hooks.run("before-highlight",c),c.element.textContent=c.code,n.hooks.run("after-highlight",c)),void n.hooks.run("complete",c);if(n.hooks.run("before-highlight",c),r&&a.Worker){var g=new Worker(n.filename);g.onmessage=function(e){c.highlightedCode=e.data,n.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,i&&i.call(c.element),n.hooks.run("after-highlight",c),n.hooks.run("complete",c)},g.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else c.highlightedCode=n.highlight(c.code,c.grammar,c.language),n.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,i&&i.call(t),n.hooks.run("after-highlight",c),n.hooks.run("complete",c)},highlight:function(e,t,a){var i={code:e,grammar:t,language:a};return n.hooks.run("before-tokenize",i),i.tokens=n.tokenize(i.code,i.grammar),n.hooks.run("after-tokenize",i),r.stringify(n.util.encode(i.tokens),i.language)},matchGrammar:function(e,t,a,r,i,s,o){var l=n.Token;for(var u in a)if(a.hasOwnProperty(u)&&a[u]){if(u==o)return;var c=a[u];c="Array"===n.util.type(c)?c:[c];for(var g=0;g<c.length;++g){var d=c[g],p=d.inside,m=!!d.lookbehind,f=!!d.greedy,h=0,v=d.alias;if(f&&!d.pattern.global){var y=d.pattern.toString().match(/[imuy]*$/)[0];d.pattern=RegExp(d.pattern.source,y+"g")}d=d.pattern||d;for(var b=r,k=i;b<t.length;k+=t[b].length,++b){var w=t[b];if(t.length>e.length)return;if(!(w instanceof l)){if(f&&b!=t.length-1){d.lastIndex=k;var A=d.exec(e);if(!A)break;for(var F=A.index+(m?A[1].length:0),S=A.index+A[0].length,x=b,j=k,L=t.length;L>x&&(S>j||!t[x].type&&!t[x-1].greedy);++x)j+=t[x].length,F>=j&&(++b,k=j);if(t[b]instanceof l)continue;q=x-b,w=e.slice(k,j),A.index-=k}else{d.lastIndex=0;var A=d.exec(w),q=1}if(A){m&&(h=A[1]?A[1].length:0);var F=A.index+h,A=A[0].slice(h),S=F+A.length,E=w.slice(0,F),O=w.slice(S),P=[b,q];E&&(++b,k+=E.length,P.push(E));var B=new l(u,p?n.tokenize(A,p):A,v,A,f);if(P.push(B),O&&P.push(O),Array.prototype.splice.apply(t,P),1!=q&&n.matchGrammar(e,t,a,b,k,!0,u),s)break}else if(s)break}}}}},tokenize:function(e,t){var a=[e],r=t.rest;if(r){for(var i in r)t[i]=r[i];delete t.rest}return n.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var r,i=0;r=a[i++];)r(t)}}},r=n.Token=function(e,t,a,n,r){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length,this.greedy=!!r};if(r.stringify=function(e,t,a){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map(function(a){return r.stringify(a,t,e)}).join("");var i={type:e.type,content:r.stringify(e.content,t,a),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:a};if(e.alias){var s="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,s)}n.hooks.run("wrap",i);var o=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(o?" "+o:"")+">"+i.content+"</"+i.tag+">"},!a.document)return a.addEventListener?(n.disableWorkerMessageHandler||a.addEventListener("message",function(e){var t=JSON.parse(e.data),r=t.language,i=t.code,s=t.immediateClose;a.postMessage(n.highlight(i,n.languages[r],r)),s&&a.close()},!1),a.Prism):a.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(n.filename=i.src,n.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),a.Prism}();void 0!==e&&e.exports&&(e.exports=n),void 0!==t&&(t.Prism=n),n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),n.languages.xml=n.languages.markup,n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},n.languages.css.atrule.inside.rest=n.languages.css,n.languages.markup&&(n.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:n.languages.css,alias:"language-css",greedy:!0}}),n.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:n.languages.css}},alias:"language-css"}},n.languages.markup.tag)),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),n.languages.javascript["template-string"].inside.interpolation.inside.rest=n.languages.javascript,n.languages.markup&&n.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:n.languages.javascript,alias:"language-javascript",greedy:!0}}),n.languages.js=n.languages.javascript}).call(t,a(3))},function(e,t){var a;a=function(){return this}();try{a=a||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(a=window)}e.exports=a},function(e,t){}]);
//# sourceMappingURL=app.bundle.js.map