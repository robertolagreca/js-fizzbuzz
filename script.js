//stampare numeri da 1 a 100
//i multipli di 3 devo stampare fizz
// i multipli di 5 fuzz

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
}