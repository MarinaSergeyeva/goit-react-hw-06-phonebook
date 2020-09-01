(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={filterWrapper:"Filter_filterWrapper__TrbH9",filter:"Filter_filter__1WTRa",enter:"Filter_enter__2S5UD",enterActive:"Filter_enterActive__2j4aW",exit:"Filter_exit__2Lrj8",exitActive:"Filter_exitActive__133-t"}},18:function(t,e,n){t.exports={contactsList:"ContactsList_contactsList__1MaCp",contactsListItem:"ContactsList_contactsListItem__paDr-",enter:"ContactsList_enter__rQFAN",enterActive:"ContactsList_enterActive__NmDLM",exit:"ContactsList_exit__1Ffhl",exitActive:"ContactsList_exitActive__3Q0C5"}},19:function(t,e,n){t.exports={sectionTitle:"App_sectionTitle__1yIEN",appear:"App_appear__2qYKb",appearActive:"App_appearActive__23Joc"}},20:function(t,e,n){t.exports={alert:"Alert_alert__27jlV",enter:"Alert_enter__1yY2s",enterActive:"Alert_enterActive__HGFsr",exit:"Alert_exit__xx00E",exitActive:"Alert_exitActive__1adpX"}},25:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__1nrGq"}},28:function(t,e,n){t.exports={contactsListItem:"ContactsListItems_contactsListItem__1q5y4"}},31:function(t,e,n){t.exports=n(44)},36:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(4),i=n.n(c),o=(n(36),n(24)),l=n(9),s=n(10),u=n(12),m=n(11),p=n(25),_=n.n(p),f=n(1),d=n(27),b="contacts/add",v="contacts/delete",h="contacts/filter",E="contacts/alert",C=function(t){var e=t.name,n=t.number;return{type:b,payload:{id:Object(d.v4)(),name:e,number:n}}},A=function(t){return{type:v,payload:{id:t}}},y=function(t){return{type:h,payload:{filter:t}}},g=function(){return{type:E}},O=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(o.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault();var n=t.state.name;if(console.log("!!",t.props),t.props.items.find((function(t){return t.name.toLowerCase()===n.toLowerCase()})))return t.props.onChangeAlert(),void setTimeout((function(){return t.props.onChangeAlert()}),1500);t.props.onAddContact(t.state),t.setState({name:"",number:""})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return r.a.createElement("form",{onSubmit:this.handleSubmit,className:_.a.contactForm},r.a.createElement("label",null,"Name",r.a.createElement("input",{type:"text",name:"name",value:e,onChange:this.handleChange})),r.a.createElement("label",null,"Number",r.a.createElement("input",{type:"text",name:"number",value:n,onChange:this.handleChange})),r.a.createElement("button",{type:"submit"},"Add contact"))}}]),n}(a.Component),x=Object(f.b)((function(t){return{items:t.contacts.items,alert:t.contacts.alert}}),(function(t){return{onAddContact:function(e){return t(C(e))},onChangeAlert:function(){return t(g())}}}))(O),j=n(46),L=n(45),N=n(18),F=n.n(N),w=n(28),D=n.n(w);var S=Object(f.b)(null,(function(t){return{onDeleteContact:function(e){return t(A(e))}}}))((function(t){var e=t.contact,n=t.onDeleteContact;return r.a.createElement("li",{className:D.a.ContactsListItem},e.name,": ",e.number,r.a.createElement("button",{type:"button",onClick:function(){n(e.id)}},"Delete"))})),T=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{component:"ul",className:F.a.contactsList},this.props.contacts.map((function(e){return r.a.createElement(L.a,{key:e.id,in:t.props.contacts.length>0,timeout:250,classNames:F.a},r.a.createElement(S,{contact:e}))}))))}}]),n}(a.Component),I=Object(f.b)((function(t){return{contacts:t.contacts.filter?t.contacts.items.filter((function(e){return e.name.toLowerCase().includes(t.contacts.filter.toLowerCase())})):t.contacts.items}}))(T),k=n(13),W=n.n(k),X=Object(f.b)((function(t){return{filter:t.contacts.filter}}),(function(t){return{getFilter:function(e){return t(y(e))}}}))((function(t){var e=t.filter,n=t.getFilter;return r.a.createElement("div",{className:W.a.filterWrapper},r.a.createElement(L.a,{in:!0,timeout:1e3,classNames:W.a},r.a.createElement("label",{className:W.a.filter},"Find contacts by name",r.a.createElement("input",{type:"text",name:"filter",value:e,onChange:function(t){n(t.target.value)}}))))})),R=n(19),q=n.n(R),H=n(20),J=n.n(H);var U=Object(f.b)((function(t){return{alert:t.contacts.alert}}))((function(t){var e=t.alert;return r.a.createElement(L.a,{in:e,classNames:J.a,timeout:250,unmountOnExit:!0},r.a.createElement("p",{className:J.a.alert},"The name is already exist"))}));var V=Object(f.b)((function(t){return{items:t.contacts.items}}),(function(t){return{onChangeFilter:function(e){return t(y(e))}}}))((function(t){var e=t.items,n=t.alert;return r.a.createElement(r.a.Fragment,null,r.a.createElement(U,{alert:n}),r.a.createElement(L.a,{in:!0,timeout:500,classNames:q.a,appear:!0,unmountOnExit:!0},r.a.createElement("p",{className:q.a.sectionTitle}," Phonebook ")),r.a.createElement(x,null),e.length>1&&r.a.createElement(X,null),r.a.createElement(I,null))})),G=n(5),K=n(29),M=Object(G.b)({items:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b:return[].concat(Object(K.a)(t),[e.payload]);case v:return t.filter((function(t){return t.id!==e.payload.id}));default:return t}},filter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case h:return e.payload.filter;default:return t}},alert:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case E:return!t;default:return t}}}),Q=Object(G.b)({contacts:M}),Y=Object(G.c)(Q,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(r.a.createElement(f.a,{store:Y},r.a.createElement(V,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.ea0216ce.chunk.js.map