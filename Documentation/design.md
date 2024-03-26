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

### Arrays

I will most likely need the following arrays

1. Adjectives
- Uplifting
- Naughty
2. Nicknames
- His
- Hers
3. Sexual Acts
4. Exclamations
- Example: Whoooaahhh!!!!
5. Closings

### Message Templates

