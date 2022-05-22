let taskinput = document.getElementById("taskinput");
let addtaskbtn = document.getElementById("addtaskbtn");
let notasks = document.getElementById("notasks");
let alltasks = document.getElementById("alltasks");

let addtaskfunction = ()=> {
        taskdata = taskinput.value;
        notasks.remove();
        alltasks.innerHTML += `
        <div class= "alert alerrt-info">
        ${taskdata} 

        </div>
        `;

}

addtaskbtn.addEventListener('click' , addtaskfunction );