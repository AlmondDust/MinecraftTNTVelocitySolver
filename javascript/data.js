'use strict';

//Forms data into global variables from json format
let entitySizes = JSON.parse(entitySizesData);
entitySizes.sort((a, b) => (a.Entity > b.Entity) ? 1 : -1);
