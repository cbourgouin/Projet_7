// Creer une liste d'ingrédient 
function getListIngredient(_recipes) {
    let listIngredient = [];
    for (let i = 0; i < _recipes.length; i++) {
        for (let j = 0; j < _recipes[i].ingredients.length; j++) {
            let ingredientInList = false;
            for (let k = 0; k < listIngredient.length; k++) {
                if (_recipes[i].ingredients[j].ingredient.toLowerCase() == listIngredient[k].toLowerCase() || _recipes[i].ingredients[j].ingredient.toLowerCase() == listIngredient[k].toLowerCase() + "s") {
                    ingredientInList = true;
                }
            }
            if (ingredientInList === false) {
                listIngredient.push(_recipes[i].ingredients[j].ingredient);
            }
        }
    }

    return listIngredient;
}

// Creer une liste d'appareils 
function getListAppliance(_recipes) {
    let listAppliance = [];
    for (let i = 0; i < _recipes.length; i++) {
        let applianceInList = false;
        for (let k = 0; k < listAppliance.length; k++) {
            if (_recipes[i].appliance.toLowerCase() == listAppliance[k].toLowerCase()) {
                applianceInList = true;
            }
        }
        if (applianceInList === false) {
            listAppliance.push(_recipes[i].appliance);
        }
    }

    return listAppliance;
}

// Creer une liste d'ustenciles 
function getListUstensils(_recipes) {
    let listUstensils = [];
    for (let i = 0; i < _recipes.length; i++) {
        for (let j = 0; j < _recipes[i].ustensils.length; j++) {
            let ustensilsInList = false;
            for (let k = 0; k < listUstensils.length; k++) {
                if (_recipes[i].ustensils[j].toLowerCase() == listUstensils[k].toLowerCase()) {
                    ustensilsInList = true;
                }
            }
            if (ustensilsInList === false) {
                listUstensils.push(_recipes[i].ustensils[j]);
            }
        }
    }
    return listUstensils;
}

//comparaison entre la valeur de la recherche et un mot
function comparisonString(_word, _searchString) {
    let comparison = false
    if(_word.toLowerCase().includes(_searchString.toLowerCase() || (_word + 's').toLowerCase().includes(_searchString.toLowerCase()))){
        comparison = true;
    }
    
    return comparison;
}

//Creer une list de string qui seront les axe de recherche avec la bar principal
function createSearchList(_recipes) {
    let searchList = [];
    searchList[searchList.length] = _recipes.name;
    for(let i = 0; i < _recipes.ingredients.length; i++) {
        searchList.push(_recipes.ingredients[i].ingredient);
    }
    searchList[searchList.length] = _recipes.description;
    return searchList;
}