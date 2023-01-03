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