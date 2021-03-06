module Codheadz {
    export class Player extends Phaser.Sprite {
        allowChangeDirection: boolean;

        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y, 'simon', 0);

            this.anchor.setTo(0.5, 0);

            this.animations.add('walk', [0, 1, 2, 3], 10, true);
            this.animations.add('death', [4, 5, 6, 7], 20, false);

            game.add.existing(this);

            //  We need to enable physics on the player
            game.physics.arcade.enable(this);

            //  Player physics properties. Give the little guy a slight bounce.
            this.body.bounce.y = 0.1;
            this.body.gravity.y = 400;
            this.body.collideWorldBounds = true;
            this.body.checkCollision.up = false;
            this.body.checkCollision.left = false;
            this.body.checkCollision.right = false;

            this.allowChangeDirection = true;

            this.alive = true;
        }


        death() {
            if (this.alive) {
                this.animations.play('death');
                this.alive = false;
            }
        }

        update() {

            if (this.alive) {
                if (this.body.touching.down) {
                    if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)
                        || this.game.input.keyboard.isDown(Phaser.Keyboard.J)) {
                        this.body.velocity.y = -300;
                    }
                }
                if (this.game.input.keyboard.isDown(Phaser.Keyboard.D)) {
                    if (this.allowChangeDirection) {
                        if (this.scale.x == -1) {
                            this.scale.x = 1;
                            this.body.velocity.x = 150;
                        }
                        else {
                            this.scale.x = -1;
                            this.body.velocity.x = -150;
                        }

                        this.allowChangeDirection = false;
                    }
                }
                else {
                    this.allowChangeDirection = true;
                }
                if (this.body.touching.left || this.body.position.x == 0) {
                    this.animations.play('walk');
                    this.body.velocity.x = 150;
                    if (this.scale.x == -1) {
                        this.scale.x = 1;
                    }
                }

                if (this.body.touching.right) {
                    this.animations.play('walk');

                    this.body.velocity.x = -150;
                    if (this.scale.x == 1) {
                        this.scale.x = -1;
                    }
                }

                // This by luck catches when the player is on the right side of the screen
                if (this.body.velocity.x == 0) {
                    this.body.velocity.x = -150;
                    if (this.scale.x == 1) {
                        this.scale.x = -1;
                    }
                    this.animations.play('walk');

                }
            }
            else {
                this.body.enable = false;
                this.body.velocity.x = 0;
                this.body.velocity.y = 0;
            }
        }
    }
}