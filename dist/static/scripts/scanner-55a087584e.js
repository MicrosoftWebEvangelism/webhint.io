!function(){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;if(!document.documentElement.contains(t))return null;do{if(t.matches(e))return t;t=t.parentElement}while(null!==t);return null});var e,o=function(e,t){var n;("undefined"!=typeof closecloseAll?t:(n=e.closest(".rule-result"),Array.prototype.slice.apply(n.querySelectorAll(".rule-result--details")).some(function(e){return"true"===e.getAttribute("aria-expanded")})))?(e.innerHTML="- close all",e.classList.remove("closed"),e.classList.add("expanded")):(e.innerHTML="+ expand all",e.classList.remove("expanded"),e.classList.add("closed"))},l=function(e,t){var n=e.closest(".rule-result--details"),r=void 0!==t?t:"true"===n.getAttribute("aria-expanded"),s=e.getAttribute("data-rule"),l=n.closest(".rule-result").querySelector(".button-expand-all");r?(n.setAttribute("aria-expanded","false"),e.innerHTML="open details",e.setAttribute("title","show "+s+"'s result details")):(n.setAttribute("aria-expanded","true"),e.innerHTML="close details",e.setAttribute("title","close "+s+"'s result details")),o(l)},t=function(e){var t=e.target;-1!==t.className.indexOf("button--details")&&l(t),-1!==t.className.indexOf("button-expand-all")&&function(e){for(var t=e.closest(".rule-result"),n=Array.prototype.slice.apply(t.querySelectorAll(".button--details")),r=e.classList.contains("expanded"),s=0;s<n.length;s++)l(n[s],!!r);o(e,!r)}(t)},n=document.querySelector(".permalink-copy");n&&n.addEventListener("click",function(){!function(e){var t="hidden-clipboard",n=document.getElementById(t);if(!n){var r=document.createElement("textarea");r.id=t,r.style.position="fixed",r.style.top=0,r.style.left=0,r.style.width="1px",r.style.height="1px",r.style.padding=0,r.style.border="none",r.style.outline="none",r.style.boxShadow="none",r.style.background="transparent",document.querySelector("body").appendChild(r),n=document.getElementById(t)}n.value=e,n.select(),document.execCommand("copy")}(document.querySelector(".scan-overview__body__permalink").textContent.trim())}),window.addEventListener("popstate",function(){var e,t;e="/scanner/",(t=window.location.href).length-e.length===t.indexOf(e)&&(window.location.href=window.location.href)},!1),(e=document.getElementById("results-container"))&&e.addEventListener("click",t,!1),function(){for(var e=document.querySelectorAll("code"),t=0;t<e.length;t++)hljs.highlightBlock(e[t])}()}(),function(){var e=document.querySelector(".scan-overview");if(e){var g,h,l=e.getAttribute("data-id"),b=[],S="error",w="finished",q="pending",f="pass",v="pending",L=document.querySelector(".scan-queue-bg-wrap"),x=document.querySelector(".scan-result-bg-wrap"),E=function(){return"{{#each results}}{{>scan-result-item}}{{/each}}"},T=function(){return"{{>category-pass-message}}"},A=function(){return"{{>scan-error-message}}"},_=function(e,t){var n=e();return Handlebars.compile(n)(t)},o=function(e,t){return e+(1===t?"":"s")},M=function(e,t,n,r,s,l){0<t?(e.classList.add("rule-list--failed"),e.innerHTML=t+" "+o(n,t),e.closest(".rule-tile").classList.add("rule-tile--failed")):(e.innerHTML=t+" "+o(n,t),l&&e.classList.add("rule-list--passed"),s&&e.closest(".rule-tile").classList.add("rule-tile--passed"))},H=function(e){var t=e.updates,n=e.time,r=e.version;t.forEach(function(e){if(e.results){var t,n,r,s,l,o,a,i,u,c,d,p,m=e.hints.every(function(e){return e.status===f}),y=e.hints.every(function(e){return e.status!==v});m&&function(e){var t=document.getElementById(e.name),n=t.querySelector(".compiling__loader");if(!t.querySelector(".rule-result__message--passed")){n&&t.removeChild(n);var r=_(T,{});t.insertAdjacentHTML("beforeend",r)}}(e),e.results=e.results.filter(function(e){return e.status!==f}),function(e){if(e.results&&0!==e.results.length){var t=document.getElementById(e.name),n=t.querySelector(".button-expand-all"),r=t.querySelector(".compiling__loader"),s=_(E,e);n||t.querySelector(".rule-result--category").insertAdjacentHTML("beforeend",'<button title="expand" class="button-expand-all closed">+ expand all</button>'),r.insertAdjacentHTML("beforebegin",s)}}(e),n=m,r=y,s="."+(t=e).name+".errors",l="."+t.name+".warnings",o=t.statistics.errors,a=t.statistics.warnings,i=document.querySelector(s),(u=document.querySelector(l)).innerHTML=a+" Warnings",M(i,o,"Error",t.name,n,r),M(u,a,"Warning",t.name,n,r),e.hints.every(function(e){return e.status!==q})&&(c=e,d=document.getElementById(c.name),(p=d.querySelector(".compiling__loader"))&&d.removeChild(p))}});for(var s=document.querySelectorAll("code"),l=0;l<s.length;l++)hljs.highlightBlock(s[l]);document.querySelector("#total-errors").innerHTML=h.errors,document.querySelector("#total-warnings").innerHTML=h.warnings,document.querySelector(".scan-overview--time .scan-overview__body--purple").innerHTML=n,document.querySelector(".scan-overview--version .scan-overview__body--purple").innerHTML=r},s=function(e){return e&&1===e.length?"0"+e:e},a=function(){try{var e=document.querySelector(".scan-overview--time .scan-overview__body--purple"),t=e.innerHTML.split(":"),n=parseInt(t[0],10),r=parseInt(t[1],10);60<=++r&&(n++,r=0),e.innerHTML=s(n.toString())+":"+s(r.toString())}catch(e){}},k=function(){var e,t,n,r,s={callback:function(e,t){var n,r,s,l,o,a,i,u,c,d,p,m=t.status===w,y=t.status===S,f=t.status===q;if(h=t.overallStatistics,e)return clearInterval(g),void console.error(e);if(f)L.style.display="block",x.style.display="none";else{L.style.display="none",x.style.display="block",y&&(p=_(A,{}),document.querySelector("#results-container").insertAdjacentHTML("beforebegin",p));var v=((d=t.categories).forEach(function(e){e.results&&(e.results=e.results.filter(function(e){return-1===b.indexOf(e.name)}))}),d);if(H({time:t.time,updates:v,version:t.version}),t.categories.forEach(function(e){e.results&&e.results.forEach(function(e){-1===b.indexOf(e.name)&&b.push(e.name)})}),m||y)return clearInterval(g),u=t.status,(c=document.querySelector(".scan-overview__status")).textContent=u,c.classList.remove("analyzing"),n=t.status,s="failed",l="passed",o=(r=h).errors,a=r.warnings,i="/static/images/favicon_"+(n!==S&&0===o&&0===a?l:s)+".ico",void document.querySelector('link[rel="icon"]').setAttribute("href",i)}setTimeout(k,5e3)},url:"api/"+l};g||(g=setInterval(a,1e3)),e=s,t=new XMLHttpRequest,n=e.callback,r=e.url,t.open(e.method||"GET",r,!0),t.onreadystatechange=function(){if(4===t.readyState)if(200===t.status){if(n)return e.dontTransform?n(null,t.responseText):n(null,JSON.parse(t.responseText))}else if(n)return n(t.status,t.responseText);return null},t.send(e.params)};window.history.pushState(null,null,l),function(){for(var e=document.querySelectorAll(".rule-result--details"),t=0;t<e.length;t++)b.push(e[t].id)}(),"none"!==document.querySelector(".scan-queue-bg-wrap").style.display?setTimeout(k,1e4):k()}}();