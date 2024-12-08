// Function to find matching drivers (case-insensitive)
function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
  }
  
  // Function to find drivers whose names start with the provided letters
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.startsWith(query));
  }
  
  // Function to find driver objects where the name matches the query
  function matchName(driverObjects, query) {
    return driverObjects.filter(driver => driver.name === query);
  }
  
  module.exports = { findMatching, fuzzyMatch, matchName };
  