"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[635],{8445:function(n,t,e){e.d(t,{z:function(){return a}});var o,r=e(168),a=e(6444).ZP.button(o||(o=(0,r.Z)(["\n  background-color: #ffe724;\n  color: #120c07;\n  box-shadow: 5px 5px 2px 0px #120c07;\n  font-family: 'Roboto';\n  font-weight: bold;\n  font-size: 25px;\n  border: none;\n  border-radius: 10px;\n  padding: 15px;\n  max-height: auto;\n  max-width: 200px;\n  margin: 20px auto;\n\n  &: hover {\n    outline-color: transparent;\n    outline-style: solid;\n    box-shadow: 10px 10px 5px 0px #120c07;\n    transition: 0.3s;\n    border: 1px solid #120c07;\n  }\n"])))},2635:function(n,t,e){e.r(t),e.d(t,{default:function(){return H}});var o,r,a,i,x,c,s,l,p,d,f,u,h,b=e(2791),m=e(9434),g=e(6351),v=e(3871),w=e(9439),y=e(1686),j=e.n(y),Z=e(8445),C=e(168),k=e(6444),P=k.ZP.div(o||(o=(0,C.Z)(["\n  margin-top: 100px;\n  padding-left: 30px;\n"]))),N=k.ZP.form(r||(r=(0,C.Z)(["\n  display: grid;\n  width: 600px;\n  margin: 0 auto;\n  border: 2px solid #ffe724;\n  border-radius: 4px;\n  box-shadow: #ffe724 5px 0 5px;\n  padding-top: 20px;\n  font-family: 'Roboto';\n  font-size: 40px;\n  font-weight: bold;\n\n  text-align: center;\n  color: #e2e2e2;\n  text-align: center;\n  text-shadow: #120c07 5px 0 1px;\n  position: sticky;\n  top: 50px;\n"]))),z=k.ZP.input(a||(a=(0,C.Z)(["\n  width: 550px;\n  height: 25px;\n  margin: 0 auto;\n  font-size: 20px;\n  font-weight: bold;\n  background-color: #e2e2e2;\n\n  &: hover {\n    box-shadow: #ffe724 0px 5px 10px, #ffe724 0px 2px 5px;\n  }\n"]))),R=e(184),D=function(){var n=(0,m.v9)(g.xm),t=(0,m.I0)(),e=(0,b.useState)(""),o=(0,w.Z)(e,2),r=o[0],a=o[1],i=(0,b.useState)(""),x=(0,w.Z)(i,2),c=x[0],s=x[1];return(0,R.jsx)(P,{children:(0,R.jsxs)(N,{onSubmit:function(e){e.preventDefault();var o=e.currentTarget,r=o.elements.contactName.value.trim(),i=o.elements.contactNumber.value.trim();return n.some((function(n){return n.name===r}))?j().Notify.info("Contact with name ".concat(r," already exists!")):n.some((function(n){return n.number===i}))?j().Notify.info("Contact with number ".concat(i," already exists!")):(t((0,v.G3)({name:r,number:i})),a(""),s(""),void j().Notify.success("Contact ".concat(r," successfully added.")))},children:[(0,R.jsx)("label",{children:"Name: "}),(0,R.jsx)(z,{type:"text",name:"contactName",value:r,onChange:function(n){return a(n.target.value)},required:!0}),(0,R.jsx)("label",{children:"Number: "}),(0,R.jsx)(z,{type:"text",name:"contactNumber",value:c,onChange:function(n){return s(n.target.value)},required:!0}),(0,R.jsx)(Z.z,{type:"submit",children:"Add contact"})]})})},F=k.ZP.ul(i||(i=(0,C.Z)(["\n  display: flex;\n  list-style: none;\n  gap: 10px;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n"]))),_=k.ZP.li(x||(x=(0,C.Z)(["\n  font-family: 'Roboto';\n  font-size: 35px;\n  font-weight: bold;\n  color: #222326;\n  text-align: center;\n  text-shadow: #120c07 2px 0 1px;\n  margin: 0 auto 5px;\n  list-style: none;\n  display: flex;\n  justify-content: space-between;\n  width: 750px;\n  border-radius: 6px;\n  padding: 12px 20px;\n  border: 1px solid #ffe724;\n  box-sizing: border-box;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n\n  &: hover {\n    box-shadow: #ffe724 0px 10px 10px 0px;\n  }\n"]))),A=k.ZP.span(c||(c=(0,C.Z)(["\n  margin-left: 10px;\n  color: #120c07;\n"]))),I=k.ZP.button(s||(s=(0,C.Z)(["\n  background-color: #ffe724;\n  color: #120c07;\n  font-family: 'Roboto';\n  font-size: 30px;\n  border: none;\n  border-radius: 5px;\n  height: 32px;\n  width: 50px;\n  margin-left: 10px;\n  vertical-align: top;\n  box-shadow: 2px 2px 1px 0px #120c07;\n\n  &: hover {\n    outline-color: transparent;\n    transition: 0.3s;\n    transform: scale(1.03);\n    border: 1px solid #120c07;\n    box-shadow: 10px 10px 5px -5px #120c07;\n    font-weight: bold;\n  }\n"]))),S=function(n){var t=n.contacts,e=n.onDeleteContact,o=Array.isArray(t)&&t.length>0;return(0,R.jsx)(F,{children:o&&t.map((function(n){return(0,R.jsxs)(_,{children:[(0,R.jsxs)("div",{children:[(0,R.jsx)("span",{children:n.name}),":",(0,R.jsx)(A,{children:n.number})]}),(0,R.jsx)(I,{"aria-label":"Delete contact",type:"button",onClick:function(){e(n.id),j().Notify.success("Contact ".concat(n.name," successfully deleted."))},children:"\xd7"})]},n.id)}))})},q=k.ZP.label(l||(l=(0,C.Z)(["\n  display: block;\n  font-family: 'Roboto';\n  font-size: 40px;\n  font-weight: bold;\n  color: #222326;\n  text-align: center;\n  text-shadow: #120c07 2px 0 0;\n  margin-top: 10px;\n  margin-bottom: 30px;\n"]))),L=k.ZP.input(p||(p=(0,C.Z)(["\n  width: 320px;\n  height: 40px;\n  margin-left: 10px;\n  vertical-align: top;\n  font-size: 20px;\n  font-weight: bold;\n  background-color: #e2e2e2;\n\n  &: hover, focus {\n    box-shadow: #ffe724 0px 10px 20px, #ffe724 0px 2px 5px;\n  }\n"]))),T=function(n){var t=n.value,e=n.onChange;return(0,R.jsxs)(q,{children:["Find contacts by name:",(0,R.jsx)(L,{type:"text",value:t,onChange:e})]})},E=e(1150),G=e(1552),O=k.ZP.div(d||(d=(0,C.Z)(["\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  gap: 20px;\n"]))),Q=k.ZP.h2(f||(f=(0,C.Z)(["\n  font-family: 'Roboto';\n  font-size: 70px;\n  font-weight: bold;\n  color: #e2e2e2;\n  text-align: center;\n  text-shadow: #120c07 10px 0 5px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n"]))),U=k.ZP.div(u||(u=(0,C.Z)(["\n  width: 100%;\n"]))),Y=k.ZP.p(h||(h=(0,C.Z)(["\n  font-family: 'Roboto';\n  font-size: 30px;\n  font-weight: bold;\n  color: #120c07;\n  text-align: center;\n  margin-top: 100px;\n"]))),B=e(6338),H=function(){var n=(0,m.v9)(g.R7),t=(0,m.v9)(g.xm),e=(0,m.v9)(g.Cc),o=(0,m.v9)(g.Uv),r=(0,m.v9)(g.YI),a=(0,m.I0)();(0,b.useEffect)((function(){n&&a((0,v.nQ)())}),[n,a]);var i=function(){var n=r.toLowerCase();return null===t||void 0===t?void 0:t.filter((function(t){return t.name.toLowerCase().includes(n)}))}();return(0,R.jsxs)("section",{children:[(0,R.jsx)(G.f5,{children:"Phonebook"}),(0,R.jsxs)(O,{children:[(0,R.jsx)(D,{}),(0,R.jsxs)(U,{children:[(0,R.jsx)(Q,{children:"Contacts"}),e&&(0,R.jsx)(E.a,{}),o&&(0,R.jsxs)("p",{children:["Oops, some error occured...",o]}),null===t?(0,R.jsx)(Y,{children:"No contacts found."}):(0,R.jsx)(R.Fragment,{children:0===t.length?(0,R.jsx)(R.Fragment,{children:(0,R.jsx)(Y,{children:"No contacts found."})}):(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(T,{value:r,onChange:function(n){a((0,B.T)(n.target.value))}}),0===i.length?(0,R.jsx)(Y,{children:"No contact found with this name."}):(0,R.jsx)(S,{contacts:i,onDeleteContact:function(n){a((0,v.ku)(n))}})]})})]})]})]})}}}]);
//# sourceMappingURL=635.5c447ee1.chunk.js.map