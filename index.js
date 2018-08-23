const convertMonth = function (string) {
  const words = string.split(' ')
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  return months.filter(function (word) {
    word === string.slice(0, word.length + 1)
  }
  )
}

class Driver {
  constructor (name, startDate) {
    this.name = name
    this.startDate = Date.parse(startDate)
  }

  yearsExperienceFromBeginningOf (endDate) {
    return Date.parse(endDate).getFullYear() - this.startDate.getFullYear() - 1;
  }
}
