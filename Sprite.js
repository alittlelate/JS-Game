class Sprite {
  constructor(config) {
    //*Set up the image
    this.image = new Image();
    this.image.src = config.src;
    this.image.onload = () => {
      this.isLoaded = true;
    };

    //*Set up shadow
    this.shadow = new Image();
    this.useShadow = true; //*config.useShadow || false;
    //*If we don't want to use the shadow use the flag
    if (this.useShadow) {
      this.shadow.src = "Images/characters/shadow.png";
    }
    this.shadow.onload = () => {
      this.isShadowLoaded = true;
    };

    //*Configure animation in initial state
    this.animations = config.animations || {
      "idle-down": [[0, 0]],
      "idle-right": [[0, 1]],
      "idle-up": [[0, 2]],
      "idle-left": [[0, 3]],
      "walk-down": [
        [1, 0],
        [0, 0],
        [3, 0],
        [0, 0],
      ],
      "walk-right": [
        [1, 1],
        [0, 1],
        [3, 1],
        [0, 1],
      ],
      "walk-up": [
        [1, 2],
        [0, 2],
        [3, 2],
        [0, 2],
      ],
      "walk-left": [
        [1, 3],
        [0, 3],
        [3, 3],
        [0, 3],
      ],
    };
    this.currentAnimation = "idle-right"; //config.currentAnimation || "idle-down";
    this.currentAnimationFrame = 0;

    /**
     * TODO: Perchè la velocità di movimento cambia da computer a computer? Il codice ha preso vita propria
     */
    //*For how long do we want to show a specific frame
    this.animationFrameLimit = config.animationFrameLimit || 16; //*Speed up or slow down the animation process
    this.animationFrameProgress = this.animationFrameLimit;

    //*Reference the gameObject
    this.gameObject = config.gameObject;
  }

  //*Figure out which animation we are on and at which specific frame we are
  get frame() {
    return this.animations[this.currentAnimation][this.currentAnimationFrame];
  }

  //*Change animation
  setAnimation(key) {
    if (this.currentAnimation !== key) {
      this.currentAnimation = key;
      this.currentAnimationFrame = 0;
      this.animationFrameProgress = this.animationFrameLimit;
    }
  }

  updateAnimationProgress() {
    //*Lower the progress as the animation goes
    if (this.animationFrameProgress > 0) {
      this.animationFrameProgress -= 1;
      return;
    }

    //*Reset the counter
    this.animationFrameProgress = this.animationFrameLimit;
    this.currentAnimationFrame += 1;

    //*Restart from the beginning if there are no more frames
    if (this.frame === undefined) {
      this.currentAnimationFrame = 0;
    }
  }

  draw(ctx, cameraPerson) {
    const x = this.gameObject.x - 15 + utils.withGrid(10.5) - cameraPerson.x; //10.5
    const y = this.gameObject.y - 18 + utils.withGrid(5.75) - cameraPerson.y; //5.75

    this.isShadowLoaded && ctx.drawImage(this.shadow, x + 2, y + 10.5);

    const [frameX, frameY] = this.frame;

    this.isLoaded &&
      ctx.drawImage(this.image, frameX * 16, frameY * 16, 16, 16, x, y, 16, 16);

    this.updateAnimationProgress();
  }
}
