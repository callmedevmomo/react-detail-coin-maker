(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,n,t){e.exports=t(71)},71:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(34),o=t.n(c),u=t(15),i=t(16),l=t(2),s=t(1);function f(){var e=Object(l.a)(["\n  margin-right: 20px;\n  text-transform: uppercase;\n  font-weight: 600;\n  color: ",";\n  background-color: ",";\n"]);return f=function(){return e},e}function p(){var e=Object(l.a)(["\n  display: flex;\n"]);return p=function(){return e},e}function m(){var e=Object(l.a)(["\n  margin-bottom: 30px;\n"]);return m=function(){return e},e}var d=s.default.header(m()),v=s.default.ul(p()),h=s.default.li(f(),function(e){return e.selected?"white":"black"},function(e){return e.selected?"#f1c40f":"white"}),b=Object(i.e)(function(e){var n=e.location.pathname;return r.a.createElement(d,null,r.a.createElement(v,null,r.a.createElement(h,{selected:"/"===n},r.a.createElement(u.b,{to:"/"},"Prices")),r.a.createElement(h,{selected:"/exchanges"===n},r.a.createElement(u.b,{to:"/exchanges"},"Exchanges")),r.a.createElement(h,{selected:"/coins"===n},r.a.createElement(u.b,{to:"/coins"},"Coins"))))}),g=t(3),x=t.n(g),E=t(7),O=t(8),j=t(9),y=t(11),k=t(10),w=t(12),S=function(){return r.a.createElement("h3",null,"Loading...")};function C(){var e=Object(l.a)(["\n  font-weight: 600;\n"]);return C=function(){return e},e}function z(){var e=Object(l.a)(["\n  text-decoration-line: underline;\n  margin-bottom: 10px;\n"]);return z=function(){return e},e}var A=s.default.div(z()),M=s.default.span(C()),N=function(e){var n=e.id,t=e.name,a=e.symbol,c=e.rank;return r.a.createElement(u.b,{to:"/coins/".concat(n)},r.a.createElement(A,null,r.a.createElement(M,null,"#",c)," ",t,"/",a," \u2192"))},D=function(e){var n=e.loading,t=e.coins;return n?r.a.createElement(S,null):t.filter(function(e){return 0!==e.rank}).sort(function(e,n){return e.rank-n.rank}).map(function(e){return r.a.createElement(N,Object.assign({key:e.id},e))})},P=t(39),_=t.n(P).a.create({baseURL:"https://api.coinpaprika.com/v1"}),R=function(){return _.get("/tickers")},U=function(){return _.get("/exchanges")},B=function(){return _.get("/coins")},G=function(e){return _.get("/coins/".concat(e))},H=function(e){return _.get("/coins/".concat(e,"/markets"))},I=function(e){return _.get("/coins/".concat(e,"/exchanges"))},J=function(e){function n(){var e,t;Object(O.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(y.a)(this,(e=Object(k.a)(n)).call.apply(e,[this].concat(r)))).state={loading:!0,coins:[]},t.getCoins=Object(E.a)(x.a.mark(function e(){var n,a;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B();case 3:n=e.sent,a=n.data,t.setState({coins:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.prev=11,t.setState({loading:!1}),e.finish(11);case 14:case"end":return e.stop()}},e,null,[[0,8,11,14]])})),t}return Object(w.a)(n,e),Object(j.a)(n,[{key:"componentDidMount",value:function(){this.getCoins()}},{key:"render",value:function(){return r.a.createElement(D,this.state)}}]),n}(r.a.Component);function L(){var e=Object(l.a)(["\n  text-decoration: underline;\n"]);return L=function(){return e},e}function T(){var e=Object(l.a)(["\n  margin-top: 15px;\n"]);return T=function(){return e},e}function q(){var e=Object(l.a)(["\n  font-weight: 600;\n  display: block;\n  margin-bottom: 10px;\n"]);return q=function(){return e},e}function F(){var e=Object(l.a)(["\n  margin-bottom: 50px;\n"]);return F=function(){return e},e}var K=s.default.div(F()),X=s.default.span(q()),Y=s.default.div(T()),$=s.default.a(L()),Q=function(e){var n=e.name,t=e.description,a=e.links;return r.a.createElement(K,null,r.a.createElement(X,null,n),t&&"".concat(t.substring(0,80),"..."),r.a.createElement(Y,null,a.website&&a.website.map(function(e,n){return r.a.createElement($,{key:n,href:e},e)})))},V=function(e){var n=e.loading,t=e.exchanges;return n?r.a.createElement(S,null):t.map(function(e){return r.a.createElement(Q,Object.assign({key:e.id},e))})},W=function(e){function n(){var e,t;Object(O.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(y.a)(this,(e=Object(k.a)(n)).call.apply(e,[this].concat(r)))).state={loading:!0,exchanges:[]},t.getExchanges=Object(E.a)(x.a.mark(function e(){var n,a;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U();case 3:n=e.sent,a=n.data,t.setState({exchanges:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.prev=11,t.setState({loading:!1}),e.finish(11);case 14:case"end":return e.stop()}},e,null,[[0,8,11,14]])})),t}return Object(w.a)(n,e),Object(j.a)(n,[{key:"componentDidMount",value:function(){this.getExchanges()}},{key:"render",value:function(){return r.a.createElement(V,this.state)}}]),n}(r.a.Component);function Z(){var e=Object(l.a)(["\n  margin-bottom: 10px;\n"]);return Z=function(){return e},e}var ee=s.default.div(Z()),ne=function(e){var n=e.name,t=e.symbol,a=e.quotes;return r.a.createElement(ee,null,n," / ",t,": $",a.USD.price)},te=function(e){var n=e.loading,t=e.prices;return n?r.a.createElement(S,null):t.map(function(e){return r.a.createElement(ne,Object.assign({key:e.id},e))})},ae=function(e){function n(){var e,t;Object(O.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(y.a)(this,(e=Object(k.a)(n)).call.apply(e,[this].concat(r)))).state={loading:!0,prices:[]},t.getPrices=Object(E.a)(x.a.mark(function e(){var n,a;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R();case 3:n=e.sent,a=n.data,t.setState({prices:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.prev=11,t.setState({loading:!1}),e.finish(11);case 14:case"end":return e.stop()}},e,null,[[0,8,11,14]])})),t}return Object(w.a)(n,e),Object(j.a)(n,[{key:"componentDidMount",value:function(){this.getPrices()}},{key:"render",value:function(){return r.a.createElement(te,this.state)}}]),n}(r.a.Component);function re(){var e=Object(l.a)(["\n  width: 100px;\n  height: 35px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 3px solid #00d2d3;\n  border-radius: 5px;\n  &:not(:last-child) {\n    margin-right: 50px;\n  }\n  font-weight: bolder;\n  font-size: 14px;\n  opacity: 0.8;\n  &:active,\n  :focus {\n    background-color: #00d2d3;\n    color: white;\n    opacity: 0.9;\n  }\n"]);return re=function(){return e},e}function ce(){var e=Object(l.a)(["\n  margin-top: 30px;\n  display: flex;\n"]);return ce=function(){return e},e}function oe(){var e=Object(l.a)(["\n  padding-left: 5px;\n  font-size: 14px;\n"]);return oe=function(){return e},e}function ue(){var e=Object(l.a)(["\n  font-weight: bolder;\n  font-size: 14px;\n"]);return ue=function(){return e},e}function ie(){var e=Object(l.a)(["\n  margin-bottom: 10px;\n"]);return ie=function(){return e},e}function le(){var e=Object(l.a)(["\n  opacity: 0.8;\n  line-height: 2.5;\n"]);return le=function(){return e},e}function se(){var e=Object(l.a)(["\n  margin-bottom: 60px;\n"]);return se=function(){return e},e}function fe(){var e=Object(l.a)(["\n  font-size: 42px;\n"]);return fe=function(){return e},e}function pe(){var e=Object(l.a)(["\n  margin-bottom: 40px;\n"]);return pe=function(){return e},e}function me(){var e=Object(l.a)([""]);return me=function(){return e},e}var de=s.default.div(me()),ve=s.default.div(pe()),he=s.default.span(fe()),be=s.default.div(se()),ge=s.default.span(le()),xe=s.default.div(ie()),Ee=s.default.span(ue()),Oe=s.default.span(oe()),je=s.default.div(ce()),ye=Object(s.default)(u.b)(re()),ke=function(e){var n=e.id,t=e.name,a=e.symbol,c=e.description,o=e.rank,u=e.open_source,i=e.proof_type,l=e.org_structure;return r.a.createElement(de,null,r.a.createElement(ve,null,r.a.createElement(he,null,t," / ",a)),r.a.createElement(be,null,r.a.createElement(ge,null,c||"\u26a0\ufe0f No data ")),r.a.createElement(xe,null,r.a.createElement(Ee,null,"Rank:"),r.a.createElement(Oe,null,o||"\u26a0\ufe0f No data ")),r.a.createElement(xe,null,r.a.createElement(Ee,null,"Open Source:"),r.a.createElement(Oe,null,!0===u?"Yes":"No")),r.a.createElement(xe,null,r.a.createElement(Ee,null,"Proof Type:"),r.a.createElement(Oe,null,i||"\u26a0\ufe0f No data ")),r.a.createElement(xe,null,r.a.createElement(Ee,null,"Structure:"),r.a.createElement(Oe,null,l||"\u26a0\ufe0f No data ")),r.a.createElement(je,null,r.a.createElement(ye,{to:"/coins/".concat(n,"/markets")},"MARKETS"),r.a.createElement(ye,{to:"/coins/".concat(n,"/exchanges")},"EXCHANGES")))},we=function(e){var n=e.loading,t=e.details;return n?r.a.createElement(S,null):r.a.createElement(ke,t)},Se=function(e){function n(){var e,t;Object(O.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(y.a)(this,(e=Object(k.a)(n)).call.apply(e,[this].concat(r)))).state={loading:!0,details:null},t}return Object(w.a)(n,e),Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=Object(E.a)(x.a.mark(function e(){var n,t,a,r,c;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,t=n.match.params.id,a=n.history.push,t){e.next=3;break}return e.abrupt("return",a("/"));case 3:return e.prev=3,e.next=6,G(t);case 6:r=e.sent,c=r.data,this.setState({details:c}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0);case 14:return e.prev=14,this.setState({loading:!1}),e.finish(14);case 17:case"end":return e.stop()}},e,this,[[3,11,14,17]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(we,this.state)}}]),n}(r.a.Component);function Ce(){var e=Object(l.a)(["\n  padding-left: 15px;\n  font-weight: 600;\n  font-size: 15px;\n  color: #eb4d4b;\n  text-decoration-line: line-through;\n"]);return Ce=function(){return e},e}function ze(){var e=Object(l.a)(["\n  text-decoration-line: underline;\n"]);return ze=function(){return e},e}function Ae(){var e=Object(l.a)(["\n  margin: 10px 0px;\n"]);return Ae=function(){return e},e}var Me=s.default.div(Ae()),Ne=s.default.a(ze()),De=s.default.span(Ce()),Pe=function(e){var n=e.exchange_name,t=e.market_url;return r.a.createElement("div",null,null!==t?r.a.createElement(Ne,{href:t},r.a.createElement(Me,null,n)):r.a.createElement(Me,null,n,r.a.createElement(De,null,"Not allowed")))},_e=function(e){var n=e.loading,t=e.market;return n?r.a.createElement(S,null):t.map(function(e,n){return r.a.createElement(Pe,Object.assign({key:n},e))})},Re=function(e){function n(){var e,t;Object(O.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(y.a)(this,(e=Object(k.a)(n)).call.apply(e,[this].concat(r)))).state={loading:!0,market:[]},t}return Object(w.a)(n,e),Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=Object(E.a)(x.a.mark(function e(){var n,t,a;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props.match.params.id,e.prev=1,e.next=4,H(n);case 4:t=e.sent,a=t.data,this.setState({market:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:return e.prev=12,this.setState({loading:!1}),e.finish(12);case 15:case"end":return e.stop()}},e,this,[[1,9,12,15]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(_e,this.state)}}]),n}(r.a.Component);function Ue(){var e=Object(l.a)(["\n  padding-right: 5px;\n  font-size: 14px;\n  color: #2e86de;\n  font-weight: 600;\n"]);return Ue=function(){return e},e}function Be(){var e=Object(l.a)(["\n  font-size: 14px;\n  padding-right: 8px;\n"]);return Be=function(){return e},e}function Ge(){var e=Object(l.a)(["\n  margin-bottom: 8px;\n  font-weight: bolder;\n  font-size: 14px;\n  opacity: 0.8;\n"]);return Ge=function(){return e},e}function He(){var e=Object(l.a)(["\n  margin: 15px 0px;\n"]);return He=function(){return e},e}var Ie=s.default.div(He()),Je=s.default.div(Ge()),Le=s.default.span(Be()),Te=s.default.span(Ue()),qe=function(e){var n=e.name,t=e.fiats;return r.a.createElement(Ie,null,0===t.length?null:r.a.createElement("div",null,r.a.createElement(Je,null,n),r.a.createElement(Le,null,"Pay On"),t.map(function(e,n){return r.a.createElement(Te,{key:n},e.symbol)})))},Fe=function(e){var n=e.loading,t=e.coinex;return n?r.a.createElement(S,null):t.map(function(e){return r.a.createElement(qe,Object.assign({key:e.id},e))})},Ke=function(e){function n(){var e,t;Object(O.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(y.a)(this,(e=Object(k.a)(n)).call.apply(e,[this].concat(r)))).state={loading:!0,coinex:[]},t}return Object(w.a)(n,e),Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=Object(E.a)(x.a.mark(function e(){var n,t,a;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props.match.params.id,e.prev=1,e.next=4,I(n);case 4:t=e.sent,a=t.data,this.setState({coinex:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:return e.prev=12,this.setState({loading:!1}),e.finish(12);case 15:case"end":return e.stop()}},e,this,[[1,9,12,15]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(Fe,this.state)}}]),n}(r.a.Component),Xe=function(){return r.a.createElement(u.a,null,r.a.createElement(b,null),r.a.createElement(i.a,{path:"/",exact:!0,component:ae}),r.a.createElement(i.a,{path:"/exchanges",component:W}),r.a.createElement(i.a,{path:"/coins",exact:!0,component:J}),r.a.createElement(i.a,{path:"/coins/:id",component:Se}),r.a.createElement(i.a,{path:"/coins/:id/markets",exact:!0,component:Re}),r.a.createElement(i.a,{path:"/coins/:id/exchanges",exact:!0,component:Ke}))},Ye=t(40),$e=t.n(Ye);function Qe(){var e=Object(l.a)(["\n    ",";\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    *{\n        box-sizing:border-box;\n    }\n    body{\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        padding:30px;\n    }\n    h1 {\n      font-size:32px;\n      margin-bottom:30px;\n    }\n"]);return Qe=function(){return e},e}var Ve=Object(s.createGlobalStyle)(Qe(),$e.a);var We=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Coin Explorer"),r.a.createElement(Xe,null),r.a.createElement(Ve,null))},Ze=document.getElementById("root");o.a.render(r.a.createElement(We,null),Ze)}},[[43,1,2]]]);
//# sourceMappingURL=main.23fd7912.chunk.js.map