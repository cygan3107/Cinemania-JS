!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var a=o("bpxeT"),c=o("dDDEV"),u=o("2TvXO"),l=o("dIxxU"),d=o("8OCXI"),s={page:1,language:"en-US",api_key:"682127ed972e56f6bb70ae743d23c1d7"},p={method:"GET",headers:{accept:"application/json",Authorization:"Bearer ".concat(s.api_key)}},f="https://api.themoviedb.org/3/trending/movie/day",g="https://api.themoviedb.org/3/trending/movie/week",h=function(e){var t=Math.floor(e),n=e%1>=.5?1:0,r=5-t-n;return"".concat(d.fullStar.repeat(t)).concat(d.halfStar.repeat(n)).concat(d.emptyStar.repeat(r))},v=function(e){var t=function(e,t){var n=[];for(i=0;i<e.length;i+=1)t.includes(e[i].id)&&n.push(e[i].name);return n.slice(0,2).join(", ")}(e.genre_ids,d.genres),n=e.release_date.slice(0,4),r=e.vote_average/2,o=h(r);return console.log(t),(0,d.topMoviesFragment)(e.id,e.backdrop_path,e.title,t,n,o)},m=function(){document.querySelector("#catalogSection");catalogSection.innerHTML=d.emptyApiResponeCatalog};function y(){document.querySelector("#hero").innerHTML=d.emptyApiResponeHero}var S,_=function(t){return l.default.get(t,e(c)({params:s},p)).then((function(e){var n,r,o,a,i,c=e.data.results.length;if(t.includes("day"))return 0===c?void y():void function(e){var t,n,r=document.querySelector("#hero"),o=Math.floor(Math.random()*e.data.results.length),a=e.data.results[o],i=(t=a.overview,n=200,t.length>n?t.slice(0,n)+"...":t),c=a.vote_average/2,u=h(c);r.innerHTML=(0,d.heroFragment)(a.id,a.backdrop_path,a.title,u,i)}(e);0!==c?(n=e.data.results,r=document.querySelector("#catalg"),o="",n.forEach((function(e){o+=v(e)})),r.innerHTML=o,a=e.data.total_results,i=a/20,document.querySelector("#pagesBtnSection").innerHTML=(0,d.pagesBtnStartup)(i)):m()})).catch((function(e){return m(),y(),console.log(e)}))},b=(S=e(a)(e(u).mark((function t(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([_(f),_(g)]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),t)}))),function(){return S.apply(this,arguments)});b()}();
//# sourceMappingURL=catalog.63634a4a.js.map
