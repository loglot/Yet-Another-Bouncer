import { Game } from "./game/imports.js";

var game = new Game()


function Start(){
Tick()
}
function Tick(){
    game.key.update()
    game.player.update()
    game.display.draw()
requestAnimationFrame(Tick)
}
Start()