!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a),a.register("i8Q71",(function(e,t){var n=document.getElementById("menu"),r=document.getElementById("navi"),a=document.getElementById("overlay");n.addEventListener("click",(function(){r.style.left="0",a.style.display="block"})),a.addEventListener("click",(function(){r.style.left="-64%",a.style.display="none"}));var i=document.getElementById("switch"),o="true"===localStorage.getItem("isLight");document.body.classList.toggle("light",o),i.onclick=function(){o=!o,document.body.classList.toggle("light",o),localStorage.setItem("isLight",o)};var l=window.location.href,c=document.querySelectorAll(".mobile-menu__link, .header__nav-link");if(c[0].classList.add("current__nav-link"),c[3].classList.add("current__nav-link"),!l.includes("index"))return l.includes("catalog")?(c[0].classList.remove("current__nav-link"),c[3].classList.remove("current__nav-link"),c[1].classList.add("current__nav-link"),void c[4].classList.add("current__nav-link")):l.includes("library")?(c[0].classList.remove("current__nav-link"),c[3].classList.remove("current__nav-link"),c[1].classList.remove("current__nav-link"),c[4].classList.remove("current__nav-link"),c[2].classList.add("current__nav-link"),void c[5].classList.add("current__nav-link")):void 0})),a("i8Q71");var o=a("bpxeT"),l=a("dDDEV"),c=a("2TvXO"),s=a("dIxxU"),d=a("8OCXI"),u={page:1,language:"en-US",api_key:"682127ed972e56f6bb70ae743d23c1d7"},v={method:"GET",headers:{accept:"application/json",Authorization:"Bearer ".concat(u.api_key)}},g="https://api.themoviedb.org/3/trending/movie/day",p="https://api.themoviedb.org/3/trending/movie/week",m="https://api.themoviedb.org/3/movie/upcoming",f=function(e,t){var n=Math.floor(e),r=e%1>=.5?1:0,a=5-n-r;return console.log("Rating:",e),console.log("Full Stars:",n),console.log("Half Stars:",r),console.log("Empty Stars:",a),"\n    ".concat(d.fullStar.replace("star",t).repeat(n),"\n    ").concat(d.halfStar.replace("star",t).repeat(r),"\n    ").concat(d.emptyStar.replace("star",t).repeat(a),"\n  ")},h=function(e){var t=function(e,t){var n=[];for(i=0;i<e.length;i+=1)t.includes(e[i].id)&&n.push(e[i].name);return n.slice(0,2).join(", ")}(d.genres,e.genre_ids),n=e.release_date.slice(0,4),r=e.vote_average/2,a=f(r);return(0,d.topMoviesFragment)(e.id,e.backdrop_path,e.title,t,n,a,e.id)};function _(){document.querySelector("#hero").innerHTML=d.emptyApiResponeHero}var y,k=function(t){return s.default.get(t,e(l)({params:u},v)).then((function(e){var n,r,a;return t.includes("day")?0===e.data.results.length?void _():void function(e){var t,n,r=document.querySelector("#hero"),a=Math.floor(Math.random()*e.data.results.length),i=e.data.results[a],o=(t=i.overview,n=200,t.length>n?t.slice(0,n)+"...":t),l=i.vote_average/2,c=f(l,"hero-star");r.innerHTML=(0,d.heroFragment)(i.id,i.backdrop_path,i.title,c,o)}(e):t.includes("week")?void function(e){for(var t=document.querySelector("#catalogMovielist"),n="",r=0;r<3;r++)n+=h(e[r]);t.innerHTML=n}(e.data.results):t.includes("upcoming")?(n=e.data.results,r=document.querySelector("#upcoming"),a=n[Math.floor(Math.random()*n.length)],console.log(a.id),void(r.innerHTML=(0,d.upcomingMovieFragment)(a.id,a.backdrop_path,a.title,a.overview))):void 0})).catch((function(e){t.includes("day")&&0===length?_():console.log(e)}))},L=(y=e(o)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([k(g),k(p),k(m)]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),t)}))),function(){return y.apply(this,arguments)});L()}();
//# sourceMappingURL=index.6845bc69.js.map
