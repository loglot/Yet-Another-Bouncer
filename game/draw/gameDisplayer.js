const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");
var originalWidth = 1676
var originalHeight = 918
var scaleX = 0;
var scaleY = 0;

export class Display {
    game
    drawer
    originalWidth = 1676
    originalHeight = 918
    rotateTest = 0
    constructor(Game){
        this.game = Game
        this.drawer = this.game.drawUtils
    }
    
    draw(){
        this.resizeCanvasForWindowSize()
        this.drawer.ArcadeBG()

        if(this.game.vars.title){
            this.drawer.Text("Yet Another Bouncer", 250, 200)
            this.drawer.Text("Press W To Start", 260, 350)
            
          this.drawer.Text(this.game.vars.score, 270, 500)
          this.drawer.Text(this.game.vars.highScore, 770, 500)
        } else {
            this.drawer.Circle(this.game.ball.x, this.game.ball.y, 25, "#33363f")
            this.drawer.Circle(this.game.ball.x, this.game.ball.y, 20, "#dddedf")

            for(let i = 0; i < this.game.ball.coins.length; i++){
                this.drawer.Circle(this.game.ball.coins[i].x, this.game.ball.coins[i].y, 15, "#33363f")
                this.drawer.Circle(this.game.ball.coins[i].x, this.game.ball.coins[i].y, 10, "#dfdf8d")
            }

            this.drawer.Text(`${this.game.vars.score}`, 50, 100)
            ctx.translate(this.game.player.x, this.game.player.y)
            ctx.rotate(-this.game.player.diffX / 900)
            this.game.player.rotation = -this.game.player.diffX / 900
            this.drawer.Bean(20, 0, 200, 50, "#afbfaf", "H")
            ctx.rotate(this.game.player.diffX / 900)
            ctx.translate(-this.game.player.x, -this.game.player.y)
        }

    }


    resizeCanvasForWindowSize() {

        var currentWidth = canvas.width;
        var currentHeight = canvas.height;
  
        // Get the current window dimensions
        var windowWidth = window.innerWidth-50;
        var windowHeight = window.innerHeight-50;
    
        // Calculate the desired width and height based on the window's dimensions
        
        var desiredWidth = windowWidth;
        var aspectRatio = originalWidth / originalHeight;
        var desiredHeight = desiredWidth / aspectRatio;
        canvas.width = desiredWidth;
        canvas.height = desiredHeight;
        scaleX = (desiredWidth / originalWidth);
        scaleY = (desiredHeight / originalHeight);
        ctx.setTransform(scaleY, 0, 0, scaleX, 0, 0)
  
         currentWidth = canvas.width;
         currentHeight = canvas.height;
  
        if (currentHeight >= windowHeight) {
           desiredHeight = windowHeight;
           aspectRatio = originalWidth / originalHeight;
           desiredWidth = desiredHeight * aspectRatio;
          canvas.width = desiredWidth;
          canvas.height = desiredHeight;
          scaleX = (desiredWidth / originalWidth);
          scaleY = (desiredHeight / originalHeight);
          ctx.setTransform(scaleY, 0, 0, scaleX, 0, 0)
        }
    }
}