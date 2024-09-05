export class Ball{
    x = 500
    y = 0
    velX = 0
    velY = 0
    game
    player

    constructor(Game){
        this.game = Game
        this.player = this.game.player
    }

    update(){
        this.velY += .5
        this.x += this.velX
        this.y += this.velY
        this.colide()
    }
    colide(){
        if(this.y > 750 && (this.x > this.player.x - 120 && this.x < this.player.x + 120) && this.y < 800){
            this.velY = -15 - Math.abs(this.player.diffX/20)
            this.velX = -this.player.diffX / 10
        }
        if(this.x < 40 || this.x > 1636){
            this.velX = -this.velX
        }
        if(this.y > 900){
            //game over
        }
    }
}