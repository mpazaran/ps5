/*!
 * @version b50000d-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"Gz+q":function(n,r,e){"use strict"
e.r(r)
var o=e("RhWx"),i=e.n(o),t=e("ERkP"),a=e.n(t),l=e("aWzz"),s=e("qnec"),d=e.n(s),c=e("lOQc"),g=e.n(c),p=e("HMMy"),b=function Slider(n){var r=Object(p.b)(g.a,n.classes),e=n.minHeight,o=n.autoplay,l=n.autoplaySpeed,s=n.fade,c=n.infinite,b=n.showArrows,h=n.showDots,v=n.textAlign,k=n.border,f=n.borderColor,y=n.borderWidth,u=n.borderRadius,m=n.marginTop,x=n.marginRight,w=n.marginBottom,O=n.marginLeft,A=n.paddingTop,H=n.paddingRight,R=n.paddingBottom,L=n.paddingLeft,W=n.cssClasses,j=void 0===W?[]:W,C=n.children,B={minHeight:e,textAlign:v,border:k,borderColor:f,borderWidth:y,borderRadius:u,marginTop:m,marginRight:x,marginBottom:w,marginLeft:O,paddingTop:A,paddingRight:H,paddingBottom:R,paddingLeft:L},E={dots:h,arrows:b,infinite:c,autoplay:o,autoplaySpeed:l,fade:s}
return t.Children.map(C,function(n){return n.props&&n.props.data&&(n.props.data.classes={root:r.bannerRoot,link:r.bannerLink,wrapper:r.bannerWrapper,posterOverlay:r.bannerPosterOverlay}),n}),a.a.createElement("div",{className:[r.root].concat(i()(j)).join(" "),style:B},a.a.createElement(d.a,E,C))}
b.propTypes={classes:Object(l.shape)({root:l.string,bannerRoot:l.string,bannerLink:l.string,bannerWrapper:l.string,bannerPosterOverlay:l.string}),appearance:Object(l.oneOf)(["default"]),minHeight:l.string,autoplay:l.bool,autoplaySpeed:l.number,fade:l.bool,infinite:l.bool,showArrows:l.bool,showDots:l.bool,textAlign:l.string,border:l.string,borderColor:l.string,borderWidth:l.string,borderRadius:l.string,marginTop:l.string,marginRight:l.string,marginBottom:l.string,marginLeft:l.string,paddingTop:l.string,paddingRight:l.string,paddingBottom:l.string,paddingLeft:l.string,cssClasses:Object(l.arrayOf)(l.string)}
var h=b
e.d(r,"default",function(){return h})},JjHE:function(n,r,e){(r=n.exports=e("PBB4")(!1)).push([n.i,".banner-root-rfO {\n}\na.banner-link-1yV {\n    text-decoration: none;\n}\n.banner-wrapper-2ZU {\n    background-clip: padding-box;\n    border-radius: inherit;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n    overflow: hidden;\n}\n.banner-overlay-3HW {\n    padding: 30px;\n    transition: background-color 500ms ease;\n    align-items: center;\n    display: flex;\n    flex-wrap: wrap;\n}\n.banner-content-3KO {\n    min-height: 50px;\n    width: 100%;\n}\n.banner-button-djg {\n    margin: 20px 0 0 0;\n    max-width: 100%;\n    text-align: inherit;\n    transition: opacity 500ms ease;\n    word-break: break-word;\n    width: 100%;\n}\n.banner-root-rfO:hover .banner-buttonHover-2Yb {\n    opacity: 1;\n}\n.banner-buttonHover-2Yb {\n    opacity: 0;\n}\n.banner-posterOverlay-SVh {\n    align-content: center;\n    justify-content: center;\n}\n.banner-posterOverlayHover-19Z {\n    background-color: transparent !important;\n}\n.banner-collageLeftOverlay-3Sg {\n    margin-right: auto;\n    max-width: 540px;\n}\n.banner-collageLeftOverlayHover-2zs {\n    background-color: transparent !important;\n}\n.banner-collageCenteredOverlay-2Rc {\n    margin-right: auto;\n    margin-left: auto;\n    max-width: 540px;\n}\n.banner-collageCenteredOverlayHover-OQk {\n    background-color: transparent !important;\n}\n.banner-collageRightOverlay-28E {\n    margin-left: auto;\n    max-width: 540px;\n}\n.banner-collageRightOverlayHover-v4s {\n    background-color: transparent !important;\n}\n",""]),r.locals={root:"banner-root-rfO",link:"banner-link-1yV",wrapper:"banner-wrapper-2ZU",overlay:"banner-overlay-3HW",content:"banner-content-3KO",button:"banner-button-djg",buttonHover:"banner-buttonHover-2Yb banner-button-djg",posterOverlay:"banner-posterOverlay-SVh banner-overlay-3HW",posterOverlayHover:"banner-posterOverlayHover-19Z banner-posterOverlay-SVh banner-overlay-3HW",collageLeftOverlay:"banner-collageLeftOverlay-3Sg banner-overlay-3HW",collageLeftOverlayHover:"banner-collageLeftOverlayHover-2zs banner-collageLeftOverlay-3Sg banner-overlay-3HW",collageCenteredOverlay:"banner-collageCenteredOverlay-2Rc banner-overlay-3HW",collageCenteredOverlayHover:"banner-collageCenteredOverlayHover-OQk banner-collageCenteredOverlay-2Rc banner-overlay-3HW",collageRightOverlay:"banner-collageRightOverlay-28E banner-overlay-3HW",collageRightOverlayHover:"banner-collageRightOverlayHover-v4s banner-collageRightOverlay-28E banner-overlay-3HW"}},b1Jx:function(n,r,e){(r=n.exports=e("PBB4")(!1)).i(e("JjHE"),""),r.push([n.i,".slider-root-1Af {\n    display: block;\n    position: relative;\n    touch-action: pan-y;\n    user-select: none;\n}\n\n.slider-bannerRoot-1bC {\n    min-height: inherit;\n}\n.slider-bannerLink-439 {\n    min-height: inherit;\n}\n.slider-bannerWrapper-3XA {\n    min-height: inherit;\n}\n.slider-bannerPosterOverlay-3j8 {\n    min-height: inherit;\n}\n\n.slider-root-1Af .slick-slider {\n    min-height: inherit;\n}\n\n.slider-root-1Af .slick-list {\n    display: block;\n    margin: 0;\n    overflow: hidden;\n    padding: 0;\n    position: relative;\n    min-height: inherit;\n}\n\n.slider-root-1Af .slick-list:focus {\n    outline: none;\n}\n\n.slider-root-1Af .slick-list.dragging {\n    cursor: pointer;\n    cursor: hand;\n}\n\n.slider-root-1Af .slick-track {\n    display: block;\n    left: 0;\n    margin-left: auto;\n    margin-right: auto;\n    position: relative;\n    top: 0;\n    min-height: inherit;\n}\n\n.slider-root-1Af .slick-track .slick-slide > div {\n    min-height: inherit;\n}\n\n.slider-root-1Af .slick-track:before,\n.slider-root-1Af .slick-track:after {\n    content: '';\n    display: table;\n}\n\n.slider-root-1Af .slick-track:after {\n    clear: both;\n}\n\n.slick-loading .slick-track {\n    visibility: hidden;\n}\n\n.slider-root-1Af .slick-slide {\n    display: none;\n    float: left;\n    height: 100%;\n    min-height: inherit;\n}\n\n[dir='rtl'] .slider-root-1Af .slick-slide {\n    float: right;\n}\n\n.slider-root-1Af .slick-slide img {\n    display: block;\n}\n.slider-root-1Af .slick-slide.slick-loading img {\n    display: none;\n}\n\n.slider-root-1Af .slick-slide.dragging img {\n    pointer-events: none;\n}\n\n.slick-initialized .slick-slide {\n    display: block;\n}\n\n.slick-loading .slick-slide {\n    visibility: hidden;\n}\n\n.slider-root-1Af .slick-vertical .slick-loading {\n    border: 1px solid transparent;\n    display: block;\n    height: auto;\n}\n\n.slider-root-1Af .slick-slider .slick-track,\n.slider-root-1Af .slick-slider .slick-list {\n    transform: translate3d(0, 0, 0);\n}\n\n.slider-root-1Af .slick-arrow.slick-hidden {\n    display: none;\n}\n\n.slider-root-1Af .slick-prev,\n.slider-root-1Af .slick-next {\n    opacity: 0;\n    transition: 0.3s;\n}\n.slider-root-1Af:hover .slick-prev,\n.slider-root-1Af:hover .slick-next {\n    opacity: 1;\n}\n\n.slider-root-1Af .slick-prev {\n    left: 1.6rem;\n}\n.slider-root-1Af .slick-prev:before {\n    content: url(\"data:image/svg+xml;charset=UTF-8, <svg xmlns='http://www.w3.org/2000/svg' width='32px' height='32px' viewBox='0 0 24 24' fill='none' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><line x1='19' y1='12' x2='5' y2='12' /><polyline points='12 19 5 12 12 5' /></svg>\");\n}\n\n.slider-root-1Af .slick-next {\n    right: 1.6rem;\n}\n.slider-root-1Af .slick-next:before {\n    content: url(\"data:image/svg+xml;charset=UTF-8, <svg xmlns='http://www.w3.org/2000/svg' width='32px' height='32px' viewBox='0 0 24 24' fill='none' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><line x1='5' y1='12' x2='19' y2='12' /><polyline points='12 5 19 12 12 19' /></svg>\");\n}\n\n.slider-root-1Af .slick-prev,\n.slider-root-1Af .slick-next {\n    background: rgba(252, 252, 252, 0.75);\n    border: none;\n    border-radius: 50px;\n    color: transparent;\n    cursor: pointer;\n    display: block;\n    font-size: 0;\n    height: 40px;\n    line-height: 0;\n    outline: none;\n    padding: 0;\n    position: absolute;\n    top: 50%;\n    transform: translate(0, -50%);\n    width: 40px;\n    z-index: 101;\n}\n\n.slider-root-1Af .slick-dots {\n    display: block;\n    list-style: none;\n    margin: 0;\n    padding: 20px 0 18px 0;\n    text-align: center;\n    width: 100%;\n}\n.slider-root-1Af .slick-dots li {\n    cursor: pointer;\n    display: inline-block;\n    height: 15px;\n    margin: 0 6px;\n    padding: 0;\n    position: relative;\n    vertical-align: middle;\n    width: 15px;\n}\n.slider-root-1Af .slick-dots li button {\n    outline: none;\n    background: rgb(var(--venia-grey-dark));\n    filter: brightness(100%);\n    border-radius: 10px;\n    box-shadow: none;\n    cursor: pointer;\n    display: block;\n    height: 15px;\n    padding: 0;\n    text-indent: -99999px;\n    transition: 0.5s;\n    width: 15px;\n}\n.slider-root-1Af .slick-dots li button:hover {\n    filter: brightness(80%);\n}\n\n.slider-root-1Af .slick-dots li button:active,\n.slider-root-1Af .slick-dots li button:focus,\n.slider-root-1Af .slick-dots li button:not(.primary) {\n    box-shadow: none;\n}\n\n.slider-root-1Af .slick-dots li.slick-active button {\n    background: #1c1918;\n}\n",""]),r.locals={root:"slider-root-1Af",bannerRoot:"slider-bannerRoot-1bC "+e("JjHE").locals.root,bannerLink:"slider-bannerLink-439 "+e("JjHE").locals.link,bannerWrapper:"slider-bannerWrapper-3XA "+e("JjHE").locals.wrapper,bannerPosterOverlay:"slider-bannerPosterOverlay-3j8 "+e("JjHE").locals.posterOverlay}},lOQc:function(n,r,e){var o=e("b1Jx")
"string"==typeof o&&(o=[[n.i,o,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
e("cuK8")(o,i)
o.locals&&(n.exports=o.locals)}}])
