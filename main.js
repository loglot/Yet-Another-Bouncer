import { Game } from "./game/imports.js";

var game = new Game()


function Start(){
Tick()
}
function Tick(){
    game.key.update()
    game.display.draw()
    if(game.vars.title){

    } else {
        game.player.update()
        game.ball.update()
    }
    

    if(game.key.wasKeyJustPressed("KeyW")){
        game.vars.title = false
        game.vars.score = 0
    }

    requestAnimationFrame(Tick)
}
Start()