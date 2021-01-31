class Scene1 extends Phaser.Scene 
{
    constructor()
    {
        super("Scene1");
        this.counterText = null;
        this.upgradeText = null;
        this.counter = 0;
        this.counterAmount = 0;
    }

    preload()
    {

    }
    
    create()
    {
        console.log("Scene: Scene1");

        //rec A
        var RecA = this.rect(400,300,100,100,0xff0000);
        RecA.setInteractive()
        RecA.on("pointerdown",this.onClick1,this)
        this.counterText = this.add.text(395,295,"0", {color:'white', boundsAlignH: "center", boundsAlignV: "middle"})

        //rec B
        let RecB = this.rect(400,500,50,50,0xff0000)
        RecB.setInteractive()
        RecB.on("pointerdown",this.onClick2)
        this.upgradeText = this.add.text(450,550,"Upgrade +1",0xff0000)
    }

    update()
    {

    }

    rect(x, y, width, height, color)
    {
        var r = this.add.rectangle(x, y, width, height, color);
        return r;
    }

    onClick1()
    {
        
        this.counter += this.counterAmount;
        this.counterText.setText(this.counter)
    }

    onClick2()
    {
        this.counterAmount += 1;
    }
    
}