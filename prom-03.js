//var numero = Math.floor((Math.random() * 5) - 5);
var numero=Math.floor((Math.random()*10)-5);

function sumarUno(numero ){
    var promesa= new Promise(function(resolve,reject){
        if (numero <=0){
            reject('No se puede realizar la suma');
            console.log('El numero negativo es:'+numero);
            return;
        }
    
        setTimeout(function(){

           resolve(numero +1 );
           
        }, 800)
    
    });

    return promesa;
      
   }


//funciones de flecha eliminamos la palabra funtion son comunes en los service worker



sumarUno(numero)
.then(nuevoNumero=>{
    console.log('El numero es:'+numero);
    console.log('El numero mas uno es:'+nuevoNumero);

})
.catch(error=>{
    console.log('Error en promesa');
    console.log(error);
})


