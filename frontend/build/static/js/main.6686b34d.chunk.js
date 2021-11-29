(this.webpackJsonphome=this.webpackJsonphome||[]).push([[0],{32:function(e,t,a){},57:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(45),c=a.n(r),l=(a(57),a(2)),i=a(3),o=a(5),u=a(4),d=(a(32),a(23)),h=a(6),j=a(52),m=a(26),p=a.n(m),b=a(33),O=a(9),v=a(46),f=a.n(v).a.create({baseURL:"http://localhost:3000"}),y=a(1);function N(e){for(var t=[],a=0;a<e.userNames.length;a++)t[a]=Object(y.jsxs)("option",{value:e.userNames[a],children:[" ",e.userNames[a]," "]});return Object(y.jsx)("select",{value:e.value,onChange:e.onChange,children:t})}var x=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={playerName:"",loggedIn:!1,userNames:null,droppedDown:!1,setPlayerId:e.setPlayerId},n.selectName=n.selectName.bind(Object(O.a)(n)),n.setUserName=n.setUserName.bind(Object(O.a)(n)),n.inputUserName=n.inputUserName.bind(Object(O.a)(n)),n}return Object(i.a)(a,[{key:"getUserNames",value:function(){var e=Object(b.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getting usernames"),e.prev=1,e.next=4,f.get("/api/userNames");case 4:t=e.sent,this.setState({userNames:t.data}),console.log(t.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"setUserName",value:function(){var e=Object(b.a)(p.a.mark((function e(){var t,a,n,s=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("setting user name"),console.log(this.state.playerName),t="saved",this.state.droppedDown||(t="new"),a={name:this.state.playerName,type:t},e.next=7,f.post("/api/newUserName",Object(j.a)({},a)).then((function(e){return"good"!==e.data?(alert(e.data),!1):(s.state.setPlayerId(s.state.playerName),!0)}),(function(e){console.log(n)}));case 7:n=e.sent;case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"logIn",value:function(){var e=!1;""===this.state.playerName?alert("please enter a name"):(e=this.setUserName(),console.log("logged in")),this.setState({loggedIn:e})}},{key:"inputUserName",value:function(e){this.setState({playerName:e.target.value,droppedDown:!1})}},{key:"selectName",value:function(e){this.setState({playerName:e.target.value,droppedDown:!0})}},{key:"render",value:function(){var e,t=this;return null===this.state.userNames?this.getUserNames():null!==this.state.userNames&&(e=this.state.loggedIn?Object(y.jsx)(d.b,{to:"/Connect4",children:"Start Game"}):Object(y.jsxs)("ul",{children:[Object(y.jsx)("label",{children:"Username : "}),Object(y.jsx)("input",{value:this.state.playerName,onChange:this.inputUserName,type:"text",placeholder:"Enter Username",name:"username"}),Object(y.jsx)(N,{value:this.state.playerName,userNames:this.state.userNames,onChange:this.selectName}),Object(y.jsx)("button",{className:"entry",onClick:function(){return t.logIn()},children:"LogIn"})]})),Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)("header",{className:"title",children:"Home"}),Object(y.jsx)("div",{className:"submission-holder",children:e})]})}}]),a}(s.a.Component),g=x,k=a(51);a(89);function I(e){return Object(y.jsx)("div",{className:"cell",children:Object(y.jsx)("div",{className:e.color})})}function w(e){for(var t=[],a=0;a<6;a++)t[a]=Object(y.jsx)(I,{y:a,x:e.x,color:e.cells[a]},a);return Object(y.jsx)("div",{className:"collumn",onClick:function(){return e.handleClick()},children:t})}var C=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(l.a)(this,a),n=t.call(this,e);var s=Array.from(Array(7),(function(){return new Array(6).fill("none")}));return n.state={cells:s,playerId:e.playerId,playerTurn:"",winner:"",socket:Object(k.a)("http://127.0.0.1:4001")},n}return Object(i.a)(a,[{key:"handleClick",value:function(e){if(""===this.state.winner){var t=this.state.cells;this.setState({cells:t,playerTurn:"red"})}}},{key:"render",value:function(){for(var e=this,t=[],a=function(a){t[a]=Object(y.jsx)(w,{x:a,cells:e.state.cells[a],handleClick:function(){return e.handleClick(a)}},a)},n=0;n<7;n++)a(n);return Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"grid",children:t}),Object(y.jsxs)("div",{className:"winner-text",children:[" ",this.state.winner," "]})]})}}]),a}(s.a.Component),U=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),n=t.call(this,e),console.log(e.playerId),n.state={playerId:e.playerId},n}return Object(i.a)(a,[{key:"render",value:function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)("a",{className:"info"}),Object(y.jsx)("a",{className:"turn",children:"red "}),Object(y.jsx)(C,{})]})}}]),a}(s.a.Component),S=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).setPlayerId=function(e){console.log("set id to "+e),n.setState({playerId:e})},n.state={playerId:""},n}return Object(i.a)(a,[{key:"render",value:function(){return Object(y.jsx)(d.a,{children:Object(y.jsxs)(h.c,{children:[Object(y.jsx)(h.a,{exact:!0,path:"/",children:Object(y.jsx)(g,{setPlayerId:this.setPlayerId})}),Object(y.jsx)(h.a,{exact:!0,path:"/Connect4",children:Object(y.jsx)(U,{playerId:this.state.playerId})})]})})}}]),a}(s.a.Component);c.a.render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(S,{})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.6686b34d.chunk.js.map