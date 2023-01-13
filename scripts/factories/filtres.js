function filtreFactory(data) {
    // Creation des bouton de filtre
        function getFilterButtonDOM() {
            let listButtonFiltre = [];
            data.forEach((item) => {
                const button = document.createElement('button');
                button.textContent = item;
                listButtonFiltre.push(button); 
            });
            return listButtonFiltre;
        }

    return { getRecipesCardDOM }
}