/*!
 * @version 62a8954-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"7O2I":function(e,n,t){var i=t("cGp9")
"string"==typeof i&&(i=[[e.i,i,""]])
var a={hmr:!0,transform:void 0,insertInto:void 0}
t("cuK8")(i,a)
i.locals&&(e.exports=i.locals)},"DBF/":function(e,n,t){(n=e.exports=t("PBB4")(!1)).push([e.i,".search-root-1RN {\n    padding: 1rem;\n}\n\n.search-categoryTop-2uq {\n    display: flex;\n    flex-wrap: wrap;\n    padding: 0 0 1rem 0;\n    color: rgb(var(--venia-text-alt));\n    justify-content: center;\n    align-items: center;\n}\n\n.search-noResult-aOQ {\n    display: flex;\n}\n\n.search-headerButtons-3DM {\n    display: flex;\n    justify-content: center;\n    flex-basis: 100%;\n    padding-top: 0.5rem;\n}\n\n.search-filterButton-37H {\n    padding: 0.5rem;\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n    width: 9rem;\n    border: 1px solid black;\n    border-radius: 100px;\n    color: black;\n    outline: none;\n}\n",""]),n.locals={root:"search-root-1RN",categoryTop:"search-categoryTop-2uq",noResult:"search-noResult-aOQ",headerButtons:"search-headerButtons-3DM",filterButton:"search-filterButton-37H"}},MyWX:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getCategoryName"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"category"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:80}}
t.loc.source={body:"query getCategoryName($id: Int!) {\n    category(id: $id) {\n        name\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}
var i={}
function findOperation(e,n){for(var t=0;t<e.definitions.length;t++){var i=e.definitions[t]
if(i.name&&i.name.value==n)return i}}!function extractReferences(){t.definitions.forEach(function(e){if(e.name){var n=new Set
!function collectFragmentReferences(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value)
else if("VariableDefinition"===e.kind){var t=e.type
"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){collectFragmentReferences(e,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){collectFragmentReferences(e,n)}),e.definitions&&e.definitions.forEach(function(e){collectFragmentReferences(e,n)})}(e,n),i[e.name.value]=n}})}(),e.exports=t,e.exports.getCategoryName=function oneQuery(e,n){var t={kind:e.kind,definitions:[findOperation(e,n)]}
e.hasOwnProperty("loc")&&(t.loc=e.loc)
var a=i[n]||new Set,r=new Set,o=new Set
for(a.forEach(function(e){o.add(e)});o.size>0;){var l=o
o=new Set,l.forEach(function(e){r.has(e)||(r.add(e),(i[e]||new Set).forEach(function(e){o.add(e)}))})}return r.forEach(function(n){var i=findOperation(e,n)
i&&t.definitions.push(i)}),t}(t,"getCategoryName")},cGp9:function(e,n,t){(n=e.exports=t("PBB4")(!1)).push([e.i,".categoryFilters-root-3Lu {\n    text-align: right;\n    flex-grow: 1;\n}\n\n.categoryFilters-filter-1xU {\n    display: inline-flex;\n    align-items: center;\n    border-radius: 0.25rem;\n    border: 1px solid rgb(var(--venia-border));\n    padding: 0.25rem 0.5rem;\n}\n\n.categoryFilters-text-3zq {\n    padding-right: 0.5rem;\n}\n",""]),n.locals={root:"categoryFilters-root-3Lu",filter:"categoryFilters-filter-1xU",text:"categoryFilters-text-3zq"}},f0xd:function(e,n,t){"use strict"
t.r(n)
var i=t("ddV6"),a=t.n(i),r=t("ERkP"),o=t.n(r),l=t("aWzz"),c=t("1U1M"),s=t("I3q4"),d=t("Ixr1"),u=t("YK1T"),m=t("HMMy"),f=t("ysai"),v=t("eGQD"),g=t("mHFa"),k=t("tzgs"),p=t.n(k),y=function getQueryParameterValue(e){var n=e.location,t=void 0===n?window.location:n,i=e.queryParameter,a=void 0===i?"":i
return new URLSearchParams(t.search).get(a)||""},h=t("yH2a"),b=t("RHeV"),N=t("dN+G"),S=t("MyWX"),F=t.n(S),x=t("7O2I"),O=t.n(x),E=function CategoryFilters(e){var n,t=e.categoryId,i=e.executeSearch,a=e.history,l=e.location,s=Object(m.b)(O.a,e.classes),d=Object(r.useCallback)(function(){var e=y({location:l,queryParameter:"query"})
e&&i(e,a)},[i,a,l]),u=Object(c.c)(F.a,{variables:{id:t}}),f=u.loading,v=u.error,g=u.data
return n=f?"Loading...":v?null:g.category.name,o.a.createElement("div",{className:s.root},o.a.createElement("button",{className:s.filter,onClick:d},o.a.createElement("small",{className:s.text},n),o.a.createElement(N.a,{src:b.a,attrs:{width:"13px",height:"13px"}})))},w=t("vDxz"),D=t.n(w),R=function Search(e){var n=e.history,t=e.location,i=Object(r.useRef)(!1),l=Object(m.b)(D.a,e.classes),k=Object(s.b)(),b=a()(k,2),N=b[0],S=b[1],F=N.searchOpen,x=S.executeSearch,O=S.toggleDrawer,w=S.toggleSearch,R=Object(d.b)(),j=a()(R,2)[1].actions.filterOption.clear,q=Object(r.useCallback)(function(){O("filter")},[O]),T=y({location:t,queryParameter:"query"}),_=y({location:t,queryParameter:"category"})
Object(r.useEffect)(function(){Object(h.a)(Object(u.a)())&&j(),w&&!F&&T&&w()},[]),Object(r.useEffect)(function(){i.current?j():i.current=!0},[j,T])
var V=_?{inputText:T,categoryId:_}:{inputText:T},I=Object(c.c)(p.a,{variables:V}),P=I.loading,B=I.error,z=I.data
if(P)return g.a
if(B)return o.a.createElement("div",{className:l.noResult},"No results found. The search term may be missing or invalid.")
var C=z.products,Q=C.filters,M=C.total_count,G=C.items
if(0===G.length)return o.a.createElement("div",{className:l.noResult},"No results found!")
var H=_?o.a.createElement(E,{categoryId:_,executeSearch:x,history:n,location:t}):null,L=Q?o.a.createElement("div",{className:l.headerButtons},o.a.createElement("button",{onClick:q,className:l.filterButton},"Filter")):null,$=Q?o.a.createElement(v.a,{filters:Q}):null
return o.a.createElement("article",{className:l.root},o.a.createElement("div",{className:l.categoryTop},o.a.createElement("div",{className:l.totalPages},"".concat(M," items")),H,L),$,o.a.createElement("section",{className:l.gallery},o.a.createElement(f.a,{items:G})))},j=R
R.propTypes={classes:Object(l.shape)({noResult:l.string,root:l.string,totalPages:l.string}),history:l.object,location:l.object.isRequired},t.d(n,"default",function(){return j})},tzgs:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"productSearch"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"inputText"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"categoryId"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"products"},arguments:[{kind:"Argument",name:{kind:"Name",value:"search"},value:{kind:"Variable",name:{kind:"Name",value:"inputText"}}},{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"category_id"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"eq"},value:{kind:"Variable",name:{kind:"Name",value:"categoryId"}}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"small_image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"url_key"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"price"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"regularPrice"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"amount"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"currency"},arguments:[],directives:[]}]}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"total_count"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filters"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filter_items_count"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"request_var"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filter_items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value_string"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:700}}
t.loc.source={body:"query productSearch($inputText: String!, $categoryId: String) {\n    products(search: $inputText, filter: { category_id: { eq: $categoryId } }) {\n        items {\n            id\n            name\n            small_image {\n                url\n            }\n            url_key\n            price {\n                regularPrice {\n                    amount {\n                        value\n                        currency\n                    }\n                }\n            }\n        }\n        total_count\n        filters {\n            name\n            filter_items_count\n            request_var\n            filter_items {\n                label\n                value_string\n            }\n        }\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}
var i={}
function findOperation(e,n){for(var t=0;t<e.definitions.length;t++){var i=e.definitions[t]
if(i.name&&i.name.value==n)return i}}!function extractReferences(){t.definitions.forEach(function(e){if(e.name){var n=new Set
!function collectFragmentReferences(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value)
else if("VariableDefinition"===e.kind){var t=e.type
"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){collectFragmentReferences(e,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){collectFragmentReferences(e,n)}),e.definitions&&e.definitions.forEach(function(e){collectFragmentReferences(e,n)})}(e,n),i[e.name.value]=n}})}(),e.exports=t,e.exports.productSearch=function oneQuery(e,n){var t={kind:e.kind,definitions:[findOperation(e,n)]}
e.hasOwnProperty("loc")&&(t.loc=e.loc)
var a=i[n]||new Set,r=new Set,o=new Set
for(a.forEach(function(e){o.add(e)});o.size>0;){var l=o
o=new Set,l.forEach(function(e){r.has(e)||(r.add(e),(i[e]||new Set).forEach(function(e){o.add(e)}))})}return r.forEach(function(n){var i=findOperation(e,n)
i&&t.definitions.push(i)}),t}(t,"productSearch")},vDxz:function(e,n,t){var i=t("DBF/")
"string"==typeof i&&(i=[[e.i,i,""]])
var a={hmr:!0,transform:void 0,insertInto:void 0}
t("cuK8")(i,a)
i.locals&&(e.exports=i.locals)}}])
