function init() {
    const recipesArticles = document.getElementById('recipes');
    const typeDeFiltreIngrediens = document.querySelector('.filtre .typeDeFiltre.ingrediens');

    recipes.forEach((recipe) => {
        const recipesModel = recipeFactory(recipe);
        const recipeCardDOM = recipesModel.getRecipesCardDOM();
        recipesArticles.appendChild(recipeCardDOM);
    });

    ListIngrediens = getListIngredient(recipes);
    ListIngrediens.forEach((ingredient) => {
        console.log(ingredient);
    });


    FiltresGeneralButtons = document.querySelectorAll('.typeDeFiltre>div>button');
    FiltresGeneralButtons.forEach((FiltresButton) => FiltresButton.addEventListener('click', onClickFiltreButton));
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