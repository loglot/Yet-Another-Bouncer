export class Player{
    x=838
    diffX = 0
    y=800
    game

    constructor(Game){
        this.game = Game
    }

    update(){
        var mouseX = Math.max(130, Math.min(this.game.key.mousePos.x, 1530))
        this.x = ((this.x*7) + (this.game.key.mousePos.x))/8
        this.diffX = this.x - mouseX
        console.log(this.x)
        if(this.x<130){
            this.x=130
        }
        if(this.x>1530){
            this.x=1530
        }
    }
}