function sumarUno(numero ){
    var promesa= new Promise(function(resolve,reject){
        
        
        setTimeout(function(){
            
            resolve(numero +1);
            
            
         }, 800);
    });

    return promesa;
      
   }


//funciones de flecha eliminamos la palabra funtion son comunes en los service worker

sumarUno( 4).then(nuevoNumero =>{
    
    console.log(nuevoNumero);
    return sumarUno(nuevoNumero);
})
.then(nuevoNumero=>{

    console.log(nuevoNumero);
    return sumarUno(nuevoNumero);
})
.then(nuevoNumero=>{
    console.log(nuevoNumero);
})


/*sumarUno(4).then(nuevoNumero =>{
    
       console.log(nuevoNumero);

    sumarUno(nuevoNumero).then(nuevoNumero =>{
    
        console.log(nuevoNumero);

        sumarUno( nuevoNumero).then(nuevoNumero =>{
    
            console.log(nuevoNumero);
        });
        
    });
    
});

*/


   