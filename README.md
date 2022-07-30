# Etch-A-Sketch

## Javascript Etch-A-Sketch Project
- Goal of the project is to create web application, such that, when the users mouse cursor is over the designated grid area, the tiles on the grid fill in.

## Features
- 3x Grid sizes. 64x64. 128x128, and 256x256
- Single color function.
- Rainbow color function.
- Eraser function. 
- Canvas Reset. 

## Psuedocode

```
On Game start:
    Set grid to default (64x64):
        Create div objects in grid container relative to grid size option.
        Set div objects to default color (white).
    Set color to default (black)

Function (Coloring) {
    On Mouse Over:
        Set grid element to color.(based on user selected option.)
}

Function (Erasing) {
    One Mouse Over event:
        Set grid element to white.
}

Function(Reset) {
    On button press / selection:
        Set all grid elements to color (white)
}

```