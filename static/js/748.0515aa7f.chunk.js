"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[748],{6589:function(e,t,r){r.d(t,{II:function(){return f},gx:function(){return h}});var s=r(1413),n=r(5987),a=(r(2791),"FormsControls_formControl__5Q0CF"),i="FormsControls_error__oBpjX",o=r(7391),l=r(184),u=["input","meta","child"],c=["input","meta","child"],d=function(e){var t=e.meta.touched&&e.meta.error;return(0,l.jsxs)("div",{className:a+" "+(t?i:""),children:[(0,l.jsx)("div",{children:e.children}),t&&(0,l.jsx)("span",{children:e.meta.error})]})},f=function(e){var t=e.input,r=(e.meta,e.child,(0,n.Z)(e,u));return(0,l.jsx)(d,(0,s.Z)((0,s.Z)({},e),{},{children:(0,l.jsx)(o.Z,(0,s.Z)((0,s.Z)({style:{minWidth:"550px"},id:"standard-basic",label:"New post",variant:"outlined"},t),r))}))},h=function(e){var t=e.input,r=(e.meta,e.child,(0,n.Z)(e,c));return(0,l.jsx)(d,(0,s.Z)((0,s.Z)({},e),{},{children:(0,l.jsx)(o.Z,(0,s.Z)((0,s.Z)({style:{minWidth:"550px"},id:"standard-basic",label:"New message",variant:"outlined"},t),r))}))}},7964:function(e,t,r){r.d(t,{Z:function(){return l}});r(2791);var s="Nav_container__ngNCO",n="Nav_ul__W+OFc",a="Nav_li__IEPlJ",i="Nav_a__cntv9",o=r(184),l=function(){return(0,o.jsx)("div",{className:s,children:(0,o.jsxs)("ul",{className:n,children:[(0,o.jsx)("li",{className:a,children:(0,o.jsx)("a",{href:"/profile",className:i,children:"Profile"})}),(0,o.jsx)("li",{className:a,children:(0,o.jsx)("a",{href:"/dialogs",className:i,children:"Messages"})}),(0,o.jsx)("li",{className:a,children:(0,o.jsx)("a",{href:"/users",className:i,children:"Users"})})]})})}},9748:function(e,t,r){r.r(t),r.d(t,{default:function(){return pe}});var s=r(1413),n=r(5671),a=r(3144),i=r(136),o=r(7277),l=r(2791),u=r(8527),c=r(885),d="ProfileStatusWithHooks_textContainer__VGic3",f="ProfileStatusWithHooks_userName__AyNSp",h="ProfileStatusWithHooks_text__Ru-vh",p="ProfileStatusWithHooks_input__4dOvD",m=r(7391),v=r(184),x=function(e){var t=(0,l.useState)(!1),r=(0,c.Z)(t,2),s=r[0],n=r[1],a=(0,l.useState)(e.status),i=(0,c.Z)(a,2),o=i[0],u=i[1];(0,l.useEffect)((function(){u(e.status)}),[e.status]);return(0,v.jsxs)("div",{className:d,children:[(0,v.jsx)("span",{className:f,children:e.profile.fullName}),!s&&(0,v.jsx)("div",{children:(0,v.jsx)("span",{style:{color:"white"},className:h,onDoubleClick:function(){n(!0),u(o)},children:e.status||"-----"})}),s&&(0,v.jsx)("div",{children:(0,v.jsx)(m.Z,{id:"standard-basic",label:"New status",variant:"standard",onChange:function(e){u(e.currentTarget.value)},onBlur:function(){n(!1),e.updateStatusThunk(o)},autoFocus:!0,value:o,className:p})})]})},A=r(4599),g="Profileinfo_image__JLxf-",j="Profileinfo_input__7TfEa",_="Profileinfo_icon__QHwGW",k="Profileinfo_avatar__yHzyM",Z="Profileinfo_infoContainer__iDy6c",N=r(3400),P=function(e){if(!e.profile)return(0,v.jsx)(u.Z,{});return(0,v.jsxs)("div",{className:g,children:[(0,v.jsxs)("div",{className:Z,children:[(0,v.jsx)("img",{src:e.profile.photos.large||A,className:k}),e.isOwner&&(0,v.jsxs)("label",{htmlFor:"load_avatar",children:[(0,v.jsx)("input",{id:"load_avatar",className:j,type:"file",onChange:function(t){t.target.files&&t.target.files.length&&e.updatePhoto(t.target.files[0])}}),(0,v.jsx)(N.Z,{component:"span",className:_,children:(0,v.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMlSURBVHgBtZc/UiJBFMZ7LKvUyNlIM9tIM9lEzcBIM9wbcAO8gXoD9QSkRltkECEZRDtkEO0QARGTARH7frMNBdQ0zODwVbUz07T9vve3XzsqJqbTqSuPRxlZGRkZWoZrfg5k+DI8GV8yyo7jBHH2dTYtEMFaHsXRaFQYDAZuu91W3W5XBUGgxuNxuObw8FCdnp6qk5MTpbVWl5eXTJdkvAoRfysCRuMXEVJsNBqq2WzOBW6C67oqk8moq6sr3t8MkSA2AaN1TQTrer0eW3AUkWw2CxlfPu+irOFECMe/vyuVikbrNHBzc6MeHh58ef0lJDwrgZnm5XJZe56n0gQuyefzvlqxxN6CcHxeQ/O0hQP2ZG9kGFnLBAQvsig1s0eBvYkreX1eIoDpJa2KBNyuYYL6ybh7boFnTERu7xpklLFykT/7xh+FVqsVexPSi8jmCWkKEZrFVYC6cn19XRDZr/vy/Uh1W/fPRPDZ2dnSXLVandcHiNzf3y/VC6qlLZhZR1WVqpmHQNb3fWUDZfX4+FhJalrXQP7z83NpDkKQhkgUOp0OZTtHDGT6/b5t77C+29yD6RlRwM+cCzYYpTNYQIs5VFLkcjl1cHAQEsCkuCQJjMs1BNyktR63DIfDuWX4ZhBLcWFkuntqC+CWRd+iDXPbAAKBzY82IJw0nAHtk6QxMDIDXOBLGq0NxFUQQGwgh0v4vSmNo0ADw1YQ8CRdrAQmk0nkPELX+XyTVQ0BDwJ1MWHBdgihLU1FkhMS4efn52HFs8EUti+HUiz93t+Pjw9rNlDpCLIksUKhWbdfsRgeBT/26dWEREmC6sl2GuLfNA8qSrughOxZGr7f3t6qpNmwDdCeZlXwyp+QAC2SCH/D17sGMuiUZ23ZvCc0x/IfKal6XfB8B1hZDilfXn/O2vR5JTQTdywwPkoV7GmE3y3eEaxteZqWWNB8fVu+QELLo0aTmqTTWQVBzakpGearuBeTBRLExLMIf6IIUevjEkEwWnNeENwq6dVshYhW/9vowuxi2uv1aKmWLqekFw3IxcUFRSs4OjoqyU/vW19OI4js5Hr+DwqHu3viv2cqAAAAAElFTkSuQmCC"})})]})]}),(0,v.jsx)(x,{status:e.status,updateStatusThunk:e.updateStatusThunk,profile:e.profile})]})},y={postsBlock:"Mypost_postsBlock__xXmBT",addContent:"Mypost_addContent__LEdQn",post:"Mypost_post__3Y39d"},C="Post_cont__fcLfe",w="Post_name__brF46",S="Post_span__bU1kt",b=r(1048),D=r(2793),R=r(8182),T=r(4419),B=r(7630),M=r(1046),F=(0,r(9201).Z)((0,v.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),I=r(5878),W=r(1217);function Q(e){return(0,W.Z)("MuiAvatar",e)}(0,I.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var E=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],U=(0,B.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})((function(e){var t=e.theme,r=e.ownerState;return(0,D.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===r.variant&&{borderRadius:(t.vars||t).shape.borderRadius},"square"===r.variant&&{borderRadius:0},r.colorDefault&&(0,D.Z)({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[600]}))})),q=(0,B.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,t){return t.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),H=(0,B.ZP)(F,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,t){return t.fallback}})({width:"75%",height:"75%"});var z=l.forwardRef((function(e,t){var r=(0,M.Z)({props:e,name:"MuiAvatar"}),s=r.alt,n=r.children,a=r.className,i=r.component,o=void 0===i?"div":i,u=r.imgProps,d=r.sizes,f=r.src,h=r.srcSet,p=r.variant,m=void 0===p?"circular":p,x=(0,b.Z)(r,E),A=null,g=function(e){var t=e.crossOrigin,r=e.referrerPolicy,s=e.src,n=e.srcSet,a=l.useState(!1),i=(0,c.Z)(a,2),o=i[0],u=i[1];return l.useEffect((function(){if(s||n){u(!1);var e=!0,a=new Image;return a.onload=function(){e&&u("loaded")},a.onerror=function(){e&&u("error")},a.crossOrigin=t,a.referrerPolicy=r,a.src=s,n&&(a.srcset=n),function(){e=!1}}}),[t,r,s,n]),o}((0,D.Z)({},u,{src:f,srcSet:h})),j=f||h,_=j&&"error"!==g,k=(0,D.Z)({},r,{colorDefault:!_,component:o,variant:m}),Z=function(e){var t=e.classes,r={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,T.Z)(r,Q,t)}(k);return A=_?(0,v.jsx)(q,(0,D.Z)({alt:s,src:f,srcSet:h,sizes:d,ownerState:k,className:Z.img},u)):null!=n?n:j&&s?s[0]:(0,v.jsx)(H,{className:Z.fallback}),(0,v.jsx)(U,(0,D.Z)({as:o,ownerState:k,className:(0,R.Z)(Z.root,a),ref:t},x,{children:A}))})),O=r(364),X=function(e){var t=(0,O.v9)((function(e){return e.profilePage.profile.fullName}));return(0,v.jsxs)("div",{className:C,children:[(0,v.jsxs)("div",{className:w,children:[(0,v.jsx)(z,{alt:"Remy Sharp",src:A,sx:{width:56,height:56}}),(0,v.jsx)("span",{children:t})]}),(0,v.jsxs)("div",{className:S,children:[(0,v.jsx)("div",{children:e.message}),(0,v.jsxs)("span",{children:["Like ",e.likesCount]})]})]})},L=r(6139),V=r(704),G="FormProfile_container__4u1Vt",Y="FormProfile_button__MKrnA",J=r(3079),K=r(6589),$=r(1686),ee=(0,J.D)(300),te=(0,V.Z)({form:"ProfileAddNewPostForm"})((function(e){return(0,v.jsx)("form",{onSubmit:e.handleSubmit,children:(0,v.jsxs)("div",{className:G,children:[(0,v.jsx)("div",{children:(0,v.jsx)(L.Z,{component:K.II,name:"newPostText",validate:[J.C,ee]})}),(0,v.jsx)("div",{children:(0,v.jsx)($.Z,{type:"submit",className:Y,onSubmit:e.handleSubmit,children:"Add post"})})]})})})),re=(0,l.memo)((function(e){var t=e.posts.map((function(e){return(0,v.jsx)(X,{id:e.id,message:e.message,likesCount:e.likesCount},e.id)}));return(0,v.jsxs)("div",{className:y.postsBlock,children:[(0,v.jsx)("h3",{className:y.post,children:"My Post"}),(0,v.jsx)(te,{onSubmit:function(t){e.addPost(t.newPostText)}}),(0,v.jsx)("div",{className:y.posts,children:t})]})})),se=r(7503),ne=(0,O.$j)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e((0,se.Pi)(t))}}}))(re),ae="Profile_container__EjHQS",ie=r(7964),oe=function(e){return(0,v.jsx)("div",{children:(0,v.jsxs)("div",{className:ae,children:[(0,v.jsx)(P,{isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatusThunk:e.updateStatusThunk,updatePhoto:e.savePhoto}),(0,v.jsx)(ie.Z,{}),(0,v.jsx)(ne,{})]})})},le=r(2558),ue=r(5987),ce=["isAuth"],de=function(e){return{isAuth:e.auth.isAuth}};var fe=r(7781),he=function(e){(0,i.Z)(r,e);var t=(0,o.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,a.Z)(r,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||null===this.props.authorizedUserId||(e=this.props.authorizedUserId.toString())||this.props.history.push("login"),this.props.ProfileThunk(e),this.props.getStatusThunk(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,r){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,v.jsx)(oe,(0,s.Z)((0,s.Z)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,savePhoto:this.props.savePhoto}))}}]),r}(l.Component),pe=(0,fe.qC)((0,O.$j)((function(e){return{profile:e.profilePage.profile,isAuth:e.auth.isAuth,status:e.profilePage.status,authorizedUserId:e.auth.id}}),{ProfileThunk:se.Ot,getStatusThunk:se.$b,updateStatusThunk:se.dw,savePhoto:se.Ju}),le.EN,(function(e){return(0,O.$j)(de)((function(t){var r=t.isAuth,n=(0,ue.Z)(t,ce);return console.log(r),r?(0,v.jsx)(e,(0,s.Z)({},n)):(0,v.jsx)(le.l_,{to:"/login"})}))}))(he)},3079:function(e,t,r){r.d(t,{C:function(){return s},D:function(){return n}});var s=function(e){if(!e)return"Field is required"},n=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},1686:function(e,t,r){var s=r(1941);t.Z=void 0;var n=s(r(5649)),a=r(184),i=(0,n.default)((0,a.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");t.Z=i},4599:function(e,t,r){e.exports=r.p+"static/media/user.53fd02f1899833f8847b.png"}}]);
//# sourceMappingURL=748.0515aa7f.chunk.js.map