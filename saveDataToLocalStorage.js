const dummyData = {
  name: '',
  player: '',
  occupation: '',
  age: 0,
  sex: '',
  birthplace: '',
  residence: '',

  life: {
    current: 1,
    max: 1,
  },
  sanity: {
    current: 1,
    max: 1,
  },
  mana: {
    current: 1,
    max: 1,
  },

  weapons: [
    {
      name: 'Glock-17',
      type: 'Arma',
      damage: '1d6',
      numCurrent: 16,
      numMax: 48,
      attack: '3 tiros',
      reach: '20 m',
      defect: 1,
      area: 'Alvo',
    },
    {
      name: 'AK-47',
      type: 'Arma',
      damage: '1d6',
      numCurrent: 16,
      numMax: 48,
      attack: '3 tiros',
      reach: '20 m',
      defect: 1,
      area: 'Alvo',
    },
  ],
  attributes: [
    {
      type: 'Força',
      amount: 8,
    },
    {
      type: 'Constituição',
      amount: 14,
    },
    {
      type: 'Destreza',
      amount: 16,
    },
    {
      type: 'Inteligência',
      amount: 16,
    },
    {
      type: 'Educação',
      amount: 18,
    },
    {
      type: 'Carisma',
      amount: 8,
    },
    {
      type: 'Poder',
      amount: 18,
    },
  ],
  skills: [
    {
      type: 'Briga',
      amount: 10,
    },
    {
      type: 'Tiro',
      amount: 12,
    },
    {
      type: 'Arremesso',
      amount: 14,
    },
    {
      type: 'Medicina',
      amount: 16,
    },
    {
      type: 'Investigação',
      amount: 16,
    },
    {
      type: 'Refletir',
      amount: 3,
    },
    {
      type: 'História',
      amount: 3,
    },
    {
      type: 'Charme',
      amount: 12,
    },
    {
      type: 'Intimidação',
      amount: 12,
    },
    {
      type: 'Natureza',
      amount: 3,
    },
    {
      type: 'Acrobacia',
      amount: 1,
    },
    {
      type: 'Lábia',
      amount: 14,
    },
    {
      type: 'Percepção',
      amount: 7,
    },
    {
      type: 'Roubo',
      amount: 6,
    },
    {
      type: 'Furtividade',
      amount: 1,
    },
    {
      type: 'Computação',
      amount: 3,
    },
    {
      type: 'Condução',
      amount: 3,
    },
    {
      type: 'Atletismo',
      amount: 4,
    },
  ],
  spells: [
    {
      name: 'AK-47',
      type: 'Arma',
      description: '1d6',
      damage: 16,
      reach: 48,
      mana: '3 tiros',
      reach: '20 m',
    },
  ],
}

let data = dummyData;

loadWeaponTableDataFromJSON();

data.attributes.map((attribute, index) => {
  addAttribute(attribute, index)
})

data.skills.map((skill, index) => {
  addSkill(skill, index)
})

$('#name').val(data.name)
$('#player').val(data.player)
$('#occupation').val(data.occupation)
$('#age').val(data.age)
$('#sex').val(data.sex)
$('#birthplace').val(data.birthplace)
$('#residence').val(data.residence)

$('.lifeBar').css('width', `${calculateBar(data.life.current, data.life.max)}%`)
$('#lifeCount').text(`${data.life.current}/${data.life.max}`)
$('#lifeCurrent').val(data.life.current)
$('#lifeMax').val(data.life.max)

$('.sanityBar').css(
  'width',
  `${calculateBar(data.sanity.current, data.sanity.max)}%`
)
$('#sanityCount').text(`${data.sanity.current}/${data.sanity.max}`)
$('#sanityCurrent').val(data.sanity.current)
$('#sanityMax').val(data.sanity.max)

$('.manaBar').css(
  'width',
  `${calculateBar(data.mana.current, data.mana.max)}%`
)
$('#manaCount').text(`${data.mana.current}/${data.mana.max}`)
$('#manaCurrent').val(data.mana.current)
$('#manaMax').val(data.mana.max)

const diceModal = $('#diceAttributes')
const lifeModal = $('#lifeModal')
const sanityModal = $('#sanityModal')
const manaModal = $('#manaModal')

$(window).click(function (event) {
  if (event.target.id == 'diceAttributes') {
    diceModal.css('display', 'none')
    $('#diceNumber').text('')
    $('#diceType').text('')

    $('.modalDice').css('transform', 'rotate(0deg)')
    $('.modalDice').css('-webkit-transform', 'rotate(0deg)')
  } else if (event.target.id == 'lifeModal') {
    lifeModal.css('display', 'none')
  } else if (event.target.id == 'sanityModal') {
    sanityModal.css('display', 'none')
  } else if (event.target.id == 'addWeaponModal') {
    closeModal('#addWeaponModal')
  }
})

function rollAtribute(attribute, amount) {
  diceModal.css('display', 'block')
  const diceNumber = rollDice('1d20')

  const result = calcDice(amount, diceNumber)

  $('#diceNumber').text("d20: " + diceNumber)
  $('#diceType').text("Resultado:  " + result)

}

// ClickEvents 
$('.lifeBar').click(function () {
  console.log(this)
  lifeModal.css('display', 'block')
})
$('.sanityBar').click(function () {
  console.log(this)
  sanityModal.css('display', 'block')
})
$('.manaBar').click(function () {
  console.log(this)
  manaModal.css('display', 'block')
})
$('#addWeapon').click(function () {
  openModal('#addWeaponModal')
})
$('#addSpell').click(function () {
  openModal('#addSpellModal')
})

// Update events 
$('#lesion').change(function () {
  if (this.checked) {
    console.log('Modo lesionamento grave ativado!')
  } else {
    console.log('Modo lesionamento grave desativado!')
  }
})
$('#injury').change(function () {
  if (this.checked) {
    console.log('Modo lesionamento ativado!')
  } else {
    console.log('Modo lesionado desativado!')
  }
})
$('#dying').change(function () {
  if (this.checked) {
    console.log('Modo morrendo ativado!')
  } else {
    console.log('Modo morrendo desativado!')
  }
})
$('#traumatized').change(function () {
  if (this.checked) {
    console.log('Modo traumatizado ativado!')
  } else {
    console.log('Modo traumatizado desativado!')
  }
})
$('#crazed').change(function () {
  if (this.checked) {
    console.log('Modo enlouquecido ativado!')
  } else {
    console.log('Modo enlouquecido desativado!')
  }
})

// Submit forms
$('#addWeaponForm').submit(function (event) {

  const weapon = {
    name: $('#weaponName').val(),
    type: $('#weaponType').val(),
    damage: $('#weaponDamage').val(),
    numCurrent: $('#weaponNumCurrent').val(),
    numMax: $('#weaponNumMax').val(),
    attack: $('#weaponAttack').val(),
    reach: $('#weaponReach').val(),
    defect: $('#weaponDefect').val(),
    area: $('#weaponArea').val(),
  }

  data.weapons.push(weapon)

  addWeaponToTable(weapon)
  console.log(data.weapons);
  closeModal('#addWeaponModal')
  event.preventDefault()
})
$('#addSpellForm').submit(function (event) {

  const spell = {
    name: $('#spellName').val(),
    type: $('#spellType').val(),
    description: $('#spellDescription').val(),
    damage: $('#spellDamage').val(),
    reach: $('#spellReach').val(),
    area: $('#spellMana').val(),
  }

  data.spells.push(spell)
  const id = data.spells.length - 1
  addSpellToTable(spell, id)

  closeModal('#addSpellModal')
  event.preventDefault()
})
$('#changeLife').submit(function (event) {
  let current = Number($('#lifeCurrent').val())
  const max = Number($('#lifeMax').val())

  if (current > max) {
    alert('A vida atual não pode ser maior que a maxima!')
    current = max
  }

  data.life.current = current
  data.life.max = max
  $('.lifeBar').css('width', `${calculateBar(current, max)}%`)
  $('#lifeCount').text(`${current}/${max}`)

  closeModal('#lifeModal')
  event.preventDefault()
})
$('#changeSanity').submit(function (event) {
  let current = Number($('#sanityCurrent').val())
  const max = Number($('#sanityMax').val())

  if (current > max) {
    alert('A sanidade atual não pode ser maior que a maxima!')
    current = max
  }

  data.sanity.current = current
  data.sanity.max = max
  $('.sanityBar').css('width', `${calculateBar(current, max)}%`)
  $('#sanityCount').text(`${current}/${max}`)

  closeModal('#sanityModal')
  event.preventDefault()
})
$('#changeMana').submit(function (event) {
  let current = Number($('#manaCurrent').val())
  const max = Number($('#manaMax').val())

  if (current > max) {
    alert('A mana atual não pode ser maior que a maxima!')
    current = max
  }

  data.mana.current = current
  data.mana.max = max
  $('.manaBar').css('width', `${calculateBar(current, max)}%`)
  $('#manaCount').text(`${current}/${max}`)

  closeModal('#manaModal')
  event.preventDefault()
})

// Calculate Bars
function calculateBar(current, max) {
  if (current > max) {
    return 100
  } else if (current < 0) {
    return 0
  } else {
    const value = (100 / max) * current
    const string = value.toString().split('.')[0]
    const percentage = Number(string)
    return percentage
  }
}

//Manipulate Tables
function addWeaponToTable(weapon) {
  let id = data.weapons.indexOf(weapon);

  const newTableItem = $(`
  <tr id="${id}">
    <td>${weapon.name}</td>
    <td>${weapon.type}</td>
    <td>${weapon.damage}</td>
    <td>${weapon.numCurrent}</td>
    <td>${weapon.numMax}</td>
    <td>${weapon.attack}</td>
    <td>${weapon.reach}</td>
    <td>${weapon.defect}</td>
    <td>${weapon.area}</td>
    <td>
        <button onclick="deleteWeaponFromTable(${id})">
            <i class="fa fa-trash-o trashcan"></i>
        </button>
    </td>
</tr>`
  );

  $('table#weapons').append(newTableItem);


}

function deleteWeaponFromTable(id) {
  $(`tr#${id}`).remove();
  updateWeaponArray();
  console.log(data.weapons);
}

function updateWeaponArray() {
  data.weapons = [];
  if ($("#weapons").find('tbody tr').length == 0) {
    console.warn("Table empty!");
    return;
  }

  $("#weapons").find('tbody tr').each(
    function (index, item) {
      let itemName = $(item).find('td').eq(0).text();
      if (!itemName) {
        return;
      }
      let type = $(item).find('td').eq(1).text();
      let damage = $(item).find('td').eq(2).text();
      let currentAmmo = $(item).find('td').eq(3).text();
      let maxAmmo = $(item).find('td').eq(4).text();
      let allowedQuantity = $(item).find('td').eq(5).text();
      let range = $(item).find('td').eq(6).text();
      let defect = $(item).find('td').eq(7).text();
      let area = $(item).find('td').eq(8).text();

      let weapon = {
        name: itemName,
        type: type,
        damage: damage,
        numCurrent: currentAmmo,
        numMax: maxAmmo,
        attack: allowedQuantity,
        range: range,
        defect: defect,
        area: area
      }

      data.weapons.push(weapon);
    }
  )
}

function loadWeaponTableDataFromJSON(weapons) {
  emptyWeaponTable();

  if (!weapons) {
    console.log("Weapon argument is undefined, loading data.weapons instead");

    data.weapons.map((weapon) => {
      addWeaponToTable(weapon);
    });
  }
  else {
    weapons.map((weapon) => {
      addWeaponToTable(weapon);
    })
  }

  console.log(data.weapons);
}
function emptyWeaponTable() {
  if ($("#weapons").find('tbody tr').length == 0) {
    console.warn("Table empty!");
    return;
  }

  $("#weapons").find('tbody tr').each(
    function (index, item) {
      $(`tr#${index}`).remove();
    }
  )
}

// Dice
function calcSkillOffset(skillNumber, d20Result) {
  if (skillNumber == 10) {
    return d20Result;
  }
  const offset = (skillNumber - 10) / 2;

  return d20Result + offset;
}
function calcDice(skillNumber, d20Result) {
  let skillOffset = calcSkillOffset(skillNumber, d20Result);
  // let result = calculateD20Success(skillOffset);
  return skillOffset;
}
function rollDice(dice) {
  let [count, max] = dice.split('d')

  if (Number(count) && Number(max)) {
    count = Number(count)
    max = Number(max)

    let total = 0

    for (let i = 0; i < count; i++) {
      total += Math.floor(Math.random() * max + 1)
    }

    return total
  } else {
    return null
  }
}

// Modal
function openModal(modal) {
  const Modal = $(modal)
  Modal.css('display', 'block')
}
function closeModal(modal) {
  const Modal = $(modal)
  Modal.css('display', 'none')
}

// Attributes and Skills
function addAttribute(attribute, id) {
  const newAttribute = $(
    `<div class="attribute" id="attribute_${id}">
    <a onclick="rollAtribute('${attribute.type}', ${attribute.amount})">
      <img class="attributeDice" src="./img/dado.png" alt="Dado">
    </a>
    <h3>${attribute.type}</h3>
    <input type="text" name="appearance" value="${attribute.amount}" id="attribute_input_${id}"/>
  </div>
  `)
  $('#attributesList').append(newAttribute)
}
function addSkill(skill, id) {
  const newSkill = $(
    `<div class="skill" id="skill_${id}">
    <a onclick="rollAtribute('${skill.type}', ${skill.amount})">
      <img class="attribiteDice" src="./img/dado.png" alt="Dado">
    </a>
    <h3>${skill.type}</h3>
    <input type="text" name="appearance" value="${skill.amount}" id="skill_input_${id}"/>
  </div>
  `)
  $('#skillsList').append(newSkill)
}

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

// Manipulate Local Storage
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
      "max": lifeMax,
      "extra": {
        "isLesioned": lesion,
        "isInjured": injury,
        "isDying": dying
      }
    },
    "sanity": {
      "current": sanityCurrent,
      "max": sanityMax,
      "extra": {
        "isSlightlyInsane": slightlyInsane,
        "isInsane": insane,
      }
    },
    "mana": {
      "current": manaCurrent,
      "max": manaMax,
      "extra": {
        "isManaScarce": manaScarce,
        "noMana": noMana,
      }
    },
    "extraInfo": {
      "extraDamage": extraDamage,
      "armor": armor,
      "xp": xp,
      "level": level
    },
    "weapons": data.weapons,
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

// Manipulate JSON file
function ImportDataFromJSON() {
  function onChange(event) {
    var reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(event.target.files[0]);
  }

  function onReaderLoad(event) {
    var uploadedFile = JSON.parse(event.target.result);
    SetImportedData(uploadedFile)
  }

  document.getElementById('myFile').addEventListener('change', onChange);

}

function SetImportedData(uploadedFile) {

  document.getElementById("name").value = uploadedFile.name;
  document.getElementById("player").value = uploadedFile.player;
  document.getElementById("occupation").value = uploadedFile.occupation;
  document.getElementById("age").value = uploadedFile.age;
  document.getElementById("sex").value = uploadedFile.sex;
  document.getElementById("birthplace").value = uploadedFile.birthplace;
  document.getElementById("residence").value = uploadedFile.residence;

  function calculateBar(current, max) {
    if (current > max) {
      return 100
    } else if (current < 0) {
      return 0
    } else {
      const value = (100 / max) * current
      const string = value.toString().split('.')[0]
      const percentage = Number(string)
      return percentage
    }
  }

  // Stats
  $('.lifeBar').css('width', `${calculateBar(uploadedFile.life.current, uploadedFile.life.max)}%`)
  $('#lifeCount').text(`${uploadedFile.life.current}/${uploadedFile.life.max}`)
  $('#lifeCurrent').val(uploadedFile.life.current)
  $('#lifeMax').val(uploadedFile.life.max)

  $('.sanityBar').css(
    'width',
    `${calculateBar(uploadedFile.sanity.current, uploadedFile.sanity.max)}%`
  )
  $('#sanityCount').text(`${uploadedFile.sanity.current}/${uploadedFile.sanity.max}`)
  $('#sanityCurrent').val(uploadedFile.sanity.current)
  $('#sanityMax').val(uploadedFile.sanity.max)

  $('.manaBar').css(
    'width',
    `${calculateBar(uploadedFile.mana.current, uploadedFile.mana.max)}%`
  )
  $('#manaCount').text(`${uploadedFile.mana.current}/${uploadedFile.mana.max}`)
  $('#manaCurrent').val(uploadedFile.mana.current)
  $('#manaMax').val(uploadedFile.mana.max)

  // Checkboxes
  document.getElementById("lesion").value = uploadedFile.life.extra.isLesioned;
  document.getElementById("injury").value = uploadedFile.life.extra.isInjured;
  document.getElementById("dying").value = uploadedFile.life.extra.isDying;

  document.getElementById("manaScarce").value = uploadedFile.mana.manaScarce;
  document.getElementById("noMana").value = uploadedFile.mana.noMana;

  document.getElementById("traumatized").value = uploadedFile.sanity.extra.isSlightlyInsane;
  document.getElementById("crazed").value = uploadedFile.sanity.extra.isInsane;

  // Extra Info
  document.getElementById("damage").value = uploadedFile.extraInfo.extraDamage;
  document.getElementById("armor").value = uploadedFile.extraInfo.armor;
  document.getElementById("xp").value = uploadedFile.extraInfo.xp;
  document.getElementById("level").value = uploadedFile.extraInfo.level;

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

  loadWeaponTableDataFromJSON(uploadedFile.weapons);
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