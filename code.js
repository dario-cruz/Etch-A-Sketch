// Defining html elements. 
const gridContainer = document.getElementById('gridcontainer');
const gridSelect = document.getElementById('GridSelect');
// Defining elements to be created.

const createGridBox = document.createElement('div');

// Create grid function with number arg. 
function fillGrid(num) {
    for (let i = 0; i < num; i++) {
        gridContainer.appendChild(createGridBox);
    }
}

