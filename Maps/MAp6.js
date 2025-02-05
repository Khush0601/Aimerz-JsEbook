// Write a program to identify events that are happening on the current date.




const events = [
  { name: "Music Festival", date: "2024-12-24", lat: 40.7128, lng: -74.0060 },
  { name: "Art Exhibition", date: "2024-12-23", lat: 34.0522, lng: -118.2437 },
  { name: "Tech Meetup", date: "2024-12-24", lat: 37.7749, lng: -122.4194 },
];


function findEventsHappeningToday(events) {

      let filerEvents=events.filter((el)=>el.date===new Date())
      return filerEvents

}

// Call the function and log the result
const todayEvents = findEventsHappeningToday(events);
console.log("Events happening today:", todayEvents);