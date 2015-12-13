module Codheadz {
    export class MainMenu extends Phaser.State {
        background: Phaser.Sprite;
        logo: Phaser.Sprite;
        playButton: Phaser.Button;
        jumpInstr: Phaser.Text;
        changeInstr: Phaser.Text;
        goalInstr: Phaser.Text;
        ludum: Phaser.Text;
        codheadzDetails: Phaser.Text;

        create() {

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

            this.jumpInstr = this.add.text(this.world.centerX, 400, "Press A to jump", textStyle);
            this.changeInstr = this.add.text(this.world.centerX, 450, "Press D to change direction", textStyle);
            this.goalInstr = this.add.text(this.world.centerX, 500, "Climb as high as you can", textStyle);
            this.jumpInstr.anchor.setTo(0.5, 0.5);
            this.changeInstr.anchor.setTo(0.5, 0.5);
            this.goalInstr.anchor.setTo(0.5, 0.5);

            this.jumpInstr.alpha = 0;
            this.changeInstr.alpha = 0;
            this.goalInstr.alpha = 0;
            
            this.playButton = new LabelButton(this.game, this.game.canvas.width / 2, -300, 'button', 'Play Now !', this.actionClickLevelOne, this, 0, 0, 0, 0);
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
            
        }

        actionClickCardsPlay() {
            this.game.state.start('CardsPlay', true, false);
        }

        actionClickLevelOne() {
            this.fadeOut();
        }

        fadeOut() {
            this.playButton.alpha = 0;
            var tween = this.add.tween(this.logo).to({ y: 800 }, 1000, Phaser.Easing.Linear.None, true);

            this.ludum.alpha = 0;
            this.codheadzDetails.alpha = 0;
            this.jumpInstr.alpha = 0;
            this.changeInstr.alpha = 0;
            this.goalInstr.alpha = 0;

            tween.onComplete.add(this.startGame, this);
        }

        startGame() {
            this.game.state.start('Level1', true, false);
        }
    }
}