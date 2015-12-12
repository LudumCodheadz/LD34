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
        }
        Level1.prototype.create = function () {
            this.background = this.add.sprite(0, 0, 'level1');
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
            this.player = new Codheadz.Player(this.game, 130, 284);
            this.game.physics.enable(this.player, Phaser.Physics.ARCADE);
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