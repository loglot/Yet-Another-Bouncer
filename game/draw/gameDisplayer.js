const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

export class Display {
    game
    draw
    constructor(Game){
        this.game = Game
        this.draw = game.drawUtills
    }
    
    draw(){
        ///this.resizeCanvasForWindowSize()
        this.draw.Rect(x = 0, y = 0, width = 500, height = 500)//ArcadeBG()
    }


    resizeCanvasForWindowSize() {

        var currentWidth = canvas.width;
        var currentHeight = canvas.height;
  
        // Get the current window dimensions
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
    
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