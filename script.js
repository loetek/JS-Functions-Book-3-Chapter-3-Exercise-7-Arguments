let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

// Added the additional argument into the parameter.
function addExcitement (theWordArray , character) {

   
    let buildMeUp = "";

    for (let i = 0; i < theWordArray.length; i++) {
        
       if (i % 3 === 0){
           // added the ${character} variable her using the existing concatination.
            buildMeUp += `${theWordArray[i]} ${character} `;
             console.log (buildMeUp);
       }
        else{
            buildMeUp += `${theWordArray[i]}`;
            console.log (buildMeUp);

        }
    
}
     
}
//Passed a question mark as a new argument.
addExcitement(sentence , '?');
