

 $(document).ready(function(){

   let numero1 = 0;
   let numero2 = 0;
   let resultado = 0;

    const regex = /^\d+$/;



    $("#btnSumar").click(function(){

        console.log("Hola");

        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");



    numero1 = $("#numero1").val();


    if(numero1 ===""){
         $("#error1").text("debe ingresar el primer numero");
         $("#error1").text("debe ingresar el segundo numero");
         $("#error1").css("color","red");
         return;
    }
    
    if(!regex.test(numero1)){
         $("#error1").text("Solo debe ingresar numeros");
         $("#error1").css("color","red");
         return;
    }

    numero2= $("#numero2").val();

    if(numero2 ===""){
        $("#error2").text("debe ingresar el segundo numero");
        $("#error2").css("color","red");
         return;
    }


    if(!regex.test(numero2)){
        $("#error2").text("Solo debe ingresar numeros");
        $("#error2").css("color","red");
        return;
     }   
    resultado = parseInt(numero1) +  parseInt(numero2);
     console.log(resultado);

    $("#resultado").text(resultado);
    $("#resultado").css("color","blue");
    $("#resultado").css("frontSize","5rem")

 })



 $("#btnRestar").click(function(){

    console.log("chao");

    $("#error1").text("");
    $("#error2").text("");
    $("#resultado").text("");



numero1 = $("#numero1").val();


if(numero1 ===""){
     $("#error1").text("debe ingresar el primer numero");
     $("#error1").text("debe ingresar el segundo numero");
     $("#error1").css("color","red");
     return;
}

if(!regex.test(numero1)){
     $("#error1").text("Solo debe ingresar numeros");
     $("#error1").css("color","red");
     return;
}

numero2= $("#numero2").val();

if(numero2 ===""){
    $("#error2").text("debe ingresar el segundo numero");
    $("#error2").css("color","red");
     return;
}


if(!regex.test(numero2)){
    $("#error2").text("Solo debe ingresar numeros");
    $("#error2").css("color","red");
    return;
 }   
resultado = parseInt(numero1) -  parseInt(numero2);
 console.log(resultado);

$("#resultado").text(resultado);
$("#resultado").css("color","red");
$("#resultado").css("frontSize","2rem")

})

 

});



