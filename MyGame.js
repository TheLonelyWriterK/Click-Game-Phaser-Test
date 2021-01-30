class FirstScene extends Phaser.Scene {
    preload(){

    }
    
    create(){
        var theRectangle = this.rect(0,0,10,10,0xff0000);
    }

    update(){

    }

    rect(x, y, width, height, color){
        var r = this.add.rectangle(x, y, width, height, color);
        return r;
    }
    
}

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: new FirstScene
}

new Phaser.Game(config)