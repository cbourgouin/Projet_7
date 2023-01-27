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

        function getCardActiveFilter(_typeFiltre) {
            const card = document.createElement('div');
            card.className = 'cardFilterActive ' + _typeFiltre;
            const a = document.createElement('a');
            a.textContent = data;
            const button = document.createElement('button');
            button.className = "buttonDelCard";
            const i = document.createElement('i');
            i.className = 'fa-regular fa-circle-xmark';

            button.appendChild(i);
            card.appendChild(a);
            card.appendChild(button);
            return card;
        }

    return { getFilterButtonDOM,  getCardActiveFilter}
}