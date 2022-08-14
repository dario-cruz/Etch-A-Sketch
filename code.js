// Defining html elements. 
const gridContainer = document.getElementById('gridcontainer');

// Defining buttons.
const resetBtn = document.getElementById('reset');
const blackBtn = document.getElementById('black');
const colorBtn = document.getElementById('changecolor');
const rainbowBtn = document.getElementById('rainbow');
const eraseBtn = document.getElementById('erase');

// Def button to prompt user for grid size.
const gridChange = document.getElementById('gridchange');

// Colors for color button.
const colArray = ['red', 'green', 'blue', 'orange', 'brown', 'purple', 'wheat', 'aqua', 'teal', 'grey']

gridChange.addEventListener('click', () => {
    let sizeSel = prompt("Please enter grid size.\nOptions are 64,256,1024")
    if (sizeSel == 64 || sizeSel == 256 || sizeSel == 1024) {
        //Removed all current nodes / gridpixels.
        removeAllChildNodes(gridContainer);
        //run grid genfunc
        fillGrid(sizeSel);
        //set def color to black.
        blackGen();
        //send msg to user.
        alert("Grid has been updated.");
    } else if (isNaN(sizeSel)) {
        alert("This is not a number.\nTry again.")
    } else {
        return
    }
})

// Defining elements to be created.
const createGridBox = document.createElement('div');

// Adding class for changing color later.
// createGridBox.setAttribute('id', 'pixel');
createGridBox.setAttribute('class', 'gridpixels');

// Defining const for pixels.
const gridAt = document.querySelectorAll('.gridpixels')



// Variable for color defining and changing. 
let colorValue = 'black';

// Random color generation
let randomColorVal = Math.floor(Math.random()*16777215).toString(16);

function ranCol() {
    let colVal = Math.floor(Math.random()*16777215).toString(16);
    return colVal;
} 


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

fillGrid(64);

// Hover event for grid filling. 
document.querySelectorAll('.gridpixels').forEach(item => {
    item.addEventListener('mouseover', () => {
        // Sets the css for each item on event. 
        item.style.backgroundColor = colorValue;
    })  
});

// Erase button functionality. 🙌🏾🙌🏾
resetBtn.addEventListener('click', () => {
    // gridAt.setAttribute('class', '.gridpixels');    
    document.querySelectorAll('.gridpixels').forEach(item => {
        item.style.backgroundColor = 'white';
        colorValue = 'black'
        console.log(colorValue)
        return colorValue;
    })
})

// Black color button functionality
blackBtn.addEventListener('click', () => {
    // gridAt.replaceWith(gridAt.cloneNode(true))
    blackGen();
});

// Event listener for rainbow button. Calls the rainGen function to generate
// the needed colors. 
rainbowBtn.addEventListener('click', () => {
    // gridAt.replaceWith(gridAt.cloneNode(true))
    rainGen();
   
});

// Erase button functionality.
eraseBtn.addEventListener('click', () => {
    // gridAt.replaceWith(gridAt.cloneNode(true))
    eraGen();
});

// Color btn functionality
colorBtn.addEventListener('click', () => {
    // gridAt.removeEventListener('mouseover', erakGen(), false);
    colGen();
});

// Changes fill color on each mouseover event.
function rainGen() {
    document.querySelectorAll('.gridpixels').forEach(item => {
        item.addEventListener('mouseover', () => {
            // Sets the css for each item on event. 
            item.style.backgroundColor = "#" + ranCol();
        })
    });  
}

// Changes fill color to black.
function blackGen() {
    document.querySelectorAll('.gridpixels').forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'black'
        } )
    })
}

// Function for erase functionality
function eraGen() {
    document.querySelectorAll('.gridpixels').forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'white'
        } )
    })
}

// Function for color.
function colGen() {
    colorValue = colArray[Math.floor(Math.random() * colArray.length)]
    document.querySelectorAll('.gridpixels').forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = colorValue;
        })
    })
}

// Remove all gridpixels func
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}


