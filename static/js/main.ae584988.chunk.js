(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{219:function(e,t,n){e.exports=n(446)},409:function(e,t,n){},446:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"persistArticlesInLocalStorage",function(){return G});var r={};n.r(r),n.d(r,"loadUser",function(){return K}),n.d(r,"createAuthEpic",function(){return X}),n.d(r,"redirectTo",function(){return Y});var c={};n.r(c),n.d(c,"createAuthEpic",function(){return $});var i={};n.r(i),n.d(i,"createAuthEpic",function(){return Z});var o={};n.r(o),n.d(o,"default",function(){return te});var u={};n.r(u),n.d(u,"set",function(){return le}),n.d(u,"get",function(){return de});var s={};n.r(s),n.d(s,"login",function(){return pe}),n.d(s,"loadUser",function(){return me});var l={};n.r(l),n.d(l,"info",function(){return Ae}),n.d(l,"warn",function(){return we}),n.d(l,"error",function(){return ye}),n.d(l,"success",function(){return Se});n(220),n(3);var d=n(0),f=n.n(d),p=n(71),b=n.n(p);n(409),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var m=n(33),h=n(21),O=n(44),g=n(42),j=n(45),E=n(28),v=n(9),A=Object(v.createAsyncAction)("LOAD_USER_REQUEST","LOAD_USER_SUCCESS","LOAD_USER_FAILURE")(),w=Object(v.createAsyncAction)("CREATE_LOGIN_REQUEST","CREATE_LOGIN_SUCCESS","CREATE_LOGOUT_FAILURE")(),y=Object(v.createAsyncAction)("REDIRECT_REQUEST","REDIRECT_SUCCESS","REDIRECT_FAILURE")(),S=n(84),R=n(19),C=n(463),_=n(48),L=n(205),U=R.d,T=Object(R.c)({isLoadingLogin:Object(v.createReducer)(!1).handleAction([w.request],function(e,t){return!0}).handleAction([w.success,w.failure],function(e,t){return!1}),isSignedIn:Object(v.createReducer)(!0).handleAction([w.success,A.success],function(e,t){return!0}).handleAction([w.failure,A.failure],function(e,t){return!1}),error:Object(v.createReducer)(!1).handleAction([w.failure],function(e,t){return!0}).handleAction([w.success],function(e,t){return!1}),token:Object(v.createReducer)("").handleAction([w.success],function(e,t){return t.payload}),user:Object(v.createReducer)({}).handleAction([A.success],function(e,t){return t.payload})}),k=Object(v.createAsyncAction)("REQUEST_FACTCAT_REQUEST","REQUEST_FACTCAT_SUCCESS","REQUEST_FACTCAT_FAILURE")(),I=Object(R.c)({factcats:Object(v.createReducer)([]).handleAction([k.success],function(e,t){return t.payload}),isLoading:Object(v.createReducer)(!1).handleAction([k.request],function(e,t){return!0}).handleAction([k.success,k.failure],function(e,t){return!1})}),F=Object(v.createAsyncAction)("REQUEST_FACTDOG_REQUEST","REQUEST_FACTDOG_SUCCESS","REQUEST_FACTDOG_FAILURE")(),x=Object(R.c)({factdogs:Object(v.createReducer)([]).handleAction([F.success],function(e,t){return t.payload}),isLoading:Object(v.createReducer)(!1).handleAction([F.request],function(e,t){return!0}).handleAction([F.success,F.failure],function(e,t){return!1})}),D=function(e){return Object(R.c)({router:Object(S.b)(e),auth:T,factcat:I,factdog:x})},q=n(99),N=n(464),Q=n(457),P=n(458),B=n(459),G=function(e,t,n){var a=n.localStorage;return e.pipe(Object(Q.a)(Object(v.isActionOf)([w.success])),Object(P.a)(function(e){a.set("user",t.value.auth.token)}),Object(B.a)())},z=n(125),J=n(207),M=n(460),W=n(119),V=n(461),H=n(20),K=function(e,t,n){var a=n.api;return e.pipe(Object(Q.a)(Object(v.isActionOf)(A.request)),Object(M.a)(function(e){return Object(z.a)(a.login.loadUser()).pipe(Object(W.a)(A.success),Object(V.a)(function(e){return Object(J.a)(A.failure(e))}))}))},X=function(e,t,n){var a=n.api;return e.pipe(Object(Q.a)(Object(v.isActionOf)(w.request)),Object(M.a)(function(e){return Object(z.a)(a.login.login(e.payload)).pipe(Object(W.a)(w.success),Object(V.a)(function(e){return Object(J.a)(w.failure(e))}))}))},Y=function(e,t,n){n.api;return e.pipe(Object(Q.a)(Object(v.isActionOf)(w.success)),Object(M.a)(function(){return ke.dispatch(Object(H.d)("/login-react/main/dashboard")),Object(J.a)(y.success())}))},$=function(e,t,n){var a=n.api;return e.pipe(Object(Q.a)(Object(v.isActionOf)(k.request)),Object(M.a)(function(e){return Object(z.a)(a.FactAnimalApi.getFactCat()).pipe(Object(W.a)(k.success),Object(V.a)(function(e){return Object(J.a)(k.failure(e))}))}))},Z=function(e,t,n){var a=n.api;return e.pipe(Object(Q.a)(Object(v.isActionOf)(F.request)),Object(M.a)(function(e){return Object(z.a)(a.FactAnimalApi.getFactDog()).pipe(Object(W.a)(F.success),Object(V.a)(function(e){return Object(J.a)(F.failure(e))}))}))},ee=N.a.apply(void 0,Object(q.a)(Object.values(a)).concat(Object(q.a)(Object.values(r)),Object(q.a)(Object.values(c)),Object(q.a)(Object.values(i)))),te={log:console.log},ne=n(47),ae=n.n(ne),re=n(89),ce=n(209),ie=n.n(ce),oe=(n(419),ie.a.initializeApp({apiKey:"AIzaSyAmcdpIWQi4-lkj2DtnyNhwNDXTTI0HB3M",authDomain:"test-login-d053d.firebaseapp.com",databaseURL:"https://test-login-d053d.firebaseio.com",projectId:"test-login-d053d",storageBucket:"test-login-d053d.appspot.com",messagingSenderId:"862673629889",appId:"1:862673629889:web:8d189cfb80126126f2da40"})),ue=Object({NODE_ENV:"production",PUBLIC_URL:"/login-react"}).APP_VERSION||0,se="MY_APP_v".concat(ue,"::");function le(e,t){if(localStorage)try{var n=JSON.stringify(t);localStorage.setItem(se+e,n)}catch(a){throw new Error("store serialization failed")}}function de(e){if(localStorage)try{var t=localStorage.getItem(se+e);if(null==t)return;return JSON.parse(t)}catch(n){throw new Error("store deserialization failed")}}function fe(e){var t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),n=decodeURIComponent(atob(t).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(n)}function pe(e){return be.apply(this,arguments)}function be(){return(be=Object(re.a)(ae.a.mark(function e(t){var n,a;return ae.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe.auth().signInWithEmailAndPassword(t.name,t.password);case 3:return e.next=5,oe.auth().currentUser;case 5:if(!(n=e.sent)){e.next=11;break}return e.next=9,n.getIdToken();case 9:return a=e.sent,e.abrupt("return",a);case 11:return e.abrupt("return","");case 14:throw e.prev=14,e.t0=e.catch(0),new Error;case 17:case"end":return e.stop()}},e,null,[[0,14]])}))).apply(this,arguments)}function me(){return he.apply(this,arguments)}function he(){return(he=Object(re.a)(ae.a.mark(function e(){var t,n;return ae.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=de("user")||"")){e.next=6;break}return n=fe(t),e.abrupt("return",{name:n.email,password:""});case 6:throw new Error;case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}var Oe=n(210),ge=n.n(Oe),je="https://cat-fact.herokuapp.com/facts/",Ee=new(function(e){function t(){return Object(m.a)(this,t),Object(O.a)(this,Object(g.a)(t).call(this,je))}return Object(j.a)(t,e),Object(h.a)(t,[{key:"getFactCat",value:function(){var e=Object(re.a)(ae.a.mark(function e(){var t;return ae.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"random?animal_type=cat&amount=7",e.next=3,this.request.get("random?animal_type=cat&amount=7");case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getFactDog",value:function(){var e=Object(re.a)(ae.a.mark(function e(){var t;return ae.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"random?animal_type=dog&amount=7",e.next=3,this.request.get("random?animal_type=dog&amount=7");case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(function(){function e(t){Object(m.a)(this,e),this.request=void 0,this.request=ge.a.create({baseURL:t,timeout:1e4})}return Object(h.a)(e,[{key:"get",value:function(e){return this.request.get(e)}}]),e}())),ve=(n(440),n(90));ve.a.configure();var Ae=ve.a.info,we=ve.a.warn,ye=ve.a.error,Se=ve.a.success,Re={logger:o,localStorage:u,toast:l,api:{login:s,FactAnimalApi:Ee}},Ce=Object(C.a)({dependencies:Re}),_e=Object(_.a)(),Le=[Object(L.a)(_e),Ce],Ue=U(R.a.apply(void 0,Le)),Te=Object(R.e)(D(_e),{},Ue);Ce.run(ee);var ke=Te,Ie=n(60),Fe=n(217),xe=n(75),De=n(462),qe=Object(De.a)(function(e){return{root:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},form:{boxShadow:"0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",backgroundColor:"white",padding:"2%",borderRadius:"4px",width:"24%",height:"24%",display:"flex",flexDirection:"column",justifyContent:"center"},input:{width:"98%",marginBottom:"15px"},submit:{width:"25%",height:"12%",backgroundColor:"#f7b500",color:"white",border:"0",borderRadius:"3px",marginTop:"10px"},error:{margin:"0",color:"red"}}}),Ne={createLoginUser:function(e){return w.request(Object(Fe.a)({},e))}},Qe=Object(R.d)(Object(E.c)(function(e){return{isLoading:e.auth.isLoadingLogin,error:e.auth.error}},Ne),Object(xe.d)({enableReinitialize:!0,mapPropsToValues:function(e){var t=e.user;return{name:t&&t.name||"",password:t&&t.password||""}},handleSubmit:function(e,t){t.props.createLoginUser(e),t.setSubmitting(!1)}}))(function(e){var t=e.isSubmitting,n=e.dirty,a=e.isLoading,r=e.error,c=qe();return f.a.createElement("div",{className:c.root},f.a.createElement(xe.c,{className:c.form},f.a.createElement("div",null,f.a.createElement("label",{htmlFor:"name"},"Login"),f.a.createElement("br",null),f.a.createElement(xe.b,{className:c.input,name:"name",placeholder:"Email",component:"input",type:"text",required:!0,autoFocus:!0}),f.a.createElement(xe.a,{name:"name"})),f.a.createElement("div",null,f.a.createElement("label",{htmlFor:"password"},"Password"),f.a.createElement("br",null),f.a.createElement(xe.b,{className:c.input,name:"password",placeholder:"Password",component:"input",required:!0,type:"password"}),f.a.createElement(xe.a,{name:"password"})),f.a.createElement("button",{className:c.submit,type:"submit",disabled:!n||t},a?"Loading":"Submit"),f.a.createElement("div",null,r&&f.a.createElement("p",{className:c.error},"There are some issues in the login"))))}),Pe=function(){return f.a.createElement(Qe,null)},Be={home:function(){return"/login-react"},main:function(){return"/login-react/main/"},dashboard:function(){return"/login-react/main/dashboard"},setting:function(){return"/login-react/main/setting"}},Ge=function(e){for(var t=Be[e],n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];return t.apply(void 0,a)},ze=function(e){return e.auth.user},Je=function(e){return e.auth.isSignedIn},Me=n(124),We=n.n(Me),Ve=function(e){return e.factdog.factdogs},He=function(e){return e.factdog.isLoading},Ke=n(216),Xe=n.n(Ke),Ye=f.a.memo(function(e){var t=e.factanimal,n=e.header;return f.a.createElement("div",null,f.a.createElement("h3",null,n),f.a.createElement("p",null,t.text))},Xe.a),$e=function(e){var t=e.factcat;return f.a.createElement("div",null,f.a.createElement("h3",null,"List of fact dogs"),f.a.createElement("div",{style:{width:"50vw"}},t.map(function(e,t){return f.a.createElement(Ye,{key:"factdogitem-".concat(t),factanimal:e,header:"Fact Dog ".concat(t+1,":")})})))},Ze={getDogFacts:function(){return F.request()}},et=function(e){function t(){return Object(m.a)(this,t),Object(O.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.getDogFacts()}},{key:"render",value:function(){var e=this.props,t=e.factdogs,n=e.isLoading;return f.a.createElement("div",null,n&&t.length>0?f.a.createElement(We.a,{color:"spin",height:40,width:40}):f.a.createElement($e,{factcat:t}))}}]),t}(d.Component),tt=Object(E.c)(function(e){return{factdogs:Ve(e),isLoading:He(e),getDogFacts:function(){return F.request()}}},Ze)(et),nt=function(){return f.a.createElement(tt,null)},at=function(e){return e.factcat.factcats},rt=function(e){return e.factcat.isLoading},ct=function(e){var t=e.factcat;return f.a.createElement("div",null,f.a.createElement("h3",null,"List of fact cats"),f.a.createElement("div",{style:{width:"50vw"}},t.map(function(e,t){return f.a.createElement(Ye,{key:"factcatitem-".concat(t),factanimal:e,header:"Fact ".concat(t+1,":")})})))},it={getFactCat:function(){return k.request()}},ot=function(e){function t(){return Object(m.a)(this,t),Object(O.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.getFactCat()}},{key:"render",value:function(){var e=this.props,t=e.factcat,n=e.isLoading;return f.a.createElement("div",null,n?f.a.createElement(We.a,{color:"spin",height:40,width:40}):f.a.createElement(ct,{factcat:t}))}}]),t}(d.Component),ut=Object(E.c)(function(e){return{factcat:at(e),isLoading:rt(e)}},it)(ot),st=function(){return f.a.createElement(ut,null)},lt=function(e){function t(){return Object(m.a)(this,t),Object(O.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return f.a.createElement("div",null,f.a.createElement(Ie.a,{path:Ge("dashboard"),render:st}),f.a.createElement(Ie.a,{path:Ge("setting"),render:nt}),f.a.createElement(Ie.a,{exact:!0,path:Ge("home"),render:Pe}))}}]),t}(d.Component),dt=Object(E.c)(function(e){return{user:ze(e),isSignedIn:Je(e)}},{})(lt),ft=function(e){function t(){return Object(m.a)(this,t),Object(O.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){ke.dispatch(A.request())}},{key:"render",value:function(){return f.a.createElement(E.a,{store:ke},f.a.createElement(S.a,{history:_e},f.a.createElement(dt,null)))}}]),t}(d.Component);b.a.render(f.a.createElement(ft,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[219,1,2]]]);
//# sourceMappingURL=main.ae584988.chunk.js.map