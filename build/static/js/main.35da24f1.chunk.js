(this.webpackJsonptoro=this.webpackJsonptoro||[]).push([[0],{22:function(t,e,a){t.exports=a.p+"static/media/toro.06a3cf67.svg"},28:function(t,e,a){t.exports=a(39)},38:function(t,e,a){},39:function(t,e,a){"use strict";a.r(e);var n=a(1),o=a.n(n),c=a(15),s=a.n(c),r=a(11),i=a(16),u=a(8),l=a(17),f=a(18),m=a(25),p=a(52),b=a(55),k=a(54),d=a(24),v=a(22),O=a.n(v),h=Object(p.a)((function(t){return{root:{flexGrow:1},appBar:{backgroundColor:"#091827",boxShadow:"none"}}}));function j(){var t=h();return o.a.createElement("div",{className:t.root},o.a.createElement(b.a,{className:t.appBar,position:"static"},o.a.createElement(k.a,null,o.a.createElement(d.a,{src:O.a}))))}var E=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(l.a)(this,Object(f.a)(e).call(this,t))).state={stocks:[]},a}return Object(m.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;new WebSocket("ws://localhost:8080/quotes").onmessage=function(e){var a=JSON.parse(e.data),n=Object.keys(a)[0],o=t.state.stocks.findIndex((function(t){return n in t}));if(-1===o){var c=[].concat(Object(r.a)(t.state.stocks),[a]);t.setState({stocks:c})}else{var s=Object(r.a)(t.state.stocks);s[o]=a,t.setState({stocks:s})}}}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(j,null),this.state.stocks.map((function(t){return JSON.stringify(t)})))}}]),e}(n.Component);a(38);s.a.render(o.a.createElement(E,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.35da24f1.chunk.js.map