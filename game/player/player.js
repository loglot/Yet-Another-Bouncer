export class Player{
    x=500
    diffX = 0
    y=800
    game

    constructor(Game){
        this.game = Game
    }

    update(){
        var mouseX = Math.max(130, Math.min(this.game.key.mousePos.x, 1530))
        this.x = ((this.x*7) + (mouseX))/8
        this.diffX = this.x - mouseX
        console.log(this.x)
    }
}