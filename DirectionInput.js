class DirectionInput {
  constructor() {
    this.heldDirections = [];

    this.map = {
      ArrowUp: "up",
      KeyW: "Up",
      ArrowDown: "down",
      KeyS: "down",
      ArrowLeft: "left",
      KeyA: "left",
      ArrowRight: "right",
      KeyD: "right",
    };
  }

  //*A way to quickly ask the direction from other files w/o digging through the array
  get direction(){
    return this.heldDirections[0];
  }

  init() {
    document.addEventListener("keydown", (e) => {
      const dir = this.map[e.code];

      //*If the key being held is one of those we need, and it was not the one held previously...
      if (dir && this.heldDirections.indexOf(dir) === -1) {
        //Add the direction at the beginning of the array
        this.heldDirections.unshift(dir);
        console.log(this.heldDirections)
      }
    });

    document.addEventListener("keyup", (e) => {
      const dir = this.map[e.code];
      const index = this.heldDirections.indexOf(dir);
      if (index > -1) {
        //Remove the direction from the array
        this.heldDirections.splice(index, 1);
        console.log(this.heldDirections)
      }
    });
  }
}
