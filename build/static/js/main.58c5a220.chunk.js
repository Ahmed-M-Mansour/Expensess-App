(this["webpackJsonpexpensess-app"]=this["webpackJsonpexpensess-app"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(9),c=n.n(a),s=(n(15),n(6)),l=n(1),i=n(4),r=(n(16),n(17),n(0)),u=function(e){return Object(r.jsx)("div",{className:"expenses-filter",children:Object(r.jsxs)("div",{className:"expenses-filter__control",children:[Object(r.jsx)("label",{children:"Filter by year"}),Object(r.jsxs)("select",{onChange:function(t){e.OnFilterExpenses(t.target.value)},value:e.selected,children:[Object(r.jsx)("option",{value:"2022",children:"2022"}),Object(r.jsx)("option",{value:"2021",children:"2021"}),Object(r.jsx)("option",{value:"2020",children:"2020"}),Object(r.jsx)("option",{value:"2019",children:"2019"})]})]})})},j=(n(19),n(2)),o=(n(20),function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(r.jsxs)("div",{className:"expense-date",children:[Object(r.jsx)("div",{className:"expense-date__month",children:t}),Object(r.jsx)("div",{className:"expense-date__year",children:a}),Object(r.jsx)("div",{className:"expense-date__day",children:n})]})}),d=(n(21),function(e){var t="card "+e.className;return Object(r.jsxs)("div",{className:t,children:[" ",e.children," "]})}),b=(n(22),function(e){var t=Object(j.useState)(e.title),n=Object(l.a)(t,2),a=n[0];n[1];return Object(r.jsx)("li",{children:Object(r.jsxs)(d,{className:"expense-item",children:[Object(r.jsx)(o,{date:e.date}),Object(r.jsxs)("div",{className:"expense-item__description",children:[Object(r.jsx)("h2",{children:a}),Object(r.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})})}),x=function(e){return 0===e.items.length?Object(r.jsx)("h2",{className:"expenses-list__fallback",children:" No Expenses  "}):Object(r.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(r.jsx)(b,{title:e.title,amount:e.amount,date:e.date},e.id)}))})},O=n(10),v=(n(23),n(24),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(r.jsxs)("div",{className:"chart-bar",children:[Object(r.jsx)("div",{className:"chart-bar__inner",children:Object(r.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(r.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),p=function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(s.a)(t));return Object(r.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(r.jsx)(v,{value:e.value,maxValue:n,label:e.label},e.label)}))})},h=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(O.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(s){a.e(s)}finally{a.f()}return Object(r.jsx)(p,{dataPoints:n})},m=function(e){var t=Object(i.useState)(""),n=Object(l.a)(t,2),a=n[0],c=n[1],s=e.expenses.filter((function(e){return e.date.getFullYear().toString()===a}));return Object(r.jsxs)(d,{className:"expenses",children:[Object(r.jsx)(u,{OnFilterExpenses:function(e){return c(e)},selected:a}),Object(r.jsx)(h,{expenses:s}),Object(r.jsx)(x,{items:s})]})},f=n(8),N=(n(25),n(26),function(e){var t=Object(j.useState)(""),n=Object(l.a)(t,2),a=n[0],c=n[1],s=Object(j.useState)(1),i=Object(l.a)(s,2),u=i[0],o=i[1],d=Object(j.useState)("2021-05-05"),b=Object(l.a)(d,2),x=b[0],O=b[1];return Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault(),console.log("Submited");var n={title:a,amount:u,date:new Date(x)};e.onSaveExpenseData(n),c(""),o(""),O("")},children:[Object(r.jsxs)("div",{className:"new-expense__controls",children:[Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:" Title "}),Object(r.jsx)("input",{name:"title",type:"text",placeholder:"Title",onChange:function(e){c(e.target.value)},value:a})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:" Amount "}),Object(r.jsx)("input",{name:"amount",type:"number",placeholder:"Price",min:"1",step:"0.5",onChange:function(e){o(e.target.value)},value:u})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:" Date "}),Object(r.jsx)("input",{name:"date",type:"date",placeholder:"Date",min:"2020-01-01",max:"2025-01-01",onChange:function(e){O(e.target.value)},value:x})]})]}),Object(r.jsxs)("div",{className:"new-expense__actions",children:[Object(r.jsx)("button",{type:"button",onClick:e.onCancel,children:" Cancel"}),Object(r.jsx)("button",{name:"submit",type:"submit",children:"Add Expense"})]})]})}),_=function(e){var t=Object(i.useState)(!1),n=Object(l.a)(t,2),a=n[0],c=n[1];return Object(r.jsxs)("div",{className:"new-expense",children:[!a&&Object(r.jsx)("button",{onClick:function(){return c(!0)},children:" Add New Expense "}),a&&Object(r.jsx)(N,{onSaveExpenseData:function(t){var n=Object(f.a)(Object(f.a)({},t),{},{id:Math.random().toString()});e.onAddNewExpense(n)},onCancel:function(){return c(!1)}})]})};var g=function(){var e=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}],t=Object(i.useState)(e),n=Object(l.a)(t,2),a=n[0],c=n[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(_,{onAddNewExpense:function(e){c((function(t){return[e].concat(Object(s.a)(t))})),console.log(a)}}),Object(r.jsx)(m,{expenses:a})]})};c.a.render(Object(r.jsx)(g,{}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.58c5a220.chunk.js.map