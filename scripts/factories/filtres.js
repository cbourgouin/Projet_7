function filtreFactory(data) {
    // Creation des bouton de filtre
        function getFilterButtonDOM() {
            let listButtonFiltre = [];

            for(let i = 0; i < data.length; i++) {
                const button = document.createElement('button');
                button.textContent = data[i];
                listButtonFiltre.push(button);
            }
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