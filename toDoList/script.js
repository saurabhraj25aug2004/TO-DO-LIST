const bntEle =document.querySelector(".btn")

const inputEle =document.querySelector("#input-field")
const taskEle =document.querySelector(".list-item")
bntEle.addEventListener("click",()=>{
    // console.log(inputEle.value)
    if(inputEle.value===""){
        alert("please add your task first")
    }
    else{
        let listEle =document.createElement("li")
        listEle.textContent =inputEle.value
        taskEle.appendChild(listEle)

            let spanEle =document.createElement("span")
            spanEle.textContent="\u00d7"
            listEle.appendChild(spanEle)
    }
    inputEle.value=""
    saveEli()
})

taskEle.addEventListener("click",(e)=>{
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked")
        saveEli()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveEli()
    }
})

function saveEli(){
    localStorage.setItem("task",taskEle.innerHTML)

}
function getEle(){
    taskEle.innerHTML =localStorage.getItem("task")
}

getEle()


