class TitleScene extends Phaser.Scene
{
    constructor()
    {
        super("titleScene");
    }

    preload()
    {

    }

    create()
    {
        console.log("Scene: TitleScene");
        let startButton = this.add.circle(400,300,100,0X123456)
        startButton.setInteractive()
        startButton.on("pointerdown",this.onClick,this)
        this.add.text(400,"Click to start",{color: "white"})

    }

    update()
    {

    }

    onClick()
    {
        this.scene.start("Scene1")
    }

}