const terminaisons = {
   indicatif : {
     present: {
        ar: ["o","as","a","amos","am"],
        er: ["o","es","e","emos","em"],
        ir: ["o","es","e","imos","em"]
    },
    imparfait: {
        ar: ["avo","avi","ava","avamo","avate","avano"],
        er: ["evo","evi","eva","evamo","evate","evano"],
        ir: ["ivo","ivi","iva","ivamo","ivate","ivano"]
    },
    futur: {
        all: ["ò","ai","à","emo","ete","anno"]
    },
    passeCompose: {
        ar: ["ado","ado","ado","ado","ado"],
        er: ["ido","ido","ido","ido","ido"],
        ir: ["ido","ido","ido","ido","ido"]
    }
   },
   subjonctif: {
        present: {
            ar: ["i","i","i","iamo","iate","ino"],
            er: ["a","a","a","iamo","iate","ano"],
            ire: ["a","a","a","iamo","iate","ano"]
        }, 
        imparfait: {
            are: ["assi","assi","asse","assimo","aste","assero"],
            ere: ["essi","essi","esse","essimo","este","essero"],
            ire: ["issi","issi","isse","issimo","iste","issero"]
        },
        passeCompose: {
        ar: ["ado","ado","ado","ado","ado"],
        er: ["ido","ido","ido","ido","ido"],
        ir: ["ido","ido","ido","ido","ido"]
    }
   },
   conditionnel: {
        present: {
            are: ["erei","eresti","erebbe","eremmo","ereste","erebbero"],
            ere: ["erei","eresti","erebbe","eremmo","ereste",'erebbero'],
            ire: ["irei","iresti","irebbe","iremmo","ireste","irebbero"]
        },
     passeCompose: {
        ar: ["ado","ado","ado","ado","ado"],
        er: ["ido","ido","ido","ido","ido"],
        ir: ["ido","ido","ido","ido","ido"]
    }
   },
   imperatif: {
    present: {
        are: ["a","i","iamo","ate","ino"],
        ere: ["i","a","iamo","ete","ano"],
        ire: ["i","a","iamo","ite","ano"]
    }
   },
   gerondif: {
    ar: ["ando","ando","ando","ando","ando"],
    er: ["endo","endo","endo","endo","endo"],
    ir: ["indo","indo","indo","indo","indo"]
   }
};
let bonneReponse = "";

const personnes = ["eu","tu","ele","nos","voce","eles"];

function getRadical(verbe) {

    return verbe.slice(0, -2);
}

function conjuguer() {

    const verbe = document.getElementById("verbe").value.trim().toLowerCase();
    const tense = document.getElementById("tense").value;
    const groupe = document.getElementById("groupe").value;
    const pronom = document.getElementById("pronom").value;
    const mode = document.getElementById("mode").value;

    if (!verbe.endsWith(groupe)) {
        document.getElementById("resultat").innerText =
            "Le groupe ne correspond pas au verbe.";
        return;
    }

    const radical = getRadical(verbe, groupe, tense);
    const index = personnes.indexOf(pronom);

    let terminaison;

   
        terminaison = terminaisons[mode][tense][groupe][index];
    
        const resultat = pronom + " " + radical + terminaison;

bonneReponse = resultat; // on stocke

document.getElementById("resultat").innerText = resultat;
}
document.getElementById("action").addEventListener("click", function() {

    const answerInput = document.getElementById("answer");
    const answer = answerInput.value.trim().toLowerCase();

    if (!bonneReponse) {
        conjuguer();
        this.innerText = "Vérifier";
        return;
    }

    if (
        answer.replace(/\s+/g, " ") === 
        bonneReponse.toLowerCase().replace(/\s+/g, " ")
    ) {
        alert("Correct !");
    } else {
        alert("Non 😈 La bonne réponse était : " + bonneReponse);
    }

    bonneReponse = "";
    answerInput.value = "";
    this.innerText = "Générer";
});
