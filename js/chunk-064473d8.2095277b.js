(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-064473d8"],{"0e07":function(e,a,t){"use strict";var r=function(){var e=this,a=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"sidebar"},[t("nav",{staticClass:"nav nav--vertical"},[t("button",{staticClass:"btn btn--sidebar"},[e._v("filter by name")]),t("button",{staticClass:"btn btn--sidebar"},[e._v("filter by age")]),t("button",{staticClass:"btn btn--sidebar"},[e._v("filter by seasons")]),t("button",{staticClass:"btn btn--sidebar"},[e._v("filter by seasons")]),t("button",{staticClass:"btn btn--sidebar"},[e._v("filter by seasons")]),t("button",{staticClass:"btn btn--sidebar"},[e._v("filter by seasons")])])])}],s={name:"sidebar",data:function(){return{}}},n=s,c=t("2877"),o=Object(c["a"])(n,r,i,!1,null,null,null);a["a"]=o.exports},"159b":function(e,a,t){var r=t("da84"),i=t("fdbc"),s=t("17c2"),n=t("9112");for(var c in i){var o=r[c],l=o&&o.prototype;if(l&&l.forEach!==s)try{n(l,"forEach",s)}catch(d){l.forEach=s}}},"17c2":function(e,a,t){"use strict";var r=t("b727").forEach,i=t("a640"),s=t("ae40"),n=i("forEach"),c=s("forEach");e.exports=n&&c?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},4160:function(e,a,t){"use strict";var r=t("23e7"),i=t("17c2");r({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"4d2c":function(e,a,t){"use strict";var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"gallery"},[t("input",{staticClass:"input",attrs:{type:"text"},domProps:{value:e.pageTitle},on:{keyup:function(a){return e.updateTitle(a)}}}),t("div",{staticClass:"row"},e._l(e.characters,(function(a){return t("div",{key:a.id,staticClass:"col-md-3"},[t("div",{staticClass:"gallery__card",class:{"gallery__card--season":"/seasons"===e.$route.path}},[t("div",{staticClass:"gallery__img-wrap",class:{"gallery__img-wrap--season":"/seasons"===e.$route.path}},[t("img",{staticClass:"gallery__img",attrs:{src:a.imgSrc,alt:""}})]),"/"===e.$route.path?t("div",{staticClass:"gallery__bottom"},[t("h3",{staticClass:"gallery__nick"},[e._v("nick: "+e._s(a.nickname))]),t("p",{staticClass:"gallery__name"},[e._v("name: "+e._s(a.name))]),t("p",{staticClass:"gallery__date"},[e._v("birthday: "+e._s(a.birthday))])]):t("div",{staticClass:"gallery__bottom gallery__bottom--season"},[t("h3",{staticClass:"gallery__nick"},[e._v("title: "+e._s(a.title))]),t("p",{staticClass:"gallery__name"},[e._v("season: "+e._s(a.season))]),t("p",{staticClass:"gallery__date"},[e._v("date: "+e._s(a.air_date))])])])])})),0)])},i=[],s={name:"gallery",props:{characters:{type:Array,required:!0},pageTitle:{type:String,required:!0}},data:function(){return{}},methods:{updateTitle:function(e){this.$emit("onUpdateInput",e.target.value)}}},n=s,c=t("2877"),o=Object(c["a"])(n,r,i,!1,null,null,null);a["a"]=o.exports},"65f0":function(e,a,t){var r=t("861d"),i=t("e8b5"),s=t("b622"),n=s("species");e.exports=function(e,a){var t;return i(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!i(t.prototype)?r(t)&&(t=t[n],null===t&&(t=void 0)):t=void 0),new(void 0===t?Array:t)(0===a?0:a)}},"99bd":function(e,a,t){"use strict";var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("header",{staticClass:"header"},[t("div",{staticClass:"container"},[t("nav",{staticClass:"nav nav--navbar"},e._l(e.activeLinks,(function(a){return t("router-link",{key:a.id,staticClass:"link link--navbar",class:a.activeClass,attrs:{to:a.to}},[e._v(e._s(a.name))])})),1)])])},i=[],s=(t("4160"),t("159b"),{name:"page-header",data:function(){return{links:[{to:"/",name:"characters"},{to:"/seasons",name:"seasons"},{to:"/episodes",name:"episodes"},{to:"/quote",name:"quote"},{to:"/deaths",name:"deaths"}]}},computed:{activeLinks:function(){var e=this;return this.links.forEach((function(a){return e.$route.path===a.to?a.activeClass="active":a.activeClass=""})),this.links}},methods:{activeClass:function(e){return this.$route.path===e.to?"active":""}}}),n=s,c=t("2877"),o=Object(c["a"])(n,r,i,!1,null,null,null);a["a"]=o.exports},a640:function(e,a,t){"use strict";var r=t("d039");e.exports=function(e,a){var t=[][e];return!!t&&r((function(){t.call(null,a||function(){throw 1},1)}))}},ae40:function(e,a,t){var r=t("83ab"),i=t("d039"),s=t("5135"),n=Object.defineProperty,c={},o=function(e){throw e};e.exports=function(e,a){if(s(c,e))return c[e];a||(a={});var t=[][e],l=!!s(a,"ACCESSORS")&&a.ACCESSORS,d=s(a,0)?a[0]:o,h=s(a,1)?a[1]:void 0;return c[e]=!!t&&!i((function(){if(l&&!r)return!0;var e={length:-1};l?n(e,1,{enumerable:!0,get:o}):e[1]=1,t.call(e,d,h)}))}},b727:function(e,a,t){var r=t("0366"),i=t("44ad"),s=t("7b0b"),n=t("50c4"),c=t("65f0"),o=[].push,l=function(e){var a=1==e,t=2==e,l=3==e,d=4==e,h=6==e,m=5==e||h;return function(_,u,g,M){for(var p,k,S=s(_),y=i(S),f=r(u,g,3),W=n(y.length),B=0,v=M||c,T=a?v(_,W):t?v(_,0):void 0;W>B;B++)if((m||B in y)&&(p=y[B],k=f(p,B,S),e))if(a)T[B]=k;else if(k)switch(e){case 3:return!0;case 5:return p;case 6:return B;case 2:o.call(T,p)}else if(d)return!1;return h?-1:l||d?d:T}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},e8b5:function(e,a,t){var r=t("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},fdbc:function(e,a){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fedd:function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",[t("page-header"),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-3"},[t("sidebar")],1),t("div",{staticClass:"col-md-9"},[t("h1",{staticClass:"text text--h1"},[e._v("Seasons")]),t("gallery",{attrs:{characters:e.seasons}})],1)])],1)},i=[],s=t("99bd"),n=t("0e07"),c=t("4d2c"),o={name:"Seasons",components:{"page-header":s["a"],sidebar:n["a"],gallery:c["a"]},data:function(){return{seasons:[{episode_id:1,title:"Pilot",season:"1",air_date:"01-20-2008",characters:["Walter White","Jesse Pinkman","Skyler White","Hank Schrader","Marie Schrader","Walter White Jr.","Krazy-8","Bogdan Wolynetz"],episode:"1",series:"Breaking Bad",imgSrc:"https://m.media-amazon.com/images/M/MV5BNTZlMGY1OWItZWJiMy00MTZlLThhMGItNDQ2ODM3YzNkOWU5XkEyXkFqcGdeQXVyNzgyOTQ4MDc@._V1_UY126_UX224_AL_.jpg"},{episode_id:2,title:"Cat's in the Bag...",season:"1",air_date:"01-27-2008",characters:["Walter White","Jesse Pinkman","Skyler White","Walter White Jr.","Krazy-8"],episode:"2",series:"Breaking Bad",imgSrc:"https://m.media-amazon.com/images/M/MV5BNmI5MTU3OTAtYTczMC00MDE5LTg3YjMtMjA3NWEyMmYyZWQwXkEyXkFqcGdeQXVyNjk1MzkzMzM@._V1_UX224_CR0,0,224,126_AL_.jpg"},{episode_id:3,title:"...And the Bag's in the River",season:"1",air_date:"02-10-2008",characters:["Walter White","Jesse Pinkman","Skyler White","Hank Schrader","Marie Schrader","Walter White Jr.","Krazy-8","Gretchen Schwartz"],episode:"3",series:"Breaking Bad",imgSrc:"https://m.media-amazon.com/images/M/MV5BMjM0Mjc0NjI0NV5BMl5BanBnXkFtZTgwMDg2MDU5NTM@._V1_UX224_CR0,0,224,126_AL_.jpg"},{episode_id:4,title:"Cancer Man",season:"1",air_date:"02-17-2008",characters:["Walter White","Jesse Pinkman","Skyler White","Hank Schrader","Marie Schrader","Walter White Jr.","Ken Wins"],episode:"4",series:"Breaking Bad",imgSrc:"https://m.media-amazon.com/images/M/MV5BMjM0Mjc0NjI0NV5BMl5BanBnXkFtZTgwMDg2MDU5NTM@._V1_UX224_CR0,0,224,126_AL_.jpg"},{episode_id:5,title:"Gray Matter",season:"1",air_date:"02-24-2008",characters:["Walter White","Jesse Pinkman","Skyler White","Hank Schrader","Marie Schrader","Walter White Jr.","Elliott Schwarts","Gretchen Swartz","Badger"],episode:"5",series:"Breaking Bad",imgSrc:"https://m.media-amazon.com/images/M/MV5BNTgwOTE0ODYtMDEwNC00MjY1LWJjZDctNTU2MjRlNTgzY2NkXkEyXkFqcGdeQXVyNjg0Nzk2Nzc@._V1_UY126_UX224_AL_.jpg"},{episode_id:6,title:"Crazy Handful of Nothin",season:"1",air_date:"03-02-2008",characters:["Walter White","Jesse Pinkman","Skyler White","Hank Schrader","Marie Schrader","Walter White Jr.","Tuco Salamanca"],episode:"6",series:"Breaking Bad",imgSrc:"https://m.media-amazon.com/images/M/MV5BOGU0YTA2ZGItNDFjNi00NWM1LTk5NzAtYjFkYTk2MzFhY2YyXkEyXkFqcGdeQXVyNjc0NTIwNTU@._V1_UX224_CR0,0,224,126_AL_.jpg"},{episode_id:7,title:"A No-Rough-Stuff-Type Deal",season:" 1",air_date:"03-09-2008",characters:["Walter White","Jesse Pinkman","Skyler White","Hank Schrader","Marie Schrader","Walter White Jr.","Tuco Salamanca"],episode:"7",series:"Breaking Bad",imgSrc:"https://m.media-amazon.com/images/M/MV5BNzM1OTA1NzgxOV5BMl5BanBnXkFtZTgwMjg2MDU5NTM@._V1_UX224_CR0,0,224,126_AL_.jpg"},{episode_id:8,title:"Seven-Thirty-Seven",season:"2",air_date:"03-08-2009",characters:["Walter White","Jesse Pinkman","Skyler White","Hank Schrader","Marie Schrader","Walter White Jr.","Tuco Salamanca"],episode:"1",series:"Breaking Bad",imgSrc:"https://m.media-amazon.com/images/M/MV5BMjEwNjk4MTI2MF5BMl5BanBnXkFtZTcwMTIzMTMzMg@@._V1_UX224_CR0,0,224,126_AL_.jpg"},{episode_id:9,title:"Grilled",season:"2",air_date:"03-15-2009",characters:["Walter White","Jesse Pinkman","Skyler White","Hank Schrader","Marie Schrader","Walter White Jr.","Tuco Salamanca","Hector Salamanca"],episode:"2",series:"Breaking Bad",imgSrc:"https://m.media-amazon.com/images/M/MV5BZjAyYmJlMWQtYjg0Zi00NjBiLTg1ZGUtMDRiZjcwMjY1NzM2XkEyXkFqcGdeQXVyNjg0Nzk2Nzc@._V1_UX224_CR0,0,224,126_AL_.jpg"},{episode_id:10,title:"Bit by a Dead Bee",season:"2",air_date:"03-22-2009",characters:["Walter White","Jesse Pinkman","Skyler White","Hank Schrader","Marie Schrader","Walter White Jr.","Hector Salamanca"],episode:"3",series:"Breaking Bad",imgSrc:"https://m.media-amazon.com/images/M/MV5BNzA5OWQxM2MtNzI0ZS00NWI4LWJmYWEtNjA3ODJmMzUzMzFmXkEyXkFqcGdeQXVyNjE0NDg1MDg@._V1_UX224_CR0,0,224,126_AL_.jpg"},{episode_id:11,title:"Down",season:"2",air_date:"03-29-2009",characters:["Walter White","Jesse Pinkman","Skyler White","Walter White Jr."],episode:"4",series:"Breaking Bad",imgSrc:"https://m.media-amazon.com/images/M/MV5BMjI0NzA3MDc0MF5BMl5BanBnXkFtZTgwMTE4OTc5MjE@._V1_UX224_CR0,0,224,126_AL_.jpg"},{episode_id:12,title:"Breakage",season:"2",air_date:"04-05-2009",characters:["Walter White","Jesse Pinkman","Skyler White","Hank Schrader","Marie Schrader","Walter White Jr.","Jane Margolis","Badger"],episode:"5",series:"Breaking Bad",imgSrc:"https://m.media-amazon.com/images/M/MV5BMjIwOTg0MDU2MV5BMl5BanBnXkFtZTcwNjE2NTc0Mg@@._V1_UX224_CR0,0,224,126_AL_.jpg"},{episode_id:13,title:"Peekaboo",season:"2",air_date:"04-12-2009",characters:["Walter White","Jesse Pinkman","Skyler White","Marie Schrader","Walter White Jr.","Gretchen Schwartz"],episode:"6",series:"Breaking Bad",imgSrc:"https://m.media-amazon.com/images/M/MV5BMTk0NjI4NTYwOV5BMl5BanBnXkFtZTgwOTc2MDU5NTM@._V1_UX224_CR0,0,224,126_AL_.jpg"},{episode_id:14,title:"Negro y Azul",season:"2",air_date:"04-19-2009",characters:["Walter White","Jesse Pinkman","Skyler White","Hank Schrader","Marie Schrader","Walter White Jr.","Tortuga","Jane Margolis","Ted Beneke"],episode:"7",series:"Breaking Bad",imgSrc:"https://m.media-amazon.com/images/M/MV5BYTBkYjQxOTQtOWNlNC00YmMxLWJlY2EtN2ZhNDBkYjc5OWU3XkEyXkFqcGdeQXVyNjE0NDg1MDg@._V1_UY126_CR1,0,224,126_AL_.jpg"},{episode_id:15,title:"Better Call Saul",season:"2",air_date:"04-26-2009",characters:["Walter White","Jesse Pinkman","Skyler White","Hank Schrader","Marie Schrader","Saul Goodman","Jane Margolis","Badger"],episode:"8",series:"Breaking Bad",imgSrc:"https://m.media-amazon.com/images/M/MV5BMTk1MTI3NjY1Ml5BMl5BanBnXkFtZTgwMTk2MDU5NTM@._V1_UX224_CR0,0,224,126_AL_.jpg"}]}}},l=o,d=t("2877"),h=Object(d["a"])(l,r,i,!1,null,null,null);a["default"]=h.exports}}]);
//# sourceMappingURL=chunk-064473d8.2095277b.js.map