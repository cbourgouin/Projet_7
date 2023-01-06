function init() {
    const recipesArticles = document.getElementById('recipes');
    recipes.forEach((recipe) => {
        const recipesModel = recipeFactory(recipe);
        const recipeCardDOM = recipesModel.getRecipesCardDOM();
        recipesArticles.appendChild(recipeCardDOM);
    });
    ListIngredient = getListIngredient(recipes);
    ListIngredient.forEach((ingredient) => {
        console.log(ingredient);
    });

    FiltresButtons = document.querySelectorAll('.typeDeFiltre>div>button');

    FiltresButtons.forEach((FiltresButton) => FiltresButton.addEventListener('click', onClickFiltreButton));
}

init();

function onClickFiltreButton() {
    const typeFiltre = this.parentElement.parentElement;
    if(typeFiltre.classList.length == 2) {
        typeFiltre.classList.add('deploy');
    } else if(typeFiltre.classList.length == 3){
        typeFiltre.classList.remove('deploy');
    }
}