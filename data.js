/***************************************
 *   utilities
 ***************************************/

const objectToMap = obj => new Map(Object.entries(obj));

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

Map.prototype.random = function () {
  return Array.from(this.keys()).random();
}

const isVowel = char => /[aeiouéè]/i.test(char);

/***************************************
 *   data
 ***************************************/

const verbs = objectToMap(verbs_);

const persons = objectToMap({
    0: ["je"],
    1: ["tu"],
    2: ["elle", "il", "on"],
    3: ["nous"],
    4: ["vous"],
    5: ["elles", "ils"]
});

const personsInverse = objectToMap({
    "je": 0,
    "tu": 1,
    "elle": 2,
    "il": 2,
    "on": 2,
    "nous": 3,
    "vous": 4,
    "elles": 5,
    "ils": 5
})


/***************************************
 *   functions
 ***************************************/

function prepareForDisplay(person, conjugated){
    if ((person === "je") && (isVowel(conjugated[0])))
        return "j'"+conjugated;
    else
        return person + " " + conjugated
}

function getRandomInfinitive() {
    return verbs.random()
}

function getRandomPerson() {
    return persons.get(persons.random()).random();
}

function getConjugation(infinitive, person){
    const personIndex = personsInverse.get(person);
    const conjugated = verbs.get(infinitive)[personIndex];
    return prepareForDisplay(person, conjugated);
}


