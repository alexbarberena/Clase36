class Player {
    constructor(){}

    //obtener el playerCount
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",function(data){
        playerCount = data.val();
      })
    }
  
    //actualizar  el playerCount
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(name){
      var playerIndex = "player" + playerCount;
      database.ref(playerIndex).set({ //.set() se usa para establecer el valor en la base de datos.
        name:name
      });
    }
  }