// Importing required modules
const readline = require('readline');

// Creating a readline interface to read user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Display the menu options
function displayMenu() {
  E.showMessage('\n===== MENU =====');
  E.showMessage('1. Option 1');
  E.showMessage('2. Option 2');
  E.showMessage('3. Option 3');
  E.showMessage('================\n');
  rl.question('Enter your choice (1/2/3): ', handleMenuChoice);
}

// Handle user choice
function handleMenuChoice(choice) {
  switch (choice) {
    case '1':
      E.showMessage('You selected Option 1.');
      break;
    case '2':
      E.showMessage('You selected Option 2.');
      break;
    case '3':
      E.showMessage('You selected Option 3.');
      break;
    default:
      E.showMessage('Invalid choice. Please choose a valid option.');
      break;
  }

  rl.close();
}

// Start the application by displaying the menu
displayMenu();
