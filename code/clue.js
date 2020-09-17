// OBJECTS FOR SUSPECTS
  const mrGreen = {
    firstName: 'Jacob',
    lastName: 'Green',
    color: 'green',
    description: 'He has a lot of connections',
    age: 45,
    image: 'assets/green.png',
    occupation: 'Entrepreneur'
  }

  const professorPlum = {
    firstName: 'Victor',
    lastName: 'Plum',
    color: 'purple',
    description: 'He is a bit confused',
    age: 55,
    image: 'assets/plum.png',
    occupation: 'Proffesor'
  }

  const missScarlet = {
    firstName: 'Cassandra',
    lastName: 'Scarlet',
    color: 'red',
    description: 'She is a bit insidious',
    age: 39,  
    image: 'assets/scarlet.png',
    occupation: 'writer'
  }

  const mrsPeacock = {
    firstName: 'Elanor',
    lastName: 'Peacock',
    color: 'blue',
    description: 'She likes to take long walks',
    age: 60,
    image: 'assets/peacock.png',
    occupation: 'mistress'
  }

  const colonelMustard = {
    firstName: 'Jack',
    lastName: 'Mustard',
    color:'yellow',
    description: 'He is vain',
    age: 65,
    image: 'assets/mustard.png',
    occupation: 'colonel'
  }

  const mrsWhite = {
    firstName: 'Mrs',
    lastName: 'White',
    color: 'beige',
    description: 'Always nice and tidy',
    age: 63,
    image: 'assets/white.png',
    occupation: 'householder'
  }

// OBJECTS FOR WEAPONS
  const rope = {
    name: 'Rope',
    color: 'pink'
  }

  const knife = {
    name: 'Knife',
    color: 'brown'
  }

  const candlestick = {
    name: 'Candlestick',
    color:'lightyellow'
  }

  const dumbbell = {
    name: 'Dumbbell',
    color:'lightblue'
  }

  const poison = {
    name: 'Poison',
    color: 'lightgrey'
  }

  const axe = {
    name: 'Axe',
    color: 'lightpurple'
  }

  const bat = {
    name: 'Bat',
    color: 'lightgreen'
  }

  const trophy = {
    name: 'Trophy',
    color: 'saffron'
  }

  const pistol = {
    name: 'Pistol',
    color: 'black'
  }

  //GROUPING THE OBJECTS IN ARRAYS

const suspects = [
  mrGreen,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
  mrsWhite
]

const weapons = [
  rope,
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol
]

const rooms = [
  'Dining Room',
  'Conservatory',
  'Kitchen',
  'Study',
  'Library',
  'Billiard Room',
  'Lounge',
  'Ballroom',
  'Hall',
  'Spa',
  'Living room',
  'Observatory',
  'Theater',
  'GuestHouse',
  'Patio'
]

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
const mystery = {
  suspects,
  weapons,
  rooms:[]
}

//Killer
// This function will be invoked when you click on the killer card.
const pickKiller = () => {

  mystery.killer = randomSelector(suspects)
  killerImage.src = mystery.killer.image

  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById(
    'killerName'
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById(
    'killerCard'
    ).style.background = mystery.killer.color
  }

  document.getElementById(
    'killerCard'
    ).addEventListener('click', pickKiller);

//Weapons
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  document.getElementById('weaponCard').style.background = mystery.weapon.color
  document.getElementById(
    'weaponName'
).innerHTML = `${mystery.weapon.name}`
}

document.getElementById(
  'weaponCard'
  ).addEventListener('click', pickWeapon);

//Rooms
 const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  document.getElementById(
    'roomName'
  ).innerHTML = `${mystery.room}`
 }

 document.getElementById(
  'roomCard'
  ).addEventListener('click', pickRoom);

// Reveal the mystery
const revealMystery = (mystery) => {
  event.preventDefault();
  document.getElementById('solution').innerText = `The murder was comitted by ${missScarlet.firstName} ${missScarlet.lastName}, in the ${rooms[4]} with a ${trophy.name}.`
}
revealMystery()