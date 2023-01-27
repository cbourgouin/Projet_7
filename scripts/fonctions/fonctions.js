// Creer une liste d'ingrédient 
function getListIngredient(_recipes) {
    let listIngredient = [];
    for (let i = 0; i < _recipes.length; i++) {
        for (let j = 0; j < _recipes[i].ingredients.length; j++) {
            let ingredientInList = false;
            for (let k = 0; k < listIngredient.length; k++) {
                if (_recipes[i].ingredients[j].ingredient == listIngredient[k] || _recipes[i].ingredients[j].ingredient == listIngredient[k] + "s") {
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
            if (_recipes[i].appliance == listAppliance[k]) {
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
                if (_recipes[i].ustensils[j] == listUstensils[k]) {
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
    comparison = false
    for (let i = 0; i < _word.length - _searchString.length + 1 && comparison == false; i++) {
        nbCom = 0;
        for(let j = 0; j < _searchString.length && j == nbCom; j++) {
            if(_word[i+j] === _searchString[j]) {
                nbCom++;
            }
        }
        if(nbCom == _searchString.length){
            comparison = true;
        }
    }
    return comparison;
}

//Creer une list de string qui seront les axe de recherche avec la bar principal
function createSearchList(_recipes) {
    let searchList = [];
    searchList.push(_recipes.name);
    _recipes.ingredients.forEach((ingredient) => searchList.push(ingredient.ingredient));
    searchList.push(_recipes.description);
    return searchList;
}