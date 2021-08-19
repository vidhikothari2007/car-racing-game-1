class Form{
    constructor(){

    }
    display(){
        var title= createElement('h2');
        title.html('car racing game');
        title.position(350,100);
        var input= createInput('name');
        input.position(350,200);
        var button= createButton('play');
        button.position(350,300);
        var greeting= createElement('h2');
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name= input.value();
            playerCount+=1
            player.update(name);
            player.updateCount(playerCount);
            greeting.html('welcome to our game '+name);
            greeting.position(350,150);
        })
    }
}