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
  
})