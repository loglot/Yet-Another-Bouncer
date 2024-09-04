import { Player } from "./player/player";
import { Display } from "./draw/gameDisplayer";
import { DrawUtils } from "./draw/drawUtills";

export class Game{
    player = new Player(this)
    display = new Display(this)
    drawUtils = new DrawUtils(this)
}