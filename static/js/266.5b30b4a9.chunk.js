"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[266],{4281:function(n,t,e){e.d(t,{f:function(){return i}});var o,r=e(168),i=e(6444).ZP.h1(o||(o=(0,r.Z)(["\n  font-family: 'Roboto';\n  font-size: 100px;\n  font-weight: bold;\n  width: 100%;\n  color: #e2e2e2;\n  text-align: center;\n  text-shadow: #120c07 10px 0 5px;\n  margin-bottom: 20px;\n  box-shadow: #ffe724 0px 20px 30px, #ffe724 0px 2px 5px;\n"])))},3266:function(n,t,e){e.r(t),e.d(t,{default:function(){return F}});var o,r,i,a,x,c,p,l,s,d,f,u=e(1150),h=e(2791),b=e(9434),m=e(7561),g=e(3871),w=e(6338),v=e(168),j=e(6444),y=j.ZP.div(o||(o=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  text-align: center;\n"]))),Z=j.ZP.div(r||(r=(0,v.Z)(["\n  margin-top: 100px;\n"]))),k=e(4281),C=j.ZP.h2(i||(i=(0,v.Z)(["\n  font-family: 'Roboto';\n  font-size: 70px;\n  font-weight: bold;\n  color: #e2e2e2;\n  text-align: center;\n  text-shadow: #120c07 10px 0 5px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n"]))),P=j.ZP.label(a||(a=(0,v.Z)(["\n  display: block;\n  font-family: 'Roboto';\n  font-size: 40px;\n  font-weight: bold;\n  color: #222326;\n  text-align: center;\n  text-shadow: #120c07 2px 0 0;\n  margin-top: 10px;\n  margin-bottom: 30px;\n"]))),z=j.ZP.input(x||(x=(0,v.Z)(["\n  width: 320px;\n  height: 40px;\n  margin-left: 10px;\n  vertical-align: top;\n  font-size: 20px;\n  font-weight: bold;\n  background-color: #e2e2e2;\n\n  &: hover, focus {\n    box-shadow: #ffe724 0px 10px 20px, #ffe724 0px 2px 5px;\n  }\n"]))),R=e(184),N=function(n){var t=n.value,e=n.onChange;return(0,R.jsxs)(P,{children:["Find contacts by name:",(0,R.jsx)(z,{type:"text",value:t,onChange:e})]})},D=j.ZP.li(c||(c=(0,v.Z)(["\n  font-family: 'Roboto';\n  font-size: 35px;\n  font-weight: bold;\n  color: #222326;\n  text-align: center;\n  text-shadow: #120c07 2px 0 1px;\n  margin: 0 auto 5px;\n  list-style: none;\n  display: flex;\n  justify-content: space-between;\n  width: 750px;\n\n  &: hover {\n    box-shadow: #ffe724 0px 10px 10px 0px;\n  }\n"]))),_=j.ZP.span(p||(p=(0,v.Z)(["\n  margin-left: 10px;\n"]))),A=j.ZP.button(l||(l=(0,v.Z)(["\n  background-color: #ffe724;\n  color: #120c07;\n  font-family: 'Roboto';\n  font-size: 30px;\n  border: none;\n  border-radius: 5px;\n  height: 32px;\n  width: 50px;\n  margin-left: 10px;\n  vertical-align: top;\n  box-shadow: 2px 2px 1px 0px #120c07;\n\n  &: hover {\n    outline-color: transparent;\n    transition: 0.3s;\n    transform: scale(1.03);\n    border: 1px solid #120c07;\n    box-shadow: 10px 10px 5px -5px #120c07;\n    font-weight: bold;\n  }\n"]))),I=function(n){var t=n.contacts,e=n.onDeleteContact,o=Array.isArray(t)&&t.length>0;return(0,R.jsx)("ul",{children:o&&t.map((function(n){return(0,R.jsxs)(D,{children:[(0,R.jsxs)("div",{children:[(0,R.jsx)("span",{children:n.name}),":",(0,R.jsx)(_,{children:n.number})]}),(0,R.jsx)(A,{"aria-label":"Delete contact",type:"button",onClick:function(){return e(n.id)},children:"\xd7"})]},n.id)}))})},q=j.ZP.form(s||(s=(0,v.Z)(["\n  display: grid;\n  width: 600px;\n  margin: 0 auto;\n  border: 2px solid #ffe724;\n  border-radius: 4px;\n  box-shadow: #ffe724 5px 0 5px;\n  padding-top: 20px;\n  font-family: 'Roboto';\n  font-size: 40px;\n  font-weight: bold;\n\n  text-align: center;\n  color: #e2e2e2;\n  text-align: center;\n  text-shadow: #120c07 5px 0 1px;\n  position: sticky;\n  top: 50px;\n"]))),L=j.ZP.input(d||(d=(0,v.Z)(["\n  width: 550px;\n  height: 25px;\n  margin: 0 auto;\n  font-size: 20px;\n  font-weight: bold;\n  background-color: #e2e2e2;\n\n  &: hover {\n    box-shadow: #ffe724 0px 5px 10px, #ffe724 0px 2px 5px;\n  }\n"]))),T=j.ZP.button(f||(f=(0,v.Z)(["\n  background-color: #ffe724;\n  color: #120c07;\n  box-shadow: 5px 5px 2px 0px #120c07;\n  font-family: 'Roboto';\n  font-weight: bold;\n  font-size: 25px;\n  border: none;\n  border-radius: 10px;\n  padding: 15px;\n  max-height: auto;\n  max-width: 200px;\n  margin: 20px auto;\n\n  &: hover {\n    outline-color: transparent;\n    outline-style: solid;\n    box-shadow: 10px 10px 5px 0px #120c07;\n    transition: 0.3s;\n    border: 1px solid #120c07;\n  }\n"]))),E=function(){var n=(0,b.v9)(w.xm),t=(0,b.I0)();return(0,R.jsxs)(q,{onSubmit:function(e){e.preventDefault();var o=e.currentTarget,r=o.elements.contactName.value.trim(),i=o.elements.contactNumber.value.trim();return n.some((function(n){return n.name===r}))?alert("Contact with name ".concat(r," already exists!")):n.some((function(n){return n.number===i}))?alert("Contact with number ".concat(i," already exists!")):void t((0,g.G3)({name:r,number:i}))},children:[(0,R.jsx)("label",{children:"Name: "}),(0,R.jsx)(L,{type:"text",name:"contactName",required:!0}),(0,R.jsx)("label",{children:"Number: "}),(0,R.jsx)(L,{type:"text",name:"contactNumber",required:!0}),(0,R.jsx)(T,{type:"submit",children:"Add contact"})]})},F=function(){var n=(0,b.v9)(m.R7),t=(0,b.v9)(w.xm),e=(0,b.v9)(w.Cc),o=(0,b.v9)(w.Uv),r=(0,b.v9)(w.YI),i=(0,b.I0)();(0,h.useEffect)((function(){n&&i((0,g.nQ)())}),[n,i]);var a=function(){var n=r.toLowerCase();return null===t||void 0===t?void 0:t.filter((function(t){return t.name.toLowerCase().includes(n)}))}();return(0,R.jsxs)("section",{children:[(0,R.jsx)(k.f,{children:"Phonebook"}),(0,R.jsxs)(y,{children:[(0,R.jsx)(Z,{children:(0,R.jsx)(E,{})}),(0,R.jsxs)("div",{children:[(0,R.jsx)(C,{children:"Contacts"}),e&&(0,R.jsx)(u.a,{}),o&&(0,R.jsxs)("p",{children:["Oops, some error occured...",o]}),(0,R.jsx)(N,{value:r,onChange:function(n){i((0,w.Tv)(n.target.value))}}),(0,R.jsx)(I,{contacts:a,onDeleteContact:function(n){i((0,g.ku)(n))}})]})]})]})}}}]);
//# sourceMappingURL=266.5b30b4a9.chunk.js.map