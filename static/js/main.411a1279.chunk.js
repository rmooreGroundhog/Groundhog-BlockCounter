(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,t,n){e.exports=n.p+"static/media/logo.f2366047.png"},120:function(e,t,n){e.exports=n(308)},125:function(e,t,n){},158:function(e,t){},160:function(e,t){},187:function(e,t){},232:function(e,t){},306:function(e,t,n){},308:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n.n(a),o=n(112),s=n.n(o),c=(n(125),n(113)),l=n(114),i=n(118),u=n(115),m=n(119),h=n(116),g=n.n(h),d=n(117),p=n.n(d),f=n(56),k=n.n(f),N=(n(306),new p.a("https://mainnet.infura.io")),E=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={blockNumber:0,forkDate:"2019-01-17",finalBlockNumber:708e4,days:"x",hours:"x",minutes:"x"},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval(function(){return e.updateInfura()},2e3)}},{key:"updateInfura",value:function(){var e=this;return N.eth.getBlockNumber().then(function(t){var n=15*(e.state.finalBlockNumber-t),a=new k.a.duration(n,"s"),r=new k.a;e.setState({blockNumber:t,forkDate:r.add(n,"seconds").format("YYYY-MM-DD"),days:a.days(),hours:a.hours(),minutes:a.minutes()})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:g.a,className:"App-logo",alt:"logo"}),r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"thinFont center-align orange-text"},"Constantinople Fork"),r.a.createElement("h1",{className:"thinFont center-align"},r.a.createElement("span",{id:"currentBlock",className:"groundhog-green text-accent-2 smallScreen orange-text"},this.state.blockNumber.toLocaleString())," / ",r.a.createElement("span",{id:"forkBlock",className:"orange-text smallScreen"},this.state.finalBlockNumber.toLocaleString()),r.a.createElement("span",null,"\xa0\xa0Blocks\xa0")),r.a.createElement("h2",{className:"thinFont center-align orange-text"},"~",r.a.createElement("span",{className:"center-align groundhog-green"},this.state.days),r.a.createElement("span",{className:"center-align"}," Days "),r.a.createElement("span",{className:"center-align groundhog-green"},this.state.hours),r.a.createElement("span",{className:"center-align"}," Hours "),r.a.createElement("span",{className:"center-align groundhog-green"},this.state.minutes),r.a.createElement("span",{className:"center-align"}," Minutes")),r.a.createElement("h3",null,"~ ",this.state.forkDate))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[120,2,1]]]);
//# sourceMappingURL=main.411a1279.chunk.js.map