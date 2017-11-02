/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*JavasScript Que controla el menu (los puntos)*/
var stateMenu=false;
var state=false;
function startApp() {
		//app.ShowPopup( "izq to drc  = "+izq +" drc to izq "+ drc );
    document.getElementById("ContentMenuMobile").addEventListener("touchmove", touchEvent, false);
    document.getElementById("menuMobile").addEventListener("click",controllerMenu,false);
    document.getElementById("finishMenu").addEventListener("click",function(event){
       var ponerFlex ="display:flex;";
        var quitarFlex ="display:none;";
       var menu= document.getElementById("ContentMenuMobile");
        menu.style=ponerFlex;
       if(stateMenu){
        menu.style=quitarFlex;
        stateMenu=false;
       } 
    },false);
    document.getElementById("more").addEventListener("click",function () {
        var subMenu=document.getElementById("ulSub");
       if(state){
        subMenu.style="display:none;";
        state=false;
       }else{
        subMenu.style="display:inline;"; 
        state=true;
       }
    },false);
    document.addEventListener("keyup",function(event){},false);
    }

/*$(document).ready(function () {
     $(this).keydown(function (event) {
     alert(event);
        if (event.which === 13) {
            alert("entro");
            redirect(false);
        }
    });   
});*/
function controllerMenu(event){
		 if(!stateMenu){
        document.getElementById("ContentMenuMobile").style = "display:inline";
              document.getElementById("ContentMenuMobile").style="display:flex";
        stateMenu=true;
       }else{
        document.getElementById("ContentMenuMobile").style = "display:none";
        stateMenu=false;
        }
}
function touchEvent(event){
    var touch= event.changedTouches;
    document.getElementById("p").innerHTML= touch[0].screenX;   
           if(touch[0].screenX>200 && touch[0].screenX<350){
              if(stateMenu){
              document.getElementById("ContentMenuMobile").style = "display:none";
      //  $("#ContentMenuMobile").fadeOut("fast");   
        stateMenu=false;
       }
           // app.ShowPopup(" Derecha a Izquierda");
        }
    }
function dimensiones() {
    var quitar="display:none;";
    var poner ="display:inline;";
    var ponerFlex ="display:flex;";
    
    if(window.innerWidth>1000){
        document.getElementById("title").style=poner;
        document.getElementById("menuMobile").style=poner;
       // document.getElementById('ulSelectedImg').style=poner;
        //alert(window.innerWidth);
    }else if(window.innerWidth>600 && window.innerWidth<999){
        document.getElementById("menuMobile").style=poner;
        //document.getElementById("ul").style=quitar;
        //alert(window.innerWidth);
    }else if(window.innerWidth>200 && window.innerWidth<599){
        document.getElementById("menuMobile").style=poner;        
        //document.getElementById("ul").style=quitar;
        //alert(window.innerWidth);
    }
}
function activeCheck(idcheck){
    
document.getElementById(idcheck).className="IcCheckActive";
}
function redirect(valTotal) {
        var nom = $('#nCancion').val();
        url = "?nombreCancion=" + nom + "&lista=" + "" + "&total=" + 0;
        location.href = "Buscar.php" + url;
    }
function dc_loadPage(){
    var quitar="display:none;";
    document.getElementById("dc-footer").style=quitar;
}

function test(){
app.ShowPopup( "search" );
}