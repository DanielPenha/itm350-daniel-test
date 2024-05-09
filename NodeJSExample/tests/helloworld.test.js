// Daniel Penha 08-May-2024 - Hello everyone! As I do not know what I should do as I create this file in vim, I will just save it!

// Import the functions to be tested
	const { helloWorldFunction } = require('../src/helloworld');

// Test cases

test('Test helloWorldFunction', () => {
// Test case 1: Ensure the function returns the correct string
	expect(helloWorldFunction()).toBe('Hello, World!');
	     });     
