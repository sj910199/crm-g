 src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"


// Attach the validation logic to the form's submit event
document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('.needs-validation');
  
  // Prevent default validation on submit and apply custom validation
  form.addEventListener('submit', function(event) {
    validateForm(event);
  }, false);
});




//searchdropdown
// Filter and show matching roles as the user types
function filterUserRole() {
  const input = document.getElementById("userRoleSearch");
  const dropdown = document.getElementById("userRoleDropdown");
  const filter = input.value.toLowerCase();

  // Clear previous suggestions
  dropdown.innerHTML = "";

  // Only show dropdown if there's text input
  if (filter) {const userRoleSearch = document.getElementById('userRoleSearch');
    const userRoleDropdown = document.getElementById('userRoleDropdown');
    
    const userRoles = [
      'User Role One',
      'User Role Two',
      'User Role Three',
      'User Role Four',
      'User Role Five'
    ];
  }
    // Function to display dropdown based on search
    userRoleSearch.addEventListener('input', function() {
      const searchQuery = userRoleSearch.value.toLowerCase();
      userRoleDropdown.innerHTML = ''; // Clear existing options
      if (searchQuery) {
        const filteredRoles = userRoles.filter(role => role.toLowerCase().includes(searchQuery));
        if (filteredRoles.length > 0) {
          userRoleDropdown.style.display = 'block'; // Show the dropdown
          filteredRoles.forEach(role => {
            const div = document.createElement('div');
            div.textContent = role;
            div.addEventListener('click', () => {
              userRoleSearch.value = role;  // Set the selected role
              userRoleDropdown.style.display = 'none';  // Hide the dropdown after selection
            });
            userRoleDropdown.appendChild(div);
          });
        } else {
          userRoleDropdown.style.display = 'none';  // No matches, hide dropdown
        }
      } else {
        userRoleDropdown.style.display = 'none';  // Hide dropdown if input is empty
      }
    });
    
    // Close dropdown if clicked outside
    document.addEventListener('click', function(event) {
      if (!userRoleSearch.contains(event.target)) {
        userRoleDropdown.style.display = 'none';
      }
    })};



    ////////phone number
    document.addEventListener('DOMContentLoaded', function() {
      const phoneInput = document.getElementById('phoneInput');
    
      phoneInput.addEventListener('input', function(e) {
        let input = e.target.value.replace(/\D/g, '');  // Remove all non-digit characters
    
        // Format input based on the number of digits entered
        if (input.length > 3 && input.length <= 6) {
          input = `(${input.slice(0, 3)}) -${input.slice(3)}`;
        } else if (input.length > 6) {
          input = `(${input.slice(0, 3)}) -${input.slice(3, 6)}-${input.slice(6, 10)}`;
        }
    
        e.target.value = input;  // Update the input field with the formatted value
      });
    });




    ///Project List Page
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: '#list-example'
    })

    ///carousel
    const carousel = new bootstrap.Carousel('#carouselExampleCaptions')



    