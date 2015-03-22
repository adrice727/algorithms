
/* A store is open from 9-5, Monday through Friday. All employees work full
 * shifts.  The number of shifts required per day varies from week to week. Find
 * the schedule(s) which require the least number of employees to work for the
 * given week.
 *
 * Employee availability will be passed as an array of objects.
 * Each object will have a name property, and properties for each day of the week
 * which indicate whether or not the employee is available to work on that day.
 * ex: { name: 'John', Monday: 1, Tuesday: 0, Wednesday: 1, Thursday: 1, Friday: 0}
 */


// Current version works, but is way too expensive(memory)
function findOptimalSchedule(employees, shiftsPerDay) {

  var schedules = [];

  function buildSchedule(availableEmployees, schedule) {

    availableEmployees = availableEmployees || employees;
    schedule = schedule || newSchedule(shiftsPerDay);

    var coveredDays = 0;
    for ( var day in schedule ){
      if ( schedule[day].count === shiftsPerDay ) {
        coveredDays++;
        if ( coveredDays === 5 ){
          schedules.push(schedule);
          return;
        }
      }
    }

    for ( var i = 0; i < availableEmployees.length; i++ ) {
      var currentEmployee = availableEmployees[i];
      for ( var day in currentEmployee ) {
        if ( day === 'name' ) { continue; }
        if ( currentEmployee[day] && ( schedule[day].count < shiftsPerDay ) ) {
          schedule[day].count++;
          schedule[day].employees.push(currentEmployee.name);
        }
      }
      buildSchedule(employees.slice(i+1), schedule);
    }
  }

  buildSchedule();

  return schedules;
};

function newSchedule(shiftsPerDay) {

 var schedule = {
   requiredShifts : shiftsPerDay,
   Monday       : {count: 0, employees: []},
   Tuesday      : {count: 0, employees: []},
   Wednesday    : {count: 0, employees: []},
   Thursday     : {count: 0, employees: []},
   Friday       : {count: 0, employees: []}
 };

 return schedule;

}

var employees = [];

employees.push({name: 'John', Monday: 1, Tuesday:1, Wednesday: 0, Thursday: 0, Friday: 1});
employees.push({name: 'Wendy', Monday: 0, Tuesday:0, Wednesday: 1, Thursday: 1, Friday: 1});
employees.push({name: 'Stan', Monday: 1, Tuesday:1, Wednesday: 1, Thursday: 1, Friday: 0});

var shiftsPerDay = ( Math.random() * 3) + 1 | 0;
findOptimalSchedule(employees, shiftsPerDay);
