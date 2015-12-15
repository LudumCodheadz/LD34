var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Codheadz;
(function (Codheadz) {
    var MainMenu = (function (_super) {
        __extends(MainMenu, _super);
        function MainMenu() {
            _super.apply(this, arguments);
        }
        MainMenu.prototype.create = function () {
            this.background = this.add.sprite(0, 0, 'level1');
            this.background.alpha = 0;
            this.add.tween(this.background).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true);
            this.logo = this.add.sprite(this.world.centerX, -300, 'logo');
            this.logo.anchor.setTo(0.5, 0.5);
            var textStyle = {
                'font': '22px Arial',
                'fill': 'white',
                'font-weight': 'bold'
            };
            this.jumpInstr = this.add.text(this.world.centerX, 400, "Press J to jump", textStyle);
            this.changeInstr = this.add.text(this.world.centerX, 450, "Press D to change direction", textStyle);
            this.goalInstr = this.add.text(this.world.centerX, 500, "Climb as high as you can", textStyle);
            this.jumpInstr.anchor.setTo(0.5, 0.5);
            this.changeInstr.anchor.setTo(0.5, 0.5);
            this.goalInstr.anchor.setTo(0.5, 0.5);
            this.jumpInstr.alpha = 0;
            this.changeInstr.alpha = 0;
            this.goalInstr.alpha = 0;
            this.playButton = new Codheadz.LabelButton(this.game, this.game.canvas.width / 2, -300, 'button', 'Play Now !', this.actionClickLevelOne, this, 0, 0, 0, 0);
            this.playButton.anchor.setTo(0.5, 0.5);
            this.codheadzDetails = this.add.text(this.world.centerX, 750, "Codheadz LudumDare 34", textStyle);
            this.codheadzDetails.anchor.setTo(0.5, 0.5);
            this.ludum = this.add.text(this.world.centerX, 775, "Theme:Two Button Controls", textStyle);
            this.ludum.anchor.setTo(0.5, 0.5);
            this.add.tween(this.logo).to({ y: 220 }, 1000, Phaser.Easing.Elastic.Out, true, 500);
            this.add.tween(this.playButton).to({ y: 600 }, 1000, Phaser.Easing.Elastic.Out, true, 500);
            this.add.tween(this.jumpInstr).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 1000);
            this.add.tween(this.changeInstr).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 1000);
            this.add.tween(this.goalInstr).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 1000);
        };
        MainMenu.prototype.actionClickCardsPlay = function () {
            this.game.state.start('CardsPlay', true, false);
        };
        MainMenu.prototype.actionClickLevelOne = function () {
            this.fadeOut();
        };
        MainMenu.prototype.fadeOut = function () {
            this.playButton.alpha = 0;
            var tween = this.add.tween(this.logo).to({ y: 800 }, 1000, Phaser.Easing.Linear.None, true);
            this.ludum.alpha = 0;
            this.codheadzDetails.alpha = 0;
            this.jumpInstr.alpha = 0;
            this.changeInstr.alpha = 0;
            this.goalInstr.alpha = 0;
            tween.onComplete.add(this.startGame, this);
        };
        MainMenu.prototype.startGame = function () {
            this.game.state.start('Level1', true, false);
        };
        return MainMenu;
    })(Phaser.State);
    Codheadz.MainMenu = MainMenu;
})(Codheadz || (Codheadz = {}));
//# sourceMappingURL=MainMenu.js.map