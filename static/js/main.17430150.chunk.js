(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{228:function(e,t,n){e.exports=n(453)},418:function(e,t,n){},452:function(e,t,n){},453:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"persistArticlesInLocalStorage",function(){return Q});var r={};n.r(r),n.d(r,"loadUser",function(){return K}),n.d(r,"createAuthEpic",function(){return V}),n.d(r,"redirectTo",function(){return X});var c={};n.r(c),n.d(c,"createAuthEpic",function(){return Y});var i={};n.r(i),n.d(i,"createAuthEpic",function(){return $});var o={};n.r(o),n.d(o,"default",function(){return ee});var u={};n.r(u),n.d(u,"set",function(){return se}),n.d(u,"get",function(){return le});var s={};n.r(s),n.d(s,"login",function(){return pe}),n.d(s,"loadUser",function(){return me});n(229),n(2);var l=n(0),d=n.n(l),p=n(119),f=n.n(p);n(418),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var m=n(30),b=n(20),h=n(42),E=n(41),O=n(43),g=n(27),j=n(91),A=n(9),v=Object(A.createAsyncAction)("LOAD_USER_REQUEST","LOAD_USER_SUCCESS","LOAD_USER_FAILURE")(),S=Object(A.createAsyncAction)("CREATE_LOGIN_REQUEST","CREATE_LOGIN_SUCCESS","CREATE_LOGOUT_FAILURE")(),y=Object(A.createAsyncAction)("REDIRECT_REQUEST","REDIRECT_SUCCESS","REDIRECT_FAILURE")(),R=n(23),w=n(479),_=n(32),C=n(212),I=R.d,T=Object(R.c)({isLoadingLogin:Object(A.createReducer)(!1).handleAction([S.request],function(e,t){return!0}).handleAction([S.success,S.failure],function(e,t){return!1}),isSignedIn:Object(A.createReducer)(!0).handleAction([S.success,v.success],function(e,t){return!0}).handleAction([S.failure,v.failure],function(e,t){return!1}),error:Object(A.createReducer)(!1).handleAction([S.failure],function(e,t){return!0}).handleAction([S.success],function(e,t){return!1}),token:Object(A.createReducer)("").handleAction([S.success],function(e,t){return t.payload}),user:Object(A.createReducer)({}).handleAction([v.success],function(e,t){return t.payload})}),L=Object(A.createAsyncAction)("REQUEST_FACTCAT_REQUEST","REQUEST_FACTCAT_SUCCESS","REQUEST_FACTCAT_FAILURE")(),U=Object(R.c)({factcats:Object(A.createReducer)([]).handleAction([L.success],function(e,t){return t.payload}),isLoading:Object(A.createReducer)(!1).handleAction([L.request],function(e,t){return!0}).handleAction([L.success,L.failure],function(e,t){return!1})}),k=Object(A.createAsyncAction)("REQUEST_FACTDOG_REQUEST","REQUEST_FACTDOG_SUCCESS","REQUEST_FACTDOG_FAILURE")(),F=Object(R.c)({factdogs:Object(A.createReducer)([]).handleAction([k.success],function(e,t){return t.payload}),isLoading:Object(A.createReducer)(!1).handleAction([k.request],function(e,t){return!0}).handleAction([k.success,k.failure],function(e,t){return!1})}),x=function(e){return Object(R.c)({router:Object(j.b)(e),auth:T,factcat:U,factdog:F})},D=n(105),N=n(480),P=n(470),B=n(471),q=n(472),Q=function(e,t,n){var a=n.localStorage;return e.pipe(Object(P.a)(Object(A.isActionOf)([S.success])),Object(B.a)(function(e){a.set("user",t.value.auth.token)}),Object(q.a)())},G=n(133),z=n(214),M=n(473),J=n(125),W=n(474),H=n(25),K=function(e,t,n){var a=n.api;return e.pipe(Object(P.a)(Object(A.isActionOf)(v.request)),Object(M.a)(function(e){return Object(G.a)(a.login.loadUser()).pipe(Object(J.a)(v.success),Object(W.a)(function(e){return Object(z.a)(v.failure(e))}))}))},V=function(e,t,n){var a=n.api;return e.pipe(Object(P.a)(Object(A.isActionOf)(S.request)),Object(M.a)(function(e){return Object(G.a)(a.login.login(e.payload)).pipe(Object(J.a)(S.success),Object(W.a)(function(e){return Object(z.a)(S.failure(e))}))}))},X=function(e,t,n){n.api;return e.pipe(Object(P.a)(Object(A.isActionOf)([S.success,v.success])),Object(M.a)(function(){return Re.dispatch(Object(H.d)("/main/dashboard")),Object(z.a)(y.success())}))},Y=function(e,t,n){var a=n.api;return e.pipe(Object(P.a)(Object(A.isActionOf)(L.request)),Object(M.a)(function(e){return Object(G.a)(a.FactAnimalApi.getFactCat()).pipe(Object(J.a)(L.success),Object(W.a)(function(e){return Object(z.a)(L.failure(e))}))}))},$=function(e,t,n){var a=n.api;return e.pipe(Object(P.a)(Object(A.isActionOf)(k.request)),Object(M.a)(function(e){return Object(G.a)(a.FactAnimalApi.getFactDog()).pipe(Object(J.a)(k.success),Object(W.a)(function(e){return Object(z.a)(k.failure(e))}))}))},Z=N.a.apply(void 0,Object(D.a)(Object.values(a)).concat(Object(D.a)(Object.values(r)),Object(D.a)(Object.values(c)),Object(D.a)(Object.values(i)))),ee={log:console.log},te=n(56),ne=n.n(te),ae=n(96),re=n(216),ce=n.n(re),ie=(n(428),ce.a.initializeApp({apiKey:"AIzaSyAmcdpIWQi4-lkj2DtnyNhwNDXTTI0HB3M",authDomain:"test-login-d053d.firebaseapp.com",databaseURL:"https://test-login-d053d.firebaseio.com",projectId:"test-login-d053d",storageBucket:"test-login-d053d.appspot.com",messagingSenderId:"862673629889",appId:"1:862673629889:web:8d189cfb80126126f2da40"})),oe=Object({NODE_ENV:"production",PUBLIC_URL:"/login-react",REACT_APP_FIREBASE_APIKEY:"AIzaSyAmcdpIWQi4-lkj2DtnyNhwNDXTTI0HB3M",REACT_APP_FIREBASE_APPID:"1:862673629889:web:8d189cfb80126126f2da40",REACT_APP_FIREBASE_AUTHDOMAIN:"test-login-d053d.firebaseapp.com",REACT_APP_FIREBASE_DATABASEURL:"https://test-login-d053d.firebaseio.com",REACT_APP_FIREBASE_MESSAGINGSENDERID:"862673629889",REACT_APP_FIREBASE_PROJECTID:"test-login-d053d",REACT_APP_FIREBASE_STORAGEBUCKET:"test-login-d053d.appspot.com"}).APP_VERSION||0,ue="LOGIN_APP_v".concat(oe,"::");function se(e,t){if(localStorage)try{var n=JSON.stringify(t);localStorage.setItem(ue+e,n)}catch(a){throw new Error("store serialization failed")}}function le(e){if(localStorage)try{var t=localStorage.getItem(ue+e);if(null==t)return;return JSON.parse(t)}catch(n){throw new Error("store deserialization failed")}}function de(e){var t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),n=decodeURIComponent(atob(t).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(n)}function pe(e){return fe.apply(this,arguments)}function fe(){return(fe=Object(ae.a)(ne.a.mark(function e(t){var n,a;return ne.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ie.auth().signInWithEmailAndPassword(t.name,t.password);case 3:return e.next=5,ie.auth().currentUser;case 5:if(!(n=e.sent)){e.next=11;break}return e.next=9,n.getIdToken();case 9:return a=e.sent,e.abrupt("return",a);case 11:return e.abrupt("return","");case 14:throw e.prev=14,e.t0=e.catch(0),ee.log(e.t0),new Error;case 18:case"end":return e.stop()}},e,null,[[0,14]])}))).apply(this,arguments)}function me(){return be.apply(this,arguments)}function be(){return(be=Object(ae.a)(ne.a.mark(function e(){var t,n;return ne.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=le("user")||"")){e.next=6;break}return n=de(t),e.abrupt("return",{name:n.email,password:""});case 6:throw new Error;case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}var he=n(217),Ee=n.n(he),Oe="https://cat-fact.herokuapp.com/facts/",ge={logger:o,localStorage:u,api:{login:s,FactAnimalApi:new(function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(E.a)(t).call(this,Oe))}return Object(O.a)(t,e),Object(b.a)(t,[{key:"getFactCat",value:function(){var e=Object(ae.a)(ne.a.mark(function e(){var t;return ne.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"random?animal_type=cat&amount=7",e.next=3,this.request.get("random?animal_type=cat&amount=7");case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getFactDog",value:function(){var e=Object(ae.a)(ne.a.mark(function e(){var t;return ne.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"random?animal_type=dog&amount=7",e.next=3,this.request.get("random?animal_type=dog&amount=7");case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(function(){function e(t){Object(m.a)(this,e),this.request=void 0,this.request=Ee.a.create({baseURL:t,timeout:1e4})}return Object(b.a)(e,[{key:"get",value:function(e){return this.request.get(e)}}]),e}()))}},je=Object(w.a)({dependencies:ge}),Ae=Object(_.b)(),ve=[Object(C.a)(Ae),je],Se=I(R.a.apply(void 0,ve)),ye=Object(R.e)(x(Ae),{},Se);je.run(Z);var Re=ye,we=n(24),_e=n(223),Ce=n(82),Ie=n(475),Te=Object(Ie.a)(function(e){return{root:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},form:{boxShadow:"0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",backgroundColor:"white",padding:"2%",borderRadius:"4px",width:"24%",height:"24%",display:"flex",flexDirection:"column",justifyContent:"center"},input:{width:"98%",marginBottom:"15px"},submit:{width:"25%",height:"12%",backgroundColor:"#f7b500",color:"white",border:"0",borderRadius:"3px",marginTop:"10px"},error:{margin:"0",color:"red"}}}),Le=Object(R.d)(Object(Ce.d)({enableReinitialize:!0,mapPropsToValues:function(e){var t=e.user;return{name:t&&t.name||"",password:t&&t.password||""}},handleSubmit:function(e,t){t.props.submit(e),t.setSubmitting(!1)}}))(function(e){var t=e.isSubmitting,n=e.dirty,a=e.isLoading,r=e.error,c=Te();return d.a.createElement("div",{className:c.root},d.a.createElement(Ce.c,{className:c.form},d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"name"},"Login"),d.a.createElement("br",null),d.a.createElement(Ce.b,{className:c.input,name:"name",placeholder:"Email",component:"input",type:"text",required:!0,autoFocus:!0}),d.a.createElement(Ce.a,{name:"name"})),d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"password"},"Password"),d.a.createElement("br",null),d.a.createElement(Ce.b,{className:c.input,name:"password",placeholder:"Password",component:"input",required:!0,type:"password"}),d.a.createElement(Ce.a,{name:"password"})),d.a.createElement("button",{className:c.submit,type:"submit",disabled:!n||t},a?"Loading":"Submit"),d.a.createElement("div",null,r&&d.a.createElement("p",{className:c.error},"There are some issues in the login"))))}),Ue={createLoginUser:function(e){return S.request(Object(_e.a)({},e))}},ke=Object(g.c)(function(e){return{isLoading:e.auth.isLoadingLogin,error:e.auth.error}},Ue)(function(e){var t=e.createLoginUser,n=e.isLoading,a=e.error;return d.a.createElement(Le,{submit:t,isLoading:n,error:a})}),Fe=function(){return d.a.createElement(ke,null)},xe=(n(452),n(54)),De=n(476),Ne=n(482),Pe=n(477),Be=n(478),qe=n(130),Qe=Object(Ie.a)(function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{backgroundColor:"#f7b500",width:"100%",transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},link:{color:"black",marginRight:"10px",fontSize:"1.3rem"},title:{flexGrow:1},appBarSpacer:e.mixins.toolbar}}),Ge=function(e){var t=e.name,n=Qe();return d.a.createElement("div",{className:n.root},d.a.createElement(De.a,null),d.a.createElement(Ne.a,{position:"absolute",color:"inherit",className:Object(xe.a)(n.appBar,n.appBarShift)},d.a.createElement(Pe.a,{className:n.toolbar},d.a.createElement(Be.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:n.title},"Dashboard"),d.a.createElement(qe.a,{className:n.link,to:"/main/dashboard"},"Home"),d.a.createElement(qe.a,{className:n.link,to:"/main/setting"},"Settings"),d.a.createElement("span",null,t))))},ze=function(e){var t=e.children,n=e.name;return d.a.createElement("div",{className:"App"},d.a.createElement("header",null,d.a.createElement(Ge,{name:n})),d.a.createElement("main",{className:"App-main"},t))},Me=n(131),Je=n.n(Me),We=function(e){return e.factcat.factcats},He=function(e){return e.factcat.isLoading},Ke=n(222),Ve=n.n(Ke),Xe=d.a.memo(function(e){var t=e.factanimal,n=e.header;return d.a.createElement(d.a.Fragment,null,d.a.createElement("h3",null,n),d.a.createElement("p",null,t.text))},Ve.a),Ye=function(e){var t=e.factcat;return d.a.createElement("div",{className:"container-list"},d.a.createElement("h3",null,"List of fact about cats"),d.a.createElement("div",{style:{width:"50vw"}},t.map(function(e,t){return d.a.createElement(Xe,{key:"factcatitem-".concat(t),factanimal:e,header:"Fact ".concat(t+1,":")})})))},$e={getFactCat:function(){return L.request()}},Ze=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.props.getFactCat()}},{key:"render",value:function(){var e=this.props,t=e.factcat;return e.isLoading?d.a.createElement(Je.a,{color:"#f7b500",height:200,width:200}):d.a.createElement(Ye,{factcat:t})}}]),t}(l.Component),et=Object(g.c)(function(e){return{factcat:We(e),isLoading:He(e)}},$e)(Ze),tt=function(){return d.a.createElement(et,null)},nt=function(e){return e.factdog.factdogs},at=function(e){return e.factdog.isLoading},rt=function(e){var t=e.factcat;return d.a.createElement("div",{className:"container-list"},d.a.createElement("h3",null,"List of fact about dogs"),d.a.createElement("div",{style:{width:"50vw"}},t.map(function(e,t){return d.a.createElement(Xe,{key:"factdogitem-".concat(t),factanimal:e,header:"Fact Dog ".concat(t+1,":")})})))},ct={getDogFacts:function(){return k.request()}},it=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.props.getDogFacts()}},{key:"render",value:function(){var e=this.props,t=e.factdogs;return e.isLoading&&t.length>0?d.a.createElement(Je.a,{color:"#f7b500",height:200,width:200}):d.a.createElement(rt,{factcat:t})}}]),t}(l.Component),ot=Object(g.c)(function(e){return{factdogs:nt(e),isLoading:at(e),getDogFacts:function(){return k.request()}}},ct)(it),ut=function(){return d.a.createElement(ot,null)},st=function(e){return e.auth.user},lt=function(e){return e.auth.isSignedIn},dt={home:function(){return"/"},main:function(){return"/main/"},dashboard:function(){return"/main/dashboard"},setting:function(){return"/main/setting"}},pt=function(e){for(var t=dt[e],n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];return t.apply(void 0,a)},ft=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){Re.dispatch(v.request())}},{key:"render",value:function(){var e=this.props.user;return d.a.createElement(ze,{name:e.name},d.a.createElement(we.b,{path:pt("dashboard"),render:tt}),d.a.createElement(we.b,{path:pt("setting"),render:ut}))}}]),t}(l.Component),mt=Object(g.c)(function(e){return{user:st(e)}},{})(ft),bt=function(e){return e.isSignedIn?d.a.createElement(we.b,{path:e.path,component:e.component}):d.a.createElement(we.a,{to:"/"})},ht=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props.isSignedIn;return d.a.createElement(d.a.Fragment,null,d.a.createElement(we.b,{exact:!0,path:pt("home"),render:Fe}),d.a.createElement(bt,{path:pt("main"),isSignedIn:e,component:mt}))}}]),t}(l.Component),Et=Object(g.c)(function(e){return{user:st(e),isSignedIn:lt(e)}},{})(ht),Ot=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){Re.dispatch(v.request())}},{key:"render",value:function(){return d.a.createElement(g.a,{store:Re},d.a.createElement(j.a,{history:Ae},d.a.createElement(Et,null)))}}]),t}(l.Component);f.a.render(d.a.createElement(d.a.StrictMode,null,d.a.createElement(Ot,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[228,1,2]]]);
//# sourceMappingURL=main.17430150.chunk.js.map