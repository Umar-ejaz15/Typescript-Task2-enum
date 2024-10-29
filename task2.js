"use strict";
var daysOfWeeks;
(function (daysOfWeeks) {
    daysOfWeeks["monday"] = "MONDAY";
    daysOfWeeks["tuesday"] = "TUESDAY";
    daysOfWeeks["wednesday"] = "WEDNESDAY";
    daysOfWeeks["thursday"] = "THURSDAY";
    daysOfWeeks["friday"] = "FRIDAY";
    daysOfWeeks["saturday"] = "SATURDAY";
    daysOfWeeks["sunday"] = "SUNDAY";
})(daysOfWeeks || (daysOfWeeks = {}));
function getDayOfWeek(day) {
    if (day === daysOfWeeks.sunday) {
        return "weekend";
    }
    else {
        return "weekday";
    }
    return day;
}
console.log(getDayOfWeek(daysOfWeeks.saturday));
