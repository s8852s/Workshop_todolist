// TO DO
//add_task
document.addEventListener("DOMContentLoaded", function(){
  //add_task
  document.querySelector(".addBtn").addEventListener("click", function(){
    let task = document.getElementById("input").value
    if ( task != null ){
    let li = document.createElement("li");
    li.innerHTML = (`${task}<span class='close'>x</span>`)
    document.querySelector("ul").appendChild(li)
    }
  })
})