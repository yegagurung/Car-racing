class Game{
    constructor(){

    }
getstate(){
    var gamestateref=database.ref('gameState')
    gamestateref.on("value",function(data){
        gameState=data.val()
    })
}
update(state){
    database.ref('/').update({
        gameState:state
    })
}
async start(){
    if(gameState==0){
        player=new Player()   
    var playercountref=await database.ref('playerCount').once('value')
    if(playercountref.exists()){
        playerCount=playercountref.val()
        player.getCount()
    }
       
    form=new Form()
    form.display()
 }
car1 = createSprite(100,200)
car1.addImage("car1",car1img)
car2 = createSprite(300,200)
car2.addImage("car2",car2img)
car3 = createSprite(500,200)
car3.addImage("car3",car3img)
car4 = createSprite(700,200)
car4.addImage("car4",car4img)
cars=[car1,car2,car3,car4]

}
play (){
    form.hide()
    Player.getplayerinfo()
    if(allPlayers!=undefined){
       background(rgb(198,135,103))
       image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5)
        var index=0
        var x=175,y;
        for(var plr in allPlayers){
            index=index+1
            x=x+200
            y=displayHeight-allPlayers[plr].distance
            cars[index-1].x=x
            cars[index-1].y=y
            if(index==player.index){
                cars[index-1].shapeColor="red"
            camera .position.x=displayWidth/2
            camera .position.y=cars[index-1].y
            }
        }
    }
if(keyIsDown(UP_ARROW)&& player.index!=null){
player.distance+=10
player.update()
}
if(player.distance>3860){
    gameState=2
}

drawSprites()
}
end(){
    console.log("gameover");
}

}