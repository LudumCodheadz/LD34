module Codheadz {
    export class MainMenu extends Phaser.State {
        //background: Phaser.Sprite;
        logo: Phaser.Sprite;
        playButton: Phaser.Button;

        create() {
            //  this.background = this.add.sprite(0, 0, 'titlepage');
            // this.background.alpha = 0;

            this.logo = this.add.sprite(this.world.centerX, -300, 'logo');
            this.logo.anchor.setTo(0.5, 0.5);

            this.add.tween(this.logo).to({ y: 220 }, 2000, Phaser.Easing.Elastic.Out, true, 2000);

            this.playButton = new LabelButton(this.game, this.game.canvas.width/2, -300, 'button', 'Play Now !', this.actionClickLevelOne, this, 0, 0, 0, 0);
            this.playButton.anchor.setTo(0.5, 0.5);
            this.add.tween(this.playButton).to({ y: 400 }, 2000, Phaser.Easing.Elastic.Out, true, 2000);
        }

        actionClickCardsPlay() {
            this.game.state.start('CardsPlay', true, false);
        }

        actionClickLevelOne() {
            this.fadeOut();
        }

        fadeOut() {
            this.playButton.alpha = 0;
            //this.add.tween(this.background).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
            var tween = this.add.tween(this.logo).to({ y: 800 }, 2000, Phaser.Easing.Linear.None, true);

            tween.onComplete.add(this.startGame, this);
        }

        startGame() {
            this.game.state.start('Level1', true, false);
        }
    }
}