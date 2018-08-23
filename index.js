class Driver {
  constructor (name, startDate) {
    this.name = name
    this.startDate = Date.parse(startDate)
  }

  yearsExperienceFromBeginningOf (endDate) {
    return Date.parse(endDate).getFullYear() - this.startDate.getFullYear() - 1;
  }
}
