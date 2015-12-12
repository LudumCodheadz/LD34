var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Codheadz;
(function (Codheadz) {
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(game, x, y) {
            _super.call(this, game, x, y, 'simon', 0);
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
        Player.prototype.update = function () {
            if (this.body.touching.down) {
                if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
                    this.body.velocity.y = -280;
                }
                this.body.velocity.x = 0;
                if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                    this.body.velocity.x = -150;
                    this.animations.play('walk');
                    if (this.scale.x == 1) {
                        this.scale.x = -1;
                    }
                }
                else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                    this.body.velocity.x = 150;
                    this.animations.play('walk');
                    if (this.scale.x == -1) {
                        this.scale.x = 1;
                    }
                }
                else {
                    this.animations.frame = 0;
                }
            }
        };
        return Player;
    })(Phaser.Sprite);
    Codheadz.Player = Player;
})(Codheadz || (Codheadz = {}));
//# sourceMappingURL=Player.js.map