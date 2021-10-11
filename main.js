/*!
 *
 *   pxlSodoku
 *   Author: Jgecc <jgecc@gmail.com>
 *   Version: v0.0.1
 *   Url: https://github.com/jgecc/pxlSodoku
 *   License(s): ?
 *
 */

/* Basic Information */
const width = 600;
const height = 600;

const tileNumberx = 9;
const tileNumbery = 9;

const lineBetween = 2;
const lineBetweenx = lineBetween + (lineBetween / tileNumberx);
const lineBetweeny = lineBetween + (lineBetween / tileNumbery);


const tileWidth = (width / tileNumberx) - lineBetweenx;
const tileHeight = (height / tileNumbery) - lineBetweeny;
const smallestTileSide = (tileWidth > tileHeight) ? tileHeight : tileWidth;

/* Create a Pixi Application */
let app = new PIXI.Application({
    width: width,
    height: height
});

document.getElementById("game").appendChild(app.view);

/* Boardcreation */

// Standars values
const fontSize = smallestTileSide / 4;
const TileColorbrighter = "0x383838";
const TileColordarker = "0x262626";

// Fontsytle for Number on the board
const style = new PIXI.TextStyle({
    fill: '#000000',
    fontSize: fontSize
});

// Creates the actual tiles
function chessTiles(color, posX, posY, width, height) {

    // The tile it self
    let tile = new PIXI.Graphics();
    tile.beginFill(color);
    tile.drawRect(posX, posY, width, height);
    tile.endFill();

    app.stage.addChild(tile);
}

// Calls the tiles to create
function createBoard(){
    //  Tile loop

    // for the color change on the 3x3 Blocks
    let threePartSectionx = 0;
    let threePartSectiony = 0;

    for (let x = lineBetweenx; x <= width - tileWidth; x += tileWidth + lineBetween){

        for (let y = lineBetweeny; y <= height - tileHeight; y += tileHeight + lineBetween){

            // Tilecreation
            if (threePartSectionx > 2 && threePartSectionx < 6 && (threePartSectiony < 3 || threePartSectiony > 5) || ((threePartSectionx < 3 || threePartSectionx > 5) && threePartSectiony > 2 && threePartSectiony < 6)) {
                chessTiles(TileColorbrighter, x, y, tileWidth, tileHeight);
            }else {
                chessTiles(TileColordarker, x, y, tileWidth, tileHeight);
            }

            threePartSectiony++;
        }
        threePartSectiony = 0;
        threePartSectionx++;
    }
}

createBoard();