/*
    Vincent Sze
*/

// Array
const collection = [];

// Creates the Header
const head1 = document.createElement("h1");
head1.textContent = "MMO Class Picker";
document.body.append(head1);

let selectChoices = selectInfo.choices;

// creates div1
let div1 = document.createElement("div");
document.body.append(div1);

// creates div2
const div2 = document.createElement("div");
div2.id = 'img-container';

// creates div3
const div3 = document.createElement("div");

// creates br tag
const br = document.createElement("br");

createNextSelect("Main");


// Creates section based on depth level
function createNextSelect(key) {
    for (let i = 0; i < selectChoices.length; i++) {
        if (selectChoices[i].key == key) {
            // header in div
            const hdng1 = document.createElement("h2");
            hdng1.className = selectChoices[i].depth;
            hdng1.textContent = selectChoices[i].description;
            div1.append(hdng1);

            // create select dropdown element
            const select1 = document.createElement("select");
            select1.className = selectChoices[i].depth;
            div1.append(select1);

            // fill select dropdown with options element
            const option1 = document.createElement("option");
            option1.value = selectChoices[i].key;
            option1.textContent = "Make A Selection";
            select1.append(option1);

            // fill options with text from JS file
            selectChoices[i].options.forEach(element => {
                let optionA = document.createElement("option");
                optionA.value = element;
                optionA.textContent = element;
                select1.append(optionA);
            });
            select1.onchange = reloadSelect;
        }
    }
    results();
}

// Re-creates the select elements based on previous choices
function reloadSelect() {
    console.log("Select list at depth " + this.className + " just selected.");

    // Adds choice to collection
    if (collection[this.className] != null) {
        collection[this.className] = this.value;
    } else {
        collection.push(this.value);
    }

    // If a previous option is changed, removes options after changed option
    if (this.className == "0") {
        removeElementsByClass("1");
        removeElementsByClass("2");
        createNextSelect(this.value);
    } else if (this.className == "1") {
        removeElementsByClass("2");
        createNextSelect(this.value);
    } else {
        createNextSelect(this.value);
    }
}

// Displays results as image
function results() {
    if (collection.length == 3) {

        // Magic

        // Witch with Staff
        if (collection[0] == "Magic" && collection[1] == "Witch" && collection[2] == "Staff") {
            const witchStaff = document.createElement("img");
            witchStaff.src = "assets/imgs/witch_staff.jpg";

            console.log(this.className);

            div1.append(br);
            div2.append(witchStaff);
            resetButton();
            sendEmail();
        }

        // Witch with Aad Sphera
        else if (collection[0] == "Magic" && collection[1] == "Witch" && collection[2] == "Aad Sphera") {
            const witchSphera = document.createElement("img");
            witchSphera.src = "assets/imgs/witch_sphera.jpg";

            console.log(this.className);

            div1.append(br);
            div2.append(witchSphera);
            resetButton();
            sendEmail();
        }

        // Wizard with Staff
        else if (collection[0] == "Magic" && collection[1] == "Wizard" && collection[2] == "Staff") {
            const wizardStaff = document.createElement("img");
            wizardStaff.src = "assets/imgs/witch_staff.jpg";

            console.log(this.className);

            div1.append(br);
            div2.append(wizardStaff);
            resetButton();
            sendEmail();
        }

        // Wizard with Godr Sphera
        else if (collection[0] == "Magic" && collection[1] == "Wizard" && collection[2] == "Godr Sphera") {
            const wizardSphera = document.createElement("img");
            wizardSphera.src = "assets/imgs/wizard_sphera.jpg";

            console.log(this.className);

            div1.append(br);
            div2.append(wizardSphera);
            resetButton();
            sendEmail();
        }

        // Heavy

        // Guardian with Battle Axe
        else if (collection[0] == "Heavy" && collection[1] == "Guardian" && collection[2] == "Battle Axe") {
            const guardianAxe = document.createElement("img");
            guardianAxe.src = "assets/imgs/guardian_axe.jpg";

            console.log(this.className);

            div1.append(br);
            div2.append(guardianAxe);
            resetButton();
            sendEmail();
        }

        // Guardian with Jordun
        else if (collection[0] == "Heavy" && collection[1] == "Guardian" && collection[2] == "Jördun") {
            const guardianJordun = document.createElement("img");
            guardianJordun.src = "assets/imgs/guardian_jordun.jpg";

            console.log(this.className);

            div1.append(br);
            div2.append(guardianJordun);
            resetButton();
            sendEmail();
        }

        // Berserker with Axe
        else if (collection[0] == "Heavy" && collection[1] == "Berserker" && collection[2] == "Axe") {
            const berserkerAxe = document.createElement("img");
            berserkerAxe.src = "assets/imgs/berserker_axe.jpg";

            console.log(this.className);

            div1.append(br);
            div2.append(berserkerAxe);
            resetButton();
            sendEmail();
        }

        // Berserker with Iron Buster
        else if (collection[0] == "Heavy" && collection[1] == "Berserker" && collection[2] == "Iron Buster") {
            const berserkerIron = document.createElement("img");
            berserkerIron.src = "assets/imgs/berserker_iron_buster.jpg";

            console.log(this.className);

            div1.append(br);
            div2.append(berserkerIron);
            resetButton();
            sendEmail();
        }

        // Melee

        // Mystic with Gauntlet
        else if (collection[0] == "Melee" && collection[1] == "Mystic" && collection[2] == "Gauntlet") {
            const mysticGauntlet = document.createElement("img");
            mysticGauntlet.src = "assets/imgs/mystic_gauntlet.jpg";

            console.log(this.className);

            div1.append(br);
            div2.append(mysticGauntlet);
            resetButton();
            sendEmail();
        }

        // Mystic with Cestus
        else if (collection[0] == "Melee" && collection[1] == "Mystic" && collection[2] == "Cestus") {
            const mysticCestus = document.createElement("img");
            mysticCestus.src = "assets/imgs/mystic_cestus.jpg";

            console.log(this.className);

            div1.append(br);
            div2.append(mysticCestus);
            resetButton();
            sendEmail();
        }

        // Striker with Gauntlet
        else if (collection[0] == "Melee" && collection[1] == "Striker" && collection[2] == "Gauntlet") {
            const strikerGauntlet = document.createElement("img");
            strikerGauntlet.src = "assets/imgs/striker_gauntlet.jpg";

            console.log(this.className);

            div1.append(br);
            div2.append(strikerGauntlet);
            resetButton();
            sendEmail();
        }

        // Striker with Gardbrace
        else if (collection[0] == "Melee" && collection[1] == "Striker" && collection[2] == "Gardbrace") {
            const strikerGard = document.createElement("img");
            strikerGard.src = "assets/imgs/striker_gardbrace.jpg";

            console.log(this.className);

            div1.append(br);
            div2.append(strikerGard);
            resetButton();
            sendEmail();
        }
    }
    div1.append(div2);
    div1.append(div3);
}

// reset button
function resetButton() {
    const reset = document.createElement("input");
    reset.type = "button";
    reset.id = "reset";
    reset.value = "Reset";
    reset.setAttribute('onclick', 'reset();');
    div3.append(reset);
    console.log(collection);
}

// reset functionality
function reset() {
    window.location.reload();
}

// Loops through any elements that have a depth greater than the last changed select
function removeElementsByClass(className) {
    var elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

// Local storage save button
function save() {
    var userName = document.getElementById("user");
    localStorage.setItem("user", userName.value);

    var email = document.getElementById("email");
    localStorage.setItem("email", email.value);

    // var data = localStorage.getItem("user");
    // var p = document.createElement("p");
    // var text = document.createTextNode(data + ", welcome to the MMO Class Picker");
    // p.append(text);
    // p.div1.insertBefore(p, div1);
}

// Adds message after results
function sendEmail() {
    const p = document.createElement("p");
    var getEmail = localStorage.getItem("email");
    p.textContent = ("Sending results to " + getEmail + " ...");
    div3.append(p);
}