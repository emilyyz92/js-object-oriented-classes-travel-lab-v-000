const convertMonth = function (string) {
  const array = string.split(' ')
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  const filterArray = months.filter(function (word) {
    array[0] === string.slice(0, word.length)
  })
  return filterArray[0];
}

class Driver {
  constructor (name, startDate) {
    this.name = name
    this.startDate = convertMonth(startDate)
  }

  yearsExperienceFromBeginningOf (endDate) {
    return Date.parse(endDate).getFullYear() - this.startDate.getFullYear() - 1;
  }
}
