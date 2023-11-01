/* utilities */ 

const objectToMap = obj => new Map(Object.entries(obj));

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

Map.prototype.random = function () {
  return Array.from(this.keys()).random();
}


/* data */

const verbs = objectToMap(verbs_);


const verbForms = objectToMap({
    0: "present",
    1: "imperfect",
    2: "future",
    3: "conditional"
})

const verbFormsTranslation = objectToMap({
    "present": "présent",
    "imperfect": "imparfait",
    "future": "futur simple",
    "conditional": "conditional présent"
})

const persons = objectToMap({
    "first person singular": ["je"],
    "second person singular": ["tu"],
    "third person singular": ["elle", "il", "on"],
    "first person plural": ["nous"],
    "second person plural": ["vous"],
    "third person plural": ["elles", "ils"]
})

/* functions */

function getChallenge() {
    const verb = verbs.random();
    const person = persons.random();
    const pronoun = persons.get(person).random();
    const form = verbForms.random();
    
    const key = "indicative"+"|"+verbForms.get(form)+"|"+person;
    const conjugated = verbs.get(verb)[key];
    let phrase = pronoun + " " + conjugated;
    if ((pronoun == "je") && (conjugated.startsWith("a"))) // e, i, o, or u todo
       phrase = "j'" + conjugated;
    
    
    return {"infinitive": verb, "conjugated": phrase, "answer": form};
}

