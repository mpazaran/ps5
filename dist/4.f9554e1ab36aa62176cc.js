/*!
 * @version 28b06eb-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{JjHE:function(e,n,r){(n=e.exports=r("PBB4")(!1)).push([e.i,".banner-root-rfO {\n}\na.banner-link-1yV {\n    text-decoration: none;\n}\n.banner-wrapper-2ZU {\n    background-clip: padding-box;\n    border-radius: inherit;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n    overflow: hidden;\n}\n.banner-overlay-3HW {\n    padding: 30px;\n    transition: background-color 500ms ease;\n    align-items: center;\n    display: flex;\n    flex-wrap: wrap;\n}\n.banner-content-3KO {\n    min-height: 50px;\n    width: 100%;\n}\n.banner-button-djg {\n    margin: 20px 0 0 0;\n    max-width: 100%;\n    text-align: inherit;\n    transition: opacity 500ms ease;\n    word-break: break-word;\n    width: 100%;\n}\n.banner-root-rfO:hover .banner-buttonHover-2Yb {\n    opacity: 1;\n}\n.banner-buttonHover-2Yb {\n    opacity: 0;\n}\n.banner-posterOverlay-SVh {\n    align-content: center;\n    justify-content: center;\n}\n.banner-posterOverlayHover-19Z {\n    background-color: transparent !important;\n}\n.banner-collageLeftOverlay-3Sg {\n    margin-right: auto;\n    max-width: 540px;\n}\n.banner-collageLeftOverlayHover-2zs {\n    background-color: transparent !important;\n}\n.banner-collageCenteredOverlay-2Rc {\n    margin-right: auto;\n    margin-left: auto;\n    max-width: 540px;\n}\n.banner-collageCenteredOverlayHover-OQk {\n    background-color: transparent !important;\n}\n.banner-collageRightOverlay-28E {\n    margin-left: auto;\n    max-width: 540px;\n}\n.banner-collageRightOverlayHover-v4s {\n    background-color: transparent !important;\n}\n",""]),n.locals={root:"banner-root-rfO",link:"banner-link-1yV",wrapper:"banner-wrapper-2ZU",overlay:"banner-overlay-3HW",content:"banner-content-3KO",button:"banner-button-djg",buttonHover:"banner-buttonHover-2Yb banner-button-djg",posterOverlay:"banner-posterOverlay-SVh banner-overlay-3HW",posterOverlayHover:"banner-posterOverlayHover-19Z banner-posterOverlay-SVh banner-overlay-3HW",collageLeftOverlay:"banner-collageLeftOverlay-3Sg banner-overlay-3HW",collageLeftOverlayHover:"banner-collageLeftOverlayHover-2zs banner-collageLeftOverlay-3Sg banner-overlay-3HW",collageCenteredOverlay:"banner-collageCenteredOverlay-2Rc banner-overlay-3HW",collageCenteredOverlayHover:"banner-collageCenteredOverlayHover-OQk banner-collageCenteredOverlay-2Rc banner-overlay-3HW",collageRightOverlay:"banner-collageRightOverlay-28E banner-overlay-3HW",collageRightOverlayHover:"banner-collageRightOverlayHover-v4s banner-collageRightOverlay-28E banner-overlay-3HW"}},NpLn:function(e,n,r){"use strict"
r.r(n)
var a=r("RhWx"),t=r.n(a),o=r("97Jx"),l=r.n(o),i=r("ddV6"),g=r.n(i),c=r("ERkP"),s=r.n(c),d=r("aebg"),b=r.n(d),v=r("HMMy"),p=r("aWzz"),y=r("loE8"),u=r("OAUc"),m=r("7PYs"),O=r("daAW"),h=r("zCf4"),f=function toHTML(e){return{__html:e}},H=function handleDragStart(e){return e.preventDefault()},k=function Banner(e){var n=Object(v.b)(b.a,e.classes),r=Object(c.useState)(!1),a=g()(r,2),o=a[0],i=a[1],d=function toggleHover(){return i(!o)},p=e.appearance,h=void 0===p?"poster":p,k=e.minHeight,w=e.backgroundColor,R=e.desktopImage,x=e.mobileImage,C=e.backgroundSize,L=e.backgroundPosition,j=e.backgroundAttachment,T=e.backgroundRepeat,W=e.textAlign,E=e.border,S=e.borderColor,B=e.borderWidth,I=e.borderRadius,N=e.content,z=e.showButton,A=e.buttonType,M=e.buttonText,P=e.link,V=e.linkType,J=e.openInNewTab,Y=void 0!==J&&J,Z=e.showOverlay,D=e.overlayColor,K=e.marginTop,U=e.marginRight,_=e.marginBottom,Q=e.marginLeft,q=e.paddingTop,F=e.paddingRight,G=e.paddingBottom,X=e.paddingLeft,$=e.cssClasses,ee=void 0===$?[]:$,ne=R
x&&window.matchMedia("(max-width: 768px)").matches&&(ne=x)
var re={marginTop:K,marginRight:U,marginBottom:_,marginLeft:Q},ae={backgroundColor:w,border:E,borderColor:S,borderWidth:B,borderRadius:I,textAlign:W},te={backgroundColor:"never"!==Z?D:null},oe={}
if(ne){var le=Object(m.a)(ne,{type:"image-wysiwyg",quality:85})
ae.backgroundImage="url(".concat(le,")"),ae.backgroundSize=C,ae.backgroundPosition=L,ae.backgroundAttachment=j,ae.backgroundRepeat=T?"repeat":"no-repeat"}"poster"===h?(ae.minHeight=k,te.minHeight=k,te.paddingTop=q,te.paddingRight=F,te.paddingBottom=G,te.paddingLeft=X,oe.width="100%"):(ae.minHeight=k,ae.paddingTop=q,ae.paddingRight=F,ae.paddingBottom=G,ae.paddingLeft=X)
var ie,ge={poster:n.posterOverlay,"collage-left":n.collageLeftOverlay,"collage-centered":n.collageCenteredOverlay,"collage-right":n.collageRightOverlay},ce={poster:n.posterOverlayHover,"collage-left":n.collageLeftOverlayHover,"collage-centered":n.collageCenteredOverlayHover,"collage-right":n.collageRightOverlayHover}
if("never"!==z){var se="hover"===z?n.buttonHover:n.button
ie=s.a.createElement("div",{className:se},s.a.createElement(y.a,{priority:{primary:"high",secondary:"normal",link:"low"}[A],type:"button"},M))}var de="hover"!==Z||o?ge[h]:ce[h],be=s.a.createElement("div",{className:n.wrapper,style:ae},s.a.createElement("div",{className:de,style:te},s.a.createElement("div",{className:n.content,style:oe,dangerouslySetInnerHTML:f(N)}),ie))
if("string"==typeof P){var ve=Object(u.a)(P,V),pe=ve.to?O.b:"a"
be=s.a.createElement(pe,l()({className:n.link},ve,Y?{target:"_blank"}:"",{onDragStart:H}),be)}return s.a.createElement("div",{className:[n.root].concat(t()(ee)).join(" "),style:re,onMouseEnter:d,onMouseLeave:d},be)}
k.propTypes={classes:Object(p.shape)({root:p.string,link:p.string,wrapper:p.string,overlay:p.string,content:p.string,button:p.string,buttonHover:p.string,posterOverlay:p.string,posterOverlayHover:p.string,collageLeftOverlay:p.string,collageLeftOverlayHover:p.string,collageCenteredOverlay:p.string,collageCenteredOverlayHover:p.string,collageRightOverlay:p.string,collageRightOverlayHover:p.string}),appearance:Object(p.oneOf)(["poster","collage-left","collage-centered","collage-right"]),minHeight:p.string,backgroundColor:p.string,desktopImage:p.string,mobileImage:p.string,backgroundSize:p.string,backgroundPosition:p.string,backgroundAttachment:p.string,backgroundRepeat:p.bool,content:p.string,link:p.string,linkType:Object(p.oneOf)(["default","product","category","page"]),openInNewTab:p.bool,showButton:Object(p.oneOf)(["always","hover","never"]),buttonText:p.string,buttonType:Object(p.oneOf)(["primary","secondary","link"]),showOverlay:Object(p.oneOf)(["always","hover","never"]),overlayColor:p.string,textAlign:p.string,border:p.string,borderColor:p.string,borderWidth:p.string,borderRadius:p.string,marginTop:p.string,marginRight:p.string,marginBottom:p.string,marginLeft:p.string,paddingTop:p.string,paddingRight:p.string,paddingBottom:p.string,cssClasses:Object(p.arrayOf)(p.string),history:p.object}
var w=Object(h.g)(k)
r.d(n,"default",function(){return w})},aebg:function(e,n,r){var a=r("JjHE")
"string"==typeof a&&(a=[[e.i,a,""]])
var t={hmr:!0,transform:void 0,insertInto:void 0}
r("cuK8")(a,t)
a.locals&&(e.exports=a.locals)}}])
