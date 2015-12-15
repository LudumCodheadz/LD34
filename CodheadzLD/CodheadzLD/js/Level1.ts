module Codheadz {
    export class Level1 extends Phaser.State {
        background: Phaser.Sprite;
        //music: Phaser.Sound;
        player: Codheadz.Player;
        platforms: Phaser.Group;
        spikes: Phaser.Group;

        create() {
            //this.music = this.add.audio('music', 1, false);
            //this.music.play();

            this.game.add.tileSprite(0, 0, 480, 3200, 'level2');
            this.game.world.setBounds(0, 0, 480, 3200);

            //  We're going to be using physics, so enable the Arcade Physics system
            this.game.physics.startSystem(Phaser.Physics.ARCADE);

            this.player = new Player(this.game, 400, 3000);
            this.game.physics.enable(this.player, Phaser.Physics.ARCADE);

            this.game.camera.follow(this.player);

            //  The platforms group contains the ground and the 2 ledges we can jump on
            this.platforms = this.game.add.group();
            this.platforms.enableBody = true;

            this.spikes = this.game.add.group();

            var rowY = this.world.height - 32;
            for (var r in this.platformData.rows) {
                var platformRow = this.platformData.rows[r];
                if (platformRow.length > 0) {
                    var x = 0;
                    for (var t in platformRow) {
                        var tile = platformRow[t];
                        if (tile != " ") {
                            var frame = +tile;

                            var g = this.platforms.create(x, rowY, 'ground', frame);
                            g.body.immovable = true;

                            if (frame == 2) {
                                var spike = this.spikes.create(x, rowY - 32, 'ground', 4);
                                this.game.physics.arcade.enable(spike);
                            }
                        }

                        x = x + 32;
                    }
                }

                rowY = rowY - 32;
            }

            
            this.score = 0;
        }

        score: number;

        spikePlatformCallback(player: Player, spike: Phaser.Sprite) {
            this.score++;
            player.death();
        }

        update() {
            //  Collide the player and the stars with the platforms
            this.game.physics.arcade.collide(this.player, this.platforms);
            this.game.physics.arcade.overlap(this.player, this.spikes, this.spikePlatformCallback, null, this);
        }

        platformData: any =
        {
            rows: [
                "000000000000000",
                "",
                "",
                "   2211111",
                "",
                "",
                "           1111",
                "11111",
                "",
                "        111   ",
                "",
                "",
                "           1111",
                "",
                "",
                "      11",
                "",
                "",
                "           1112",
                "",
                "         11",
                "",
                "111",
                "",
                "      11     ",
                "",
                "           1111",
                "",
                "      111",
                "",
                "",
                "2             1",
                "",
                "",
                "      111",
                "",
                "",
                "1             2",
                "",
                "",
                "      111",
                "",
                "1111",
                "",
                "",
                "      11",
                "",
                "             1",
                "",
                "",
                "             1",
                "",
                "",
                "             1",
                "",
                "",

            ]
        };
    }
} 