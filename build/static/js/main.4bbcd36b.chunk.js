(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,n){e.exports=n(183)},179:function(e,t,n){},181:function(e,t,n){},183:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(24),o=n.n(c),s=n(189),i=n(188),u=n(185),l=n(100),d=n.n(l),m=n(5),p=n(13),E=n(34);E.initializeApp({apiKey:"AIzaSyA3Ty9b5nIOF_WD5_ZqGorYOUsCfGyqNGU",authDomain:"expensify-10efa.firebaseapp.com",databaseURL:"https://expensify-10efa.firebaseio.com",projectId:"expensify-10efa",storageBucket:"expensify-10efa.appspot.com",messagingSenderId:"107846867232"});var f=E.database(),h=new E.auth.GoogleAuthProvider,v=n(132),b=n(3),g=n.n(b),O=Object(m.b)()(function(e){var t=e.dispatch,n=e.id,a=e.description,c=e.amount,o=e.createdAt;return r.a.createElement("tr",null,r.a.createElement("td",null,a),r.a.createElement("td",null,c),r.a.createElement("td",null,g()(o).format("MMM Do, YYYY")),r.a.createElement("td",null,r.a.createElement(v.a,{className:"btn btn-info",to:"/edit/".concat(n)},"Edit")),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-warning",onClick:function(){t(function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id;return function(t,n){var a=n().authReducer.uid;return f.ref("users/".concat(a,"/Expenses/").concat(e)).remove().then(function(){t(function(){return{type:"REMOVE_EXPENSE",id:(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id}}({id:e}))})}}({id:n}))}},"Delete")))}),x=function(e,t){var n=t.text,a=t.sortBy,r=t.startDate,c=t.endDate;return e.filter(function(e){var t=g()(e.createdAt),a=!r||r.isSameOrBefore(t,"day"),o=!c||c.isSameOrAfter(t,"day"),s=e.description.toLowerCase().includes(n.toLowerCase());return a&&o&&s}).sort(function(e,t){return"date"===a?e.createdAt<t.createdAt?1:-1:"amount"===a?e.amount<t.amount?1:-1:void 0})},N=Object(m.b)(function(e){return{expenses:x(e.expenses,e.filters)}})(function(e){return r.a.createElement("div",null,r.a.createElement("h5",null,"Expense List"),r.a.createElement("table",{className:"table table-striped"},r.a.createElement("tbody",null,e.expenses.map(function(e){return r.a.createElement(O,Object.assign({key:e.id},e))}))))}),y=n(41),D=n(42),A=n(47),S=n(43),C=n(49),T=function(e){return{type:"SET_START_DATE",startDate:e}},j=function(e){return{type:"SET_END_DATE",endDate:e}},_=n(44),w=(n(99),function(e){function t(){var e,n;Object(y.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(A.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(r)))).state={calendarFocused:null},n.onDatesChange=function(e){var t=e.startDate,a=e.endDate;n.props.dispatch(T(t)),n.props.dispatch(j(a))},n.onFocusChange=function(e){n.setState(function(){return{calendarFocused:e}})},n}return Object(C.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement("input",{className:"form-control",type:"text",value:this.props.filters.text,onChange:function(t){e.props.dispatch(function(){return{type:"TEXT_FILTER",text:arguments.length>0&&void 0!==arguments[0]?arguments[0]:""}}(t.target.value))}})),r.a.createElement("div",{className:"col-3"},r.a.createElement("select",{className:"form-control",value:this.props.filters.sortBy,onChange:function(t){"amount"===t.target.value?e.props.dispatch({type:"SORT_BY_AMOUNT"}):"date"===t.target.value&&e.props.dispatch({type:"SORT_BY_DATE"})}},r.a.createElement("option",{value:"amount"},"Sort By Amount"),r.a.createElement("option",{value:"date"},"Sort By Date"))),r.a.createElement("div",{className:"col-6"},r.a.createElement(_.DateRangePicker,{startDate:this.props.filters.startDate,endDate:this.props.filters.endDate,onDatesChange:this.onDatesChange,focusedInput:this.state.calendarFocused,onFocusChange:this.onFocusChange,isOutsideRange:function(){return!1},showClearDates:!0,numberOfMonths:1})))}}]),t}(r.a.Component)),R=Object(m.b)(function(e){return{filters:e.filters}})(w),L=(n(177),function(e){return e.map(function(e){return e.amount}).reduce(function(e,t){return e+t},0)}),k=Object(m.b)(function(e){var t=x(e.expenses,e.filters);return{expenseCount:t.length,expensesTotal:L(t)}})(function(e){var t=e.expenseCount,n=e.expensesTotal,a=1===t?"expense":"expenses";return r.a.createElement("div",{className:"py-3"},r.a.createElement("p",null,"There are ",r.a.createElement("b",null,t)," ",a," with total amount"," ",r.a.createElement("b",null,n)))}),B=function(){return r.a.createElement("div",{className:"container py-3"},r.a.createElement(k,null),r.a.createElement(R,null),r.a.createElement(N,null))},F=function(e){function t(e){var n;return Object(y.a)(this,t),(n=Object(A.a)(this,Object(S.a)(t).call(this,e))).onDescriptiionChange=function(e){var t=e.target.value;n.setState(function(){return{description:t}})},n.onNotesChange=function(e){var t=e.target.value;n.setState(function(){return{notes:t}})},n.onAmountChange=function(e){var t=e.target.value;t&&!t.match(/^\d{1,}(\.\d{0,2})?$/)||n.setState(function(){return{amount:t}})},n.onDateChange=function(e){e&&n.setState(function(){return{createdAt:e}})},n.onCalendarFocusChange=function(e){var t=e.focused;n.setState(function(){return{calendarfocused:t}})},n.onSubmit=function(e){e.preventDefault(),n.state.amount&&n.state.description?(n.setState(function(){return{error:""}}),n.props.onSubmit({description:n.state.description,notes:n.state.notes,amount:parseFloat(n.state.amount,10),createdAt:n.state.createdAt.valueOf()})):n.setState(function(){return{error:"You should add Description and amount at least"}})},n.state={description:e.expense?e.expense.description:"",notes:e.expense?e.expense.notes:"",amount:e.expense?e.expense.amount:"",createdAt:e.expense?g()(e.expense.createdAt):g()(),calendarfocused:!1,error:"",btnText:e.expense?"Edit Expense":"Add Expense"},n}return Object(C.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},this.state.error&&r.a.createElement("p",{className:"bg-warning p-2"},this.state.error),r.a.createElement("div",{className:"col-md-8 mx-auto"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Discription",className:"form-control",value:this.state.description,onChange:this.onDescriptiionChange,autoFocus:!0})),r.a.createElement("div",{className:"row my-3"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Amount",className:"form-control",value:this.state.amount,onChange:this.onAmountChange}))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement(_.SingleDatePicker,{date:this.state.createdAt,onDateChange:this.onDateChange,focused:this.state.calendarfocused,onFocusChange:this.onCalendarFocusChange,numberOfMonths:1,isOutsideRange:function(){return!1}})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{className:"form-control",placeholder:"Expense Notes (Optional)",value:this.state.notes,onChange:this.onNotesChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-default"},this.state.btnText)))))}}]),t}(r.a.Component),I=Object(m.b)()(function(e){return r.a.createElement("div",{className:"container my-3"},r.a.createElement("h3",null,"Add Expense"),r.a.createElement("hr",null),r.a.createElement(F,{onSubmit:function(t){e.dispatch(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t,n){var a=n().authReducer.uid,r=e.description,c=void 0===r?"":r,o=e.notes,s=void 0===o?"":o,i=e.amount,u=void 0===i?0:i,l=e.createdAt,d={description:c,notes:s,amount:u,createdAt:void 0===l?0:l};f.ref("users/".concat(a,"/Expenses")).push(d).then(function(e){t({type:"ADD_EXPENSE",expense:Object(p.a)({id:e.key},d)})})}}(t)),e.history.push("/")}}))}),P=Object(m.b)(function(e,t){return{expense:e.expenses.find(function(e){return e.id===t.match.params.id})}})(function(e){return r.a.createElement("div",{className:"container my-3"},r.a.createElement("h4",null,"Edit Expense"),r.a.createElement("hr",null),r.a.createElement(F,{expense:e.expense,onSubmit:function(t){var n,a;e.dispatch((n=e.expense.id,a=t,function(e,t){var r=t().authReducer.uid;f.ref("users/".concat(r,"/Expenses/").concat(n)).update(a).then(function(){e(function(e,t){return{type:"EDIT_EXPENSE",id:e,updtes:t}}(n,a))})})),e.history.push("/")}}))}),X=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404 !"),r.a.createElement("p",null,"Page Not Found"),r.a.createElement(v.a,{to:"/"}," Go Home "))},Y=Object(m.b)(void 0,function(e){return{startLogin:function(){return e(function(){return E.auth().signInWithPopup(h)})}}})(function(e){var t=e.startLogin;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 mx-auto signin"},r.a.createElement("h2",null,"Expensefy App."),r.a.createElement("p",null,"Your Epenses here"),r.a.createElement("button",{onClick:t,className:"btn btn-primary"},"Log in with Google")))}),G=n(48),M=n(187),U=n(186),V=Object(m.b)(void 0,function(e){return{startLogout:function(){return e(function(){return E.auth().signOut()})}}})(function(e){var t=e.startLogout;return r.a.createElement("header",null,r.a.createElement("div",{className:"row p-3 bg-light"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("h3",null,"Expinsefy")),r.a.createElement("div",{className:"col-md-8 text-right"},r.a.createElement(U.a,{className:"navlink",activeClassName:"navlinkActive",to:"/dashboard"},"Home Page"),r.a.createElement(U.a,{className:"navlink",activeClassName:"navlinkActive",to:"/create"},"Add Expinse"),r.a.createElement("button",{onClick:t,className:"btn btn-default"},"Logout"))))}),q=Object(m.b)(function(e){return{isAuthenticated:!!e.authReducer.uid}})(function(e){var t=e.isAuthenticated,n=e.component,a=Object(G.a)(e,["isAuthenticated","component"]);return r.a.createElement(u.a,Object.assign({},a,{component:function(e){return t?r.a.createElement("div",null,r.a.createElement(V,null),r.a.createElement(n,e)):r.a.createElement(M.a,{to:"/"})}}))}),z=Object(m.b)(function(e){return{isAuthenticated:!!e.authReducer.uid}})(function(e){var t=e.isAuthenticated,n=e.component,a=Object(G.a)(e,["isAuthenticated","component"]);return r.a.createElement(u.a,Object.assign({},a,{component:function(e){return t?r.a.createElement(M.a,{to:"/dashboard"}):r.a.createElement(n,e)}}))}),H=d()(),J=function(){return r.a.createElement(s.a,{history:H},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(i.a,null,r.a.createElement(z,{path:"/",component:Y,exact:!0}),r.a.createElement(q,{path:"/dashboard",component:B}),r.a.createElement(q,{path:"/create",component:I}),r.a.createElement(q,{path:"/edit/:id",component:P}),r.a.createElement(u.a,{component:X}))))},W=n(17),K=n(104),Z=n(105),$=[],Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_EXPENSE":return Object(Z.a)(e).concat([t.expense]);case"REMOVE_EXPENSE":return e.filter(function(e){return e.id!==t.id});case"EDIT_EXPENSE":return e.map(function(e){return e.id===t.id?Object(p.a)({},e,t.updtes):e});case"SET_EXPENSES":return t.expenses;default:return e}},ee={text:"",sortBy:"date",startDate:g()().startOf("month"),endDate:g()().endOf("month")},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TEXT_FILTER":return Object(p.a)({},e,{text:t.text});case"SORT_BY_AMOUNT":return Object(p.a)({},e,{sortBy:"amount"});case"SORT_BY_DATE":return Object(p.a)({},e,{sortBy:"date"});case"SET_START_DATE":return Object(p.a)({},e,{startDate:t.startDate});case"SET_END_DATE":return Object(p.a)({},e,{endDate:t.endDate});default:return e}},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return{uid:t.uid};case"LOGOUT":return{};default:return e}},ae=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||W.d,re=(n(179),n(181),Object(W.e)(Object(W.c)({expenses:Q,filters:te,authReducer:ne}),ae(Object(W.a)(K.a)))),ce=r.a.createElement(m.a,{store:re},r.a.createElement(J,null)),oe=!1,se=function(){oe||(o.a.render(ce,document.getElementById("root")),oe=!0)};o.a.render(r.a.createElement(function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 mx-auto signin"},r.a.createElement("img",{src:"/img/Loading_icon.gif",width:"200"}),r.a.createElement("h4",null,"Looding ... ")))},null),document.getElementById("root")),E.auth().onAuthStateChanged(function(e){e?(re.dispatch({type:"LOGIN",uid:e.uid}),re.dispatch(function(e,t){var n=t().authReducer.uid;return f.ref("users/".concat(n,"/Expenses")).once("value").then(function(t){var n=[];t.forEach(function(e){n.push(Object(p.a)({id:e.key},e.val()))}),e(function(e){return{type:"SET_EXPENSES",expenses:e}}(n))})}).then(function(){se(),"/"===H.location.pathname&&H.push("/dashboard")})):(re.dispatch({type:"LOGOUT"}),se(),H.push("/"))})}},[[106,2,1]]]);
//# sourceMappingURL=main.4bbcd36b.chunk.js.map