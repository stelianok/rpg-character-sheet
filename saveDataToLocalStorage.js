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



let characterName = document.getElementById("name").value;
let playerName = document.getElementById("player").value;
let occupation = document.getElementById("occupation").value;
let age = document.getElementById("age").value;
let sex = document.getElementById("sex").value;
let birthplace = document.getElementById("birthplace").value;
let residence = document.getElementById("residence").value;

let lifeCurrent = document.getElementById("lifeCurrent").value;
let lifeMax = document.getElementById("lifeMax").value;

let sanityCurrent = document.getElementById("sanityCurrent").value;
let sanityMax = document.getElementById("sanityMax").value;

let manaCurrent = document.getElementById("manaCurrent").value;
let manaMax = document.getElementById("manaMax").value;

let strenght = document.getElementById("attribute_input_0").value;
let constitution = document.getElementById("attribute_input_1").value;
let dexterity = document.getElementById("attribute_input_2").value;
let intelligence = document.getElementById("attribute_input_3").value;
let education = document.getElementById("attribute_input_4").value;
let charisma = document.getElementById("attribute_input_5").value;
let power = document.getElementById("attribute_input_6").value;

let items = [];

/** Weapon Array
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

function addItem(name, type, damage, currentQuantity, maxQuantity, attack,
  range, defect, area) {
  this.name = name;
  this.type = type;
  this.damage = damage;
  this.currentQuantity = currentQuantity;
  this.maxQuantity = maxQuantity;
  this.attack = attack;
  this.range = range;
  this.defect = defect;
  this.area = area;
}

$("#weapons").find('tbody tr').each(
  function (index, item) {
    let itemName = $(item).find('td').eq(0).text();
    let type = $(item).find('td').eq(1).text();
    let damage = $(item).find('td').eq(3).text();
    let currentQuantity = $(item).find('td').eq(4).text();
    let maxQuantity = $(item).find('td').eq(5).text();
    let attack = $(item).find('td').eq(6).text();
    let range = $(item).find('td').eq(7).text();
    let defect = $(item).find('td').eq(8).text();
    let area = $(item).find('td').eq(9).text();

    items.push(new addItem(itemName, type, damage, currentQuantity, maxQuantity,
      attack, range, defect, area));

  }
)

// Esses códigos servem apenas para verificar se as informações
// são resgatadas corretamente

// console.warn(characterName, playerName, occupation, age, sex, birthplace, residence)

// console.warn(`Vida: ${lifeCurrent}/${lifeMax}`);
// console.warn(`Vida: ${sanityCurrent}/${sanityMax}`);
// console.warn(`Vida: ${manaCurrent}/${manaMax}`);

// console.warn(`strenght: ${strenght}, constitution: ${constitution},
//  dex: ${dexterity}, intelligence: ${intelligence}, education: ${education}
//  charisma: ${charisma} power: ${power}`);

console.warn(items);