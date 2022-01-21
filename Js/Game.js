class Game{
    constructor(){

    }
    
    //leer el Estado del juego de la base de datos
    getState(){
       var gameStateRef=database.ref('gameState');
       gameStateRef.on("value",function(data){

            gameStateRef=data.val()

       })


    }

   //Actualizar el Estado del Juego
   update(state){

    database.ref('/').update({
        gameState:state
    })  
   }

   //Inicializar y mostrar el juego en pantalla
   start(){
     if(gameState===0){
        player=new Player();
        player.getCount();
        form = new Form();
        form.display();
     }

   }


}