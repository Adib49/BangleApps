// Importing required modules
const readline = require('readline');

// Creating a readline interface to read user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Display the menu options
function displayMenu() {
  console.log('\n===== MENU =====');
  console.log('1. Option 1');
  console.log('2. Option 2');
  console.log('3. Option 3');
  console.log('================\n');
  rl.question('Enter your choice (1/2/3): ', handleMenuChoice);
}

// Handle user choice
function handleMenuChoice(choice) {
  switch (choice) {
    case '1':
      console.log('You selected Option 1.');
      break;
    case '2':
      console.log('You selected Option 2.');
      break;
    case '3':
      console.log('You selected Option 3.');
      break;
    default:
      console.log('Invalid choice. Please choose a valid option.');
      break;
  }

  rl.close();
}

// Start the application by displaying the menu
displayMenu();
