class Objects {
  constructor (name, buildYear) {
    this.name = name
    this.buildYear = buildYear
  }
}

class Park extends Objects {
  constructor (name, buildYear, numOfTrees, parkArea) {
    super(name, buildYear)
    this.numOfTrees = numOfTrees
    this.parkArea = parkArea
  }

  density () {
    return this.numOfTrees / this.parkArea
  }

  parkAge () {
    return 2019 - this.buildYear
  }
}

class Street extends Objects {
  constructor (name, buildYear, streetLength, streetSize = 'normal') {
    super(name, buildYear)
    this.streetLength = streetLength
    this.streetSize = streetSize
  }
}

const parks = [
  (cityPark = new Park('City Park', 1900, 10000, 1500)),
  (fosciniPark = new Park('Foscini Park', 1885, 900, 500)),
  (vansaunPark = new Park('Vansaun Park', 1946, 10200, 1600))
]

const streets = [
  (prospect = new Street('Prospect Ave', 1900, 5)),
  (passaic = new Street('Passaic St', 1920, 10, 'big')),
  (main = new Street('Main St', 1800, 2, 'tiny')),
  (maple = new Street('Maple Hill', 1865, 3, 'small'))
]

const getTreeDensity = parkArray => {
  const treeDensity = parkArray.map(
    el => el.name + ': ' + el.density().toFixed(2)
  )
  return `Tree density's by park name: ${treeDensity.join(', ')}.`
}

const parkAges = parkArray => {
  const avgAge = parkArray.map(el => el.parkAge())
  const reducer = (acc, curr) => acc + curr
  const avg = (avgAge.reduce(reducer) / parks.length).toFixed(0)
  return `The average age of the town parks is ${avg} years.`
}

const thousandTrees = parkArray => {
  const numTrees = parkArray.filter(el => el.numOfTrees > 1000)
  const totalParks = numTrees.map(el => el.name).join(', ')
  return `${totalParks} has more than a thousand trees.`
}

const streetTotals = streetsArray => {
  const lengths = streetsArray.map(el => el.streetLength)
  const reducer = (acc, curr) => acc + curr
  const total = lengths.reduce(reducer)
  const avg = total / streets.length
  return `The total length of all streets is ${total} miles. The average length of streets is ${avg} miles.`
}

const sizeClass = streetsArray => {
  const classification = streetsArray.map(el => el.streetSize)
  const streets = streetsArray.map(el => el.name)
  const names = [...streets, ...classification]

  const allStreets = new Map()
  allStreets.set(names[0], names[4])
  allStreets.set(names[1], names[5])
  allStreets.set(names[2], names[6])
  allStreets.set(names[3], names[7])
  console.log(`Street size classes are:`)
  for (let [key, value] of allStreets.entries()) {
    if (typeof key === 'string') {
      console.log(`${key}: ${value}`)
    }
  }
}

console.log('City Report ---------------------------------- ')
console.log(getTreeDensity(parks))
console.log(parkAges(parks))
console.log(thousandTrees(parks))
console.log(streetTotals(streets))
console.log(sizeClass(streets))
console.log('End Report ---------------------------------- ')