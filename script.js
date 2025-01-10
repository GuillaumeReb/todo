function addTodo () {
    // Récupérer la valeur
    const input = document.getElementById('todo-input');
    const todoText = input.value.trim();

    // Vérifier si la valeur n'est pas vide
    if (todoText === '') return;

    // Récupérer la todo
    const todoList = document.getElementById('todo-list');

    // Créer une nouvelle tâche
    const li = document.createElement('li');
    li.textContent = todoText;

    // Ajouter un bouton supprimer
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Supprimer";
    deleteButton.classList.add("delete-button");
    deleteButton.onclick = function() {
        todoList.removeChild(li)
    }

    // Associer le bouton avec l'élément
    li.appendChild(deleteButton);

    // Ajouter l'élément à la page
    todoList.appendChild(li);

    // Réinitialiser
    input.value = "";
    
}