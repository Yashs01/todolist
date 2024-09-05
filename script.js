const input = document.querySelector("#text");
const list_container = document.querySelector("#list-container");
const clicked = ()=>{
    if(input.value === ''){
        alert("You must write something")
    }
    else{
        li = document.createElement('li');
        li.innerHTML = input.value;
        list_container.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    savedata();
}
list_container.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
})
function savedata(){
    localStorage.setItem("data",list_container.innerHTML)
}
function showtask(){
    list_container.innerHTML = localStorage.getItem("data");
}
showtask();