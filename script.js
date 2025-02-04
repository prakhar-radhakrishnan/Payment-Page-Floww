// Get all the needed elements from the HTML
const payButton = document.getElementById('pay-button'); // Button to start payment
const paymentMessage = document.getElementById('payment-message'); // Message that shows payment is in progress
const loadingSpinner = document.getElementById('loading-spinner'); // A spinner that shows loading
const paymentStatus = document.getElementById('payment-status'); // This will show if payment was successful or failed

// Set price details
const price = 1000; // Price of one item
const quantity = 1; // Number of items
const subtotal = price * quantity; // Total price before tax
const tax = subtotal * 0.18; // 18% tax on the subtotal
const total = subtotal + tax; // Final amount user has to pay

// Update the UI to show the payment details
document.getElementById('price').textContent = price.toFixed(2); // Set price with two decimal places
document.getElementById('subtotal').textContent = subtotal.toFixed(2); // Show subtotal properly formatted
document.getElementById('tax').textContent = tax.toFixed(2); // Show tax amount
document.getElementById('total').textContent = total.toFixed(2); // Display total amount

// When user clicks the pay button
payButton.addEventListener('click', () => {
  // Show payment is in progress
  paymentMessage.classList.remove('hidden'); // Show message
  loadingSpinner.classList.remove('hidden'); // Show loading spinner
  payButton.disabled = true; // Disable button to prevent multiple clicks

  // Simulate a delay like real payment processing
  setTimeout(() => {
    // Hide loading elements after payment processing time
    paymentMessage.classList.add('hidden'); // Hide message
    loadingSpinner.classList.add('hidden'); // Hide spinner

    // Randomly decide if payment is successful or failed
    const isSuccess = Math.random() > 0.5; // If random number > 0.5, payment is successful

    if (isSuccess) {
      paymentStatus.textContent = 'Payment Successful!'; // Show success message
      paymentStatus.style.color = 'green'; // Change text color to green
    } else {
      paymentStatus.textContent = 'Payment Failed. Please try again.'; // Show failure message
      paymentStatus.style.color = 'red'; // Change text color to red
    }

    // Show the payment result message
    paymentStatus.classList.remove('hidden'); // Make it visible
  }, 10000); // Wait 10 seconds before showing result
});
