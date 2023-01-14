/** Player
 * 
 * name: (name)
 * player: (player)
 * occupation: (occupation)
 * age: (age)
 * sex: (id)
 * birthplace: (birthplace)
 * residence: (residence)
 * 
 */

/** Stats
 * 
 * currentLife: lifeCurrent
 * maxLife: lifeMax
 * 
 * currentSanity: sanityCurrent
 * maxSanity: maxSanity
 * 
 * currentMana: manaCurrent
 * maxMana: maxMana 
 */

/** Attributes
 * 
 * Strenght:
 * Constitution:
 * Dexterity:
 * Intelligence:
 * Education:
 * Charisma:
 * Power: 
 * ?:
 * ?:
 * ?:
 */

// Player Info
let characterName = document.getElementById("name").value;
let playerName = document.getElementById("player").value;
let occupation = document.getElementById("occupation").value;
let age = document.getElementById("age").value;
let sex = document.getElementById("sex").value;
let birthplace = document.getElementById("birthplace").value;
let residence = document.getElementById("residence").value;

// Stats
let lifeCurrent = document.getElementById("lifeCurrent").value;
let lifeMax = document.getElementById("lifeMax").value;

let sanityCurrent = document.getElementById("sanityCurrent").value;
let sanityMax = document.getElementById("sanityMax").value;

let manaCurrent = document.getElementById("manaCurrent").value;
let manaMax = document.getElementById("manaMax").value;

// Checkboxes
let lesion = document.getElementById("lesion").value;
let injury = document.getElementById("injury").value;
let dying = document.getElementById("dying").value;

let manaScarce = document.getElementById("manaScarce").value;
let noMana = document.getElementById("noMana").value;

let slightlyInsane = document.getElementById("traumatized").value;
let insane = document.getElementById("crazed").value;

// Extra Info
let extraDamage = document.getElementById("damage").value;
let armor = document.getElementById("armor").value;
let xp = document.getElementById("xp").value;
let level = document.getElementById("level").value;

// Attributes
let strenght = document.getElementById("attribute_input_0").value;
let constitution = document.getElementById("attribute_input_1").value;
let dexterity = document.getElementById("attribute_input_2").value;
let intelligence = document.getElementById("attribute_input_3").value;
let education = document.getElementById("attribute_input_4").value;
let charisma = document.getElementById("attribute_input_5").value;
let power = document.getElementById("attribute_input_6").value;

// Skills
let fighting = document.getElementById("skill_input_0").value;
let shooting = document.getElementById("skill_input_1").value;
let throwing = document.getElementById("skill_input_2").value;
let medicine = document.getElementById("skill_input_3").value;
let investigation = document.getElementById("skill_input_4").value;
let insight = document.getElementById("skill_input_5").value;
let history = document.getElementById("skill_input_6").value;
let charm = document.getElementById("skill_input_7").value;
let intimidation = document.getElementById("skill_input_8").value;
let nature = document.getElementById("skill_input_9").value;
let acrobatics = document.getElementById("skill_input_10").value;
let language = document.getElementById("skill_input_11").value;
let perception = document.getElementById("skill_input_12").value;
let stealing = document.getElementById("skill_input_13").value;
let furtivity = document.getElementById("skill_input_14").value;
let computing = document.getElementById("skill_input_15").value;
let driving = document.getElementById("skill_input_16").value;
let athletics = document.getElementById("skill_input_17").value;

let items = [];

/** Item Array
 * 
 * Name:
 * type:
 * Damage:
 * CurrentQuantity:
 * MaxQuantity:
 * Attack:
 * Range:
 * Defect:
 * Area:
 */

function addItem(name, type, damage, currentAmmo, maxAmmo, allowedQuantity, range, defect, area) {
  this.name = name;
  this.type = type;
  this.damage = damage;
  this.currentAmmo = currentAmmo;
  this.maxAmmo = maxAmmo;
  this.allowedQuantity = allowedQuantity;
  this.range = range;
  this.defect = defect;
  this.area = area;
}

$("#weapons").find('tbody tr').each(
  function (index, item) {
    let itemName = $(item).find('td').eq(0).text();
    let type = $(item).find('td').eq(1).text();
    let damage = $(item).find('td').eq(2).text();
    let currentAmmo = $(item).find('td').eq(3).text();
    let maxAmmo = $(item).find('td').eq(4).text();
    let allowedQuantity = $(item).find('td').eq(5).text();
    let range = $(item).find('td').eq(6).text();
    let defect = $(item).find('td').eq(7).text();
    let area = $(item).find('td').eq(8).text();

    items.push(new addItem(itemName, type, damage, currentAmmo, maxAmmo, allowedQuantity, range, defect, area));

  }
)

function savePlayerDataToLocalStorage() {
  characterName = document.getElementById("name").value;
  playerName = document.getElementById("player").value;
  occupation = document.getElementById("occupation").value;
  age = document.getElementById("age").value;
  sex = document.getElementById("sex").value;
  birthplace = document.getElementById("birthplace").value;
  residence = document.getElementById("residence").value;

  // Stats
  lifeCurrent = document.getElementById("lifeCurrent").value;
  lifeMax = document.getElementById("lifeMax").value;

  sanityCurrent = document.getElementById("sanityCurrent").value;
  sanityMax = document.getElementById("sanityMax").value;

  manaCurrent = document.getElementById("manaCurrent").value;
  manaMax = document.getElementById("manaMax").value;

  // Checkboxes
  lesion = document.getElementById("lesion").value;
  injury = document.getElementById("injury").value;
  dying = document.getElementById("dying").value;

  manaScarce = document.getElementById("manaScarce").value;
  noMana = document.getElementById("noMana").value;

  slightlyInsane = document.getElementById("traumatized").value;
  insane = document.getElementById("crazed").value;

  // Extra Info
  extraDamage = document.getElementById("damage").value;
  armor = document.getElementById("armor").value;
  xp = document.getElementById("xp").value;
  level = document.getElementById("level").value;

  // Attributes
  strenght = document.getElementById("attribute_input_0").value;
  constitution = document.getElementById("attribute_input_1").value;
  dexterity = document.getElementById("attribute_input_2").value;
  intelligence = document.getElementById("attribute_input_3").value;
  education = document.getElementById("attribute_input_4").value;
  charisma = document.getElementById("attribute_input_5").value;
  power = document.getElementById("attribute_input_6").value;

  // Skills
  fighting = document.getElementById("skill_input_0").value;
  shooting = document.getElementById("skill_input_1").value;
  throwing = document.getElementById("skill_input_2").value;
  medicine = document.getElementById("skill_input_3").value;
  investigation = document.getElementById("skill_input_4").value;
  insight = document.getElementById("skill_input_5").value;
  history = document.getElementById("skill_input_6").value;
  charm = document.getElementById("skill_input_7").value;
  intimidation = document.getElementById("skill_input_8").value;
  nature = document.getElementById("skill_input_9").value;
  acrobatics = document.getElementById("skill_input_10").value;
  language = document.getElementById("skill_input_11").value;
  perception = document.getElementById("skill_input_12").value;
  stealing = document.getElementById("skill_input_13").value;
  furtivity = document.getElementById("skill_input_14").value;
  computing = document.getElementById("skill_input_15").value;
  driving = document.getElementById("skill_input_16").value;
  athletics = document.getElementById("skill_input_17").value;

  let playerData = {
    "name": characterName,
    "player": playerName,
    "occupation": occupation,
    "age": age,
    "sex": sex,
    "birthplace": birthplace,
    "residence": residence,
    "life": {
      "current": lifeCurrent,
      "max": lifeMax
    },
    "sanity": {
      "current": sanityCurrent,
      "max": sanityMax
    },
    "mana": {
      "current": manaCurrent,
      "max": manaMax
    },
    "weapons": items,
    "attributes": [
      {
        "type": "Força",
        "amount": strenght
      },
      {
        "type": "Constituição",
        "amount": constitution
      },
      {
        "type": "Destreza",
        "amount": dexterity
      },
      {
        "type": "Inteligência",
        "amount": intelligence
      },
      {
        "type": "Educação",
        "amount": education
      },
      {
        "type": "Carisma",
        "amount": charisma
      },
      {
        "type": "Poder",
        "amount": power
      }
    ],
    "skills": [
      {
        "type": "Briga",
        "amount": fighting
      },
      {
        "type": "Tiro",
        "amount": shooting
      },
      {
        "type": "Arremesso",
        "amount": throwing
      },
      {
        "type": "Medicina",
        "amount": medicine
      },
      {
        "type": "Investigação",
        "amount": investigation
      },
      {
        "type": "Refletir",
        "amount": insight
      },
      {
        "type": "História",
        "amount": history
      },
      {
        "type": "Charme",
        "amount": charm
      },
      {
        "type": "Intimidação",
        "amount": intimidation
      },
      {
        "type": "Natureza",
        "amount": nature
      },
      {
        "type": "Acrobacia",
        "amount": acrobatics
      },
      {
        "type": "Lábia",
        "amount": language
      },
      {
        "type": "Percepção",
        "amount": perception
      },
      {
        "type": "Roubo",
        "amount": stealing
      },
      {
        "type": "Furtividade",
        "amount": furtivity
      },
      {
        "type": "Computação",
        "amount": computing
      },
      {
        "type": "Condução",
        "amount": driving
      },
      {
        "type": "Atletismo",
        "amount": athletics
      }
    ]
  }

  console.warn(playerData);
  localStorage.setItem('playerData', JSON.stringify(playerData));
}

function retrieveDataFromLocalStorage() {
  let playerData = JSON.parse(localStorage.playerData || undefined) || {};
  console.log(playerData);
  return playerData;
}

function ImportDataFromJSON() {
  function onChange(event) {
    var reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(event.target.files[0]);
  }

  function onReaderLoad(event) {
    console.log(event.target.result);
    var uploadedFile = JSON.parse(event.target.result);
    SetImportedData(uploadedFile)
  }

  document.getElementById('myFile').addEventListener('change', onChange);
}
function SetImportedData(uploadedFile) {
  console.log(uploadedFile);

  document.getElementById("name").value = uploadedFile.name
  document.getElementById("player").value = uploadedFile.player
  document.getElementById("occupation").value = uploadedFile.occupation
  document.getElementById("age").value = uploadedFile.age
  document.getElementById("sex").value = uploadedFile.sex
  document.getElementById("birthplace").value = uploadedFile.birthplace
  document.getElementById("residence").value = uploadedFile.residence

  // Stats
  document.getElementById("lifeCurrent").value = uploadedFile.life.current
  document.getElementById("lifeMax").value = uploadedFile.life.max

  document.getElementById("sanityCurrent").value = uploadedFile.sanity.current
  document.getElementById("sanityMax").value = uploadedFile.sanity.max

  document.getElementById("manaCurrent").value = uploadedFile.mana.current
  document.getElementById("manaMax").value = uploadedFile.max

  // Checkboxes
  // document.getElementById("lesion").value = uploadedFile.name
  // document.getElementById("injury").value = uploadedFile.name
  // document.getElementById("dying").value = uploadedFile.name

  // document.getElementById("manaScarce").value = uploadedFile.name
  // document.getElementById("noMana").value = uploadedFile.name

  // document.getElementById("traumatized").value = uploadedFile.name
  // document.getElementById("crazed").value = uploadedFile.name

  // Extra Info
  // document.getElementById("damage").value = uploadedFile.name
  // document.getElementById("armor").value = uploadedFile.name
  // document.getElementById("xp").value = uploadedFile.name
  // document.getElementById("level").value = uploadedFile.name

  // Attributes
  document.getElementById("attribute_input_0").value = uploadedFile.attributes[0].amount;
  document.getElementById("attribute_input_1").value = uploadedFile.attributes[1].amount;
  document.getElementById("attribute_input_2").value = uploadedFile.attributes[2].amount;
  document.getElementById("attribute_input_3").value = uploadedFile.attributes[3].amount;
  document.getElementById("attribute_input_4").value = uploadedFile.attributes[4].amount;
  document.getElementById("attribute_input_5").value = uploadedFile.attributes[5].amount;
  document.getElementById("attribute_input_6").value = uploadedFile.attributes[6].amount;

  // Skills
  document.getElementById("skill_input_0").value = uploadedFile.skills[0].amount;
  document.getElementById("skill_input_1").value = uploadedFile.skills[1].amount;
  document.getElementById("skill_input_2").value = uploadedFile.skills[2].amount;
  document.getElementById("skill_input_3").value = uploadedFile.skills[3].amount;
  document.getElementById("skill_input_4").value = uploadedFile.skills[4].amount;
  document.getElementById("skill_input_5").value = uploadedFile.skills[5].amount;
  document.getElementById("skill_input_6").value = uploadedFile.skills[6].amount;
  document.getElementById("skill_input_7").value = uploadedFile.skills[7].amount;
  document.getElementById("skill_input_8").value = uploadedFile.skills[8].amount;
  document.getElementById("skill_input_9").value = uploadedFile.skills[9].amount;
  document.getElementById("skill_input_10").value = uploadedFile.skills[10].amount;
  document.getElementById("skill_input_11").value = uploadedFile.skills[11].amount;
  document.getElementById("skill_input_12").value = uploadedFile.skills[12].amount;
  document.getElementById("skill_input_13").value = uploadedFile.skills[13].amount;
  document.getElementById("skill_input_14").value = uploadedFile.skills[14].amount;
  document.getElementById("skill_input_15").value = uploadedFile.skills[15].amount;
  document.getElementById("skill_input_16").value = uploadedFile.skills[16].amount;
  document.getElementById("skill_input_17").value = uploadedFile.skills[17].amount;

}

function download() {
  let data = retrieveDataFromLocalStorage();
  let dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(data))}`;
  let downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", `${playerName}.json`);
  downloadAnchorNode.click();
}
// Esses códigos servem apenas para verificar se as informações
// são resgatadas corretamente

// console.warn(characterName, playerName, occupation, age, sex, birthplace, residence)

// console.warn(`Vida: ${lifeCurrent}/${lifeMax}`);
// console.warn(`Sanidade: ${sanityCurrent}/${sanityMax}`);
// console.warn(`Mana: ${manaCurrent}/${manaMax}`);

// console.warn(`fighting: ${fighting}, shooting: ${shooting},
// throwing: ${throwing}, medicine: ${medicine}, investigation: ${investigation},
// insight: ${insight}, history: ${history}, charm: ${charm},
// intimidation: ${intimidation}, nature: ${nature}, acrobatics: ${acrobatics},
// language: ${language}, perception: ${perception}, stealing: ${stealing},
// furtivity: ${furtivity}, computing: ${computing}, driving: ${driving}, athletics: ${athletics}`);

// console.warn(`strenght: ${strenght}, constitution: ${constitution},
//  dex: ${dexterity}, intelligence: ${intelligence}, education: ${education}
//  charisma: ${charisma} power: ${power}`);

// console.warn(items);