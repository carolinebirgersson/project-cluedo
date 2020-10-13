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
  color: 'lightpurple',
  image: 'assets/axe.jpg'
  //I would have added pictures for all of the weapons if I had the time.
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

// OBJECTS FOR ROOMS  
//I would have added objects for all of the rooms if I had the time.
const library = {
  name: 'Library',
  image: 'assets/library.jpg'
}

//GROUPING THE OBJECTS IN ARRAYS
const killer = [
mrGreen,
professorPlum,
missScarlet,
mrsPeacock,
colonelMustard,
mrsWhite
]

const weapon = [
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

const room = [
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
killer: null,
weapon: null,
room: null
}

//Killer
// This function will be invoked when you click on the killer card.
const pickKiller = () => {

mystery.killer = randomSelector(killer)
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
mystery.weapon = randomSelector(weapon)
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
mystery.room = randomSelector(room)
document.getElementById(
  'roomName'
).innerHTML = `${mystery.room}`
}

document.getElementById(
'roomCard'
).addEventListener('click', pickRoom);

// Reveal the mystery
const revealMystery = () => {
document.getElementById('solutionText').innerText = `The murder was comitted by ${mystery.killer.firstName} ${mystery.killer.lastName}, with the ${mystery.weapon.name}, in the ${mystery.room}.`
}
revealMystery()



