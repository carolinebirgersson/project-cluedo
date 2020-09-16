// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

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
    firstName: 'Elanor Peacock',
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
    color: 'white',
    description: 'Always nice and tidy',
    age: 63,
    image: 'assets/white.png',
    occupation: 'householder'
  }

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

  const rope = {
    name: 'rope',
    weight: 10
  }

  const knife = {
    name: 'knife',
    weight: 15
  }

  const candlestick = {
    name: 'candlestick',
    weight: 12
  }

  const dumbbell = {
    name: 'dumbbell',
    weight: 18
  }

  const poison = {
    name: 'poison',
    color: 'transparent'
  }

  const axe = {
    name: 'axe',
    weight: 30
  }

  const bat = {
    name: 'bat',
    weight: 22  
  }

  const trophy = {
    name: 'trophy',
    weight: 16,
    color: 'gold'
  }

  const pistol = {
    name: 'pistol',
    weight: 24,
  }


// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

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
  'diningRoom',
  'conservatory',
  'kitchen',
  'study',
  'library',
  'billiardRoom',
  'lounge',
  'ballroom',
  'hall',
  'spa',
  'livingRoom',
  'observatory',
  'theater',
  'guestHouse',
  'patio'
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

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
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

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  document.getElementById('weaponCard').style.background = mystery.weapon.color
  document.getElementById(
    'weaponName'
).innerHTML = `${mystery.weapon.name} ${mystery.weapon.weight}`
}

document.getElementById(
  'weaponCard'
  ).addEventListener('click', pickWeapon);

 const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  document.getElementById(
    'roomName'
  ).innerHTML = `${mystery.room}`
 }

 document.getElementById(
  'roomCard'
  ).addEventListener('click', pickRoom);

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.
