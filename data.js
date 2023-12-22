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

const columns = objectToMap({
    "présent indicatif": 0,
    "présent subjonctif": 1,
    "imparfait indicatif": 2,
    "imparfait subjonctif": 3,
    "conditionnel présent": 4,
    "futur simple": 5,
    "passé simple": 6,
    "aux": 7,
    "participe passé": 8,
    "groupe": 9
})

const times = [
    "présent indicatif",
    /*"présent subjonctif",
    "imparfait indicatif",
    "imparfait subjonctif",
    "conditionnel présent",
    "futur simple",
    "passé simple",*/
]

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

function getChallenge() {
    const infinitive = verbs.random();
    const person = persons.get(persons.random()).random();
    const time = times.random();
    return [infinitive, person, time]
}

function getConjugation(infinitive, person, time){
    const personIndex = personsInverse.get(person);
    const timeIndex = columns.get(time);

    const conjugated = verbs.get(infinitive)[timeIndex][personIndex];
    return prepareForDisplay(person, conjugated);
}


