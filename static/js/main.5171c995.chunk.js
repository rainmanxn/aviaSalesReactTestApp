(this.webpackJsonpavia19=this.webpackJsonpavia19||[]).push([[0],{19:function(t,e,n){},34:function(t,e,n){t.exports=n.p+"static/media/logo.0c089234.svg"},36:function(t,e,n){t.exports=n(61)},61:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(29),c=n.n(i),o=(n(19),n(11)),s=n.n(o),l=n(14),u=n(7),f=n(8),p=n(10),d=n(9),m=n(2),h=n(15),g=n.n(h),v=n(3),x=n(63),b=n(64),k=n(30),O=n.n(k);function j(){var t=Object(m.a)(["\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 21px;\n  color: #4a4a4a;\n"]);return j=function(){return t},t}function w(){var t=Object(m.a)(["\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 18px;\n  display: flex;\n  align-items: center;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  color: #a0b0b9;\n"]);return w=function(){return t},t}function F(){var t=Object(m.a)(["\n  width: 141px;\n  height: 39px;\n  display: flex;\n  flex-direction: column;\n"]);return F=function(){return t},t}function y(){var t=Object(m.a)(["\n  height: 39px;\n  width: 462px;\n  margin-bottom: 10px;\n  margin-left: 20px;\n  display: flex;\n"]);return y=function(){return t},t}function E(){var t=Object(m.a)(["\n  width: 110px;\n  height: 36px;\n  &:hover {\n    cursor: pointer;\n  }\n"]);return E=function(){return t},t}function S(){var t=Object(m.a)(["\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 24px;\n  display: flex;\n  align-items: center;\n  color: #2196f3;\n"]);return S=function(){return t},t}function C(){var t=Object(m.a)(["\n  width: 432px;\n  height: 36px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  margin-left: 20px;\n  display: flex;\n  justify-content: space-between;\n"]);return C=function(){return t},t}function A(){var t=Object(m.a)(["\n  width: 502px;\n  height: 184px;\n  background: #ffffff;\n  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 1px;\n"]);return A=function(){return t},t}var T=v.a.div(A()),B=v.a.div(C()),D=v.a.div(S()),z=v.a.img.attrs((function(t){return{src:t.img}}))(E()),I=v.a.div(y()),G=v.a.div(F()),L=v.a.div(w()),W=v.a.div(j()),P=function(t){var e=t.price,n=t.carrier,a=t.forwardRoute,i=t.timeForwardStart,c=t.timeForwardDestination,o=t.timeFlightForward,s=t.stopsForward,l=t.countStopsPhrase,u=t.backRoute,f=t.timeBackdStart,p=t.timeBackDestination,d=t.timeFlightBack,m=t.stopsBack,h=t.countStopsPhraseBack,g="http://pics.avs.io/99/36/".concat(n,".png");return r.a.createElement(T,null,r.a.createElement(B,null,r.a.createElement(D,null,"".concat(e.toLocaleString().split(",").join(" ")," \u0420")),r.a.createElement(z,{img:g})),r.a.createElement(I,null,r.a.createElement(G,null,r.a.createElement(L,null,a),r.a.createElement(W,null,"".concat(i," - ").concat(c))),r.a.createElement(G,null,r.a.createElement(L,null,"\u0412 \u043f\u0443\u0442\u0438"),r.a.createElement(W,null,o)),r.a.createElement(G,null,r.a.createElement(L,null,"".concat(l)),r.a.createElement(W,null,s))),r.a.createElement(I,null,r.a.createElement(G,null,r.a.createElement(L,null,u),r.a.createElement(W,null,"".concat(f," - ").concat(p))),r.a.createElement(G,null,r.a.createElement(L,null,"\u0412 \u043f\u0443\u0442\u0438"),r.a.createElement(W,null,d)),r.a.createElement(G,null,r.a.createElement(L,null,"".concat(h)),r.a.createElement(W,null,m))))},R=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).getDestinationTime=function(t,e){return Object(x.a)(t,e)},t.countTime=function(t){var e=Math.trunc(t/60),n=t-60*e;return"".concat(e,"\u0447 ").concat(n,"\u043c")},t.getWord=function(t){return 0===t?"\u041d\u0415\u0422 \u041f\u0415\u0420\u0415\u0421\u0410\u0414\u041e\u041a":1===t?"1 \u041f\u0415\u0420\u0415\u0421\u0410\u0414\u041a\u0410":"".concat(t," \u041f\u0415\u0420\u0415\u0421\u0410\u0414\u041a\u0418")},t}return Object(f.a)(n,[{key:"render",value:function(){var t=this;return this.props.tickets.slice(0,5).map((function(e){return r.a.createElement(P,{key:O.a.uniqueId(),price:e.price,carrier:e.carrier,forwardRoute:"".concat(e.segments[0].origin," - ").concat(e.segments[0].destination),timeForwardStart:Object(b.a)(new Date(e.segments[0].date),"kk:mm"),timeForwardDestination:Object(b.a)(Object(x.a)(new Date(e.segments[0].date),e.segments[0].duration),"kk:mm"),timeFlightForward:t.countTime(e.segments[0].duration),stopsForward:e.segments[0].stops.join(", "),countStopsPhrase:t.getWord(e.segments[0].stops.length),backRoute:"".concat(e.segments[1].origin," - ").concat(e.segments[1].destination),timeBackdStart:Object(b.a)(new Date(e.segments[1].date),"kk:mm"),timeBackDestination:Object(b.a)(Object(x.a)(new Date(e.segments[1].date),e.segments[1].duration),"kk:mm"),timeFlightBack:t.countTime(e.segments[1].duration),stopsBack:e.segments[1].stops.join(", "),countStopsPhraseBack:t.getWord(e.segments[1].stops.length)})}))}}]),n}(r.a.Component),J=n(35);function M(){var t=Object(m.a)(["\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: white;;\n  border-radius: 3px;\n  transition: all 150ms;\n  border-width: 1px;\n  border-style: solid;\n  border-color: ",";;\n  "," {\n    visibility: ","\n  }\n"]);return M=function(){return t},t}function q(){var t=Object(m.a)(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n"]);return q=function(){return t},t}function $(){var t=Object(m.a)(["\n  fill: none;\n  stroke: #2196F3;\n  stroke-width: 2px;\n"]);return $=function(){return t},t}function H(){var t=Object(m.a)(["\n  display: inline-block;\n  vertical-align: middle;\n"]);return H=function(){return t},t}var K=v.a.div(H()),N=v.a.svg($()),Q=v.a.input.attrs({type:"checkbox"})(q()),U=v.a.div(M(),(function(t){return t.checked?"#2196F3":"#9ABBCE"}),N,(function(t){return t.checked?"visible":"hidden"})),V=function(t){var e=t.checked,n=t.onChange;return r.a.createElement(K,null,r.a.createElement(Q,{checked:e,onChange:n}),r.a.createElement(U,{checked:e},r.a.createElement(N,{viewBox:"0 0 24 24"},r.a.createElement("polyline",{points:"20 6 9 17 4 12"}))))};function X(){var t=Object(m.a)(["\n  margin-left: 8px;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 20px;\n  color: #4a4a4a;\n"]);return X=function(){return t},t}function Y(){var t=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n"]);return Y=function(){return t},t}function Z(){var t=Object(m.a)(["\n  margin-left: 20px;\n  display: flex;\n  flex-direction: column;\n"]);return Z=function(){return t},t}function _(){var t=Object(m.a)(["\n  margin-top: 19px;\n  margin-left: 19px;\n  margin-bottom: 20px;\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 12px;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  color: #4a4a4a;\n"]);return _=function(){return t},t}function tt(){var t=Object(m.a)(["\n  width: 232px;\n  height: 252px;\n  background: #ffffff;\n  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  padding: 1px;\n"]);return tt=function(){return t},t}var et=v.a.div(tt()),nt=v.a.div(_()),at=v.a.div(Z()),rt=v.a.label(Y()),it=v.a.span(X()),ct=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={filterStatus:[-1]},t.handleCheckboxChange=function(e){return function(n){if(-1===e)return t.setState({filterStatus:[-1]}),void t.update(-1);var a=t.state.filterStatus;-1!==a.indexOf(-1)&&(a=[]),n.target.checked&&(a=[].concat(Object(J.a)(a),[e]),t.setState({filterStatus:a})),n.target.checked||(a=a.filter((function(t){return t!==e})),t.setState({filterStatus:a})),t.update(a)}},t.update=function(e){(0,t.props.updateFilteredTransfer)(e)},t.renderCheckboxes=function(){var e=t.state.filterStatus;return[[-1,"\u0432\u0441\u0435"],[0,"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"],[1,"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430"],[2,"2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"],[3,"3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"]].map((function(n){return r.a.createElement(rt,{key:n[0]},r.a.createElement(V,{checked:-1!==e.indexOf(n[0]),onChange:t.handleCheckboxChange(n[0])}),r.a.createElement(it,null,n[1]))}))},t}return Object(f.a)(n,[{key:"render",value:function(){return r.a.createElement(et,null,r.a.createElement(nt,null,"\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"),r.a.createElement(at,null,this.renderCheckboxes()))}}]),n}(r.a.Component);function ot(){var t=Object(m.a)(["\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 20px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  color: ",";\n"]);return ot=function(){return t},t}function st(){var t=Object(m.a)(["\n  width: 252px;\n  height: 50px;\n  border: 1px solid #dfe5ec;\n  border-radius: 10px 0 0 10px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: ",";\n  border-radius: ",";\n  :focus {\n    outline: none;\n  }\n"]);return st=function(){return t},t}function lt(){var t=Object(m.a)(["\n  width: 503px;\n  height: 50px;\n  display: flex;\n"]);return lt=function(){return t},t}var ut=v.a.div(lt()),ft=v.a.button(st(),(function(t){return t.active?"#2196f3":"#FFFFFF"}),(function(t){return t.first?"10px 0 0 10px":"0 10px 10px 0"})),pt=v.a.div(ot(),(function(t){return t.active?"#FFFFFF":"#4A4A4A"})),dt=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={isActiveCheap:!1,isActiveFast:!1},t.handleClickCheap=function(e){e.preventDefault();var n=t.state,a=n.isActiveCheap,r=n.isActiveFast,i=t.props.cheapFastGetFilter;a||i("cheapest"),a&&i("default"),a||!r?t.setState({isActiveCheap:!a}):t.setState({isActiveCheap:!a,isActiveFast:!r})},t.handleClickFast=function(e){e.preventDefault();var n=t.state,a=n.isActiveCheap,r=n.isActiveFast,i=t.props.cheapFastGetFilter;r||i("fast"),r&&i("default"),!a||r?t.setState({isActiveFast:!r}):t.setState({isActiveCheap:!a,isActiveFast:!r})},t}return Object(f.a)(n,[{key:"render",value:function(){var t=this.state,e=t.isActiveCheap,n=t.isActiveFast;return r.a.createElement(ut,null,r.a.createElement(ft,{active:e,first:!0,onClick:this.handleClickCheap},r.a.createElement(pt,{active:e},"\u0441\u0430\u043c\u044b\u0439 \u0434\u0435\u0448\u0435\u0432\u044b\u0439")),r.a.createElement(ft,{active:n,onClick:this.handleClickFast},r.a.createElement(pt,{active:n},"\u0441\u0430\u043c\u044b\u0439 \u0431\u044b\u0441\u0442\u0440\u044b\u0439")))}}]),n}(r.a.Component),mt=n(34),ht=n.n(mt);function gt(){var t=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-left: 20px;\n"]);return gt=function(){return t},t}function vt(){var t=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n"]);return vt=function(){return t},t}function xt(){var t=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  background: #F3F7FA;\n"]);return xt=function(){return t},t}function bt(){var t=Object(m.a)(["\n  height: 70px;\n  margin-top: 50px;\n  margin-bottom: 40px;\n  &:hover {\n    cursor: pointer;\n  }\n"]);return bt=function(){return t},t}var kt=v.a.img.attrs((function(t){return{src:t.img}}))(bt()),Ot=v.a.div(xt()),jt=v.a.div(vt()),wt=v.a.div(gt()),Ft=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={searchIdLink:"https://front-test.beta.aviasales.ru/search",getTicketsLink:"https://front-test.beta.aviasales.ru/tickets?searchId=",tickets:[],filtered:[],filt:""},t.getTickets=Object(l.a)(s.a.mark((function e(){var n,a,r,i,c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state,a=n.searchIdLink,r=n.getTicketsLink,e.prev=1,e.next=4,g.a.get(a);case 4:return i=e.sent,c=i.data.searchId,e.next=8,g.a.get("".concat(r).concat(c));case 8:o=e.sent,t.setState({tickets:o.data.tickets}),t.setState({filtered:o.data.tickets}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),t.getTickets();case 16:case"end":return e.stop()}}),e,null,[[1,13]])}))),t.getTransferCountFilteredArr=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(4!==n.length){var a=e.filter((function(t){return-1===n.indexOf(t.segments[0].stops.length)&&-1===n.indexOf(t.segments[1].stops.length)}));a=t.sortArr(a),t.setState({filtered:a})}else{var r=t.sortArr(e);t.setState({filtered:r})}},t.updateFilteredTransfer=function(e){var n=t.state.tickets,a=[0,1,2,3];if(-1!==e){var r=a.filter((function(t){return-1===e.indexOf(t)}));t.getTransferCountFilteredArr(n,r)}else t.getTransferCountFilteredArr(n,a)},t.cheapFastGetFilter=function(e){var n=t.state.filtered;if(t.setState({filt:e}),"cheapest"===e){var a=n;return a.sort((function(t,e){return t.price-e.price})),void t.setState({filtered:a})}if("fast"===e){var r=n;r.sort((function(t,e){return t.segments[0].duration+t.segments[1].duration-(e.segments[0].duration+e.segments[1].duration)})),t.setState({filtered:r})}},t.sortArr=function(e){var n=t.state.filt;if("cheapest"===n){var a=e;return a.sort((function(t,e){return t.price-e.price})),a}if("fast"===n){var r=e;return r.sort((function(t,e){return t.segments[0].duration+t.segments[1].duration-(e.segments[0].duration+e.segments[1].duration)})),r}return e},t}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var t=Object(l.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.getTickets();case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.filtered;return r.a.createElement(Ot,null,r.a.createElement(kt,{img:ht.a}),r.a.createElement(jt,null,r.a.createElement(ct,{updateFilteredTransfer:this.updateFilteredTransfer}),r.a.createElement(wt,null,r.a.createElement(dt,{cheapFastGetFilter:this.cheapFastGetFilter}),r.a.createElement(R,{tickets:t}))))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Ft,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.5171c995.chunk.js.map