let apples: number = 5

let speed: string = 'fast'

let hasName: boolean = true

let nothingMuch: null = null

let nothing: undefined = undefined

// built in objects
let now: Date = new Date()

// Arrays
let colors: string[] = ['red', 'green', 'blue']

let numbers: number[] = [1, 2, 3]

let truths: boolean[] = [true, true, false]

// Classes
class Car {}

let car: Car = new Car()

// Object Literal
let point: { x: number; y: number } = {
	x: 10,
	y: 20,
}

// Functions
const logNumber: (i: number) => void = (i: number) => {
	console.log(i)
}

// When to use annotations
// 1) Function that returns the 'any' type

const json = '{ "X": 10, "y": 20 }'
const coordinates: { x: number; y: number } = JSON.parse(json)
console.log(coordinates)

// 2) When we declare a variable on one line and initialize it later

let words = ['red', 'green', 'blue']
let foundWord: boolean

for (let i = 0; i < words.length; i++) {
	if (words[i] === 'green') {
		foundWord = true
	}
}
