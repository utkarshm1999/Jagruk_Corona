(this["webpackJsonpreact-pwa"]=this["webpackJsonpreact-pwa"]||[]).push([[0],{141:function(e,t,n){e.exports=n(424)},147:function(e,t,n){},148:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},149:function(e,t,n){},424:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(83),r=n(10),l=n.n(r),s=(n(147),n(148),n(149),n(52));n(150);var c=function(){if(window.sessionStorage.login&&"true"==window.sessionStorage.login){fetch("https://demo-stormbreaker.herokuapp.com/users/is_exist",{method:"POST",firebase_id:window.sessionStorage.uid,body:JSON.stringify({firebase_id:window.sessionStorage.uid})}).then((function(e){return e.json()})).then((function(e){1==e.status?window.sessionStorage.uuid=e.user_id:(console.log("registering"),fetch("https://demo-stormbreaker.herokuapp.com/users/register",{method:"POST",firebase_id:window.sessionStorage.uid,body:JSON.stringify({firebase_id:window.sessionStorage.uid,first_name:window.sessionStorage.firstname,last_name:window.sessionStorage.secondname,email:window.sessionStorage.email,device_id:"1"})}).then((function(e){return e.json()})).then((function(e){window.sessionStorage.uuid=e.user_id}),(function(e){window.location.href="/home"})))}),(function(e){}));return i.a.createElement("div",{id:"page2"},i.a.createElement("div",{id:"page2-1"},i.a.createElement("p",{class:"page2-1-1"},"Help the nation in",i.a.createElement("br",null)," maintaining social",i.a.createElement("br",null),"distancing. If you find",i.a.createElement("br",null)," any violation against ",i.a.createElement("br",null),"the guidelines, report ",i.a.createElement("br",null)," and help us ",i.a.createElement("br",null)," take it forward."),i.a.createElement("button",{class:"page2-1-2",type:"button",onClick:function(){window.location.href="/form"}},"Inform"),i.a.createElement("p",{class:"page2-1-3"},"We will keep your identity anonymous all the time.")))}window.location.href="/home"};var u=function(){if(!window.sessionStorage.login||"true"!=window.sessionStorage.login)return i.a.createElement("div",{class:"page1"},i.a.createElement("div",{class:"intro"},i.a.createElement("p",{class:"intro-1"},"Let's make ",i.a.createElement("br",null)," India Corona free"),i.a.createElement("p",{class:"intro-2"},"Inform us and be a ",i.a.createElement("br",null)," responsible citizen"),i.a.createElement("p",{class:"intro-3"},"Help enforce social distancing ",i.a.createElement("br",null),"and hygiene in your locality.")),i.a.createElement("div",{class:"log"},i.a.createElement(s.GoogleLogin,{clientId:"916995490002-h4438ccl1o2hth8nk1eipja9ijvo79g6.apps.googleusercontent.com",render:function(e){return i.a.createElement("button",{class:"but",onClick:e.onClick,disabled:e.disabled},"Login with Google",i.a.createElement("img",{id:"google_logo",src:"icon/Google.png",alt:"noimage"}))},buttonText:"Login",onSuccess:function(e){window.sessionStorage.firstname=e.profileObj.givenName,window.sessionStorage.secondname=e.profileObj.familyName,window.sessionStorage.email=e.profileObj.email,window.sessionStorage.login="true",window.sessionStorage.uid=e.profileObj.googleId,window.location.href="/report"},onFailure:function(e){},cookiePolicy:"single_host_origin"}),i.a.createElement("br",null)));window.location.href="/report"},d=n(84),m=n(133),p=n(134),g=n(43),h=n(139),f=n(140),w=n(135),b=n.n(w),E=n(136),v=n.n(E);var y=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={state:"",address:"",city:"",pin:"",number:"",title:"",desc:"",img:null,isActive:!1},a.handleChange=a.handleChange.bind(Object(g.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(g.a)(a)),a}return Object(p.a)(n,[{key:"taketoreport",value:function(e){window.location.href="/report"}},{key:"handleChange",value:function(e,t){switch(t){case 1:this.setState({img:e});break;case 2:this.setState({address:e});break;case 3:this.setState({city:e});break;case 4:this.setState({state:e});break;case 5:this.setState({pin:e});break;case 6:this.setState({number:e});break;case 7:this.setState({title:e});break;case 8:this.setState({desc:e})}}},{key:"handleSubmit",value:function(e){var t=this,n=new FormData;n.append("user_id",window.sessionStorage.uuid),n.append("title","title"),n.append("address",this.state.address),n.append("city",this.state.city),n.append("pincode",this.state.pin),n.append("state",this.state.state),n.append("country",this.state.desc),n.append("image",this.state.img),this.setState({isActive:!0}),fetch("https://demo-stormbreaker.herokuapp.com/reports/register",{method:"POST",body:n}).then((function(e){return e.json()})).then((function(e){window.location.href="/submit",t.setState({isActive:!0})}),(function(e){})),e.preventDefault()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{class:"page3"},i.a.createElement(b.a,{active:this.state.isActive,spinner:i.a.createElement(v.a,null),styles:{overlay:function(e){return Object(d.a)({},e,{background:"rgba(255, 0, 0, 0)"})},wrapper:function(e){return Object(d.a)({},e,{background:"rgba(255, 0, 0, 0)"})}},text:"Loading your content...",className:"page3"},i.a.createElement("input",{type:"image",onClick:this.taketoreport,class:"page3-1",src:"icon/Vector.png"}),i.a.createElement("div",{class:"page3-2"},i.a.createElement("p",{class:"page3-2-1"}," Inform  "),i.a.createElement("form",{name:"form-report",action:"/form",onSubmit:this.handleSubmit},i.a.createElement("label",{for:"picture",class:"upload"},"Upload a Picture of the event"),i.a.createElement("br",null),i.a.createElement("input",{type:"file",class:"img",src:"icon/Group 7.png",name:"picture",onChange:function(t){return e.handleChange(t.target.files[0],1)}}),i.a.createElement("div",{class:"after-upload"},i.a.createElement("button",{class:"reupload",type:"button",onclick:"uploadagain()"},"Reupload"),i.a.createElement("img",{id:"upload-img",src:"icon/VES_Awards_89_cropped 1.png",alt:"noimage"})),i.a.createElement("hr",{class:"line"}),i.a.createElement("label",{for:"Add",class:"page3-2-2"},"Address of the event"),i.a.createElement("br",null),i.a.createElement("input",{type:"text",class:"add page3-2-2-2",name:"add",required:!0,value:this.state.address,onChange:function(t){return e.handleChange(t.target.value,2)}}),i.a.createElement("br",null),i.a.createElement("label",{for:"City",class:"page3-2-2"},"City"),i.a.createElement("label",{for:"State",class:"page3-2-2-1"},"State"),i.a.createElement("label",{for:"Pin",class:"page3-2-2-1"},"Pin"),i.a.createElement("br",null),i.a.createElement("input",{type:"text",class:"City page3-2-2-2",name:"City",required:!0,value:this.state.city,onChange:function(t){return e.handleChange(t.target.value,3)}}),i.a.createElement("input",{type:"text",class:"State page3-2-2-2",name:"State",required:!0,value:this.state.state,onChange:function(t){return e.handleChange(t.target.value,4)}}),i.a.createElement("input",{type:"number",class:"pin page3-2-2-2",name:"Pin",required:!0,value:this.state.pin,onChange:function(t){return e.handleChange(t.target.value,5)}}),i.a.createElement("br",null),i.a.createElement("label",{for:"Cont",class:"page3-2-2"},"Contact Number(Only for verification)"),i.a.createElement("br",null),i.a.createElement("input",{type:"number",class:"add page3-2-2-2",name:"Cont",required:!0,value:this.state.number,onChange:function(t){return e.handleChange(t.target.value,6)}}),i.a.createElement("br",null),i.a.createElement("label",{for:"Details",class:"page3-2-2"},"Please provide a short description"),i.a.createElement("br",null),i.a.createElement("input",{type:"text",class:"Details page3-2-2-2",name:"Details",placeholder:"eg: Overcrowding at the grocery store",required:!0,value:this.state.desc,onChange:function(t){return e.handleChange(t.target.value,8)}}),i.a.createElement("br",null),i.a.createElement("input",{type:"submit",class:"submit",value:"Submit"})))))}}]),n}(i.a.Component),S=function(){if(window.sessionStorage.login&&"true"==window.sessionStorage.login)return i.a.createElement(y,null);window.location.href="/home"};var k=function(){if(window.sessionStorage.login&&"true"==window.sessionStorage.login)return i.a.createElement("div",{class:"last"},i.a.createElement("img",{class:"last-1",src:"icon/rush-18 1.png",alt:"noimage"}),i.a.createElement("p",{class:"last-2"},"Thank you ",i.a.createElement("br",null)," for your help"),i.a.createElement("p",{class:"last-3"},"Our volunteers will verify",i.a.createElement("br",null)," the incident and inform the",i.a.createElement("br",null)," authorities. "),i.a.createElement("button",{class:"last-4",type:"button",onClick:function(){window.location.href="/form"}},"Report Another"),i.a.createElement("button",{class:"last-5",type:"button",onClick:function(){window.location.href="/report"}},"Home"));window.location.href="/home"},C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var j=n(53),_=n(26);o.a.initialize("UA-162864526-1"),o.a.pageview(window.location.pathname+window.location.search),l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(j.a,null,i.a.createElement(_.c,null,i.a.createElement(_.a,{path:"/home"},i.a.createElement(u,null)),i.a.createElement(_.a,{path:"/report"},i.a.createElement(c,null)),i.a.createElement(_.a,{path:"/form"},i.a.createElement(S,null)),i.a.createElement(_.a,{path:"/submit"},i.a.createElement(k,null)),i.a.createElement(_.a,{path:"/"},i.a.createElement(u,null))))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");C?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):O(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):O(t,e)}))}}()}},[[141,1,2]]]);
//# sourceMappingURL=main.90fef2e9.chunk.js.map