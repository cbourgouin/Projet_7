let recipesFiltered;
recipesFiltered = Array.from(recipes);

function init(_recipes) {
    const recipesArticles = document.getElementById('recipes');
    const typeDeFiltreIngrediens = document.querySelector('#filtres .typeDeFiltre.ingrediens .filtreOption');
    const typeDeFiltreAppliance = document.querySelector('#filtres .typeDeFiltre.appareils .filtreOption');
    const typeDeFiltreUstensils = document.querySelector('#filtres .typeDeFiltre.ustensiles .filtreOption');
    const inputsFilter = document.querySelectorAll('.typeDeFiltre input');
    const inputsSearch = document.getElementById('inputDeRecherche');

    _recipes.forEach((recipe) => {
        const recipesModel = recipeFactory(recipe);
        const recipeCardDOM = recipesModel.getRecipesCardDOM();
        recipesArticles.appendChild(recipeCardDOM);
    });

    ListIngrediensButton = filtreFactory(getListIngredient(_recipes)).getFilterButtonDOM();
    ListIngrediensButton.forEach((button) => {
        typeDeFiltreIngrediens.appendChild(button);
    });

    ListAppareilsButton = filtreFactory(getListAppliance(_recipes)).getFilterButtonDOM();
    ListAppareilsButton.forEach((button) => {
        typeDeFiltreAppliance.appendChild(button);
    });

    ListUstensilsButton = filtreFactory(getListUstensils(_recipes)).getFilterButtonDOM();
    ListUstensilsButton.forEach((button) => {
        typeDeFiltreUstensils.appendChild(button);
    });

    inputsFilter.forEach((input) => {
        input.addEventListener('input', inputsFilter_valueChanged);
    });

    inputsSearch.addEventListener('input', inputsSearch_valueChanged);

    const buttonFiltre = document.querySelectorAll('.filtreOption button');
    buttonFiltre.forEach((button) => {
        button.addEventListener('click', addFilterActif);
    });

    FiltresGeneralButtons = document.querySelectorAll('.typeDeFiltre>div>button');
    FiltresGeneralButtons.forEach((FiltresButton) => FiltresButton.addEventListener('click', onClickFiltreButton));
}

init(recipes);

//Quand on click sur les selects des filtres 
function onClickFiltreButton() {
    const clicktypeFiltre = this.parentElement.parentElement;
    const otherTypeFiltres = document.querySelectorAll("#filtres .typeDeFiltre");
    if (clicktypeFiltre.classList.length == 2) {
        otherTypeFiltres.forEach((otherTypeFiltre) => {
            if (otherTypeFiltre.classList.length == 3) {
                otherTypeFiltre.classList.remove('deploy');
            }
        });
        clicktypeFiltre.classList.add('deploy');
    } else if (clicktypeFiltre.classList.length == 3) {
        clicktypeFiltre.classList.remove('deploy');
    }
}

//appuis sur l'ajout d'un filtres
function addFilterActif() {
    const cardFilter = filtreFactory(this.innerText).getCardActiveFilter(this.parentElement.parentElement.classList[1]);
    const zoneCardFilter = document.getElementById('filtrersActive');
    zoneCardFilter.append(cardFilter);
    const btnDelFiltreActif = document.querySelectorAll('.buttonDelCard');
    btnDelFiltreActif.forEach((btn) => btn.addEventListener('click', removeFilterActif));
    filterRecipes();
}

function removeFilterActif() {
    this.parentElement.remove();
    filterRecipes();
}

//Supprimer tout les éléments creer avec les DOMs
function removeDOMElement() {
    const btnFilters = document.querySelectorAll('.typeDeFiltre .filtreOption button');
    const cardRecipes = document.querySelectorAll('#recipes article');
    btnFilters.forEach((btn) => {
        btn.remove();
    });
    cardRecipes.forEach((card) => {
        card.remove();
    });

}
// filtrer les recettes et recreer les element sur la page 
function filterRecipes() {
    let filters = [];
    const filtrersActive = document.getElementById('filtrersActive');
    const cardFiltersActive = filtrersActive.querySelectorAll('.cardFilterActive');
    if (cardFiltersActive.length > 0) {
        cardFiltersActive.forEach((card) => {
            filters.push(
                {
                    text: card.querySelector('a').textContent.toLowerCase(),
                    type: card.classList[1]
                }
            );
        });
    }
    recipesFiltered = Array.from(recipes);
    if (filters.length > 0) {
        filters.forEach((filter) => {
            for (let i = 0; i < recipesFiltered.length; i++) {
                switch (filter.type) {
                    case 'ingrediens':
                        var corespond = false;
                        recipesFiltered[i].ingredients.forEach((ingredient) => {
                            if (ingredient.ingredient.toLowerCase() === filter.text || ingredient.ingredient.toLowerCase() === filter.text + 's') {
                                corespond = true;
                            }
                        });
                        if (corespond === false) {
                            recipesFiltered.splice(i, 1);
                            i--;
                        }
                        break;
                    case 'appareils':
                        if (recipesFiltered[i].appliance.toLowerCase() !== filter.text) {
                            recipesFiltered.splice(i, 1);
                            i--;
                        }
                        break;
                    case 'ustensiles':
                        var corespond = false;
                        recipesFiltered[i].ustensils.forEach((ustensil) => {
                            if (ustensil.toLowerCase() === filter.text) {
                                corespond = true;
                            }
                        });
                        if (corespond === false) {
                            recipesFiltered.splice(i, 1);
                            i--;
                        }
                        break;
                }
            }
        });
    }
    console.log(recipesFiltered);
    removeDOMElement();
    init(recipesFiltered);
}

function inputsFilter_valueChanged() {
    var listButtons = this.parentElement.parentElement.querySelectorAll(".filtreOption button");
        for(var i = 0; i < listButtons.length; i++) {
            if(!comparisonString(listButtons[i].innerText, this.value)){
                listButtons[i].style.display = 'none';
            } else {
                listButtons[i].style.display = 'block';
            }
        }
}

function inputsSearch_valueChanged() {
    if(this.value.length >= 3) {
        for (let i = 0; i < recipesFiltered.length; i++) {
            var corespond = false;
            searchList = createSearchList(recipesFiltered[i]);
            searchList.forEach((searchWord) => {
                if(comparisonString(searchWord, this.value)){
                    corespond = true;
                }
            });
            if(corespond === false){
                recipesFiltered.splice(i, 1);
                i--;
            }
        }
        removeDOMElement();
        init(recipesFiltered);
    } else {
        filterRecipes();
    }
}