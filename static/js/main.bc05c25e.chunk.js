(this["webpackJsonptask-app"]=this["webpackJsonptask-app"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),l=a(2),c=a.n(l),r=(a(13),a(5)),i=a(3),u=a(4),d=a(6),m=a(7),o=function(e){var t=e.taskValue,a=e.deleteTask,s=e.editTask;return n.a.createElement("li",{className:"list-group-item text-uppercase d-flex justify-content-between my-2"},n.a.createElement("h6",null,t),n.a.createElement("div",{className:"task-icon"},n.a.createElement("span",{onClick:s,className:"mx-2 text-success",style:{cursor:"pointer"}},n.a.createElement("i",{className:"fas fa-pen"})),n.a.createElement("span",{onClick:a,className:"mx-2 text-danger",style:{cursor:"pointer"}},n.a.createElement("i",{className:"fas fa-trash"}))))},k=function(e){var t=e.tasks,a=e.deleteAllTasks,s=e.deleteTask,l=e.editTask;return n.a.createElement("ul",{className:"list-group my-3"},n.a.createElement("h3",{className:"text-uppercase text-center"},"lista zada\u0144"),t.map((function(e){return n.a.createElement(o,{key:e.id,taskValue:e.taskValue,deleteTask:function(){return s(e.id)},editTask:function(){return l(e.id)}})})),n.a.createElement("button",{onClick:a,type:"button",className:"btn btn-danger text-uppercase mt-5"},"wyczy\u015b\u0107 list\u0119 zada\u0144"))},p=function(e){var t=e.taskValue,a=e.handleInputChange,s=e.addTask,l=e.editTask;return n.a.createElement("div",{className:"card card-body my-3"},n.a.createElement("form",{onSubmit:s},n.a.createElement("div",{className:"input-group"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("div",{className:"input-group-text bg-primary text-white"},n.a.createElement("i",{className:"fas fa-book"}))),n.a.createElement("input",{type:"text",className:"form-control",placeholder:"nowe zadanie... (min. 3 znaki)",value:t,onChange:a})),n.a.createElement("button",{type:"submit",className:l?"btn btn-block btn-success mt-3 text-uppercase":"btn btn-block btn-primary mt-3 text-uppercase"},l?"edytuj zadanie":"dodaj zadanie")))},f=(a(14),a(15),a(18)),h=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),l=0;l<s;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={id:Object(f.a)(),tasks:[],taskValue:"",editTask:!1},e.handleInputChange=function(t){e.setState({taskValue:t.target.value})},e.addTask=function(t){t.preventDefault();var a={id:Object(f.a)(),taskValue:e.state.taskValue},s=[].concat(Object(r.a)(e.state.tasks),[a]);e.state.taskValue.length>2&&e.setState({tasks:s,taskValue:"",id:Object(f.a)(),editTask:!1})},e.deleteAllTasks=function(){e.setState({tasks:[]})},e.deleteTask=function(t){var a=e.state.tasks.filter((function(e){return e.id!==t}));e.setState({tasks:a})},e.editTask=function(t){if(!e.state.editTask){var a=e.state.tasks.filter((function(e){return e.id!==t})),s=e.state.tasks.find((function(e){return e.id===t}));e.setState({tasks:a,taskValue:s.taskValue,editTask:!0,id:t})}},e}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-10 mx-auto col-md-8 col-mt-4"},n.a.createElement("h1",{className:"text-uppercase text-center"},"task app"),n.a.createElement(p,{taskValue:this.state.taskValue,handleInputChange:this.handleInputChange,addTask:this.addTask,editTask:this.state.editTask}),n.a.createElement(k,{tasks:this.state.tasks,deleteAllTasks:this.deleteAllTasks,deleteTask:this.deleteTask,editTask:this.editTask}))))}}]),a}(s.Component);c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(h,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.bc05c25e.chunk.js.map