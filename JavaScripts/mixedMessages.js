//This is a JavaScript was created to complete the Mixed Messages assignment from CodeCademy.com

// Get references to the button and paragraph element
const generateButton = document.getElementById("generateButton");
const messageElement = document.getElementById("message");

// Add event listener to the button for click event
generateButton.addEventListener("click", assignRandomValues);

//Arrays

//Adjectives
const lovingAdj = ["adorable", "beautiful", "charming", "delightful", "elegant", "fascinating", "gorgeous", "heavenly", "irresistible", "joyful", "kind-hearted", "lovely", "mesmerizing", "nurturing", "outstanding", "passionate", "radiant", "sweet", "tender", "unforgettable", "vibrant", "warm-hearted", "exquisite", "youthful", "zealous", "loving"];
const upliftingAdj = ["inspiring", "motivational", "encouraging", "empowering", "positive", "hopeful", "energetic", "optimistic", "cheerful", "happy", "joyful", "bright", "enthusiastic", "vibrant", "confident", "passionate", "dynamic", "exciting", "upbeat", "invigorating"];
const naughtyAdj = ["sexy", "sultry", "seductive", "alluring", "enticing", "provocative", "hottie", "hot", "ravishing", "captivating", "charming", "tempting", "sensual", "irresistible", "naughty"];
const affirmationAdj = ["amazing", "smart", "beautiful", "spectacular", "awesome", "strong", "capable", "brave", "loved", "enough", "talented", "worthy", "resilient", "inspiring", "confident", "determined", "courageous", "appreciated", "valued", "remarkable"];

//Actions
const sexualActions = ["caress", "touch", "embrace", "cuddle", "nuzzle", "lick", "bite", "kiss", "rub", "stroke", "fondle", "hug", "snuggle", "squeeze", "pet", "smooch", "suck"];
const affirmationActions = ["change the world", "look good", "make a difference", "shine bright", "be confident", "stay positive", "inspire others", "be myself", "stay strong", "keep going"];
const wrapUp = ["love", "believe in", "adore", "cherish", "admire", "appreciate", "value", "respect", "treasure", "honor"];

//Nouns
const nounsPeople = ["wife", "partner", "spouse", "companion", "mate", "lover", "significant other", "better half", "other half", "soulmate"];

//Names & Nicknames
const nicknamesTheirs = ["Scrappu", "Sexiness", "Sweetness", "Love", "Colie", "Babe", "My Love"];
const nicknamesYours = ["Your Bear", "Perry", "Your Biggest Fan"];
const naughtyNickNamesTheirs = ["Baby Girl", "Sexiness", "Horny Lawyer"];
const naughtyNickNamesYours = ["Daddy", "The Juggernaut"];
const theirNames = ["Nicole Perry", 'Cole Perry', "Colie"]

//Erogenous Zones
const erogenousZones = ["trouble", "pussy", "tits", "ass", "bits", "fanny", "bajingo", "Australian lips", "Vajayjay", "Booty", "titties", "honkers", "melons", "boobs", "milkshakes"];

//Additional Activities
const additionalActivities = ["scream with pleasure", "cum all night long", "make sweet love to you", "feel you shudder with ecstasy", "feel you quiver under my touch", "beg you to let me please you", "whisper sweet nothings into your ear", "listen to the stifled moans escaping between shuddered breaths"];

//Greetings
const greetings = ["Hello", "Hi", "Greetings", "Heya", "Good day", "Hey", "Howdy", "Hiya", "Yo", "Sup", "What's up", "Whoooaahhh!", "こんにちは (Konnichiwa)", "Ciao", "Hallo", "Bonjour", "Привет (Privet)", "مرحبا (Marhaba)"];

//Closings
const closings = ["Best regards", "Sincerely", "Yours truly", "Kind regards", "With love", "Yours sincerely", "Best wishes", "Warm regards", "With appreciation", "Respectfully yours", "Forever Yours", "May the Force be with You"];
const naughtyClosings = ["With Lust", "Hornily Yours", "Breathlessly Waiting", "Horny as FUCK", "Looking Forward to Later", "Till Tonight", "Lustily", "Hungrily Yours"]

//Array of Arrays
const mixedMessagesArr = [
    lovingAdj, // Index 0
    upliftingAdj, // Index 1
    naughtyAdj, // Index 2
    affirmationAdj, // Index 3
    sexualActions, // Index 4
    affirmationActions, // Index 5
    wrapUp, // Index 6
    nounsPeople, // Index 7
    nicknamesTheirs, // Index 8
    nicknamesYours, // Index 9
    erogenousZones, // Index 10
    additionalActivities, // Index 11
    greetings, // Index 12
    closings, // Index 13
    naughtyClosings, // Index 14
    naughtyNickNamesTheirs, // Index 15
    naughtyNickNamesYours, // Index 16
    theirNames // Index17
];
  
//Variables
let greeting = "";
let nickname_Theirs = "";
let nickname_Yours = "";
let naughtyNickNames_Theirs = ""
let naughtyNickNames_Yours = ""
let theirName = ""
let lovingAdjOne = "";
let lovingAdjTwo = "";
let naughtyAdjOne = "";
let wrap_up = "";
let upliftingAdjOne = "";
let upliftingAdjTwo = "";
let noun = "";
let sexualAction = "";
let erogenousZone = "";
let additionalActivity = "";
let affirmationAdjOne = "";
let affirmationAdjTwo = "";
let affirmationActionOne = "";
let affirmationActionTwo = "";
let closing = "";
let naughtyClosing = "";
let wantNaughty = true;
let messageSelect;

//Message Templates
let lovingMessage = "";
let upliftingMessage = "";
let naughtyMessage = "";
let selfAffirmationOne = "";
let selfAffirmationTwo = "";

//Functions

//Message Selection by random number
function messageSelection() {
    return Math.floor(Math.random() * 5)
}

/**
 * This function assigns random values from the provided array to various variables.
 * The function uses a switch statement to assign values based on the index of the array.
 * For some cases, two different random values are assigned, while for others only one is needed.
 *
 */
function assignRandomValues(mixedMessagesArr) {
    mixedMessagesArr.forEach((arr, index) => {
        let randomIndex1 = Math.floor(Math.random() * arr.length);
        let randomIndex2 = Math.floor(Math.random() * arr.length);

        // Ensure we have two different random indices for arrays that require two values
        while (randomIndex1 === randomIndex2) {
            randomIndex2 = Math.floor(Math.random() * arr.length);
        }

        switch(index) {
            case 0: // Assigns two random loving adjectives
                lovingAdjOne = arr[randomIndex1];
                lovingAdjTwo = arr[randomIndex2];
               // console.log(`Loving Adjectives: ${lovingAdjOne}, ${lovingAdjTwo}`);
            case 1: // Assigns two random uplifting adjectives
                upliftingAdjOne = arr[randomIndex1];
                upliftingAdjTwo = arr[randomIndex2];
               // console.log(`Uplifting Adjectives: ${upliftingAdjOne}, ${upliftingAdjTwo}`);
                break;
            case 2: // Assigns one random naughty adjective
                naughtyAdjOne = arr[randomIndex1];
               // console.log(`Naughty Adjective: ${naughtyAdjOne}`);
                break;
            case 3: // Assigns two random affirmation adjectives
                affirmationAdjOne = arr[randomIndex1];
                affirmationAdjTwo = arr[randomIndex2];
               // console.log(`Affirmation Adjectives: ${affirmationAdjOne}, ${affirmationAdjTwo}`);
                break;
            case 4: // Assigns one random sexual action
                sexualAction = arr[randomIndex1];
               // console.log(`Sexual Action: ${sexualAction}`);
                break;
            case 5: // Assigns two random affirmation actions
                affirmationActionOne = arr[randomIndex1];
                affirmationActionTwo = arr[randomIndex2];
               // console.log(`Affirmation Actions: ${affirmationActionOne}, ${affirmationActionTwo}`);
                break;
            case 6: // Assigns one random wrap up message
                wrap_up = arr[randomIndex1];
               // console.log(`Wrap Up Message: ${wrap_up}`);
                break;
            case 7: // Assigns one random noun for people
                noun = arr[randomIndex1];
               // console.log(`Noun for People: ${noun}`);
                break;
            case 8: // Assigns one random nickname for them
                nickname_Theirs = arr[randomIndex1];
               // console.log(`Their Nickname: ${nickname_Theirs}`);
                break;
            case 9: // Assigns one random nickname for you
                nickname_Yours = arr[randomIndex1];
               // console.log(`Your Nickname: ${nickname_Yours}`);
                break;
            case 10: // Assigns one random erogenous zone
                erogenousZone = arr[randomIndex1];
               // console.log(`Erogenous Zone: ${erogenousZone}`);
                break;
            case 11: // Assigns one random additional activity
                additionalActivity = arr[randomIndex1];
               // console.log(`Additional Activity: ${additionalActivity}`);
                break;
            case 12: // Assigns one random greeting
                greeting = arr[randomIndex1];
               // console.log(`Greeting: ${greeting}`);
                break;
            case 13: // Assigns one random closing message
                closing = arr[randomIndex1];
               // console.log(`Closing Message: ${closing}`);
                break;
            case 14: // Assigns one random naughty closing message
                naughtyClosing = arr[randomIndex1];
               // console.log(`Naughty Closing Message: ${naughtyClosing}`);
                break;
            case 15: // Assigns one random naughtyNicknamesTheirs message
                naughtyNickNames_Theirs = arr[randomIndex1];
               // console.log(`naughtyNicknamesTheirs Message: ${naughtyNickNames_Theirs}`);
                break;
            case 16: // Assigns one random naughtyNicknamesYours message
                naughtyNickNames_Yours = arr[randomIndex1];
               // console.log(`naughtyNicknamesYours Message: ${naughtyNickNames_Yours}`);
                break;
            case 17: // Assigns one random theirNames message
                theirName = arr[randomIndex1];
               // console.log(`theirName Message: ${theirName}`);
                break;
        }
    });
        // Message Templates
        lovingMessage = `${greeting} ${nickname_Theirs}, You are ${lovingAdjOne}, and ${lovingAdjTwo}, and I ${wrap_up} you. -${closing}, ${nickname_Yours}.`;
        upliftingMessage = `${greeting} ${nickname_Theirs}, You are the most ${upliftingAdjOne} and ${upliftingAdjTwo} ${noun}, in the verse. ${closing}, ${nickname_Yours}.`;
        naughtyMessage = `${greeting} ${naughtyNickNames_Theirs}, I want ${sexualAction} your ${erogenousZone} and ${additionalActivity}. -${naughtyClosing}, ${naughtyNickNames_Yours}.`;
        selfAffirmationOne = `I am ${affirmationAdjOne}, and ${affirmationAdjTwo}. -${closing}, ${theirName}.`;
        selfAffirmationTwo = `I will ${affirmationActionOne}, and ${affirmationActionTwo}. -${closing}, ${theirName}.`;

        // call the messageSelection Function to choose which to display
        messageSelect = messageSelection();
        // console.log(messageSelect);
        switch(messageSelect) {
            case 0: // Selects a loving message to display to the console
                console.log(lovingMessage);
                lovingMessage.textContent = message; // Set the generated message content to the paragraph element
                break;
            case 1: // Selects a uplifting message to display to the console
                console.log(upliftingMessage);
                upliftingMessage.textContent = message; // Set the generated message content to the paragraph element
                break;
            case 2: // Selects a naughty message to display to the console
                console.log(naughtyMessage);
                naughtyMessage.textContent = message; // Set the generated message content to the paragraph element
                break;
            case 3: // Selects a I am self affirmation message to display to the console
                console.log(selfAffirmationOne);
                selfAffirmationOne.textContent = message; // Set the generated message content to the paragraph element
                break;
            case 4: // Selects a I will self affirmation message to display to the console
                console.log(selfAffirmationTwo);
                selfAffirmationTwo.textContent = message; // Set the generated message content to the paragraph element
                break;
        };
}

// Call the function with your array of arrays
assignRandomValues(mixedMessagesArr);