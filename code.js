// Defining html elements. 
const gridContainer = document.getElementById('gridcontainer');
const gridSelect = document.getElementById('GridSelect');
// Defining elements to be created.

const createGridBox = document.createElement('div');

// Create grid function with number arg. 
function fillGrid(num) {
    for (let i = 0; i < num; i++) {
        // cloneNode allows for cloning of the same item.
        // Without it this line would only create one grid item. 
        gridContainer.appendChild(createGridBox.cloneNode(true));
    }
    // Takes the nums arg and gets the sqr root and applies that to the gridTemp style. 
    // Makes perfect grid squares. 😁😁😁
    gridContainer.style.gridTemplateColumns = `repeat(${Math.sqrt(num)}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${Math.sqrt(num)}, 1fr)`;
}

fillGrid(64);