//  Geir Hilmersen 14 Mar 2021
//  Et eksempel på hvordan du kan opprette en side dynamisk.
//  Du kan gjøre akkurat det samme ved å legge inn hver div
//  manuelt i HTML'en også.

let sectionWorkCards = document.querySelector("#workcards");

//  Enkel liste med ting som skal fylles på kortene
let jobblist = ["lærer", "dykker", "gullsmed", "vekter", "programmerer", "kursholder"];

//  Disse variablene blir brukt flere ganger, en gang for hver iterasjon i loopen
//  Da er det ryddig å deklarere dem her oppe.
let workCard;
let heading;
let text;

//  Denne variabelen blir brukt for å holde styr på hva som skal være toppen av en cv oppføring
//  siden vi i .css filen bruker position absolute, så vil toppen settes til å være lik nærmeste
//  posisjonerte "parent", i dette tilfellet section med id workcards (#workcards)
let currentTop = 0;

//loop som oppretter et kort per ting i listen
jobblist.forEach(element => {

    //  Dette er DOM funksjoner for å lage elementer. Først lager vi en "div" og legger
    //  til klassen workfile som vi har opprettet i .css filen. Så sier vi at den skal 
    //  ha "top" lik variabelen current top.
    workCard = document.createElement("div");
    workCard.classList.add("workFile");
    workCard.style.top = currentTop;

    //  her legger vi til "heading" denne delen må nok du gjøre mer avansert og bruke et
    //  "literal objekt", men prinsippet er det samme. 
    //  legg merke til "appendChild" metoden. Den bruker du for å legge til et element på 
    //  en "node", altså et eksisterende element, på siden. Du kan prøve å legge til
    //  andre ting også hvis du vil. En textNode blir det som står mellom to tags
    heading = document.createElement("h1");
    heading.appendChild(document.createTextNode(element));
    workCard.appendChild(heading);

    //  det siste vi gjør her er å legge til workcard som child i noden "sectionWorkCards"
    sectionWorkCards.appendChild(workCard);

    //  legg til 35px på toppen. I denn filen tilsvarer det høyden på headingen.
    currentTop += 35;
});