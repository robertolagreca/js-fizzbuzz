//stampare numeri da 1 a 100
//i multipli di 3 devo stampare fizz
// i multipli di 5 fuzz

let containerMain= document.querySelector(".mio-container");

let i; // dichiaro la variabile index fuori dal for così da poterla utilizzare anche nello switch.

for(i = 1; i <= 100; i++){
    if( (i % 3 != 0) && (i % 5 != 0)){
        console.log(i);

    } else if ((i % 3 == 0) && (i % 5 == 0)){
        console.log("fizzfuzz corrisponde a " + i);

    } else if 
    ( i % 3 == 0){
        console.log("fizz corrisponde a " + i);

    } else if (i % 5 == 0){
        console.log("fuzz corrisponde a " + i);
    }

    switch (true){
        case (i % 3 == 0) && (i % 5 == 0):
        containerMain.innerHTML +=  '<div id="fuxia" class="square bg-fuxia"><p>fizzfuzz</p></div>';
       
        break;
        case i % 3 == 0:
        containerMain.innerHTML +=  '<div id="fuxia" class="square bg-fuxia"><p>fizz</p></div>';
    
        break;
        case i % 5 == 0:
        containerMain.innerHTML +=  '<div id="fuxia" class="square bg-fuxia"><p>fuzz</p></div>';
        break;
    
        default:
        containerMain.innerHTML +=  '<div class="square bg-azzurro"><p>' + i +'</p></div>';
    }

}




    