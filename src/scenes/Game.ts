import { Scene } from 'phaser';

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    preload ()
    {
        this.load.setPath('assets');
        this.load.image('debug', 'debug-x.png');
    }

    create ()
    {
        this.add.image(0, 0, 'debug')
        this.add.image(512, 0, 'debug')
        this.add.image(256, 256, 'debug')
        this.add.image(0, 512, 'debug')
        this.add.image(512, 512, 'debug')
    }
}
