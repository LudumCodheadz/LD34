module Codheadz {
    export class Level1 extends Phaser.State {
        background: Phaser.Sprite;
        //music: Phaser.Sound;
        player: Codheadz.Player;
        platforms: Phaser.Group;

        create() {
            //this.background = this.add.sprite(0, 0, 'level1');
            //this.music = this.add.audio('music', 1, false);
            //this.music.play();

            //  We're going to be using physics, so enable the Arcade Physics system
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            
            //  The platforms group contains the ground and the 2 ledges we can jump on
            this.platforms = this.game.add.group();
            this.platforms.enableBody = true;
            

            // Here we create the ground.
            for (var n = 0; n < 25; n++) {
                var g = this.platforms.create(n * 25, this.game.world.height - 32, 'ground', 0);
                g.body.immovable = true;
            }

            //  Now let's create two ledges
            var ledge = this.platforms.create(320, 400, 'ground', 1);
            ledge.body.immovable = true;

            ledge = this.platforms.create(352, 400, 'ground', 1);
            ledge.body.immovable = true;

            for (var n = 0; n < 9; n++) {
                ledge = this.platforms.create(n * 32, 600, 'ground', 1);
                ledge.body.immovable = true;
            }

            for (var n = 4; n < 6; n++) {
                ledge = this.platforms.create(n * 32, 250, 'ground', 1);
                ledge.body.immovable = true;
            }

            this.player = new Player(this.game, 130, 284);
            this.game.physics.enable(this.player, Phaser.Physics.ARCADE);

         
        }

        update() {
            //  Collide the player and the stars with the platforms
            this.game.physics.arcade.collide(this.player, this.platforms);
        }
    }
} 