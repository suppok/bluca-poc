(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-344ad813"],{"0767":function(e,t,n){"use strict";n.r(t);n("a4d3"),n("e01a"),n("9911");var i=n("7a23"),a={class:"flex flex-col mt-16"},r={class:"flex flex-col justify-center py-3 w-full"},l={class:"flex flex-col items-start self-center justify-start py-5 w-9/12"},c={class:"flex flex-col w-full lg:w-6/12"},o={class:"whitepaper-head py-1 text-left text-5xl font-bold pb-5"},s={class:"pb-2 text-justify"},p={class:"flex flex-row items-start self-center justify-start w-9/12"},d={class:"\n          grid-flow grid\n          gap-4\n          grid-cols-1 grid-rows-3\n          self-center\n          py-4\n          w-full\n          md:grid-cols-3\n        "},f={class:"flex hidden flex-col"},u=Object(i["h"])("div",null,[Object(i["h"])("p",{class:"advisor-title text-center text-3xl font-black"},"Advisors")],-1),m={class:"flex flex-row justify-center"},b={class:"\n        flex flex-col\n        items-start\n        self-center\n        justify-start\n        mb-40\n        py-5\n        w-9/12\n        xl:w-7/12\n      "},g={class:"w-full"},h={class:"advisor-title text-center text-5xl font-black"},y={class:"\n          grid-flow grid\n          gap-3\n          grid-cols-1\n          self-center\n          mt-5\n          py-4\n          w-full\n          md:grid-cols-3\n        "};function v(e,t,n,v,k,x){var O=Object(i["F"])("TeamItem"),j=Object(i["F"])("Partner");return Object(i["x"])(),Object(i["g"])("div",a,[Object(i["h"])("div",r,[Object(i["h"])("div",l,[Object(i["h"])("div",c,[Object(i["h"])("p",o,Object(i["I"])(e.$t("ourteam")),1),Object(i["h"])("p",s,Object(i["I"])(e.$t("teamsubtitle")),1)])])]),Object(i["h"])("div",p,[Object(i["h"])("div",d,[(Object(i["x"])(!0),Object(i["g"])(i["a"],null,Object(i["D"])(k.items,(function(e,t){return Object(i["x"])(),Object(i["e"])(O,{key:t+1,"type-item":e.type,title:e.title,fname:e.fname,lname:e.lname,description:e.description,image:e.image,linkedin:e.linkedin},null,8,["type-item","title","fname","lname","description","image","linkedin"])})),128))])]),Object(i["h"])("div",f,[u,Object(i["h"])("div",m,[(Object(i["x"])(!0),Object(i["g"])(i["a"],null,Object(i["D"])(k.advisors,(function(e,t){return Object(i["x"])(),Object(i["e"])(O,{key:t+1,"type-item":e.type,title:e.title,fname:e.fname,lname:e.lname,description:e.description,image:e.image,linkedin:e.linkedin},null,8,["type-item","title","fname","lname","description","image","linkedin"])})),128))])]),Object(i["h"])("div",b,[Object(i["h"])("div",g,[Object(i["h"])("p",h,Object(i["I"])(e.$t("Home.partners")),1)]),Object(i["h"])("div",y,[(Object(i["x"])(!0),Object(i["g"])(i["a"],null,Object(i["D"])(k.partners,(function(e,t){return Object(i["x"])(),Object(i["e"])(j,{key:t+1,title:e.title,description:e.description,image:e.image,link:e.link,"image-type":e.imageType},null,8,["title","description","image","link","image-type"])})),128))])])])}var k=n("3e39"),x=n.n(k),O={class:"flex-col mb-10 px-3"},j={class:"card p-3 hover:bg-gray-200"},A={class:"bg-rose-300 relative"},w=["href"],S=Object(i["h"])("img",{src:x.a},null,-1),I=[S],T=["src"],E={class:"text-left space-y-1"},C={class:"mt-5 text-left space-y-1"},N=["innerHTML"],L=["innerHTML"],M=["innerHTML"],B=["innerHTML"];function R(e,t,n,a,r,l){return Object(i["x"])(),Object(i["g"])("div",O,[Object(i["h"])("div",j,[Object(i["h"])("div",A,[""!=n.linkedin?(Object(i["x"])(),Object(i["g"])("a",{key:0,href:n.linkedin,class:"linkedin absolute bottom-2 left-2",target:"_blank"},I,8,w)):Object(i["f"])("",!0),Object(i["h"])("img",{class:"w-full h-48 object-contain",src:l.getSrc(n.image)},null,8,T)]),Object(i["h"])("div",E,[Object(i["h"])("div",C,[Object(i["h"])("span",{class:"theme-color block text-2xl",innerHTML:n.title},null,8,N),Object(i["h"])("span",{class:"theme-color block text-3xl font-bold",innerHTML:n.fname},null,8,L),Object(i["h"])("span",{class:"theme-color block text-3xl font-bold",innerHTML:n.lname?n.lname:"<br />"},null,8,M)]),Object(i["h"])("div",null,[Object(i["h"])("span",{class:"block text-xl",innerHTML:n.description},null,8,B)])])])])}n("a9e3");var P={props:{index:{type:[Number],default:0},title:{type:[String],default:""},fname:{type:[String],default:"title"},lname:{type:[String],default:""},description:{type:[String],default:"description"},image:{type:[String],default:"image"},linkedin:{type:[String],default:""}},methods:{onClick:function(e){this.$refs[e].scrollIntoView({behavior:"smooth",block:"start",inline:"start"})},getSrc:function(e){return"https://assets.bluca.io/images/team/"+e}}};n("1073");P.render=R;var F=P,H=n("7646"),Q={components:{TeamItem:F,Partner:H["a"]},data:function(){return{items:[{title:"",fname:"Narut",lname:"Poovorakit",type:"team",description:"Executive Lead,<br />Business Development",image:"narutp.png",linkedin:"https://www.linkedin.com/in/narut-poovorakit-a60395169/"},{title:"",fname:"Patinya",lname:"Yongyai",type:"team",description:"Product Lead,<br />Business Development",image:"patinyay.png",linkedin:"https://www.linkedin.com/in/patinya-yongyai-6b4bba144/"},{title:"",fname:"Supanat",lname:"Pokturng",type:"team",description:"Tech Lead, Blockchain &<br />Backend Developer",image:"supanutp.png",linkedin:"https://www.linkedin.com/in/supanat-pokturng-86376b1b2/"},{title:"",fname:"Poomrapee",lname:"Kaewchai",type:"team",description:"Blockchain & Backend<br />Developer",image:"poomrapee.png",linkedin:""},{title:"",fname:"Natanon",lname:"Poonawagul",type:"team",description:"Frontend Developer",image:"natanon.png",linkedin:""},{title:"",fname:"Askaree",lname:"Wittayanont",type:"team",description:"Designer",image:"pdream.png",linkedin:"https://www.linkedin.com/in/deanis"},{title:"",fname:"FTTX",lname:"",type:"team",description:"Blockchain Developer",image:"member.png",linkedin:""},{title:"",fname:"BeeBee",lname:"",type:"team",description:"Frontend Developer",image:"member.png",linkedin:""}],advisors:[{title:"Asst. Prof. Dr.",fname:"Paruj",lname:"Ratanawarabhan",type:"advisor",description:"Computer Engineering Professor<br />@Kasetsart University",image:"member.png",linkedin:""}],partners:[{title:"FairPlay Studios",description:"Game Studio",image:"fairplay.png",link:"https://fairplaystudios.net/",imageType:"rectangle"},{title:"Creature Caretaker",description:"Digital Artist",image:"CreatureCaretaker.png",link:"https://www.facebook.com/AZ-ll-Creature-caretaker-270107503403923"},{title:"Whither Laws",description:"Digital Artist",image:"WhitherLaws.png",link:"https://www.facebook.com/WhitherLaws"}]}},computed:{},created:function(){}};n("7c70");Q.render=v;t["default"]=Q},1073:function(e,t,n){"use strict";n("2d25")},"254d":function(e,t,n){},"2d25":function(e,t,n){},"3e39":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAVCAYAAABc6S4mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHlSURBVHgBtZU7SBxBGMe/b3Z279IkZ5G0uYRIbhMEi4SkEkFsfCK2FmJx5wOxsbQQSysbQcXCykoRF7RQQUEULOwUzxPhtBBFxPfr3JvxG2VlFT1Obu4Hw/fa3T8z3+wM/ow5/SihCRA55M7GzQe3JNlXd+IlOAK0AipXggaKrEv8Q3bOS7AXD7g0kqARn4C8ExKL4oM138jatGRnoAGfAC4lhqrjylNWgkyCBp4EqA3Fdtv4V+VHmifCFIdBA087h1ocAtdciESdVRRQJhE+ggaeb02ENRoBUlumqIJGiuKZh5LEL7Rs1BsYpfo6CFEAyKoo/pu1QHygplrZcON8MBg4vyZ3z8sVRqf+MebyzYHaJd8rPXZssk8CdmQlkImtocqV1/LXt6I7GGAtNEfrtTqDdxCJOZ121DmONDtjXi45ov5atvPWO1kLfI/OfqK176Xmh8jW/2qdKPaVEzkLWOyCmvp4qChEioc8X7pXbs4CGUET8iqAhsnzKpCJvAs8mxpdPsPK0kHKQT50NOTlQB0lPtCQXVRreIzk75cftmNjhYd3p/tIe1vLTeMhhChnkh+7RsoywSxgtKcPQCMMzF2GmOZglKJMH3Fg6f+QNkpBA0Ky7cRwZeJH+/Rn65YtGgYe3gMq1JMP7u19OQAAAABJRU5ErkJggg=="},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var i=n("1d80"),a=n("577e"),r=n("5899"),l="["+r+"]",c=RegExp("^"+l+l+"*"),o=RegExp(l+l+"*$"),s=function(e){return function(t){var n=a(i(t));return 1&e&&(n=n.replace(c,"")),2&e&&(n=n.replace(o,"")),n}};e.exports={start:s(1),end:s(2),trim:s(3)}},7156:function(e,t,n){var i=n("861d"),a=n("d2bb");e.exports=function(e,t,n){var r,l;return a&&"function"==typeof(r=t.constructor)&&r!==n&&i(l=r.prototype)&&l!==n.prototype&&a(e,l),e}},7646:function(e,t,n){"use strict";n("a4d3"),n("e01a"),n("9911");var i=n("7a23"),a={class:"partner-box flex-col p-8 rounded-lg hover:shadow-2xl shadow-lg"},r={class:"object-contain bg-rose-300 flex flex-col justify-center h-28 2xl:h-44 xl:h-36"},l=["src"],c={class:"pt-6 text-left"},o=["innerHTML"],s=["innerHTML"],p=Object(i["h"])("br",null,null,-1),d=["href"];function f(e,t,n,f,u,m){return Object(i["x"])(),Object(i["g"])("div",a,[Object(i["h"])("div",null,[Object(i["h"])("div",r,[Object(i["h"])("img",{class:Object(i["r"])(["border-bt mt-3 object-scale-down h-32 max-w-1/2",{"w-1/2":"square"===n.imageType,"w-full":"rectangle"===n.imageType}]),src:m.getSrc(n.image)},null,10,l)]),Object(i["h"])("div",c,[Object(i["h"])("span",{class:"theme-color block text-xl font-semibold",innerHTML:n.title},null,8,o),Object(i["h"])("span",{class:"block",innerHTML:"<small>"+n.description+"</small>"},null,8,s),p,Object(i["h"])("a",{href:n.link,class:"website no-underline hover:underline",target:"_blank"},"Website >>",8,d)])])])}n("a9e3");var u={props:{index:{type:[Number],default:0},title:{type:[String],default:""},description:{type:[String],default:"description"},link:{type:[String],default:"#"},image:{type:[String],default:"image"},imageType:{type:[String],default:"square"}},methods:{onClick:function(e){this.$refs[e].scrollIntoView({behavior:"smooth",block:"start",inline:"start"})},getSrc:function(e){return"https://assets.bluca.io/images/team/"+e}}};n("ec18");u.render=f;t["a"]=u},"7c70":function(e,t,n){"use strict";n("254d")},"857a":function(e,t,n){var i=n("1d80"),a=n("577e"),r=/"/g;e.exports=function(e,t,n,l){var c=a(i(e)),o="<"+t;return""!==n&&(o+=" "+n+'="'+a(l).replace(r,"&quot;")+'"'),o+">"+c+"</"+t+">"}},9911:function(e,t,n){"use strict";var i=n("23e7"),a=n("857a"),r=n("af03");i({target:"String",proto:!0,forced:r("link")},{link:function(e){return a(this,"a","href",e)}})},a9e3:function(e,t,n){"use strict";var i=n("83ab"),a=n("da84"),r=n("94ca"),l=n("6eeb"),c=n("5135"),o=n("c6b6"),s=n("7156"),p=n("d9b5"),d=n("c04e"),f=n("d039"),u=n("7c73"),m=n("241c").f,b=n("06cf").f,g=n("9bf2").f,h=n("58a8").trim,y="Number",v=a[y],k=v.prototype,x=o(u(k))==y,O=function(e){if(p(e))throw TypeError("Cannot convert a Symbol value to a number");var t,n,i,a,r,l,c,o,s=d(e,"number");if("string"==typeof s&&s.length>2)if(s=h(s),t=s.charCodeAt(0),43===t||45===t){if(n=s.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(s.charCodeAt(1)){case 66:case 98:i=2,a=49;break;case 79:case 111:i=8,a=55;break;default:return+s}for(r=s.slice(2),l=r.length,c=0;c<l;c++)if(o=r.charCodeAt(c),o<48||o>a)return NaN;return parseInt(r,i)}return+s};if(r(y,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var j,A=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof A&&(x?f((function(){k.valueOf.call(n)})):o(n)!=y)?s(new v(O(t)),n,A):O(t)},w=i?m(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),S=0;w.length>S;S++)c(v,j=w[S])&&!c(A,j)&&g(A,j,b(v,j));A.prototype=k,k.constructor=A,l(a,y,A)}},af03:function(e,t,n){var i=n("d039");e.exports=function(e){return i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},c68e:function(e,t,n){},e01a:function(e,t,n){"use strict";var i=n("23e7"),a=n("83ab"),r=n("da84"),l=n("5135"),c=n("861d"),o=n("9bf2").f,s=n("e893"),p=r.Symbol;if(a&&"function"==typeof p&&(!("description"in p.prototype)||void 0!==p().description)){var d={},f=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof f?new p(e):void 0===e?p():p(e);return""===e&&(d[t]=!0),t};s(f,p);var u=f.prototype=p.prototype;u.constructor=f;var m=u.toString,b="Symbol(test)"==String(p("test")),g=/^Symbol\((.*)\)[^)]+$/;o(u,"description",{configurable:!0,get:function(){var e=c(this)?this.valueOf():this,t=m.call(e);if(l(d,e))return"";var n=b?t.slice(7,-1):t.replace(g,"$1");return""===n?void 0:n}}),i({global:!0,forced:!0},{Symbol:f})}},ec18:function(e,t,n){"use strict";n("c68e")}}]);
//# sourceMappingURL=chunk-344ad813.f9d374a4.js.map