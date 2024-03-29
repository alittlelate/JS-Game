class Overworld {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.map = null;
  }

  startGameLoop() {
    const step = () => {
      //*Clear the canvas a the start
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      //*Set up camera person
      const cameraPerson = this.map.gameObjects.hero;

      //*Update all objects
      Object.values(this.map.gameObjects).forEach((object) => {
        object.update({
          arrow: this.directionInput.direction,
          map: this.map,
        });
      });

      //*Draw lower layer
      this.map.drawLowerImage(this.ctx, cameraPerson);

      //*Draw Game Objects(player, npcs, objects...)
      Object.values(this.map.gameObjects).forEach((object) => {
        object.sprite.draw(this.ctx, cameraPerson);
      });

      //*Draw upper layer
      this.map.drawUpperImage(this.ctx, cameraPerson);

      requestAnimationFrame(() => {
        step();
      });
    };
    step();
  }

  init() {
    this.map = new OverworldMap(window.OverworldMaps.Villaggio);
    console.log(this.map.walls);

    this.directionInput = new DirectionInput();
    this.directionInput.init();
    this.directionInput.direction; //Return "down" || "up" || "left" || "right" || undefined

    this.startGameLoop();
  }
}
