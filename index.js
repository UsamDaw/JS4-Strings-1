/* Task 1
function navneformattering() {
    let fornavn = prompt("Skriv ditt fornavn")
    let etternavn = prompt("Skriv ditt etternavn")
    fornavn = fornavn.substring(0,1).toUpperCase() + fornavn.substring(1).toLowerCase();
    
    etternavn = etternavn.substring(0,1).toUpperCase() + etternavn.substring(1).toLowerCase();
    return (`${fornavn} ${etternavn}`)
    }
    
    document.write(navneformattering());
    */

/* Task 2
 function splitty(kot) {
    let array = kot.trim().split(/\s+/);
    return array.length;
 }

 let kot = "Hei, Hei, Hei, Hei";
 document.write(splitty(kot));

*/

/* Task 3
function replas()  {
    let setning2 = prompt("Enter a sentence")
 
    let setning = ""
    for (let i= 0; i < setning2.length; i++){
        if (setning2[i] == "a") {
            setning += "@"
    }else {
        setning += setning2[i]
    }
}
    console.log("The sentence:", setning)
   
}
 
replas()
*/

/* Task 4
function langEn() {
    let setning = prompt("Write a sentence to find out the longest word used in the sentence:");
    let x = setning.split(" ");
    let maxinLengde = 0;
    let lensgtLetter = "";

    x.forEach(function(y) {
        if (y.length > maxinLengde) {
            maxinLengde = y.length;
            lensgtLetter = y;
        }
    });
    document.write("The longest word is '" + lensgtLetter + "' with " + maxinLengde + " letters.");
}
langEn();

*/