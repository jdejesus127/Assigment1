function processForm(){
    var noun;
    var noun2;
    var noun3;
    var noun4;
    var verb1;
    var verb2;
    var verb3;
    var verb4;
    var adjective;
    noun = document.getElementById("noun");
    noun2 = document.getElementById("noun2");
    noun3 = document.getElementById("noun3");
    noun4 = document.getElementById("noun4");
    verb1 = document.getElementById("verb1");
    verb2 = document.getElementById("verb2");
    verb3 = document.getElementById("verb3");
    verb4 = document.getElementById("verb4");
    adjective= document.getElementById("adjective");
    content = document.getElementById("output")
    
    
	content.innerText = "Hello " + noun.value + " your have really: " + noun2.value + " Your from " + noun3.value + ", " + 
        noun4.value + " just thinking about it makes my stomach " + verb.value + ", " + 
        verb2.value + " actually prefer meatloaf " + verb3.value + " look kinda like old " + verb4.value + " I think I rather take my chances " + adjective.value  
}
    

  