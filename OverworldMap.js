class OverworldMap {
  constructor(config) {
    this.gameObjects = config.gameObjects;
    this.walls = config.walls || {};

    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;

    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;
  }

  drawLowerImage(ctx, cameraPerson) {
    ctx.drawImage(
      this.lowerImage,
      utils.withGrid(10.5) - cameraPerson.x,
      utils.withGrid(5.75) - cameraPerson.y
    );
  }

  drawUpperImage(ctx, cameraPerson) {
    ctx.drawImage(
      this.upperImage,
      utils.withGrid(10.5) - cameraPerson.x,
      utils.withGrid(5.75) - cameraPerson.y
    );
  }

  isSpaceTaken(currentX, currentY, direction) {
    const { x, y } = utils.nextPosition(currentX, currentY, direction);
    console.log("coords", `${x},${y}`);
    console.log("walls", this.walls);
    return this.walls[`${x},${y}`] || false;
  }
}

window.OverworldMaps = {
  Villaggio: {
    lowerSrc: "Images/maps/Villaggio Iniziale.png",
    upperSrc: "Images/maps/Villaggio Foregrounds.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(17.5), //*6.5 and 8 to start at the first house
        y: utils.withGrid(8),
      }),
      master: new Person({
        x: utils.withGrid(23.5),
        y: utils.withGrid(18.8),
        src: "Images/characters/Master/SpriteSheet.png",
      }),
    },
    walls: {
      [utils.asGridCoord(0, 3)]: true,
      [utils.asGridCoord(1, 3)]: true,
      [utils.asGridCoord(2, 3)]: true,
      [utils.asGridCoord(3, 3)]: true,
      [utils.asGridCoord(4, 3)]: true,
      [utils.asGridCoord(5, 3)]: true,
      [utils.asGridCoord(6, 3)]: true,
      [utils.asGridCoord(7, 3)]: true,
      [utils.asGridCoord(8, 3)]: true,
      [utils.asGridCoord(9, 3)]: true,
      [utils.asGridCoord(10, 3)]: true,
      [utils.asGridCoord(11, 3)]: true,
      [utils.asGridCoord(12, 3)]: true,
      [utils.asGridCoord(13, 3)]: true,
      [utils.asGridCoord(14, 3)]: true,
      [utils.asGridCoord(15, 3)]: true,
      [utils.asGridCoord(16, 3)]: true,
      [utils.asGridCoord(17, 3)]: true,
      [utils.asGridCoord(18, 3)]: true,
      [utils.asGridCoord(19, 3)]: true,
      [utils.asGridCoord(20, 3)]: true,
      [utils.asGridCoord(21, 3)]: true,
      [utils.asGridCoord(22, 3)]: true,
      [utils.asGridCoord(23, 3)]: true,
      [utils.asGridCoord(24, 3)]: true,
      [utils.asGridCoord(25, 3)]: true,
      [utils.asGridCoord(26, 3)]: true,
      [utils.asGridCoord(27, 3)]: true,
      [utils.asGridCoord(28, 3)]: true,
      [utils.asGridCoord(29, 3)]: true,
      [utils.asGridCoord(5, 15)]: true,
      [utils.asGridCoord(7, 15)]: true,
      [utils.asGridCoord(26, 17)]: true,
      [utils.asGridCoord(27, 17)]: true,
      [utils.asGridCoord(21, 17)]: true,
      [utils.asGridCoord(22, 17)]: true,
      [utils.asGridCoord(23, 17)]: true,
      [utils.asGridCoord(24, 17)]: true,
      [utils.asGridCoord(25, 17)]: true,
      [utils.asGridCoord(22, 16)]: true,
      [utils.asGridCoord(23, 16)]: true,
      [utils.asGridCoord(24, 16)]: true,
      [utils.asGridCoord(25, 16)]: true,
      [utils.asGridCoord(22, 15)]: true,
      [utils.asGridCoord(23, 15)]: true,
      [utils.asGridCoord(24, 15)]: true,
      [utils.asGridCoord(25, 15)]: true,
      [utils.asGridCoord(3, 4)]: true,
      [utils.asGridCoord(3, 5)]: true,
      [utils.asGridCoord(3, 6)]: true,
      [utils.asGridCoord(3, 7)]: true,
      [utils.asGridCoord(3, 8)]: true,
      [utils.asGridCoord(4, 8)]: true,
      [utils.asGridCoord(5, 8)]: true,
      [utils.asGridCoord(7, 8)]: true,
      [utils.asGridCoord(8, 8)]: true,
      [utils.asGridCoord(9, 8)]: true,
      [utils.asGridCoord(10, 8)]: true,
      [utils.asGridCoord(10, 7)]: true,
      [utils.asGridCoord(10, 6)]: true,
      [utils.asGridCoord(10, 5)]: true,
      [utils.asGridCoord(10, 4)]: true,
      [utils.asGridCoord(14, 4)]: true,
      [utils.asGridCoord(14, 5)]: true,
      [utils.asGridCoord(14, 6)]: true,
      [utils.asGridCoord(14, 7)]: true,
      [utils.asGridCoord(14, 8)]: true,
      [utils.asGridCoord(15, 8)]: true,
      [utils.asGridCoord(16, 8)]: true,
      [utils.asGridCoord(17, 8)]: true,
      [utils.asGridCoord(18, 8)]: true,
      [utils.asGridCoord(19, 8)]: true,
      [utils.asGridCoord(20, 8)]: true,
      [utils.asGridCoord(21, 8)]: true,
      [utils.asGridCoord(21, 7)]: true,
      [utils.asGridCoord(21, 6)]: true,
      [utils.asGridCoord(21, 5)]: true,
      [utils.asGridCoord(21, 4)]: true,
      [utils.asGridCoord(22, 4)]: true,
      [utils.asGridCoord(22, 5)]: true,
      [utils.asGridCoord(22, 6)]: true,
      [utils.asGridCoord(22, 7)]: true,
      [utils.asGridCoord(22, 8)]: true,
      [utils.asGridCoord(23, 8)]: true,
      [utils.asGridCoord(24, 8)]: true,
      [utils.asGridCoord(25, 8)]: true,
      [utils.asGridCoord(26, 8)]: true,
      [utils.asGridCoord(28, 8)]: true,
      [utils.asGridCoord(29, 8)]: true,
      [utils.asGridCoord(29, 7)]: true,
      [utils.asGridCoord(29, 6)]: true,
      [utils.asGridCoord(29, 5)]: true,
      [utils.asGridCoord(29, 4)]: true,
      [utils.asGridCoord(4, 7)]: true,
      [utils.asGridCoord(9, 7)]: true,
      [utils.asGridCoord(15, 4)]: true,
      [utils.asGridCoord(20, 7)]: true,
      [utils.asGridCoord(20, 4)]: true,
      [utils.asGridCoord(28, 7)]: true,
      [utils.asGridCoord(25, 6)]: true,
      [utils.asGridCoord(25, 5)]: true,
      [utils.asGridCoord(25, 4)]: true,
      [utils.asGridCoord(24, 4)]: true,
      [utils.asGridCoord(23, 4)]: true,
      [utils.asGridCoord(12, 4)]: true,
      [utils.asGridCoord(1, 5)]: true,
      [utils.asGridCoord(5, 6)]: true,
      [utils.asGridCoord(6, 6)]: true,
      [utils.asGridCoord(7, 6)]: true,
      [utils.asGridCoord(8, 6)]: true,
      [utils.asGridCoord(5, 5)]: true,
      [utils.asGridCoord(6, 5)]: true,
      [utils.asGridCoord(7, 5)]: true,
      [utils.asGridCoord(8, 5)]: true,
      [utils.asGridCoord(5, 4)]: true,
      [utils.asGridCoord(6, 4)]: true,
      [utils.asGridCoord(7, 4)]: true,
      [utils.asGridCoord(8, 4)]: true,
      [utils.asGridCoord(16, 6)]: true,
      [utils.asGridCoord(17, 6)]: true,
      [utils.asGridCoord(18, 6)]: true,
      [utils.asGridCoord(19, 6)]: true,
      [utils.asGridCoord(16, 5)]: true,
      [utils.asGridCoord(17, 5)]: true,
      [utils.asGridCoord(18, 5)]: true,
      [utils.asGridCoord(19, 5)]: true,
      [utils.asGridCoord(16, 4)]: true,
      [utils.asGridCoord(17, 4)]: true,
      [utils.asGridCoord(18, 4)]: true,
      [utils.asGridCoord(19, 4)]: true,
      [utils.asGridCoord(26, 6)]: true,
      [utils.asGridCoord(27, 6)]: true,
      [utils.asGridCoord(28, 6)]: true,
      [utils.asGridCoord(26, 5)]: true,
      [utils.asGridCoord(27, 5)]: true,
      [utils.asGridCoord(28, 5)]: true,
      [utils.asGridCoord(26, 4)]: true,
      [utils.asGridCoord(27, 4)]: true,
      [utils.asGridCoord(28, 4)]: true,
      [utils.asGridCoord(10, 13)]: true,
      [utils.asGridCoord(11, 13)]: true,
      [utils.asGridCoord(12, 13)]: true,
      [utils.asGridCoord(13, 13)]: true,
      [utils.asGridCoord(10, 14)]: true,
      [utils.asGridCoord(10, 15)]: true,
      [utils.asGridCoord(11, 15)]: true,
      [utils.asGridCoord(12, 15)]: true,
      [utils.asGridCoord(13, 15)]: true,
      [utils.asGridCoord(13, 14)]: true,
    },
  },
  Dungeon: {
    lowerSrc: "Images/maps/Dungeon.png",
    upperSrc: "Images/maps/Dungeon Foreground.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(15),
        y: utils.withGrid(8.5),
      }),
      /**       
        *TODO: Add monsters for battle in the dungeon 
        master: new Person({
        x: utils.withGrid(23.5),
        y: utils.withGrid(18.8),
        src: "Images/characters/Master/SpriteSheet.png",
      }), */
    },
  },
  /**   
 * TODO: Add the houses interiors in the maps once designed.
 MasterHouse: {},
  GeneralInterior: {}, */
};
