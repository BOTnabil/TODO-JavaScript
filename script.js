const btn = document.getElementById("btn");
const delBtn = document.querySelector(".delBtn");
const cardsList = document.getElementById("todoCards")
const todoCard = document.querySelector(".todoCard");
let compteur = 1
let compteurDansBox = 1;

function majCompteur(){
        document.getElementById("compteur").innerHTML = "Taches restantes : " + compteur;
}


btn.addEventListener("click", function(){
    compteurDansBox++;
    compteur++;

    let newTodoCard = todoCard.cloneNode(true);
    newTodoCard.querySelector(".task").value = "Task " + compteurDansBox;
    newTodoCard.classList.add(".todoCard");

    let newdelBtn = delBtn.cloneNode(true);
    cardsList.appendChild(newTodoCard);
    newTodoCard.appendChild(newdelBtn);

    newdelBtn.addEventListener("click", function(){
        newdelBtn.parentNode.remove();
        compteur--;
        majCompteur()
    });
        
    majCompteur()
});


delBtn.addEventListener("click", function(){
    delBtn.parentNode.remove();
    compteur--;
    majCompteur()
    });

