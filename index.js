const convertMonth = function (string) {
  const words = string.split(' ')
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  return months.filter(function (word) {
    words[0] === string.slice(0, word.length)
  }
  )
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
