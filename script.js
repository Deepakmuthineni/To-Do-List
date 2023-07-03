function addTask() {
    var input = document.getElementById("task-input");
    var task = input.value;
  
    if (task.trim() !== "") {
      var listItem = document.createElement("li");
      listItem.innerHTML = task;
      listItem.onclick = toggleTask;
      document.getElementById("task-list").appendChild(listItem);
      input.value = "";
    }
  }
  
  function toggleTask() {
    this.classList.toggle("completed");
  }
  