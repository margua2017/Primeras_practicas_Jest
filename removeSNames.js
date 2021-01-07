
removeSNames = (names) => {
    var array = names;
    var nleng;
    var name;
    var sins;
    nleng= names.length;
   for (i = 0; i < nleng; i++) {
      name=names[i];
      
      console.log(i);
      console.log(name);
      if (name!=undefined){
          if(name.charAt(0)=='S' || name.charAt(0)=='s'){
            delete names[i];
          }
      }
   }
      

     
      
    return array;
  }




module.exports = removeSNames;
