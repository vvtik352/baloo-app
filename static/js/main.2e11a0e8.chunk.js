(this["webpackJsonpbaloo-app"]=this["webpackJsonpbaloo-app"]||[]).push([[0],{10:function(e,t,s){e.exports={instagramItems:"styles_instagramItems__3G5il",instagramItem:"styles_instagramItem__367Dy",instagramImg:"styles_instagramImg__d1XvF",overlay:"styles_overlay__6NaYY",instagramIcon:"styles_instagramIcon__3GmSO",errorMessage:"styles_errorMessage__30moD",image:"styles_image__2IL4l"}},39:function(e,t,s){},40:function(e,t,s){},46:function(e,t,s){},50:function(e,t,s){"use strict";s.r(t);var a=s(0),i=s.n(a),n=s(11),c=s.n(n),r=(s(39),s(19)),o=s(20),l=s(14),d=s(24),m=s(23),h=s.p+"static/media/BALOO.d033f429.png",j=(s(40),s(10)),b=s.n(j),u=(s(29),s(71)),p=(s(79),s(73),s(77),s(75),s(74),s(78),s(76),s(26),s(43),s(44),s(45),s(46),s(2));Object(u.a)({root:{maxWidth:405}});var O=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).state={feeds:[],isError:"",isLoaded:!1},a}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this,t="https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url,caption&&access_token=".concat(this.props.token);fetch(t).then((function(e){return e.json()})).then((function(t){console.log(t),t.hasOwnProperty("error")?e.setState({isLoaded:!0,isError:!0}):e.setState({isLoaded:!0,feeds:t.data,isError:!1})})).catch((function(t){console.error("Error:",t),e.setState({isLoaded:!0,isError:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.isError,s=e.isLoaded,a=e.feeds;return t?Object(p.jsx)("div",{className:b.a.errorMessage,children:Object(p.jsx)("p",{children:" the access token is not valid"})}):s?(console.log(a),Object(p.jsx)("div",{className:b.a.instagramItems,children:a.slice(0,this.props.counter).map((function(e,t){return Object(p.jsx)("div",{className:b.a.instagramItem,children:"IMAGE"===e.media_type||"CAROUSEL_ALBUM"===e.media_type?Object(p.jsxs)("div",{class:b.a.instagramItem,children:[Object(p.jsxs)("a",{href:e.permalink,className:"ig-instagram-link",target:"_blank",rel:"noreferrer",children:["              ",Object(p.jsx)("div",{className:b.a.instagramIcon,children:Object(p.jsx)("div",{className:"instagram-count-item",children:Object(p.jsx)("span",{className:"icon",children:Object(p.jsx)("svg",{height:"18",viewBox:"0 0 512 512",width:"18",children:Object(p.jsx)("path",{fill:"currentColor",d:"m256 386c-71.683 0-130-58.317-130-130 7.14-172.463 252.886-172.413 260 .001 0 71.682-58.317 129.999-130 129.999zm0-220c-49.626 0-90 40.374-90 90 4.944 119.397 175.074 119.362 180-.001 0-49.625-40.374-89.999-90-89.999zm236 346h-472c-11.046 0-20-8.954-20-20v-472c0-11.046 8.954-20 20-20h472c11.046 0 20 8.954 20 20v472c0 11.046-8.954 20-20 20zm-452-40h432v-432h-432zm372-392c-11.046 0-20 8.954-20 20 0 11.046 8.954 20 20 20 11.046 0 20-8.954 20-20 0-11.046-8.954-20-20-20z"})})})})}),Object(p.jsx)("div",{class:b.a.overlay,children:e.caption.substr(12,70)+"..."})]},t),Object(p.jsx)("img",{className:b.a.instagramImg,src:e.media_url,alt:"description"},t)]}):Object(p.jsx)("video",{className:b.a.instagramImg,src:e.media_url,type:"video/mp4"},t)},t)}))})):Object(p.jsx)("div",{children:" Loading... "})}}]),s}(a.Component),g=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).state={animals:!0,support:!1,about:!1,items:[]},a.isShowAbout=a.isShowAbout.bind(Object(l.a)(a)),a.isAnimals=a.isAnimals.bind(Object(l.a)(a)),a.isSupport=a.isSupport.bind(Object(l.a)(a)),a}return Object(o.a)(s,[{key:"isShowAbout",value:function(){this.setState({about:!this.state.about}),console.log(this.state.about)}},{key:"isSupport",value:function(){this.setState({support:!this.state.support})}},{key:"isAnimals",value:function(){this.setState({animals:!this.state.animals})}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("header",{className:"App-header",children:[Object(p.jsx)("img",{src:h,className:"App-logo",alt:"logo"}),Object(p.jsx)("div",{className:"navbar",children:Object(p.jsxs)("div",{className:"Header_links",children:[Object(p.jsx)("div",{className:"Header_link",onClick:this.isSupport,children:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430"}),Object(p.jsx)("div",{className:"Header_link",onClick:this.isShowAbout,children:"\u041e \u043d\u0430\u0441"})]})})]}),Object(p.jsxs)("div",{className:"tab_content",children:[Object(p.jsxs)("div",{className:this.state.about?"about_show":"about_hide",children:[Object(p.jsx)("h1",{children:"\u041c\u044b \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0432\u043e\u043b\u043e\u043d\u0442\u0451\u0440\u043e\u0432: \u0410\u043d\u044f \u0438 \u0410\u043b\u0438\u0441\u0430."}),Object(p.jsxs)("h3",{children:[Object(p.jsx)("p",{}),"\u0412\u043c\u0435\u0441\u0442\u0435 \u043c\u044b \u043d\u0435 \u043f\u0435\u0440\u0432\u044b\u0439 \u0433\u043e\u0434 \u043f\u043e\u0434\u0431\u0438\u0440\u0430\u0435\u043c \u0438 \u043d\u0430\u0445\u043e\u0434\u0438\u043c \u0434\u043e\u043c \u0441\u043e\u0431\u0430\u043a\u0430\u043c \u0438 \u043a\u043e\u0448\u043a\u0430\u043c.",Object(p.jsx)("p",{})," \u041d\u0430 \u044d\u0442\u043e\u043c \u0441\u0430\u0439\u0442\u0435 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u043d\u0430\u0448\u0438\u0445 \u043f\u043e\u0434\u043e\u043f\u0435\u0447\u043d\u044b\u0445",Object(p.jsx)("p",{}),"\u0412\u0441\u0435 \u0436\u0438\u0432\u043e\u0442\u043d\u044b\u0435 \u0437\u0434\u043e\u0440\u043e\u0432\u044b, \u043f\u0440\u0438\u0432\u0438\u0442\u044b \u0438 \u0433\u043e\u0442\u043e\u0432\u044b \u0441\u0442\u0430\u0442\u044c \u0434\u043e\u043c\u0430\u0448\u043d\u0438\u043c\u0438. \u0417\u0432\u043e\u043d\u0438\u0442\u0435 \u0438 \u043f\u0440\u0438\u0435\u0437\u0436\u0430\u0439\u0442\u0435 \u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f!"]})]}),Object(p.jsx)("div",{className:this.state.animals?"animals_list":"animals_list_hide",children:Object(p.jsx)(O,{token:"IGQVJYWEJFTC1xZAnRBOFpHWTZAXaDNXZAHhuckxWMTB2TndOUWh0TkNiNWV4MjRWYmNUZAUpXQl90TXN3VDBLdVRzWlhhcTBqX2wwQWVpTXZALWm9WSGdFYVdNWlVnNkxmYTFKd0lDRVd3"})})]})]})}}]),s}(i.a.Component),v=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,81)).then((function(t){var s=t.getCLS,a=t.getFID,i=t.getFCP,n=t.getLCP,c=t.getTTFB;s(e),a(e),i(e),n(e),c(e)}))};c.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(g,{})}),document.getElementById("root")),v()}},[[50,1,2]]]);
//# sourceMappingURL=main.2e11a0e8.chunk.js.map