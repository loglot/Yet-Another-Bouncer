import { Player } from "./player/player.js";
import { Display } from "./draw/gameDisplayer.js";
import { DrawUtils } from "./draw/drawUtills.js";
import { KeyManager } from "./otherParts/keyMan.js";
import { Ball } from "./player/ball.js";
import { MiscVars } from "./otherParts/miscVars.js";

export class Game{
    player
    display
    vars = new MiscVars(this)
    drawUtils = new DrawUtils(this)
    key = new KeyManager(this)
    constructor(){
        this.player = new Player(this)
        this.ball = new Ball(this)
        this.display = new Display(this)

    }
}