let usuario =prompt("Ingrese su Usuario: Cocinero,  Administrador o Facturador")
if (usuario=="administrador"){
    let cantidadMesas=prompt("Para realizar el promedio de los consumos de hoy, ingrese la cantidad de mesas atendidas")
    let eA;
    let sA=0;
    let n;
    for (n=1; n<=cantidadMesas; n++){
        eA=parseInt(prompt("Ingrese el consumo de la mesa numero " + n));
        sA=sA+eA;
    }
    alert(` El promedio de los consumos de las ${cantidadMesas} mesas es de  ${sA/cantidadMesas} Dolares`);

}else if (usuario=="cocinero"){

let numComensal=prompt("Para calcular la receta de hoy, Ingrese el numero de comensales");
let platoPreparar=prompt("¿Prepararás: arroz con pollo o causa?");
let pollo, arroz, alverja, zanahori, papa;
    
    if (platoPreparar == "arroz con pollo"){
        
            pollo = numComensal*0.2;
            arroz = numComensal*0.3;
            alverja = numComensal*0.1;
            zanahori = numComensal*0.15;
            alert(` Para cocinar arroz con pollo para ${numComensal} comensales necesitarás: ${pollo} Kg de pollo, ${arroz} Kg de arroz, ${alverja} Kg de alverja, ${zanahori} Kg de zanahoria `);
            
        }else if (platoPreparar == "causa"){
            pollo = numComensal*0.3;
            papa = numComensal*0.4;
            alverja = numComensal*0.2;
            zanahori = numComensal*0.15;
            alert(` Para cocinar causa para ${numComensal} comensales necesitarás ${pollo} Kg de pollo, ${papa} Kg de papa, ${alverja} Kg de alverja, ${zanahori} Kg de zanahoria`);
        
        }else{
           alert("plato no encontrado")
        }

    }else if(usuario=="facturador"){

        function masDescuento(precio, descuento){
            let conDescuento=(precio-(precio*descuento/100));
            return conDescuento;
        }
        let precio =parseInt(prompt("Ingrese el precio del producto"));
        let descuento=parseInt(prompt("Ingrese el % descuento"));
        if (descuento>0){
            let resultado = masDescuento(precio, descuento);
            alert(`Precio con descuento: ${resultado}`);

        }else{
            let resultado=masDescuento(precio);
            alert(`precio sin descuento: ${precio} `);
        }
       
        
    }else{
        alert("Usuario no registrado")
    }