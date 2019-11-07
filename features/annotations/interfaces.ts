interface Reportable {
	summary(): string
}

const oldCivic = {
	name: 'civic',
	year: 2000,
	broken: true,
	summary(): string {
		return `Name: ${this.name}`
	},
}

const drank = {
	color: 'brown',
	sugar: 40,
	summary(): string {
		return `Sugar: ${this.sugar}`
	},
}

const printSummary = (item: Reportable): void => {
	console.log(item.summary())
}

printSummary(oldCivic)
printSummary(drank)
