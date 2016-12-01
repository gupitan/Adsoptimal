(function(w) {
if(navigator.userAgent.match(/iPhone|iPod|iPad|Android/i)==null)return;
var d=document,h=d.getElementsByTagName('head')[0],s=d.createElement('style'),j=d.createElement('script'),k=d.createElement('script');
s.setAttribute('rel','mw-page-block');s.innerHTML='body > * {display:none !important}';
j.setAttribute('src','//cdn.adsoptimal.com/advertisement/settings/4993.js');
k.setAttribute('src','//cdn.adsoptimal.com/advertisement/dispatcher.js');
j.onerror=k.onerror=function(){h.removeChild(s);h.removeChild(j);h.removeChild(k);};
h.appendChild(s);h.appendChild(j);h.appendChild(k);
})(window);
