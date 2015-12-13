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
            var style = {
                'font': '22px Arial',
                'fill': 'white',
                'font-weight': 'bold'
            };
            this.debugText = this.game.add.text(1, 1, "d", style);
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
        }
        Player.prototype.update = function () {
            this.debugText.text = this.allowChangeDirection.toString();
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
            }
        };
        return Player;
    })(Phaser.Sprite);
    Codheadz.Player = Player;
})(Codheadz || (Codheadz = {}));
//# sourceMappingURL=Player.js.map