(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(6),l=n.n(o),i=n(1),r=n(2),s=n(4),m=n(3),u=(n(12),function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={time:(new Date).toLocaleTimeString()},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=setInterval((function(){e.setState({time:(new Date).toLocaleTimeString()}),console.log(e.state.time)}),1e3)}},{key:"componentDidUpdate",value:function(e){var t=this.props.clockName;e.clockName!==t&&console.log("The Clock was renamed from ".concat(e.clockName," to ").concat(t))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){return a.a.createElement("span",{className:"clock"},this.state.time)}}]),n}(a.a.Component)),k=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={isClockVisible:!1,clockName:"Petro"},e.showClock=function(){e.setState({isClockVisible:!0})},e.hideClock=function(){e.setState({isClockVisible:!1})},e.setClockName=function(){e.setState({clockName:String(Math.floor(51*Math.random())+0)})},e}return Object(r.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"React clock"),a.a.createElement("p",null,"Current Time:"," ",this.state.isClockVisible&&a.a.createElement(u,{clockName:this.state.clockName})),a.a.createElement("button",{type:"button",onClick:this.showClock},"Show Clock"),a.a.createElement("button",{type:"button",onClick:this.hideClock},"Hide Clock"),a.a.createElement("button",{type:"button",onClick:this.setClockName},"Random Name"))}}]),n}(a.a.Component);l.a.render(a.a.createElement(k,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.5c762f73.chunk.js.map