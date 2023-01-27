function recipeFactory(data) {
    const { id, name, servings, ingredients, time, description, appliance, ustensils } = data;
    // Creation des card des recettes
        function getRecipesCardDOM() {
            const article = document.createElement( 'article' );
            const detailRecette = document.createElement( 'div' );
            const titreEtTime = document.createElement( 'div' );
            const ingredientEtEtape = document.createElement( 'div' );
            const titre = document.createElement( 'a' );
            titre.textContent = name;
            const timeDiv = document.createElement( 'div' );
            const timeLogo = document.createElement( 'i' );
            timeLogo.setAttribute('class', 'fa-regular fa-clock');
            const timeText = document.createElement( 'b' );
            timeText.textContent = time + ' min';
            const ingredient = document.createElement( 'div' );
            ingredient.className = 'ingredients';
            ingredients.forEach((item) => {
                const div = document.createElement( 'div' );
                const a = document.createElement( 'a' );
                const b = document.createElement('b');
                b.textContent = item.ingredient + ': ';
                div.appendChild(b);
                if(item.unit === undefined)
                    a.textContent = item.quantity;
                else
                    a.textContent = item.quantity + ' ' + item.unit;
                div.appendChild(a);
                ingredient.appendChild(div);
            });
            const etape = document.createElement( 'div' );
            etape.textContent = description;

            timeDiv.appendChild(timeLogo);
            timeDiv.appendChild(timeText);
            titreEtTime.appendChild(titre);
            titreEtTime.appendChild(timeDiv);
            ingredientEtEtape.appendChild(ingredient);
            ingredientEtEtape.appendChild(etape);
            detailRecette.appendChild(titreEtTime);
            detailRecette.appendChild(ingredientEtEtape);
            article.appendChild(detailRecette);
            return article;
        }

    return { getRecipesCardDOM }
}