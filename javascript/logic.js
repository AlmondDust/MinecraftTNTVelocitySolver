'use strict';

$(document).ready(function(){

    //Add entities to dropdown
    let dropdown = $('#entityType');
    entitySizes.forEach(obj => {
        let newOption = document.createElement('option');
        newOption.value = obj.Entity;
        newOption.innerHTML = obj.Entity;
        dropdown.append(newOption);
    });
});
