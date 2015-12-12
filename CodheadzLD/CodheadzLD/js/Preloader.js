var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Codheadz;
(function (Codheadz) {
    var Preloader = (function (_super) {
        __extends(Preloader, _super);
        function Preloader() {
            _super.apply(this, arguments);
        }
        Preloader.prototype.preload = function () {
            //  Set-up our preloader sprite
            this.preloadBar = this.add.sprite(this.game.canvas.width / 2, 250, 'preloadBar');
            this.preloadBar.anchor.set(0.5, 0.5);
            this.load.setPreloadSprite(this.preloadBar);
            //  Load our actual games assets
            this.load.image('titlepage', 'assets/titlepage.jpg');
            this.load.image('logo', 'assets/logo.png');
            this.load.audio('music', 'assets/title.mp3', true);
            this.load.spritesheet('simon', 'assets/simon.png', 58, 96, 5);
            this.load.image('level1', 'assets/level1.png');
            this.load.image('menulevel1', 'assets/menulevel1.png');
            this.load.image('button', 'assets/button1.png');
            this.load.spritesheet('ground', 'assets/ground.png', 32, 32, 5);
        };
        Preloader.prototype.create = function () {
            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);
        };
        Preloader.prototype.startMainMenu = function () {
            this.game.state.start('Level1', true, false);
            //this.game.state.start('MainMenu', true, false);
        };
        return Preloader;
    })(Phaser.State);
    Codheadz.Preloader = Preloader;
})(Codheadz || (Codheadz = {}));
//# sourceMappingURL=Preloader.js.map