module Codheadz {
    export class Level1 extends Phaser.State {
        background: Phaser.Sprite;
        //music: Phaser.Sound;
        player: Codheadz.Player;
        platforms: Phaser.Group;

        create() {
            this.background = this.add.sprite(0, 0, 'level1');
                       
            //this.music = this.add.audio('music', 1, false);
            //this.music.play();

            //  We're going to be using physics, so enable the Arcade Physics system
            this.game.physics.startSystem(Phaser.Physics.ARCADE);

            this.player = new Player(this.game, 130, 284);
            this.game.physics.enable(this.player, Phaser.Physics.ARCADE);

            //  The platforms group contains the ground and the 2 ledges we can jump on
            this.platforms = this.game.add.group();
            this.platforms.enableBody = true;


            var rowY = this.world.height - 32;
            for (var r in this.platformData.rows) {

                var platformRow = this.platformData.rows[r];
                if (platformRow.length > 0) {

                    window.console.warn(platformRow);
                    var x = 0;
                    for (var t in platformRow) {
                    
                        var tile = platformRow[t];
                        if (tile != " ") {

                            var frame = +tile;

                            var g = this.platforms.create(x, rowY, 'ground', frame);
                            g.body.immovable = true;
                        }

                        x = x + 32;
                    }

                }

                rowY = rowY - 32;
            }
         
        }

        update() {
            //  Collide the player and the stars with the platforms
            this.game.physics.arcade.collide(this.player, this.platforms);
        }


        platformData: any =
        {
            rows: [
                "00000000000000000000000000",
                "",
                "",
                "   11111",
                "",
                "",
                "            111111",
                "",
                "",
                "22222",
                "",
                "",
                "             10101",
                "",
                "          101",
                "",
                "",
                "     101",
                "",
                "",
                "101",
                


            ]
        };
    }
} 