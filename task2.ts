enum daysOfWeeks {
  monday = "MONDAY",
  tuesday = "TUESDAY",
  wednesday = "WEDNESDAY",
  thursday = "THURSDAY",
  friday = "FRIDAY",
  saturday = "SATURDAY",
  sunday = "SUNDAY",
}

function getDayOfWeek(day: daysOfWeeks): string {
  if (day === daysOfWeeks.sunday) {
    return "weekend";
  } else {
    return "weekday";
  }
  return day;
}
console.log(getDayOfWeek(daysOfWeeks.sunday));

