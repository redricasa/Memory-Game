(this.webpackJsonpclicky=this.webpackJsonpclicky||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"ge\'ez number one","image":"images/1.png","label":1},{"id":2,"name":"ge\'ez number two","image":"images/2.png","label":2},{"id":3,"name":"ge\'ez number three","image":"images/3.png","label":3},{"id":4,"name":"ge\'ez number four","image":"images/4.png","label":4},{"id":5,"name":"ge\'ez number five","image":"images/5.png","label":5},{"id":6,"name":"ge\'ez number six","image":"images/6.png","label":6},{"id":7,"name":"ge\'ez number seven","image":"images/7.png","label":7},{"id":8,"name":"ge\'ez number eight","image":"images/8.png","label":8},{"id":9,"name":"ge\'ez number nine","image":"images/9.png","label":9},{"id":10,"name":"ge\'ez number ten","image":"images/10.png","label":10},{"id":11,"name":"ge\'ez number twenty","image":"images/20.png","label":20},{"id":12,"name":"ge\'ez number thirty","image":"images/30.png","label":30},{"id":13,"name":"ge\'ez number forty","image":"images/40.png","label":40},{"id":14,"name":"ge\'ez number fifty","image":"images/50.png","label":50},{"id":15,"name":"ge\'ez number sixty","image":"images/60.png","label":60},{"id":16,"name":"ge\'ez number seventy","image":"images/70.png","label":70},{"id":17,"name":"ge\'ez number eighty","image":"images/80.png","label":80},{"id":18,"name":"ge\'ez number ninty","image":"images/90.png","label":90}]')},,,,,,,,,,function(e,a,n){e.exports=n(22)},,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},,,function(e,a,n){"use strict";n.r(a);var t=n(0),i=n.n(t),r=n(9),l=n.n(r),c=n(2),m=n(3),s=n(5),o=n(4),g=n(7),u=n(6),b=(n(16),function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"jumbotron jumbotron-fluid"},i.a.createElement("div",{className:"container"},i.a.createElement("h1",{className:"display-4"},"Memory Game"),i.a.createElement("h4",{className:"lead"},"Click on the images showing Ge'ez numbers. Make sure it's a unique one or you'll have to start all over!")))}}]),a}(t.Component));n(17);var d=function(e){console.log("Navbar props: ",e);var a=e.score,n=e.topScore,t=e.message;return console.log("score: ",a),console.log("message: ",t),console.log("top score: ",n),i.a.createElement("div",{className:"navbar-fixed"},i.a.createElement("nav",{className:"navbar"},i.a.createElement("ul",null,i.a.createElement("li",{className:"brand"},i.a.createElement("a",{href:"/"}," Memory Game ")),i.a.createElement("li",{className:"msg"},i.a.createElement("a",{href:"#!"},t)),i.a.createElement("li",{className:"score"},i.a.createElement("a",{href:"#!"},"Score: ",a," | Top Score: ",n," ")))))},p=(n(18),function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement("footer",{className:"page-footer"},i.a.createElement("div",{className:"footer-copyright"},i.a.createElement("div",{className:"container"},"\xa9 2019 Copyright Frederica Blissett")))}}]),a}(t.Component));n(19);var h=function(e){return console.log("Geez compponent props:",e),i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-image"},i.a.createElement("img",{alt:e.name,src:e.image,onClick:function(){return e.onClick(e.id)}})))},f=n(1),y=n(10),v=n.n(y),E=function(e){function a(e){var n;return Object(c.a)(this,a),(n=Object(s.a)(this,Object(o.a)(a).call(this,e))).state={count:0,topScore:0,clickedArray:[],message:"click on a Ge'ez number to start!"},n.handleClick=function(e){n.state.clickedArray.includes(e)&&n.setState({count:0,clickedArray:[],message:"Oops!! Game Over"});var a=n.state.count+1;n.state.clickedArray.includes(e)||n.setState({clickedArray:n.state.clickedArray.concat([e]),count:a,message:"YAY!!"}),console.log("clicked ID",e),console.log("props id: "),a>=n.state.topScore&&n.setState({topScore:a})},n.handleClick=n.handleClick.bind(Object(g.a)(n)),n}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){for(var e=[],a=0;a<f.length;a++)e.push(i.a.createElement(h,{image:f[a].image,name:f[a].name,label:f[a].label,onClick:this.handleClick,id:f[a].id,key:f[a].id}));return e=v.a.shuffle(e),console.log(e),i.a.createElement(i.a.Fragment,null,i.a.createElement(d,{score:this.state.count,message:this.state.message,topScore:this.state.topScore}),i.a.createElement(b,null),i.a.createElement("main",{className:"container"},e),i.a.createElement(p,null))}}]),a}(t.Component);l.a.render(i.a.createElement(E,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.dc279110.chunk.js.map