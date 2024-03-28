//This is a JavaScript was created to complete the Mixed Messages assignment from CodeCademy.com

//Arrays

//Adjectives
const lovingAdj = ["adorable", "beautiful", "charming", "delightful", "elegant", "fascinating", "gorgeous", "heavenly", "irresistible", "joyful", "kind-hearted", "lovely", "mesmerizing", "nurturing", "outstanding", "passionate", "radiant", "sweet", "tender", "unforgettable", "vibrant", "warm-hearted", "exquisite", "youthful", "zealous"];
const upliftingAdj = ["inspiring", "motivational", "encouraging", "empowering", "positive", "hopeful", "energetic", "optimistic", "cheerful", "happy", "joyful", "bright", "enthusiastic", "vibrant", "confident", "passionate", "dynamic", "exciting", "upbeat", "invigorating"];
const naughtyAdj = ["sexy", "sultry", "seductive", "alluring", "enticing", "provocative", "hottie", "hot", "ravishing", "captivating", "charming", "tempting", "sensual", "irresistible", "naughty"];
const affirmationAdj = ["amazing", "smart", "beautiful", "spectacular", "awesome", "strong", "capable", "brave", "loved", "enough", "talented", "worthy", "resilient", "inspiring", "confident", "determined", "courageous", "appreciated", "valued", "remarkable"];

//Actions
const sexualActions = ["caress", "touch", "embrace", "cuddle", "nuzzle", "lick", "bite", "kiss", "rub", "stroke", "fondle", "hug", "snuggle", "squeeze", "pet", "smooch", "suck"];
const affirmationActions = ["change the world", "look good", "make a difference", "shine bright", "be confident", "stay positive", "inspire others", "be myself", "stay strong", "keep going"];
const wrapUp = ["love", "believe in", "adore", "cherish", "admire", "appreciate", "value", "respect", "treasure", "honor"];

//Nouns
const nounsPeople = ["wife", "partner", "spouse", "companion", "mate", "lover", "significant other", "better half", "other half", "soulmate"];

//Nicknames
const nicknamesTheirs = ["Scrappu", "Sexiness", "Sweetness", "Baby Girl", "Love", "Colie", "Babe", "My Love", "Horny Lawyer"];
const nicknamesYours = ["Daddy", "Your Bear", "Perry", "The Juggernaut", "Your Biggest Fan"];

//Erogenous Zones
const erogenousZones = ["trouble", "pussy", "tits", "ass", "bits", "fanny", "bajingo", "Australian lips", "Vajayjay", "Booty", "titties", "honkers", "melons", "boobs", "milkshakes"];

//Additional Activities
const additionalActivities = ["scream with pleasure", "cum all night long", "make sweet love to you", "feel you shudder with ecstasy", "feel you quiver under my touch", "beg you to let me please you", "whisper sweet nothings into your ear", "listen to the stifled moans escaping between shuddered breaths"];

//Greetings
const greetings = ["Hello", "Hi", "Greetings", "Heya", "Good day", "Hey", "Howdy", "Hiya", "Yo", "Sup", "What's up", "Whoooaahhh!", "こんにちは (Konnichiwa)", "Ciao", "Hallo", "Bonjour", "Привет (Privet)", "مرحبا (Marhaba)"];

//Closings
const closings = ["Best regards", "Sincerely", "Yours truly", "Kind regards", "With love", "Yours sincerely", "Best wishes", "Warm regards", "With appreciation", "Respectfully yours", "Forever Yours", "May the Force be with You"];
const naughtyClosings = ["With Lust", "Hornily Yours", "Breathlessly Waiting", "Horny as FUCK", "Looking Forward to Later", "Till Tonight", "Lustily", "Hungrily Yours"]

//Variables
let greeting = "";
let nickname_Theirs = "";
let nickname_Yours = "";
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
let wantNaughty = true;

//Message Templates
const lovingMessage = `${greeting} ${nickname_Theirs}, You are ${Loving1}, and ${Loving2}, and I ${wrap_up} you. -${closing}, ${nickname_Yours}.`;
const upliftingMessage = `${greeting} ${nickname_Theirs}, You are ${upliftingAdjOne}, ${upliftingAdjTwo} ${noun}, in the verse. ${closing}, ${nickname_Yours}.`;
const naughtyMessage = `${greeting} ${nickname_Theirs}, I want ${sexualAction} your ${erogenousZone} and ${additionalActivity}. -${naughtyClosing}, ${nickname_Yours}.`;
const selfAffirmationOne = `I am ${affirmationAdjOne}, and ${affirmationAdjTwo}. -${closing}, ${nickname_Theirs}.`;
const selfAffirmationTwo = `I will ${affirmationActionOne}, and ${affirmationActionTwo}. -${closing}, ${nickname_Theirs}.`