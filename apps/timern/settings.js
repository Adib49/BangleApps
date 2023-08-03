const SETTINGS_FILE = "mysettings.json";

function saveSettings(settings) {
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

module.exports = {
  SETTINGS_FILE,
  saveSettings,
  loadSettings,
};
