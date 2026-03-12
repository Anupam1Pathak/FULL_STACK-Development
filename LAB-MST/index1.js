let tasks = [];

function addTask(){

let name = document.getElementById("taskName").value;
let priority = document.getElementById("priority").value;

if(name === ""){
alert("Please enter task name");
return;
}

let task = {
    name:name,
    priority:priority,
    completed:false
};

tasks.push(task);

document.getElementById("taskName").value="";

displayTasks(tasks);

}

function displayTasks(taskArray){
 let list=document.getElementById("taskList");
 list.innerHTML="";

 taskArray.forEach((task,index)=>{

let li = document.createElement("li");

li.classList.add("priority-"+task.priority.toLowerCase());

if(task.completed){
li.classList.add("completed");
}

li.innerHTML = `
<span onclick="toggleComplete(${index})">
${task.name} (${task.priority})
</span>

<button onclick="deleteTask(${index})">Delete</button>
`;

list.appendChild(li);

});
}

function toggleComplete(index){

tasks[index].completed = !tasks[index].completed;

displayTasks(tasks);

}

function deleteTask(index){
tasks.splice(index,1);
displayTasks(tasks);
}

function filterTasks(type){

if(type=="all"){
displayTasks(tasks);
}

else if(type=="completed"){
let filtered = tasks.filter(t => t.completed);
displayTasks(filtered);
}

else if(type=="pending"){
let filtered = tasks.filter(t => !t.completed);
displayTasks(filtered);
}

}
