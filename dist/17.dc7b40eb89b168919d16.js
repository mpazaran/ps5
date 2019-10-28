/*!
 * @version 6294c9e-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"+Mpj":function(e,t,n){"use strict"
n.r(t)
var r=n("ERkP"),a=n.n(r),c=n("aWzz"),o=n("zCf4"),i=n("pcRz"),s=n("HMMy"),u=n("dbu+"),l=n.n(u),p=n("KEM+"),f=n.n(p)
function ownKeys(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var b=["email","firstName","lastName"],y=function getCreateAccountInitialValues(e){var t=new URLSearchParams(e)
return b.reduce(function(e,n){return function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?ownKeys(n,!0).forEach(function(t){f()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,f()({},n,t.get(n)))},{})},O=function CreateAccountPage(e){var t=function useCreateAccountPage(e){var t=e.history
return{handleCreateAccount:Object(r.useCallback)(function(){t.push("/")},[t]),initialValues:Object(r.useMemo)(function(){return y(window.location.search)},[])}}({history:e.history}),n=t.initialValues,c=t.handleCreateAccount,o=Object(s.b)(l.a,e.classes)
return a.a.createElement("div",{className:o.container},a.a.createElement(i.a,{initialValues:n,onSubmit:c}))}
O.propTypes={initialValues:Object(c.shape)({}),history:Object(c.shape)({})}
var h=Object(o.g)(O)
n.d(t,"default",function(){return h})},"dbu+":function(e,t,n){var r=n("q1TP")
"string"==typeof r&&(r=[[e.i,r,""]])
var a={hmr:!0,transform:void 0,insertInto:void 0}
n("cuK8")(r,a)
r.locals&&(e.exports=r.locals)},q1TP:function(e,t,n){(t=e.exports=n("PBB4")(!1)).push([e.i,".createAccountPage-container-3Ty {\n    margin: 16px auto 0;\n    max-width: 360px;\n}\n",""]),t.locals={container:"createAccountPage-container-3Ty"}}}])
