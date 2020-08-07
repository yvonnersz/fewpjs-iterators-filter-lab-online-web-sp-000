// Code your solution here

function findMatching(drivers, string) {
  return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers, string) {
  let firstLetters = string.length;
  drivers.filter(name => name.slice(0, string.length) === string)

  new
}
