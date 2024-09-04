import { Player } from "./player/player.js";
import { Display } from "./draw/gameDisplayer.js";
import { DrawUtils } from "./draw/drawUtills.js";

export class Game{
    player = new Player(this)
    drawUtils = new DrawUtils(this)
    display = new Display(this)
}