// Function to generate a personalized greeting message
function greetUser(name) {
  // Get the current hour
  const hour = new Date().getHours();
  let greeting;

  // Decide greeting based on the time of day
  if (hour < 12) {
    greeting = "Good morning";
  } else if (hour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  // Return the personalized message
  return `${greeting}, ${name}!`;
}

// Example usage
console.log(greetUser("Alice"));
