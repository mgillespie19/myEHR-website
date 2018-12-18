(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){},103:function(e,t,a){},119:function(e,t,a){},121:function(e,t,a){},123:function(e,t,a){},125:function(e,t,a){},127:function(e,t,a){},129:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(24),c=a.n(o),i=(a(47),a(3)),l=a(4),s=a(6),u=a(5),m=a(7),d=a(41),h=(a(49),a(37)),f=a.n(h),p=(a(57),a(59),a(61),function(e){var t="hamburgerMenu";return e.showSideDrawer&&(t="hamburgerMenu close"),r.a.createElement("div",{className:t,id:"hamburger",onClick:e.click},r.a.createElement("div",{className:"hamburgerButton"},r.a.createElement("span",{className:"line line1"}),r.a.createElement("span",{className:"line line2"}),r.a.createElement("span",{className:"line line3"})))}),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={toggleSideDrawer:e.toggleSideDrawer,showSideDrawer:!1,scrollToAbout:e.scrollToAbout},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({showSideDrawer:e.showSideDrawer})}},{key:"render",value:function(){return r.a.createElement("header",{className:"navbar"},r.a.createElement("nav",{className:"navbar-nav"},r.a.createElement("div",{className:"hamburger-menu"},r.a.createElement(p,{click:this.state.toggleSideDrawer,showSideDrawer:this.state.showSideDrawer})),r.a.createElement("div",{className:"logo"},r.a.createElement("a",{href:"./"},"myEHR")),r.a.createElement("div",{className:"nav-spacing"}),r.a.createElement("div",{className:"navbar-items"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"./"}," Home ")),r.a.createElement("li",{onClick:this.state.scrollToAbout},r.a.createElement("a",{href:"./about/"},"About")),r.a.createElement("li",null,r.a.createElement("a",{href:"./patient/"},"Patient")),r.a.createElement("li",null,r.a.createElement("a",{href:"./provider/"},"Provider")),r.a.createElement("li",null,r.a.createElement("a",{href:"./account/"},"Account"))))))}}]),t}(n.Component),b=(a(63),function(e){var t="side-drawer";return e.showSideDrawer&&(t="side-drawer open"),r.a.createElement("nav",{className:t},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"./"},"Home")),r.a.createElement("li",{onClick:e.scrollToAbout},r.a.createElement("a",{href:"./about/"},"About")),r.a.createElement("li",null,r.a.createElement("a",{href:"./patient/"},"Patient")),r.a.createElement("li",null,r.a.createElement("a",{href:"./provider/"},"Provider")),r.a.createElement("li",null,r.a.createElement("a",{href:"./account/"},"Account")),r.a.createElement("div",{className:"side-drawer-spacing"})))}),E=(a(65),function(e){return r.a.createElement("div",{className:"backdrop",onClick:e.click})}),g=(a(67),function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"padding"},r.a.createElement("p",null,"Copyright @2018 myEHR LLC. All rights reserved. For more information please contact info@myEHR.com")))}),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).toggleSideDrawer=function(){a.setState(function(e){return{sideDrawerOpen:!e.sideDrawerOpen}})},a.closeSideDrawer=function(){a.setState({sideDrawerOpen:!1})},a.scrollToAbout=function(){a.closeSideDrawer(),f()(a.aboutRef.current,{align:"top",offset:-84,duration:1e3})},a.state={sideDrawerOpen:!1},a.aboutRef=a.props.aboutRef,a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e;return this.state.sideDrawerOpen&&(e=r.a.createElement(E,{click:this.closeSideDrawer})),r.a.createElement("div",{className:"app"},r.a.createElement(v,{toggleSideDrawer:this.toggleSideDrawer,scrollToAbout:this.scrollToAbout,showSideDrawer:this.state.sideDrawerOpen}),r.a.createElement(b,{showSideDrawer:this.state.sideDrawerOpen,scrollToAbout:this.scrollToAbout,toggleSideDrawer:this.toggleSideDrawer}),e,r.a.createElement("div",{className:"container"},this.props.children),r.a.createElement(g,null))}}]),t}(n.Component),y=(a(69),a(38)),j=(a(91),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).aboutRef=e.aboutRef,a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"about"},r.a.createElement("h1",{ref:this.aboutRef},"About"),r.a.createElement("p",null,"Our goal is to improve patient outcome within the public health sector by democratizing health records with a secure system for everyone. Electronic Health Records (EHR) are a necessity for securely giving patients the care they need, and thus doctors the information they require to do so, but there are currently around 950 vendors providing over 1,700 unique certified EHR products. Because of the siloed nature of these record systems, the process of transferring records involves requesting an EHR, having to fax the EHR to the healthcare provider, manually print it, verify, fax to the requestor, and then scan (or transcribe) the information into a local EHR. This system is highly inefficient and can lead to records being incorrectly transferred. We hope to significantly minimize inefficiency and possibility of data corruption by offering a new system that uses blockchain to securely store and share patient health records. "),r.a.createElement("div",{className:"process"},r.a.createElement("img",{alt:"Blockchain Process",src:a(93)})),r.a.createElement("h2",null,"Background"),r.a.createElement("p",null,"The transition to Electronic Medical Records (EMRs) has been a significant issue in the healthcare system for a few years. A large amount of sensitive data generated by healthcare creates a legal impetus for secure storage that first led doctors offices and health networks to turn to third-party offsite servers for data storage."),r.a.createElement("p",null,"The healthcare industry from their EHR system and they mail or fax them to the new doctor\u2019s office. Finally, the new doctor\u2019s office takes, since the inception of EMR, has produced more than 1,700 unique Electronic Medical Record systems, with more than 90% of hospitals and more than 80% of private practice using a system of some kind to store their data. These EMR providers store clients\u2019 information in large data warehouses which often are not designed for interoperability, in many cases creating data \u2018silos\u2019 between which communication is difficult and sometimes impossible."),r.a.createElement("p",null,"In cases where patients move, switch doctors, see a doctor for the first time, or visit a doctor who is unaffiliated with their usual network, medical records have to be transferred between offices. For many systems, this process necessitates three steps before records can be shared. First, the patient must tell the original doctor\u2019s office to send the records to the new doctors\u2019 office. The original office then prints the medical records of the patient in question the physical copies of records and transcribes them by either scanning them or manually entering data into their EHR system."),r.a.createElement("p",null,'This process is not only arduous but prone to error; Anna Maria Barry-Jester, a public health reporter, described EMRs as "a bunch of records with bits of information that aren\'t linked together electronically". Lack of data storage standardization from system to system makes the aforementioned process unnecessarily complicated. As a result, more than 60% of EMR-related claims reference use-error between systems as the reason for the malpractice.'),r.a.createElement("p",null,"Furthermore, if a patient wants to have his or her own medical records, the only option is to request the printed copies mailed to one\u2019s home. The patient, notably, never owns their data in any meaningful way. Labs that perform testing on patient samples also have no simple way of communicating their results because the data is kept in several places. They must simply return a physical copy of their results to the doctor\u2019s office that requested it and office staff must then update their EMR system with the results."),r.a.createElement("p",null,"Finally, existing EMR solutions collect the bulk of their revenue directly from doctors offices, so they have an impetus not to make it too automatic to export data to competitors\u2019 systems. These shortcomings have led to the need for a next-generational EMR system. One in which patients themselves maintain control of the most up-to-date version of their own data, and act as the key to deciding who gets access to what. The way we\u2019ve chosen to implement this is with a publicly available database, enabled by blockchain technology."),r.a.createElement("p",null,"Our group endeavors to decrease malpractice as a result of EMR data transfer by making the data transfer process easier and making patient data more accessible."),r.a.createElement("h2",null,"Download the Mobile App"),r.a.createElement("p",null,"Our mobile app is the client-facing portion of this system, where users can login and securely fetch, view, and edit patient records, either only their own if they are a patient, or with escalated privileges if they are a clinician."),r.a.createElement("div",{className:"img-row"},r.a.createElement("img",{alt:"App Screen Shot",src:a(94)}),r.a.createElement("img",{alt:"App Screen Shot",src:a(95)})),r.a.createElement("p",null,"Currently the app is avaiable on the Apple App Store and will be coming to Google Play Store soon."),r.a.createElement("div",{className:"app-store"},r.a.createElement("a",{href:"https://www.apple.com/ios/app-store/"},r.a.createElement("img",{id:"apple",alt:"Apple App Store",src:a(96)})),r.a.createElement("a",{href:"https://play.google.com/store/apps/"},r.a.createElement("img",{id:"google",alt:"Google Play Store",src:a(97)}))))}}]),t}(n.Component)),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={showMainContent:!1},a.aboutRef=e.aboutRef,a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState(function(e){return{showMainContent:!0}})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"background"},r.a.createElement("div",{className:"home"},r.a.createElement(y.Animated,{animationIn:"fadeInUp",animationOut:"fadeOut",isVisible:!0},r.a.createElement("img",{alt:"logo",src:a(98)}),r.a.createElement("div",{className:"mission-statement"},r.a.createElement("p",null,r.a.createElement("strong",null,"Mission Statement:"),' "Our goal is to improve patient outcome within the public health sector by democratizing health records with a secure system for everyone."'))))),r.a.createElement(j,{aboutRef:this.aboutRef}))}}]),t}(n.Component),A=(a(99),a(101),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"account"},r.a.createElement("div",{className:"patient"},r.a.createElement("div",{className:"account-icon"},r.a.createElement("img",{id:"house",alt:"patient icon",src:a(34)}),r.a.createElement("a",{href:"./account/patient"},r.a.createElement("div",null,"Patient")))),r.a.createElement("div",{className:"provider"},r.a.createElement("div",{className:"account-icon"},r.a.createElement("img",{id:"hospital",alt:"provider icon",src:a(35)}),r.a.createElement("a",{href:"./account/provider"},r.a.createElement("div",null,"Provider"))))))}}]),t}(n.Component)),z=a(18),P=(a(103),a(39)),D=a.n(P).a.initializeApp({apiKey:"AIzaSyATOZyruRd9jZODpv-jICgtl1tUuw4ESWE",authDomain:"myehrbeta.firebaseapp.com",databaseURL:"https://myehrbeta.firebaseio.com",projectId:"myehrbeta",storageBucket:"myehrbeta.appspot.com",messagingSenderId:"706479482209"}),R=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).login=function(t){t.preventDefault(),D.auth().signInWithEmailAndPassword(e.state.email,e.state.password).then(function(e){console.log("User Signed In!!")}).catch(function(t){console.log(t),e.refs.errorMessage.innerHTML=t})},e.updateState=function(t){e.setState(Object(z.a)({},t.target.name,t.target.value))},e.state={email:"",password:""},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"patient-login"},r.a.createElement("div",{className:"login-container"},r.a.createElement("h2",null,"Patient Login"),r.a.createElement("form",null,r.a.createElement("input",{onChange:this.updateState,type:"email",name:"email",placeholder:"Email",required:!0}),r.a.createElement("br",null),r.a.createElement("input",{onChange:this.updateState,type:"password",name:"password",placeholder:"Password",required:!0}),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.login},"Login")),r.a.createElement("p",{ref:"errorMessage"})))}}]),t}(n.Component),C=(a(119),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"provider-login"},r.a.createElement("div",{className:"login-container"},r.a.createElement("h2",null,"Provider Portal Login")))}}]),t}(n.Component)),k=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(A,null))}}]),t}(n.Component),S=(a(121),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).createAccount=function(t){t.preventDefault(),D.auth().createUserWithEmailAndPassword(e.state.email,e.state.password).then(function(e){console.log("User Created")}).catch(function(t){console.log(t),e.refs.errorMessage.innerHTML=t})},e.updateState=function(t){e.setState(Object(z.a)({},t.target.name,t.target.value))},e.state={name:"",email:"",password:"",reEnterPassword:""},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"patient-create-account"},r.a.createElement("div",{className:"patient-create-account-container"},r.a.createElement("h2",null,"Patient Create Account"),r.a.createElement("form",null,r.a.createElement("input",{onChange:this.updateState,type:"text",name:"name",placeholder:"Name",required:!0}),r.a.createElement("br",null),r.a.createElement("input",{onChange:this.updateState,type:"email",name:"email",placeholder:"Email",required:!0}),r.a.createElement("br",null),r.a.createElement("input",{onChange:this.updateState,type:"password",name:"password",placeholder:"Password",required:!0}),r.a.createElement("br",null),r.a.createElement("input",{onChange:this.updateState,type:"reEnterPassword",name:"reEnterPassword",placeholder:"Reenter Password",required:!0}),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.createAccount},"Create Account")),r.a.createElement("p",{ref:"errorMessage"})))}}]),t}(n.Component)),M=(a(123),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"provider-login"},r.a.createElement("div",{className:"login-container"},r.a.createElement("h2",null,"Register Provider Portal")))}}]),t}(n.Component)),N=(a(125),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"patient"},r.a.createElement("h1",{id:"title"},"Patient"),r.a.createElement("img",{id:"house",alt:"house",src:a(34)}),r.a.createElement("p",null,"With a myEHR Patient account you can now view all of your medical records in one location. No more transcript requests or having to remember multiple medical account credentials. In addition to this you can also now aprove or reject any medical requests."),r.a.createElement("a",{href:"/account/patient"},r.a.createElement("div",null,"Login to myEHR Account")),r.a.createElement("a",{href:"/account/patient/create"},r.a.createElement("div",null,"Create an Account Today"))))}}]),t}(n.Component)),L=(a(127),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"provider"},r.a.createElement("h1",{id:"title"}," Provider Portal Coming Soon..."),r.a.createElement("img",{id:"hospital",alt:"Hospital",src:a(35)}),r.a.createElement("p",null,"The provider portal is currently under development still, and is not ready for deployment."),r.a.createElement("a",{href:"/account/provider"},r.a.createElement("div",null,"Access Provider Portal")),r.a.createElement("a",{href:"/account/provider/create"},r.a.createElement("div",null,"Register a Provider Portal"))))}}]),t}(n.Component)),W=(a(129),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={name:"",email:"",profileImageUrl:""},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"patient-profile"},r.a.createElement("h1",null,"Welcome ",this.name),r.a.createElement("h2",null,this.email),r.a.createElement("div",{className:"profile-image-background"},r.a.createElement("div",{className:"profile-image-ring"},r.a.createElement("img",{alt:"profile picture",src:""}))),r.a.createElement("button",null,"View Records"),r.a.createElement("button",null,"View Requests")))}}]),t}(n.Component)),x=a(40),q=a.n(x),T=a(137),V=a(135),Z=a(134),H=a(136),K={isAuthenticated:!1,authenticate:function(e){this.isAuthenticated=!0,setTimeout(e,1e4)},signout:function(e){this.isAuthenticated=!1,setTimeout(e,1e4)}};function U(e){var t=e.component,a=Object(d.a)(e,["component"]);return r.a.createElement(T.a,Object.assign({},a,{render:function(e){return K.isAuthenticated?r.a.createElement(t,e):r.a.createElement(V.a,{to:{pathname:"/account",state:{from:e.location}}})}}))}var X=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).aboutRef=r.a.createRef(),a.state={user:{}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"authListener",value:function(){var e=this;D.auth().onAuthStateChanged(function(t){t?(K.authenticate(),e.setState({user:t})):(K.signout(),e.setState({user:null}))})}},{key:"render",value:function(){var e=this;return r.a.createElement(w,{aboutRef:this.aboutRef},r.a.createElement(Z.a,null,r.a.createElement(H.a,null,r.a.createElement(T.a,{path:"./",exact:!0,render:function(){return r.a.createElement(O,{scrollToAbout:e.scrollToAbout})}}),r.a.createElement(T.a,{path:"./about",exact:!0,render:function(){return r.a.createElement(j,null)}}),r.a.createElement(T.a,{path:"./patient",exact:!0,render:function(){return r.a.createElement(N,null)}}),r.a.createElement(T.a,{path:"./provider",exact:!0,render:function(){return r.a.createElement(L,null)}}),r.a.createElement(T.a,{path:"./account",exact:!0,render:function(){return r.a.createElement(k,null)}}),r.a.createElement(T.a,{path:"./account/patient",exact:!0,render:function(){return r.a.createElement(R,null)}}),r.a.createElement(T.a,{path:"./account/provider",exact:!0,render:function(){return r.a.createElement(C,null)}}),r.a.createElement(T.a,{path:"./account/patient/create",exact:!0,render:function(){return r.a.createElement(S,null)}}),r.a.createElement(T.a,{path:"./account/provider/create",exact:!0,render:function(){return r.a.createElement(M,null)}}),r.a.createElement(U,{path:"./account/patient/profile",render:function(){return r.a.createElement(W,null)}}),r.a.createElement(U,{path:"./account/provider/portal",render:function(){return r.a.createElement(q.a,null)}}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},34:function(e,t,a){e.exports=a.p+"static/media/house.27054747.png"},35:function(e,t,a){e.exports=a.p+"static/media/hospital.10ebfeba.png"},40:function(e,t){},42:function(e,t,a){e.exports=a(132)},47:function(e,t,a){},49:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){},65:function(e,t,a){},67:function(e,t,a){},69:function(e,t,a){},91:function(e,t,a){},93:function(e,t,a){e.exports=a.p+"static/media/blockchain_process.acc78cc8.png"},94:function(e,t,a){e.exports=a.p+"static/media/appLoginScreenshot.0eb778eb.png"},95:function(e,t,a){e.exports=a.p+"static/media/appRecordsScreenshot.c254f7f0.png"},96:function(e,t){e.exports="data:image/png;base64,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"},97:function(e,t,a){e.exports=a.p+"static/media/google-play-badge.db9b21a1.png"},98:function(e,t,a){e.exports=a.p+"static/media/medicalblock.e86e5d3b.png"},99:function(e,t,a){}},[[42,2,1]]]);
//# sourceMappingURL=main.0f95a4d3.chunk.js.map