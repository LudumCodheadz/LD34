var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Codheadz;
(function (Codheadz) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this, 480, 800, Phaser.AUTO, 'content', null);
            this.state.add('Boot', Codheadz.Boot, false);
            this.state.add('Preloader', Codheadz.Preloader, false);
            this.state.add('MainMenu', Codheadz.MainMenu, false);
            this.state.add('Level1', Codheadz.Level1, false);
            this.state.start('Boot');
        }
        return Game;
    })(Phaser.Game);
    Codheadz.Game = Game;
})(Codheadz || (Codheadz = {}));
