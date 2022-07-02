const whiteChicks = document.querySelector('#whiteChicks')
const paddington = document.querySelector('#paddington')
const sonic = document.querySelector('#sonic')
const blackWidow = document.querySelector('#blackWidow')
const mazeRunner = document.querySelector('#mazeRunner')
const watchmen = document.querySelector('#watchmen')
const goldenCompass = document.querySelector('#goldenCompass')
const riseGuardians = document.querySelector('#riseGuardians')
const hobbit = document.querySelector('#hobbit')
const restartBtn = document.querySelector('#restartBtn')
const title = document.querySelector('h2')

let comedy = [
	{
		title: "White Chicks",
		director: "Keenen Ivory Wayans",
		year: 2004
	},
	{
		title: "Paddington",
		director: "Paul King",
		year: 2014
	},
	{
		title: "Sonic 2",
		director: "Jeff Fowler",
		year: 2022
	}
]

let action = [
	{
		title: "Black Widow",
		director: "Cate Shortland",
		year: 2021
	},
	{
		title: "The Maze Runner",
		director: "Wes Ball",
		year: 2014
	},
	{
		title: "Watchmen",
		director: "Zack Snyder",
		year: 2009
	}
]

let fantasy = [
	{
		title: "The Golden Compass",
		director: "Chris Weitz",
		year: 2007
	},
	{
		title: "Rise of the Guardians",
		director: "Peter Ramsey",
		year: 2012
	},
	{
		title: "The Hobbit: An Unexpected Journey",
		director: "Peter Jackson",
		year: 2012
	}
]

let genre
let favMovie

function menu() {
	genre = prompt(
		"What's your favorite movie genre?\n1- Comedy 😂\n2- Action 💥\n3- Fantasy 🧙‍♂️\n4- Other 🎈"
	)

	if (genre == "1") {
		genre = 'Comedy'
		comedyMenu()
	} else if (genre == "2") {
		genre = 'Action'
		actionMenu()
	} else if (genre == "3") {
		genre = 'Fantasy'
		fantasyMenu()
	} else if (genre == "4") {
		alert(
			"Sorry but I don't like any other genre, so your survey finish here... 😐"
		)
		restartBtn.style.display = 'initial'
	} else {
		alert("Invalid option! ❌")
		menu()
	}
}

menu()

function comedyMenu() {
	favMovie = prompt(
		`Among these options what's your favorite movie?\n1- ${comedy[0].title}\n2- ${comedy[1].title}\n3- ${comedy[2].title}\n4- Other`
	)
	
	if (favMovie == '1') {
		alert(`Nice, I love ${comedy[0].title} too, but my favorite movie is ${comedy[1].title}.`)
		title.style.display = 'initial'
		whiteChicks.style.display = 'initial'
		paddington.style.display = 'initial'
		restartBtn.style.display = 'initial'
	} else if (favMovie == '2') {
		alert(`Nice, I love ${comedy[1].title} too, but my favorite movie is ${comedy[2].title}.`)
		title.style.display = 'initial'
		paddington.style.display = 'initial'
		sonic.style.display = 'initial'
		restartBtn.style.display = 'initial'
	} else if (favMovie == '3') {
		alert(`Nice, I love ${comedy[2].title} too, but my favorite movie is ${comedy[0].title}.`)
		title.style.display = 'initial'
		sonic.style.display = 'initial'
		whiteChicks.style.display = 'initial'
		restartBtn.style.display = 'initial'
	} else if (favMovie == '4') {
		other()
	} else {
		alert("Invalid option! ❌")
		comedyMenu()
	}
}

function actionMenu() {
	favMovie = prompt(
		`Among these options what's your favorite movie?\n1- ${action[0].title}\n2- ${action[1].title}\n3- ${action[2].title}\n4- Other`
	)
	
	if (favMovie == '1') {
		alert(`Nice, I love ${action[0].title} too, but my favorite movie is ${action[1].title}.`)
		title.style.display = 'initial'
		blackWidow.style.display = 'initial'
		mazeRunner.style.display = 'initial'
		restartBtn.style.display = 'initial'
	} else if (favMovie == '2') {
		alert(`Nice, I love ${action[1].title} too, but my favorite movie is ${action[2].title}.`)
		title.style.display = 'initial'
		mazeRunner.style.display = 'initial'
		watchmen.style.display = 'initial'
		restartBtn.style.display = 'initial'
	} else if (favMovie == '3') {
		alert(`Nice, I love ${action[2].title} too, but my favorite movie is ${action[0].title}.`)
		title.style.display = 'initial'
		watchmen.style.display = 'initial'
		blackWidow.style.display = 'initial'
		restartBtn.style.display = 'initial'
	} else if (favMovie == '4') {
		other()
	} else {
		alert("Invalid option! ❌")
		actionMenu()
	}
}

function fantasyMenu() {
	favMovie = prompt(
		`Among these options what's your favorite movie?\n1- ${fantasy[0].title}\n2- ${fantasy[1].title}\n3- ${fantasy[2].title}\n4- Other`
	)
	
	if (favMovie == '1') {
		alert(`Nice, I love ${fantasy[0].title} too, but my favorite movie is ${fantasy[1].title}.`)
		title.style.display = 'initial'
		goldenCompass.style.display = 'initial'
		riseGuardians.style.display = 'initial'
		restartBtn.style.display = 'initial'
	} else if (favMovie == '2') {
		alert(`Nice, I love ${fantasy[1].title} too, but my favorite movie is ${fantasy[2].title}.`)
		title.style.display = 'initial'
		riseGuardians.style.display = 'initial'
		hobbit.style.display = 'initial'
		restartBtn.style.display = 'initial'
	} else if (favMovie == '3') {
		alert(`Nice, I love ${fantasy[2].title} too, but my favorite movie is ${fantasy[0].title}.`)
		title.style.display = 'initial'
		hobbit.style.display = 'initial'
		goldenCompass.style.display = 'initial'
		restartBtn.style.display = 'initial'
	} else if (favMovie == '4') {
		other()
	} else {
		alert("Invalid option! ❌")
		fantasyMenu()
	}
}

function other() {
	favMovie = prompt(`Tell me what's your favorite ${genre} movie?`)
	
	if (favMovie == false || favMovie == null) {
		alert("You didn't type anything!😡 rrr...")
		other()
	} else {
		alert(`So your favorite ${genre} movie is ${favMovie}?? 💔 I hated! Not even 5 stars. 🙄`)
		restartBtn.style.display = 'initial'
	}
}

restartBtn.addEventListener("click", () => {
  document.location.reload(true)
})