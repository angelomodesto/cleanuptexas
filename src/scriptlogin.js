 // Run the function after the DOM is fully loaded
  window.onload = function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent the form from submitting normally
      
      const username = document.getElementById('myTextBox').value;
      const password = document.getElementById('myTextBox2').value;
      
      console.log('Username:', username);
      console.log('Password:', password);
      
      // Here you can add code to send this data to your server
      // For example, using fetch() to make an API call
    });
  };

  
