// Chargement de tout le HTML avant de faire le JS
// () => {}  Function fléchée equivalent function(){}
document.addEventListener('DOMContentLoaded', () => {
    // aller chercher mes elements déjà créé 
    const input = document.getElementById('textField');
    const buttonTask = document.getElementById('btn-task');
    const taskToDo = document.getElementById('task-todo');
    const taskDone = document.getElementById('task-done');
    const errorMessage = document.getElementById('error-message');

    // Écoute le click du bouton et ajouter les li
    buttonTask.addEventListener('click', () => {
        if(input.value != null && input.value.length > 0){
            errorMessage.style.display = "none";

            //Création du LI
            const li = document.createElement('li');
            
            // Création du checkbox
            let checkbox = document.createElement('input');
            // checkbox.type = "checkbox";
            checkbox.setAttribute('type', "checkbox");
            // au changement de mon checkbox
            checkbox.addEventListener('change', () => {
                if(checkbox.checked){
                    taskDone.appendChild(li);
                }else{
                    taskToDo.appendChild(li);
                }
            });
            // Ajout du checkbox dans mon li
            li.appendChild(checkbox);

            // Création du paragraphe
            const paragraphe = document.createElement('p');
            paragraphe.innerText = input.value;
            // Ajout du paragraphe dans mon li
            li.appendChild(paragraphe);

            // Création du bouton modifier
            const updateButton = document.createElement('button');
            updateButton.innerHTML = "<i class='fa-solid fa-pen-to-square'></i>";
            // Function onClick sur le bouton modifier
            updateButton.addEventListener('click', () => {
                console.log("je veux modifier");
            });
            // Ajout du bouton dans mon li
            li.appendChild(updateButton);
 
            // Création du bouton supprimer
            const deleteButton = document.createElement('button');
            deleteButton.innerHTML = "<i class='fa-solid fa-trash'></i>";
            // Function onClick sur le bouton supprimer
            deleteButton.addEventListener('click', () => {
                console.log('Je veux supprimer');
            });
            // Ajout du bouton dans mon li
            li.appendChild(deleteButton);

            // Ajouter le li dans ma div tacheToDo
            taskToDo.appendChild(li);

            // remettre à zero l'input
            input.value = "";

        }else{
            errorMessage.style.display = "flex";
        }
    })

})