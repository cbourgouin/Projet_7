let recipesFiltered;
recipesFiltered = Array.from(recipes);

function init(_recipes) {
    const recipesArticles = document.getElementById('recipes');
    const typeDeFiltreIngrediens = document.querySelector('#filtres .typeDeFiltre.ingrediens .filtreOption');
    const typeDeFiltreAppliance = document.querySelector('#filtres .typeDeFiltre.appareils .filtreOption');
    const typeDeFiltreUstensils = document.querySelector('#filtres .typeDeFiltre.ustensiles .filtreOption');
    const inputsFilter = document.querySelectorAll('.typeDeFiltre input');
    const inputsSearch = document.getElementById('inputDeRecherche');

    for (let i = 0; i < _recipes.length; i++) {
        const recipesModel = recipeFactory(_recipes[i]);
        const recipeCardDOM = recipesModel.getRecipesCardDOM();
        recipesArticles.appendChild(recipeCardDOM);
    }

    ListIngrediensButton = filtreFactory(getListIngredient(_recipes)).getFilterButtonDOM();
    for (let i = 0; i < ListIngrediensButton.length; i++) {
        typeDeFiltreIngrediens.appendChild(ListIngrediensButton[i]);
    }

    ListAppareilsButton = filtreFactory(getListAppliance(_recipes)).getFilterButtonDOM();
    for (let i = 0; i < ListAppareilsButton.length; i++) {
        typeDeFiltreAppliance.appendChild(ListAppareilsButton[i]);
    }

    ListUstensilsButton = filtreFactory(getListUstensils(_recipes)).getFilterButtonDOM();
    for (let i = 0; i < ListUstensilsButton.length; i++) {
        typeDeFiltreUstensils.appendChild(ListUstensilsButton[i]);
    }


    for (let i = 0; i < inputsFilter.length; i++) {
        inputsFilter[i].addEventListener('input', inputsFilter_valueChanged);
    }

    inputsSearch.addEventListener('input', inputsSearch_valueChanged);

    const buttonFiltre = document.querySelectorAll('.filtreOption button');
    for (let i = 0; i < buttonFiltre.length; i++) {
        buttonFiltre[i].addEventListener('click', addFilterActif);
    }

    FiltresGeneralButtons = document.querySelectorAll('.typeDeFiltre>div>button');
    for (let i = 0; i < FiltresGeneralButtons.length; i++) {
        FiltresGeneralButtons[i].addEventListener('click', onClickFiltreButton);
    }
}

init(recipes);

//Quand on click sur les selects des filtres 
function onClickFiltreButton() {
    const clicktypeFiltre = this.parentElement.parentElement;
    const otherTypeFiltres = document.querySelectorAll("#filtres .typeDeFiltre");
    if (clicktypeFiltre.classList.length == 2) {
        for (let i = 0; i < otherTypeFiltres.length; i++) {
            if (otherTypeFiltres[i].classList.length == 3) {
                otherTypeFiltres[i].classList.remove('deploy');
            }
        }
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
    for (let i = 0; i < btnDelFiltreActif.length; i++) {
        btnDelFiltreActif[i].addEventListener('click', removeFilterActif)
    }
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
    for (let i = 0; i < btnFilters.length; i++) {
        btnFilters[i].remove();
    }
    for (let i = 0; i < cardRecipes.length; i++) {
        cardRecipes[i].remove();
    }
}

// filtrer les recettes et recreer les element sur la page 
function filterRecipes() {
    let filters = [];
    const filtrersActive = document.getElementById('filtrersActive');
    const cardFiltersActive = filtrersActive.querySelectorAll('.cardFilterActive');
    if (cardFiltersActive.length > 0) {
        for (let i = 0; i < cardFiltersActive.length; i++) {
            filters.push(
                {
                    text: cardFiltersActive[i].querySelector('a').textContent.toLowerCase(),
                    type: cardFiltersActive[i].classList[1]
                }
            );
        }
    }
    for (let i = 0; i < recipes.length; i++) {
        recipesFiltered[i] = recipes[i];
    }
    if (filters.length > 0) {
        for (let i = 0; i < filters.length; i++) {
            let newRecipesFiltered = [];
            for (let u = 0; u < recipesFiltered.length; u++) {
                switch (filters[i].type) {
                    case 'ingrediens':
                        var corespond = false;
                        for (let k = 0; k < recipesFiltered[u].ingredients.length; k++) {
                            if (recipesFiltered[u].ingredients[k].ingredient.toLowerCase() === filters[i].text ||recipesFiltered[u].ingredients[k].ingredient.toLowerCase() === filters[i].text + 's') {
                                corespond = true;
                            }
                        }
                        if (corespond === true) {
                            newRecipesFiltered[newRecipesFiltered.length] = recipesFiltered[u];
                        }
                        break;
                    case 'appareils':
                        if (recipesFiltered[u].appliance.toLowerCase() === filters[i].text) {
                            newRecipesFiltered[newRecipesFiltered.length] = recipesFiltered[u];
                        }
                        break;
                    case 'ustensiles':
                        var corespond = false;
                        for (let k = 0; k < recipesFiltered[u].ustensils.length; k++) {
                            if (recipesFiltered[u].ustensils[k].toLowerCase() === filters[i].text) {
                                corespond = true;
                            }
                        }
                        if (corespond === true) {
                            newRecipesFiltered[newRecipesFiltered.length] = recipesFiltered[u];
                        }
                        break;
                }
            }
            recipesFiltered = [];
            for (let i = 0; i < newRecipesFiltered.length; i++) {
                recipesFiltered[i] = newRecipesFiltered[i];
            }
        }
    }
    console.log(recipesFiltered);
    removeDOMElement();
    init(recipesFiltered);
    const otherTypeFiltres = document.querySelectorAll("#filtres .typeDeFiltre");
    for (let i = 0; i < otherTypeFiltres.length; i++) {
        if (otherTypeFiltres[i].classList.length == 3) {
            otherTypeFiltres[i].classList.remove('deploy');
        }
    }
}

/**
 * 
 */
function inputsFilter_valueChanged() {
    let listButtons = this.parentElement.parentElement.querySelectorAll(".filtreOption button");
    for (let i = 0; i < listButtons.length; i++) {
        if (!comparisonString(listButtons[i].innerText, this.value)) {
            listButtons[i].style.display = 'none';
        } else {
            listButtons[i].style.display = 'block';
        }
    }
}

function inputsSearch_valueChanged() {
    if (this.value.length >= 3) {
        filterRecipes();
        let newRecipesFiltered = [];
        for (let i = 0; i < recipesFiltered.length; i++) {
            let corespond = false;
            searchList = createSearchList(recipesFiltered[i]);
            for (let j = 0; j < searchList.length; j++) {
                if (comparisonString(searchList[j], this.value)) {
                    corespond = true;
                }
            }
            if (corespond === true) {
                newRecipesFiltered[newRecipesFiltered.length] = recipesFiltered[i];
            }
        }
        recipesFiltered = [];
        for (let i = 0; i < newRecipesFiltered.length; i++) {
            recipesFiltered[i] = newRecipesFiltered[i];
        }
        removeDOMElement();
        init(recipesFiltered);
    } else {
        filterRecipes();
    }
}