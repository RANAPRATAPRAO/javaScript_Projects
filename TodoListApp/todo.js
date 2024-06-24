function TodoList() {
    let input = document.querySelector("#content");
    let ul = document.querySelector(".todo-list");
    let li = document.createElement("li");
    li.classList.add("list");
    li.innerText = input.value;

    let div = document.createElement("div");
    div.classList.add("buttons");

    let btncom = document.createElement("button");
    btncom.classList.add("todo-btn");
    btncom.innerText = "Complete";

    let btndel = document.createElement("button");
    btndel.classList.add("todo-btn");
    btndel.innerText = "Delete";

    
    btncom.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    btndel.addEventListener("click", function() {
        ul.removeChild(li);
    });

    div.appendChild(btncom);
    div.appendChild(btndel);
    li.appendChild(div);
    ul.appendChild(li);

    input.value = ""; 
    console.log(li);
}
