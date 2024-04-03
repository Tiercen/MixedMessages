# Design Documentation

## Goals

My goal with this project is to create an **JavaScript** console app that runs on **node.js** to start and displays the constructed messages in the console.  While this will meet the objectives of the [assignment](https://www.codecademy.com/journeys/full-stack-engineer/paths/fscj-22-building-interactive-websites/tracks/fscj-22-portfolio-project-javascript-syntax/modules/fscp-22-mixed-messages-0a2e7c49-03e1-4825-a480-508f02de0208/kanban_projects/mixed-messages) from [CodeCademy](https://www.codecademy.com/); I want to take it to the next next level by creating a front end in HTML.  This HTML front end will be styled with CSS and will have a minimal interface. 


### JavaScript

#### Design Outline

The JavaScript I am writing will randomly choose from **four** message categories.

1. Loving
2. Uplifting
3. Naughty
4. Self Affirmations

This choosing of categories will be handled by a random number generator.  I was taught to create these like the function below.

```js
function getRandomNumber() {
  return Math.floor(Math.random() * 4);
}
```

I want to make sure that I don't repeat any numbers so I am going to use a function like the one below:

```js
let lastNumber = null;

function getRandomNumber() {
  let number;
  do {
    number = Math.floor(Math.random() * 4);
  } while (number === lastNumber);
  
  lastNumber = number;
  return number;
}

```

I will most likely use this function in multiple code blocks, just changing the number range to allow for selections within larger arrays.

#### Arrays

1. Adjectives
    - Loving
    - Uplifting
    - Naughty
    - Affirmation
2. Actions
    - Sexual Actions
    - Affirmation Actions
    - Wrap Up
3. Nouns
    - Person (Example: Wife, Woman, Partner)
4. Nicknames
    - Theirs
        - Normal
        - Naughty
    - Yours
        - Normal
        - Naughty
5. Names
    - Theirs
6. Erogenous Zones
7. Additional Activities
8. Greetings
    - various ways to greet some one 
    - ```const greetings = ["Hello", "Hi", "Greetings", "Heya", "Good day", "Hey", "Howdy", "Hiya", "Yo", "Sup", "What's up", "Whoooaahhh!", "こんにちは (Konnichiwa)", "Ciao", "Hallo", "Bonjour", "Привет (Privet)", "مرحبا (Marhaba)"];```
9. Closings
    - Normal
        - ```const closings = ["Best regards", "Sincerely", "Yours truly", "Kind regards", "With love", "Yours sincerely", "Best wishes", "Warm regards", "With appreciation", "Respectfully yours", "Forever Yours", "May the Force be with You"];```
    - Naughty
        - ```const naughtyClosings = ["With Lust", "Hornily Yours", "Breathlessly Waiting", "Horny as FUCK", "Looking Forward to Later", "Till Tonight", "Lustily", "Hungrily Yours"]```

##### List of Arrays

```
lovingAdj
upliftingAdj
naughtyAdj
affirmationAdj
sexualActions
affirmationActions
wrapUp
nounsPeople
nicknamesTheirs
nicknamesYours
erogenousZones
additionalActivities
greetings
closings 
naughtyClosings
naughtyNickNamesTheirs
naughtyNickNamesYours
theirNames
```

#### Variables

```js
let greeting = "";
let nickname_Theirs = "";
let nickname_Yours = "";
let naughtyNickNames_Theirs = ""
let naughtyNickNames_Yours = ""
let lovingAdjOne = "";
let lovingAdjTwo = "";
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
let wantNaughty = false;
```

#### Message Templates

##### Loving
```js
    const lovingMessage = `${greeting} ${nickname_Theirs}, You are ${Loving1}, and ${Loving2}, and I ${wrap_up} you. -${closing}, ${nickname_Yours}.`;
```
##### Uplifting
```js
    let upliftingMessage = `${greeting} ${nickname_Theirs}, You are the most ${upliftingAdjOne} and ${upliftingAdjTwo} ${noun}, in the verse. ${closing}, ${nickname_Yours}.`;
```
##### Naughty
```js
    let naughtyMessage = `${greeting} ${naughtyNickNames_Theirs}, I want ${sexualAction} your ${erogenousZone} and ${additionalActivity}. -${naughtyClosing}, ${naughtyNickNames_Yours}.`;
```
##### Self Affirmations
```js
    let selfAffirmationOne = `I am ${affirmationAdjOne}, and ${affirmationAdjTwo}. -${closing}, ${nickname_Theirs}.`;
```
    OR
```js
    let selfAffirmationTwo = `I will ${affirmationActionOne}, and ${affirmationActionTwo}. -${closing}, ${nickname_Theirs}.`
```
#### Logic

1. Select a message template
    1. Uses a messageSelection() function to select a value between 0-4.
        1. Because this function returns the value used to display the message it also includes logic to continue to generate a selection if wantNaughty is false.
2. Message Templates
    1. Loving
        1. Select a greeting from the Loving Greeting array
        2. Select a nickname from the Nicknames_theirs array
        3. Select two adjectives from the Loving Adjectives array
        4. Select a Wrap Up from the Wrap Up Actions array
        5. Select a Closing from the Closings array
        6. Select a nickname from the Nicknames_yours array
    2. Uplifting
        1. Select a greeting from the Uplifting Greeting array
        2. Select a nickname from the Nicknames_theirs array
        3. Select two adjectives from the Uplifting Adjectives array
        4. Select a Noun from the Person Nouns array
        5. Select a Closing from the Closings array
        6. Select a nickname from the Nicknames_yours array
    3. Naughty
        1. Select a greeting from the Naughty Greeting array
        2. Select a nickname from the Nicknames_theirs array
        3. Select a Sexual Act from the Sexual Actions Actions array
        4. Select a Erogenous Zone from the Erogenous Zone array
        5. Select a Additional Activity from the Additional Activities Array
        6. Select a Closing from the Closings array
        7. Select a nickname from the Nicknames_yours array
        8. Check to see if wantNaughty is True
    4. Self Affirmation
        1. Select a sub message template ("I am" or "I will")
            1. "I am"
                1. Select two Affirmations from the Affirmations Adjectives array
                2. Select a Closing from the Closings array
                3. Select a nickname from the Nicknames_theirs array
            2. "I will"
                1. Select two Affirmation Actions from the Affirmation Actions Actions array
                2. Select a Closing from the Closings array
                3. Select a nickname from the Nicknames_theirs array

#### Functions

1. assignRandomValues()
    ```js
    function assignRandomValues() {
      
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
                // console.log(lovingMessage);
                messageElement.textContent = lovingMessage; // Set the generated message content to the paragraph element
                break;
            case 1: // Selects a uplifting message to display to the console
                // console.log(upliftingMessage);
                messageElement.textContent = upliftingMessage; // Set the generated message content to the paragraph element
                break;
            case 2: // Selects a naughty message to display to the console
                // console.log(naughtyMessage);
                messageElement.textContent = naughtyMessage; // Set the generated message content to the paragraph element
                break;
            case 3: // Selects a I am self affirmation message to display to the console
                // console.log(selfAffirmationOne);
                messageElement.textContent = selfAffirmationOne; // Set the generated message content to the paragraph element
                break;
            case 4: // Selects a I will self affirmation message to display to the console
                // console.log(selfAffirmationTwo);
                messageElement.textContent = selfAffirmationTwo; // Set the generated message content to the paragraph element
                break;
        };
    };
    ```
2. messageSelection()
    ```js
    function messageSelection() {
    let checkSelection = Math.floor(Math.random() * 5)
    if  (wantNaughty === false && checkSelection === 2)  {
        while (checkSelection === 2) {
            checkSelection  = Math.floor(Math.random() * 5)
        }
        return  checkSelection; 
    } else  {
        return checkSelection;
    }
    };
    ```