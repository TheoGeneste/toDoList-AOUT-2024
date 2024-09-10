// Chargement de tout le HTML avant de faire le JS
// () => {}  Function fléchée equivalent function(){}
document.addEventListener('DOMContentLoaded', () => {
    // aller chercher mes elements déjà créé 
    const input = document.getElementById('textField');
    const buttonTask = document.getElementById('btn-task');
    const taskToDo = document.getElementById('task-todo');
    const taskDone = document.getElementById('task-done');
    const errorMessage = document.getElementById('error-message');
    const countTotal = document.getElementById('total');
    const countAFaire = document.getElementById('aFaire');
    const countFaites = document.getElementById('faites');

    // Écoute le click du bouton et ajouter les li
    buttonTask.addEventListener('click', () => {
        addTask();
    });

    input.addEventListener('keydown', (e) => {
        if (e.key == "Enter") {
            addTask();
        }
    })

    function addTask(){
        if(input.value != null && input.value.length > 0){
            errorMessage.style.display = "none";

            //Création du LI
            const li = document.createElement('li');
            li.classList.add("unchecked");
            
            // Création du checkbox
            let checkbox = document.createElement('input');
            // checkbox.type = "checkbox";
            checkbox.setAttribute('type', "checkbox");
            // au changement de mon checkbox
            checkbox.addEventListener('change', () => {
                if(checkbox.checked){
                    li.classList.add("checked");
                    li.classList.remove("unchecked");
                    taskDone.appendChild(li);
                }else{
                    li.classList.remove("checked");
                    li.classList.add("unchecked");
                    taskToDo.appendChild(li);
                }
                countAFaire.innerText = taskToDo.childElementCount;
                countFaites.innerText = taskDone.childElementCount;
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
                // Cacher mes éléments déjà créé
                checkbox.style.display = "none";
                paragraphe.style.display = "none";
                updateButton.style.display = "none";
                deleteButton.style.display = "none";
                // Création de mon input
                const inputUpdate = document.createElement("input");
                inputUpdate.setAttribute('type', "text");
                inputUpdate.value = paragraphe.innerText;
                inputUpdate.addEventListener('keydown', (e) => {
                    if (e.key == "Enter") {
                        updateTask(paragraphe,buttonSubmit, inputUpdate,checkbox,updateButton, deleteButton ); 
                    }
                })
                // Création de mon bouton pour envoyer la nouvelle valeur
                const buttonSubmit = document.createElement('button');
                buttonSubmit.innerText = "Modifier";
                buttonSubmit.addEventListener('click' , () => {
                    updateTask(paragraphe,buttonSubmit, inputUpdate,checkbox,updateButton, deleteButton );
                })

                li.appendChild(inputUpdate);
                li.appendChild(buttonSubmit);

            });
            // Ajout du bouton dans mon li
            li.appendChild(updateButton);
 
            // Création du bouton supprimer
            const deleteButton = document.createElement('button');
            deleteButton.innerHTML = "<i class='fa-solid fa-trash'></i>";
            // Function onClick sur le bouton supprimer
            deleteButton.addEventListener('click', () => {
                li.remove();
                countAFaire.innerText = taskToDo.childElementCount;
                countFaites.innerText = taskDone.childElementCount;
                countTotal.innerText = taskToDo.childElementCount + taskDone.childElementCount;
            });
            // Ajout du bouton dans mon li
            li.appendChild(deleteButton);

            // Ajouter le li dans ma div tacheToDo
            taskToDo.appendChild(li);

            // remettre à zero l'input
            input.value = "";

            // Mettre à jour les compteurs à l'ajout d'une tache
            countAFaire.innerText = taskToDo.childElementCount;
            countTotal.innerText =  taskToDo.childElementCount + taskDone.childElementCount;
            

        }else{
            errorMessage.style.display = "flex";
        }
    }

    function updateTask(paragraphe,buttonSubmit, inputUpdate,checkbox,updateButton, deleteButton ){
        paragraphe.innerText = inputUpdate.value;

        // Supprimer les éléments de modification input button
        buttonSubmit.remove();
        inputUpdate.remove();

        // Faire réaparaitre les éléments
        checkbox.style.display = "flex";
        paragraphe.style.display = "flex";
        updateButton.style.display = "flex";
        deleteButton.style.display = "flex";
    }
})