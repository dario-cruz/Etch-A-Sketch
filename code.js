// Defining html elements. 
const gridContainer = document.getElementById('gridcontainer');
const gridSelect = document.getElementById('GridSelect');

// Defining elements to be created.
const createGridBox = document.createElement('div');

// Adding class for changing color later.
createGridBox.setAttribute('id', 'pixel');
createGridBox.setAttribute('class', 'gridpixels');
// Create grid function with number arg. 
function fillGrid(num) {
    for (let i = 0; i < num; i++) {
        // Adds numbered pixel ID to generated divs
        // createGridBox.setAttribute('id', `pixel-${i}`);
        
        // cloneNode allows for cloning of the same item.
        // Without it this line would only create one grid item. 
        gridContainer.appendChild(createGridBox.cloneNode(true));
    }
    // Takes the nums arg and gets the sqr root and applies that to the gridTemp style. 
    // Makes perfect grid squares. 😁😁😁
    gridContainer.style.gridTemplateColumns = `repeat(${Math.sqrt(num)}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${Math.sqrt(num)}, 1fr)`;
}

// Defining const for elements created by the createGridBox.
const gridPixel = document.getElementById('pixel');

fillGrid(256);

// Setting up even listeners for hovering. 
// Used a loop to apply even to multiple items.
document.querySelectorAll('.gridpixels').forEach(item => {
    item.addEventListener('mouseover', () => {
        // Sets the css for each itme on event. 
        item.style.backgroundColor = 'black';
    
    })  
});