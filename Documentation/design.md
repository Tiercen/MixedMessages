# Design Documentation

## Goals

My goal with this project is to create an **JavaScript** console app that runs on **node.js** to start and displays the constructed messages in the console.  While this will meet the objectives of the [assignment](https://www.codecademy.com/journeys/full-stack-engineer/paths/fscj-22-building-interactive-websites/tracks/fscj-22-portfolio-project-javascript-syntax/modules/fscp-22-mixed-messages-0a2e7c49-03e1-4825-a480-508f02de0208/kanban_projects/mixed-messages) from [CodeCademy](https://www.codecademy.com/); I want to take it to the next next level by creating a front end in HTML.  This HTML front end will be styled with CSS and will have a minimal interface. 


### JavaScript

#### Functions

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
2. Nicknames
    - Theirs
    - Yours
4. Erogenous Zones
5. Additional Activities
6. Greetings
    - various ways to greet some one 
    - ```js 
    const greetings = ["Hello", "Hi", "Greetings", "Heya", "Good day", "Hey", "Howdy", "Hiya", "Yo", "Sup", "What's up", "Whoooaahhh!", "こんにちは (Konnichiwa)", "Ciao", "Hallo", "Bonjour", "Привет (Privet)", "مرحبا (Marhaba)"];
    ```
7. Closings
    - Normal
        - ```js
        const closings = ["Best regards", "Sincerely", "Yours truly", "Kind regards", "With love", "Yours sincerely", "Best wishes", "Warm regards", "With appreciation", "Respectfully yours", "Forever Yours", "May the Force be with You"];```
    - Naughty
        - ```js
        const naughtyClosings = ["With Lust", "Hornily Yours", "Breathlessly Waiting", "Horny as FUCK", "Looking Forward to Later", "Till Tonight", "Lustily", "Hungrily Yours"]
        ```

#### Message Templates

##### Loving
```js
    const lovingMessage = `${greeting} ${nickname_Theirs}, You are ${Loving1}, and ${Loving2}, and I ${wrap_up} you. -${closing}, ${nickname_Yours}.`;
```
##### Uplifting
```js
    const upliftingMessage = `${greeting} ${nickname_Theirs}, You are ${upliftingAdjOne}, ${upliftingAdjTwo} ${noun}, in the verse. ${closing}, ${nickname_Yours}.`;
```
##### Naughty
```js
    const naughtyMessage = `${greeting} ${nickname_Theirs}, I want ${sexualAction} your ${erogenousZone} and ${additionalActivity}. -${naughtyClosing}, ${nickname_Yours}.`;
```
##### Self Affirmations
```js
    const selfAffirmationOne = `I am ${affirmationAdjOne}, and ${affirmationAdjTwo}. -${closing}, ${nickname_Theirs}.`;
```
    OR
```js
    const selfAffirmationTwo = `I will ${affirmationActionOne}, and ${affirmationActionTwo}. -${closing}, ${nickname_Theirs}.`
```
#### Logic

1. Select a message template
    1. Uses a random number function to select a value between 0-3.
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