class FirstScene extends Phaser.Scene {
    constructor(){
        super("first");
        this.counterText = null;
        this.counter = 0;
    }

    preload(){

    }
    
    create(){
        var RecA = this.rect(400,300,100,100,0xff0000);
        RecA.setInteractive()
        RecA.on("pointerdown",this.onClick,this)
        this.counterText = this.add.text(395,295,"0", {color:'white'})
    }

    update(){

    }

    rect(x, y, width, height, color){
        var r = this.add.rectangle(x, y, width, height, color);
        return r;
    }

    onClick(){
        this.counter += 1;
        this.counterText.setText(this.counter)
    }
    
}

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: new FirstScene
}

new Phaser.Game(config)