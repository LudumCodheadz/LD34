var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Codheadz;
(function (Codheadz) {
    var Level1 = (function (_super) {
        __extends(Level1, _super);
        function Level1() {
            _super.apply(this, arguments);
            this.platformData = {
                rows: [
                    "000000000000000",
                    "",
                    "",
                    "   1111",
                    "",
                    "",
                    "           1111",
                    "2222",
                    "",
                    "        222   ",
                    "",
                    "",
                    "           1111",
                    "",
                    "",
                    "      11",
                    "",
                    "",
                    "           1111",
                    "",
                    "         22",
                    "",
                    "111",
                    "",
                    "      11     ",
                    "",
                    "           1111",
                    "",
                    "      222",
                    "",
                    "",
                    "2             1",
                    "",
                    "",
                    "      222",
                    "",
                    "1111",
                    "",
                    "",
                    "      22",
                    "",
                    "             2",
                    "",
                    "",
                    "             2",
                    "",
                    "",
                    "             2",
                    "",
                    "",
                ]
            };
        }
        Level1.prototype.create = function () {
            //this.music = this.add.audio('music', 1, false);
            //this.music.play();
            this.game.add.tileSprite(0, 0, 480, 3200, 'level2');
            this.game.world.setBounds(0, 0, 480, 3200);
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.player = new Codheadz.Player(this.game, 400, 3000);
            this.game.physics.enable(this.player, Phaser.Physics.ARCADE);
            this.game.camera.follow(this.player);
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
        };
        Level1.prototype.update = function () {
            this.game.physics.arcade.collide(this.player, this.platforms);
        };
        return Level1;
    })(Phaser.State);
    Codheadz.Level1 = Level1;
})(Codheadz || (Codheadz = {}));
