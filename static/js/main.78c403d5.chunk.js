(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/me.675c287a.jpg"},function(e,t,a){e.exports=a.p+"static/media/gradient.adf6f77d.png"},function(e,t,a){e.exports=a.p+"static/media/robots.f2eea234.png"},function(e,t,a){e.exports=a.p+"static/media/facerecognition.a5e717f4.png"},function(e,t,a){e.exports=a(31)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(8),r=a.n(l),i=(a(19),a(2)),o=a(3),c=a(6),m=a(4),u=a(5),d=a(1),p=(a(21),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).openProjects=function(){a.props.settingProjectsState(!0)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"hero"},s.a.createElement("div",{className:"heroLayer"}),s.a.createElement("a",{onClick:this.openProjects,href:"#",className:"btn btn-white btn-animated"},"My Projects"))}}]),t}(s.a.Component)),f=(a(23),a(9)),y=a.n(f),b=function(){return s.a.createElement("div",{className:"sidebar"},s.a.createElement("img",{className:"me",alt:"me",src:y.a}),s.a.createElement("div",{className:"layer"}),s.a.createElement("span",null,s.a.createElement("i",{className:"quotes fas fa-quote-left"})),s.a.createElement("p",{className:"quote"},"Growth is painful    ",s.a.createElement("br",null),"Change is painful",s.a.createElement("br",null),"But nothing is more painful than staying stuck somewhere you don't belong"),s.a.createElement("span",null,s.a.createElement("i",{className:"quotes fas fa-quote-right"})),s.a.createElement("div",{className:"socials"},s.a.createElement("a",{href:"https://www.facebook.com/aseel.mohammad.71",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("i",{className:"fab fa-facebook-square"})),s.a.createElement("a",{href:"https://www.linkedin.com/in/aseel-abu-sal-893a31a7/",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("i",{className:"fab fa-linkedin"})),s.a.createElement("a",{href:"https://twitter.com/AbusalAseel",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("i",{className:"fab fa-twitter-square"})),s.a.createElement("a",{href:"https://github.com/Sloor/",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("i",{className:"fab fa-github-square"}))))},g=(a(25),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).aboutMeExtend=e.aboutMeExtend.bind(Object(d.a)(Object(d.a)(e))),e.aboutMeShrink=e.aboutMeShrink.bind(Object(d.a)(Object(d.a)(e))),e.begin=e.begin.bind(Object(d.a)(Object(d.a)(e))),e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"aboutMeExtend",value:function(){var e=document.getElementsByClassName("aboutMe")[0],t=document.getElementsByClassName("info")[0];e.style.cssText="display:block;width:300px;animation: extend 1s;",setTimeout(function(){t.style.cssText="display: block;animation: fadeIn 1s;"},1e3)}},{key:"aboutMeShrink",value:function(e){e.preventDefault();var t=document.getElementsByClassName("aboutMe")[0];document.getElementsByClassName("info")[0].style.cssText="display: none;animation: fadeOut 1s;",setTimeout(function(){t.style.cssText="display:block;width: 100px;animation: shrink 1s;"},500)}},{key:"begin",value:function(){document.addEventListener("DOMContentLoaded",function(){var e=document.getElementsByClassName("aboutMe")[0];setTimeout(function(){e.style.cssText="display: block;animation: fadeIn 1s;"},3e3)})}},{key:"render",value:function(){return s.a.createElement("div",{begin:this.begin(),onMouseEnter:this.aboutMeExtend,onMouseLeave:this.aboutMeShrink,className:"aboutMe"},s.a.createElement("p",null,"About Me"),s.a.createElement("div",{className:"info"},s.a.createElement("p",null,"Hi, my name is Aseel Abusal"),s.a.createElement("p",null,"My Email: aseel.abosul@gmail.com")))}}]),t}(s.a.Component)),h=(a(27),a(10)),E=a.n(h),j=a(11),v=a.n(j),k=a(12),N=a.n(k),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).closeProjects=function(){a.props.settingProjectsState(!1)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"nextArrow",value:function(){var e=document.getElementsByClassName("first")[0],t=document.getElementsByClassName("second")[0],a=document.getElementsByClassName("third")[0];window.innerWidth<=750?""===a.style.display||"none"===a.style.display?(e.style.display="none",t.style.display="none",a.style.cssText="display: block;animation:bigger 1s;"):""!==t.style.display&&"none"!==t.style.display||(e.style.display="none",a.style.display="none",t.style.cssText="display: block;animation:slideup 1s;"):""!==a.style.display&&"none"!==a.style.display||(e.style.display="none",a.style.cssText="display: block;animation:bigger 1s;")}},{key:"prevArrow",value:function(){var e=document.getElementsByClassName("first")[0],t=document.getElementsByClassName("second")[0],a=document.getElementsByClassName("third")[0];window.innerWidth<=750?""===t.style.display||"none"===t.style.display?(e.style.display="none",a.style.display="none",t.style.cssText="display: block;animation:slideup 1s;"):""!==e.style.display&&"none"!==e.style.display||(t.style.display="none",a.style.display="none",e.style.cssText="display: block;animation:bigger 1s;"):""!==e.style.display&&"none"!==e.style.display||(a.style.display="none",e.style.cssText="display: block;animation:slideup 1s;")}},{key:"render",value:function(){return s.a.createElement("div",{className:"projectsBlock"},s.a.createElement("div",{className:"projectsSlides"},s.a.createElement("h2",null,"My Projects On GitHub:"),s.a.createElement("i",{className:"fas fa-caret-left",id:"left",onClick:this.prevArrow}),s.a.createElement("div",{className:"carousel"},s.a.createElement("div",{className:"first imgFrame"},s.a.createElement("a",{href:"https://github.com/Sloor/backgroundGenerator/tree/master/gradient",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("img",{className:"carousel",src:E.a,alt:"gradientProj"}),s.a.createElement("div",{className:"textover"},s.a.createElement("p",null,"A website for trying different color gradients for designing purposes"),s.a.createElement("i",{className:"fas fa-external-link-alt"})))),s.a.createElement("div",{className:"second imgFrame"},s.a.createElement("a",{href:"https://sloor.github.io/robotsearch/",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("img",{className:"carousel",src:v.a,alt:"robotsProj"}),s.a.createElement("div",{className:"textover"},s.a.createElement("p",null,"A simple page demonstrating searching using AJAX"),s.a.createElement("i",{className:"fas fa-external-link-alt"})))),s.a.createElement("div",{className:"third imgFrame"},s.a.createElement("a",{href:"https://sloor.github.io/facerecognition/",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("img",{className:"carousel",src:N.a,alt:"todoProj"}),s.a.createElement("div",{className:"textover"},s.a.createElement("p",null,"A face recognition applicaiton that accepts a URL input"),s.a.createElement("i",{className:"fas fa-external-link-alt"}))))),s.a.createElement("i",{className:"fas fa-caret-right",id:"right",onClick:this.nextArrow})),s.a.createElement("div",{onClick:this.closeProjects,className:"projectsLayer"}))}}]),t}(s.a.Component),x=(a(29),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).state={projects:!1},e.settingProjectsState=e.settingProjectsState.bind(Object(d.a)(Object(d.a)(e))),e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"settingProjectsState",value:function(e){this.setState({projects:e})}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(p,{settingProjectsState:this.settingProjectsState}),s.a.createElement(b,null),s.a.createElement(g,null),this.state.projects?s.a.createElement(w,{settingProjectsState:this.settingProjectsState}):"")}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[13,2,1]]]);
//# sourceMappingURL=main.78c403d5.chunk.js.map