$("#numero").change(function(){
	if(parseInt(this.value)<20){
		$('#numero').val(''); } //limpia el input

});
var x;
var buttons;
x = document.getElementById("numero").value; //obtiene el elemento que se pone en el input

function ingresar(){
	$( "#mage" ).empty();
	x = document.getElementById("numero").value; 
	for (var i = 1; i <= x; i++){
		buttons = $('<button id="numeros" class='+i+'>'+ i + '</button>') //crea botones dinamicamente, se va incrementando
		buttons.appendTo('#mage');
    }
    
}
function multiplos2(){
    for (var i =1; i <= x; i++){
        $("."+i+"").css("background-color","#20B2AA");
    }
	var multiplos=[]; //declarando un arreglo vacio
	for (var i=1; i<=x; i++){  
		if (i%2==0) { 
			multiplos.push(i) }
	}
	multiplos.forEach(function(element){ 
		$("."+element+"").css("background-color", "#ADFF2F ");
    });
}
function multiplos3(){
    for (var i =1; i <= x; i++){ //limpia
        $("."+i+"").css("background-color","#20B2AA");
    }
	var multiplos=[]; //declarando un arreglo vacio
	for (var i=1; i<=x; i++){  
		if (i%3==0) { 
			multiplos.push(i) }
	}
	multiplos.forEach(function(element){ 
		$("."+element+"").css("background-color", "#ADFF2F");
    });
}
function multiplos4(){
    for (var i =1; i <= x; i++){
        $("."+i+"").css("background-color","#20B2AA");
    }
	var multiplos=[]; //declarando un arreglo vacio
	for (var i=1; i<=x; i++){  
		if (i%4==0) { 
			multiplos.push(i) }
	}
	multiplos.forEach(function(element){ 
		$("."+element+"").css("background-color", "#ADFF2F");
    });
}
function multiplos5(){
    for (var i =1; i <= x; i++){
        $("."+i+"").css("background-color","#20B2AA");
    }
	var multiplos=[]; //declarando un arreglo vacio
	for (var i=1; i<=x; i++){  
		if (i%5==0) { 
			multiplos.push(i) }
	}
	multiplos.forEach(function(element){ 
		$("."+element+"").css("background-color", "#ADFF2F");
    });
}
function multiplos6(){
    for (var i =1; i <= x; i++){
        $("."+i+"").css("background-color","#20B2AA");
    }
	var multiplos=[]; //declarando un arreglo vacio
	for (var i=1; i<=x; i++){  
		if (i%6==0) { 
			multiplos.push(i) }
	}
	multiplos.forEach(function(element){ 
		$("."+element+"").css("background-color", "#ADFF2F");
    });
}
function multiplos7(){
    for (var i =1; i <= x; i++){
        $("."+i+"").css("background-color","#20B2AA");
    }
	var multiplos=[]; //declarando un arreglo vacio
	for (var i=1; i<=x; i++){  
		if (i%7==0) { 
			multiplos.push(i) }
	}
	multiplos.forEach(function(element){ 
		$("."+element+"").css("background-color", "#ADFF2F");
    });
}
function multiplos8(){
    for (var i =1; i <= x; i++){
        $("."+i+"").css("background-color","#20B2AA");
    }
	var multiplos=[]; //declarando un arreglo vacio
	for (var i=1; i<=x; i++){  
		if (i%8==0) { 
			multiplos.push(i) }
	}
	multiplos.forEach(function(element){ 
		$("."+element+"").css("background-color", "#ADFF2F");
    });
}
function multiplos9(){
    for (var i =1; i <= x; i++){
        $("."+i+"").css("background-color","#20B2AA");
    }
	var multiplos=[]; //declarando un arreglo vacio
	for (var i=1; i<=x; i++){  
		if (i%9==0) { 
			multiplos.push(i) }
	}
	multiplos.forEach(function(element){ 
		$("."+element+"").css("background-color", "#ADFF2F");
    });
}
function limpiar(){
    $("#mage").empty();
}
function numprimos(){
    var multiplos=[];
    for (var i =1; i <= x; i++){
        $("."+i+"").css("background-color","#20B2AA");
    }
    var c = x
    var c = x;
    var j = 2;
    var numerosPrimos = [];
   
    for (; j < c; j++) {
        if (primo(j)) {
            numerosPrimos.push(j);
          }
       
        }
        function primo(numero) {

            for (var i = 2; i < numero; i++) {
         
              if (numero % i === 0) {
                return false;
              }
         
            }
         
            return numero !== 1;
          }
          numerosPrimos.forEach(function(element) {
            $("."+element+"").css("background-color", "#ADFF2F");
          });
               
         }
         





