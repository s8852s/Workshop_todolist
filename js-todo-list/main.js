// TO DO
document.addEventListener("DOMContentLoaded", function(){
  //Complete_task_add_checked
  let liList = document.querySelectorAll("li");
  for (let lis of liList){
    lis.addEventListener("click", function(){
      this.classList.toggle("checked");
    })
  }
  let spanList = document.querySelectorAll("li>span");
  for (let spans of spanList){
    spans.addEventListener("click", function(){
      spans.parentNode.remove();
    })
  }
  // add_task
  document.querySelector(".addBtn").addEventListener("click", function(){
    let task = document.getElementById("input").value;
    if ( task != null ){
      let newLi = document.createElement("li");
      newLi.textContent = `${task}`;
      let newSpan = document.createElement("span");
      newSpan.textContent = "x";
      newSpan.classList = "close";
      newLi.insertAdjacentElement("beforeend", newSpan)
      document.querySelector("ul").appendChild(newLi);
      
      newLi.addEventListener("click", function(){
        this.classList.toggle("checked");
       
      })
      newSpan.addEventListener("click", function(){
        this.parentNode.remove();
      })

    }
  })
})