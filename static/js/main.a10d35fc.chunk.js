(this.webpackJsonpjwt=this.webpackJsonpjwt||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),o=n.n(a),r=n(16),i=n.n(r),u=(n(26),n(27),n(17)),s=n(18),j="https://frebi.willandskill.eu/",l="".concat(j,"api/v1/"),b=("".concat(j,"auth/"),"".concat(j,"api-token-auth/")),h=function(){function e(){Object(u.a)(this,e)}return Object(s.a)(e,[{key:"login",value:function(e,t){var n={email:e,password:t};return fetch(b,{method:"POST",body:JSON.stringify(n),headers:this.getPublicHeaders()})}},{key:"getMe",value:function(){var e="".concat(l,"me");return fetch(e,{headers:this.getPrivateHeaders()})}},{key:"getCustomerList",value:function(){var e="".concat(l,"customers");return fetch(e,{headers:this.getPrivateHeaders()})}},{key:"getPublicHeaders",value:function(){return{"Content-Type":"application/json"}}},{key:"getPrivateHeaders",value:function(){return{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.getToken())}}},{key:"setToken",value:function(e){localStorage.setItem("JWT_APP",e)}},{key:"getToken",value:function(){return localStorage.getItem("JWT_APP")}}]),e}(),d=n(2),p=n(10);function v(){var e=Object(a.useState)("webb19@willandskill.se"),t=Object(p.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)("javascriptoramverk"),i=Object(p.a)(r,2),u=i[0],s=i[1],j=Object(a.useState)(null),l=Object(p.a)(j,2),b=(l[0],l[1]),d=new h;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"JWT"}),Object(c.jsx)("input",{type:"text",value:n,onChange:function(e){return o(e.target.value)},placeholder:"Email"}),Object(c.jsx)("input",{type:"password",value:u,onChange:function(e){return s(e.target.value)},placeholder:"Password"}),Object(c.jsx)("button",{onClick:function(){var e,t;e=n,t=u,d.login(e,t).then((function(e){return e.json()})).then((function(e){b(e.token),d.setToken(e.token)}))},children:"Login"})]})}var O=n(11),f=n(20);function g(e){var t=e.component,n=Object(f.a)(e,["component"]),a=new h;return Object(c.jsx)(d.b,Object(O.a)(Object(O.a)({},n),{},{render:function(e){return a.getToken()?Object(c.jsx)(t,Object(O.a)({},e)):Object(c.jsx)(d.a,{to:"/login"})}}))}function k(){return Object(c.jsx)("div",{children:"This page is private"})}function x(){return Object(c.jsx)("div",{children:"Pagina no encontradaaaa!"})}var m=function(){return Object(c.jsx)("div",{children:Object(c.jsxs)(d.d,{children:[Object(c.jsx)(d.b,{path:"/login",component:v}),Object(c.jsx)(g,{path:"/private",component:k}),Object(c.jsx)(g,{path:"/404",component:x}),Object(c.jsx)(g,{component:x})]})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))},P=n(9);i.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(P.a,{children:Object(c.jsx)(m,{})})}),document.getElementById("root")),y()}},[[36,1,2]]]);
//# sourceMappingURL=main.a10d35fc.chunk.js.map