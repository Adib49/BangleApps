g.clear();
Bangle.loadWidgets();
Bangle.drawWidgets();

const { SETTINGS_FILE, saveSettings, loadSettings } = require("settings.js");
const mainMenu = {
  "": { "title": "-- Menu --" },
  "option1": () => { Bangle.showAlert("Hello"); },
  "option2": () => {
    Bangle.prompt("Enter your desired distance and time (in minutes)", "100 30").then(result => {
      const [distance, time] = result.split(" ").map(parseFloat);
      if (!isNaN(distance) && !isNaN(time)) {
        const timeNeeded = calculateTimeNeeded(distance); // Implement your own function to calculate time needed based on distance
        if (time >= timeNeeded && time <= timeNeeded + 10) {
          Bangle.showAlert("You're good to go!");
        } else if (time > timeNeeded + 10) {
          buzzForOneMinute();
        } else {
          Bangle.showAlert("You need more time!");
        }
      } else {
        Bangle.showAlert("Invalid input. Please enter numbers.");
      }
    });
  }
};

function calculateTimeNeeded(distance) {
  // Implement your own function to calculate time needed based on distance
  // You can use a formula or any other method depending on your use case
  return distance / 10; // This is just a placeholder example
}

function buzzForOneMinute() {
  Bangle.buzz();
  setTimeout(() => Bangle.buzz(0), 60000); // Buzz for 1 minute (60000 ms)
}

function saveSettings() {
  require("Storage").write(SETTINGS_FILE, JSON.stringify(settings));
}

function loadSettings() {
  let settings;
  try {
    settings = require("Storage").readJSON(SETTINGS_FILE);
  } catch (e) {
    settings = {};
  }
  return settings;
}

let settings = loadSettings();
Bangle.setUI("updown", mainMenu);


function calculateTimeNeeded(distance) {
  // Implement your own function to calculate time needed based on distance
  // You can use a formula or any other method depending on your use case
  return distance / 10; // This is just a placeholder example
}

function buzzForOneMinute() {
  Bangle.buzz();
  setTimeout(() => Bangle.buzz(0), 60000); // Buzz for 1 minute (60000 ms)
}

Bangle.setUI("updown", mainMenu);
