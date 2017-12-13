
// $(document).ready(function() {
//   $('#media').carousel({
//     pause: true,
//     interval: 1,
//   });
// });

// window.onload = function () {
//                 /* Variables globales (por estar declaradas sin var) */
//                 casillaDatos = document.getElementById('datos'); //Nodo donde vamos a mostrar los datos
                
//                 checkboxElements = new Array();
               
//                 var elementosSelect = document.getElementsByTagName('select');
                
//                 for (var i=0; i<elementosSelect.length;i++) {elementosSelect[i].addEventListener("change", actualizarDatos);}
// }
 
// function actualizarDatos() {
// var checkBoxSel = new Array();
// for (var i=0; i<checkboxElements.length;i++) {
// if (checkboxElements[i].checked ==true) {checkBoxSel.push(checkboxElements[i].name);}
// }
 
// var elementoCiudad = document.getElementById('ciudad');
// var elementoPais = document.getElementById('pais');
// var elementoTela = document.getElementById('tela');

// casillaDatos.innerHTML='<h4> Datos introducidos: </h4><p>Tratamiento: '+ 
// '<p>Ciudad: ' + (elementoCiudad.options[elementoCiudad.selectedIndex].text||' --- ')+'</p>'+
// '<p>Pais: ' + (elementoPais.options[elementoPais.selectedIndex].text||' --- ')+'</p>'+
// '<p>Tela: ' + (elementoTela.options[elementoTela.selectedIndex].text||' --- ')+'<p/>'+
// '<p>Preferencias: ' + (checkBoxSel||' --- ')+'</p>';
// }

$(document).ready(main);
 
var contador = 1;
 
function main () {
	$('.menu_bar').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});
 
	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
}

