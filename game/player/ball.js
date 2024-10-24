import { Coin } from "./coins.js"
const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

export class Ball{
    x = 838
    y = 0
    velX = 0
    velY = 0
    coins = 0
    coinTime = 0
    coinTimeLimit = 500
    game
    player
    coins = []

    constructor(Game){
        this.game = Game
        this.player = this.game.player
        this.draw=this.game.drawUtils
    }

    update(){
        this.velY += .8
        this.x += this.velX
        this.y += this.velY
        this.colider()
        this.checkCollision({x:this.player.x+7,y:this.player.y,width:230,height:50,rotation:this.player.rotation})//200, 50
        this.coinTime++
        if(this.coinTime == this.coinTimeLimit - this.game.vars.score * 5){
            this.coinTime = 0
            this.coins[this.coins.length] = new Coin()
        }
    }
    colider(){
        if(this.checkCollision({x:this.player.x+7,y:this.player.y,width:230,height:50,rotation:this.player.rotation})){

            this.velY = Math.max(-15 - Math.abs(this.player.diffX/20), -35)
            this.velX = Math.max(Math.min(-this.player.diffX / 7, 25), -25)
        }if(this.x < 40 || this.x > 1636){

            this.x = Math.max(41, Math.min(this.x, 1635))
            this.velX = -this.velX
        }
        if(this.y > 1200){
            this.x = 838
            this.y = 0
            this.velX = 0
            this.velY = 0
            this.game.vars.title = true
            if(this.game.vars.score > this.game.vars.highScore){
                this.game.vars.highScore = this.game.vars.score
            }
            this.coins = []
        }

        for(let i = 0; i < this.coins.length; i++){
            if (Math.hypot(this.x - this.coins[i].x, this.y - this.coins[i].y) <= 25 + 15) {
                this.coins.splice(i,1)
                this.game.vars.score++
                console.log(this.game.vars.score)
            }
        }
    }

    checkCollision(rect) {
        const radians = rect.rotation // get the rotation of the rectangle in radians
        const origin = {
            x: rect.x,
            y: rect.y
        }
        const rectCorrected = {
            x: rect.x - rect.width/2,
            y: rect.y - rect.height/2,
            width: rect.width,
            height: rect.height,
        }
          
        const newCirclePos = this.getRotatedPos(origin, {x: this.x, y: this.y}, radians); // rotate the circle to the same axis as the rectangle
          
        let closestX;
        let closestY;
          
            // gets the closest x position on the rectangle to the circle
        if (newCirclePos.x < rectCorrected.x) closestX  = rectCorrected.x;
        else if (newCirclePos.x > rectCorrected.x + rectCorrected.width) closestX = rectCorrected.x + rectCorrected.width;
        else closestX = newCirclePos.x;
          
            // gets the closest y position on the rectangle to the circle
        if (newCirclePos.y < rectCorrected.y) closestY  = rectCorrected.y;
        else if (newCirclePos.y > rectCorrected.y + rectCorrected.height) closestY = rectCorrected.y + rectCorrected.height;
        else closestY = newCirclePos.y;
          
            // gets the distance of the closest point on the rectangle to the circle
        const distX = Math.abs(newCirclePos.x - closestX);
        const distY = Math.abs(newCirclePos.y - closestY);
        const distance = Math.sqrt((distX ** 2) + (distY ** 2));
          
        // if the distance is less than the circle's radius, there is a collision
            this.close = this.getRotatedPos({x:rect.x, y:rect.y}, {x:closestX,y:closestY}, -radians)
        // if(this.game.debug.mapBoxShow){



        // }

        if (distance < 25) return true;
          
        return false;
    }
    getRotatedPos(origin, point, angle) {
        const rotatedX = (Math.cos(angle) * (point.x - origin.x)) + (Math.sin(angle) * (point.y - origin.y)) + origin.x;
        const rotatedY = (Math.cos(angle) * (point.y - origin.y)) - (Math.sin(angle) * (point.x - origin.x)) + origin.y;
      
        return {
            x: rotatedX,
            y: rotatedY
        }
    }

    degreesToRadians(degrees) {
        return degrees * Math.PI / 180;
    }
    colide(){
        if(this.y > 750 && (this.x > this.player.x - 120 + Math.abs(this.player.diffX/10) && this.x < this.player.x + 120 - Math.abs(this.player.diffX/10)) && this.y < 850){

        }
        
    }
}