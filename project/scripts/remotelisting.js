
function toggleContent() {
    var dropdown = document.getElementById("toggleDropdown");
    var toggleContent = document.getElementById("toggleContent");
    if (dropdown.value === "show") {
      toggleContent.style.display = "block";
    } else {
      toggleContent.style.display = "none";
    }
  }

  window.onload = function() {
    var radioButtons = document.querySelectorAll('input[type="radio"][name="tickOption"]');
    
    for (var i = 0; i < radioButtons.length; i++) {
      radioButtons[i].addEventListener('change', function() {
        var isChecked = false;
        for (var j = 0; j < radioButtons.length; j++) {
          if (radioButtons[j].checked) {
            isChecked = true;
            break;
          }
        }
        if (!isChecked) {
          this.checked = true;
        }
      });
    }
  };

// Function to update the preview section with form data
function updatePreview() {
  // Get form data
  var jobTitle = document.getElementById('job-title').value;
  var category = document.getElementById('toggleDropdown').value;
  var isWorldwide = document.querySelector('input[name="tickOption"]:checked').value;
  var salaryRange = document.getElementById('toggleDropdown2').value;
  var jobType = document.querySelector('input[name="tickOption1"]:checked').value;
  var applicationLink = document.getElementById('application-link').value;
  var jobDescription = document.getElementById('job-description').value;
  var companyName = document.getElementById('company-name').value;
  var companyHQ = document.getElementById('company-hq').value;
  var companyWebsite = document.getElementById('company-website').value;
  var email = document.getElementById('email').value;
  var companyDescription = document.getElementById('company-description').value;
  

 // Update the preview section
 var previewSection = document.getElementById('preview-section');
 previewSection.innerHTML = `
   <h2>Step 2-Preview</h2>
   <p><strong>Job Title:</strong> ${jobTitle} <a href="#job-title">Edit</a></p>
   <p><strong>Category:</strong> ${category} <a href="#toggleDropdown">Edit</a></p>
   <p><strong>Worldwide:</strong> ${isWorldwide} <a href="#tickOption">Edit</a></p>
   <p><strong>Salary Range:</strong> ${salaryRange} <a href="#toggleDropdown2">Edit</a></p>
   <p><strong>Job Type:</strong> ${jobType} <a href="#tickOption1">Edit</a></p>
   <p><strong>Application Link/Email:</strong> ${applicationLink} <a href="#application-link">Edit</a></p>
   <p><strong>Job Description:</strong> ${jobDescription} <a href="#job-description">Edit</a></p>
   <p><strong>Company Name:</strong> ${companyName} <a href="#company-name">Edit</a></p>
   <p><strong>Company HQ:</strong> ${companyHQ} <a href="#company-hq">Edit</a></p>
   <p><strong>Company Website:</strong> ${companyWebsite} <a href="#company-website">Edit</a></p>
   <p><strong>Email:</strong> ${email} <a href="#email">Edit</a></p>
   <p><strong>Company Description:</strong> ${companyDescription} <a href="#company-description">Edit</a></p>
 `;
}


// Add event listener to form fields to update preview on change
var formFields = document.querySelectorAll('#job-form input, #job-form select, #job-form textarea');
formFields.forEach(function(field) {
  field.addEventListener('change', updatePreview);
});


// JavaScript for mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  var mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  var navLinks = document.querySelectorAll('#main-nav a');

  mobileMenuToggle.addEventListener('click', function() {
    navLinks.forEach(function(link) {
      link.classList.toggle('show');
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const reviewCountElement = document.getElementById('reviewCount');
    const reviewForm = document.getElementById('job-form');
    let reviewCount = localStorage.getItem('reviewCount') || 0;

    if (reviewCountElement) {
        reviewCountElement.textContent = reviewCount;
    }

    if (reviewForm) {
        reviewForm.addEventListener('submit', (event) => {
            event.preventDefault(); 

            reviewCount++;
            
            localStorage.setItem('reviewCount', reviewCount);

            if (reviewCountElement) {
                reviewCountElement.textContent = reviewCount;
            }

            window.location.href = 'submission.html';
        });
    }

    const copyrightYearElement = document.getElementById('copyright-year');
    if (copyrightYearElement) {
        const currentYear = new Date().getFullYear();
        copyrightYearElement.textContent = currentYear;
    }

    const lastModifiedElement = document.getElementById('last-modified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }
});
