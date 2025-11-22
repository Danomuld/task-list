let counter = 1;

function addTask() {
    const input = document.querySelector(".input");
    const text = input.value.trim();
         if (text === "") return;

         const task = document.createElement("div");
         task.className = "task";
         task.textContent = counter + ". " + text;

         document.querySelector(".tasks").appendChild(task);

         counter++;
         input.value = "";
}

function clearTask() {
    document.querySelector(".tasks").innerHTML = "";
    counter = 1;
}