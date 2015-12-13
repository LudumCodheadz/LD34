module Codheadz {
    export class Player extends Phaser.Sprite {
        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y, 'simon', 0);

            this.anchor.setTo(0.5, 0);

            this.animations.add('walk', [0, 1, 2, 3], 10, true);

            game.add.existing(this);

            //  We need to enable physics on the player
            game.physics.arcade.enable(this);

            //  Player physics properties. Give the little guy a slight bounce.
            this.body.bounce.y = 0.2;
            this.body.gravity.y = 300;
            this.body.collideWorldBounds = true;
        }

        update() {
            if (this.body.touching.down) {
                if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)
                    || this.game.input.keyboard.isDown(Phaser.Keyboard.A)) {
                    this.body.velocity.y = -300;
                }
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
            }

            //if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            //    this.body.velocity.x = -150;
            //    this.animations.play('walk');

            //    if (this.scale.x == 1) {
            //        this.scale.x = -1;
            //    }
            //}
            //else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            //    this.body.velocity.x = 150;
            //    this.animations.play('walk');

            //    if (this.scale.x == -1) {
            //        this.scale.x = 1;
            //    }
            //}
            //else {
            //    //this.animations.frame = 0;
            //}
        }
    }
}