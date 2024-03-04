//*A file only used to control the people in the map (MC, NPCs)

class Person extends GameObject {
  constructor(config) {
    super(config);
    this.movingProgressRemaining = 0;

    this.isPlayerControlled = config.isPlayerControlled || false;

    this.directionUpdate = {
      up: ["y", -1],
      down: ["y", 1],
      left: ["x", -1],
      right: ["x", 1],
    };
  }

  update(state) {
    if (this.movingProgressRemaining > 0) {
      this.updatePosition();
    } else {
      
      //More cases for starting to walk will come here
      //
      //
      
      //*Case: Player is allowed to use keyboard(outside cutscenes) ready and arrow is pressed
      if (this.isPlayerControlled && state.arrow) {
        this.startBehavior(state, {
          type: "walk",
          direction: state.arrow
        })
      }
      this.updateSprite(state);
    }
  }

  //*Will allow us to fire a specific comand when a certain behavior happens w/o needing the arrow key pressed
  startBehavior(state, behavior) {
    this.direction = behavior.direction;

    if (behavior.type === "walk") {
      
      //*Stop if space is no free
      if (state.map.isSpaceTaken(this.x, this.y, this.direction)) {
        return;
      }
      //*Ready to walk if space = free
      this.movingProgressRemaining = 16;
    }
  }

  updatePosition() {
    //*Property will be "x" or "y", change 1 or -1
    const [property, change] = this.directionUpdate[this.direction]; //Bc Person extends GameObject, we can read this.direction
    this[property] += change;
    this.movingProgressRemaining -= 1;
  }

  updateSprite() {
    if (this.movingProgressRemaining > 0) {
      this.sprite.setAnimation("walk-" + this.direction);
      return;
    }
    this.sprite.setAnimation("idle-" + this.direction);
  }
}
