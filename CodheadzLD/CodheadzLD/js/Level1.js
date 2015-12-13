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
        Level1.prototype.create = function () {
            this.background = this.add.sprite(0, 0, 'level1');
            //this.music = this.add.audio('music', 1, false);
            //this.music.play();
            //  We're going to be using physics, so enable the Arcade Physics system
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.player = new Codheadz.Player(this.game, 130, 284);
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
        };
        Level1.prototype.update = function () {
            //  Collide the player and the stars with the platforms
            this.game.physics.arcade.collide(this.player, this.platforms);
        };
        return Level1;
    })(Phaser.State);
    Codheadz.Level1 = Level1;
})(Codheadz || (Codheadz = {}));
//# sourceMappingURL=Level1.js.map