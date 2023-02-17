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

data.weapons.map((weapon, index) => {
  addWeaponToTable(weapon, index)
})

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

function rollAtribute(amount) {
  console.log(this)

  diceModal.css('display', 'block')

  setTimeout(() => {
    $('.modalDice').css('transform', 'rotate(360deg)')
    $('.modalDice').css('-webkit-transform', 'rotate(360deg)')
  }, 1000)

  setTimeout(() => {
    const diceNumber = rollDice('1d20')
    const diceType = calcDice(amount, diceNumber)
    $('#diceNumber').text(diceNumber)
    $('#diceType').text(diceType)

    setTimeout(() => {
      diceModal.css('display', 'none')
      $('#diceNumber').text('')
      $('#diceType').text('')

      $('.modalDice').css('transform', 'rotate(0deg)')
      $('.modalDice').css('-webkit-transform', 'rotate(0deg)')
    }, 20000)
  }, 2000)
}

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
  const id = data.weapons.length - 1
  addWeaponToTable(weapon, id)

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

function calcDice(diceNumber, dice) {
  const f5 = Math.floor(diceNumber / 5);
  const f2 = Math.floor(diceNumber / 2);

  if (dice > 20 - f5) return 'Sucesso Extremo';
  else if (dice > 20 - f2) return 'Sucesso Bom';
  else if (dice > 20 - diceNumber) return 'Sucesso Normal';
  else if (dice == 1) return 'Desastre';
  else return 'Fracasso';
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

function openModal(modal) {
  const Modal = $(modal)
  Modal.css('display', 'block')
}

function closeModal(modal) {
  const Modal = $(modal)
  Modal.css('display', 'none')
}

function deleteWeapon(id) {
  $(`tr#${id}`).remove()
}

function addWeaponToTable(weapon, id) {
  const newWeapon = $(`
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
            <button onclick="deleteWeapon(${id})">
                <i class="fa fa-trash-o trashcan"></i>
            </button>
        </td>
    </tr>`
  )
  $('table#weapons').append(newWeapon)
}

function addSpellToTable(spell, id) {
  const newSpell = $(`
      <tr id="${id}">
        <td>${spell.name}</td>
        <td>${spell.type}</td>
        <td>${spell.description}</td>
        <td>${spell.damage}</td>
        <td>${spell.reach}</td>
        <td>${spell.mana}</td>
        <td>
            <button onclick="deleteSpell(${id})">
                <i class="fa fa-trash-o trashcan"></i>
            </button>
        </td>
    </tr>`
  )
  $('table#spells').append(newSpell)
}

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


