// Creer une liste d'ingrédient 
function getListIngredient(_recipes) {
    // Creation de la liste d'ingrédient et suppression des doublons
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
    // Creation de la liste d'ingrédient et suppression des doublons
    let listAppliance = [];
    for (let i = 0; i < _recipes.length; i++) {
        let applianceInList = false;
        for (let k = 0; k < listAppliance.length; k++) {
            if (_recipes[i].appliance == listIngredient[k]) {
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
    // Creation de la liste d'ingrédient et suppression des doublons
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