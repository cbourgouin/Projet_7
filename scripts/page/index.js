function init() {
    const recipesArticles = document.getElementById('recipes');
    const typeDeFiltreIngrediens = document.querySelector('#filtres .typeDeFiltre.ingrediens .filtreOption');
    const typeDeFiltreAppareils = document.querySelector('#filtres .typeDeFiltre.appareils .filtreOption');
    const typeDeFiltreUstensils = document.querySelector('#filtres .typeDeFiltre.ustensiles .filtreOption');

    recipes.forEach((recipe) => {
        const recipesModel = recipeFactory(recipe);
        const recipeCardDOM = recipesModel.getRecipesCardDOM();
        recipesArticles.appendChild(recipeCardDOM);
    });

    ListIngrediensButton = filtreFactory(getListIngredient(recipes)).getFilterButtonDOM();
    ListIngrediensButton.forEach((button) => {
        typeDeFiltreIngrediens.appendChild(button);
    });

    ListAppareilsButton = filtreFactory(getListAppliance(recipes)).getFilterButtonDOM();
    ListAppareilsButton.forEach((button) => {
        typeDeFiltreAppareils.appendChild(button);
    });

    ListUstensilsButton = filtreFactory(getListUstensils(recipes)).getFilterButtonDOM();
    ListUstensilsButton.forEach((button) => {
        typeDeFiltreUstensils.appendChild(button);
    });
    
    FiltresGeneralButtons = document.querySelectorAll('.typeDeFiltre>div>button');
    FiltresGeneralButtons.forEach((FiltresButton) => FiltresButton.addEventListener('click', onClickFiltreButton));

    // if("le secret de la recette est".includes("de la ")){
    //     console.log("1");
    // } else {
    //     console.log("0");
    // }
}

init();

//Quand on click sur les selects des filtres 
function onClickFiltreButton() {
    const clicktypeFiltre = this.parentElement.parentElement;
    const otherTypeFiltres = document.querySelectorAll("#filtres .typeDeFiltre");
    if(clicktypeFiltre.classList.length == 2) {
        otherTypeFiltres.forEach((otherTypeFiltre) => {
            if(otherTypeFiltre.classList.length == 3) {
                otherTypeFiltre.classList.remove('deploy');
            }
        });
        clicktypeFiltre.classList.add('deploy');
    } else if(clicktypeFiltre.classList.length == 3){
        clicktypeFiltre.classList.remove('deploy');
    }
}