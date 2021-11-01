function sumarUno(numero, callback){

    if (numero >=7){
           callback('Numero muy alto');
           return;
       }
   
       setTimeout(function(){
   
          callback(numero +1 );
          
       }, 800)
   }
   
   sumarUno(4, function(nuevoValor){
       
   
           console.log(nuevoValor);
   
         
       sumarUno(nuevoValor, function(nuevoValor2){
    
           console.log(nuevoValor2);
          
   
           sumarUno(nuevoValor2, function(nuevoValor3){
   
             
   
               console.log(nuevoValor3);
           })
   
       })
   
   });