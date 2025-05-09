const generalEnquiryButton = $(".general-enquiry-btn");
const supportButton = $(".support-btn");
const consentButton = $("#consent-btn");
const queryButton = $(".radio-btn, .enquiry-text, .general-enquiry-container, .support-text, .support-container");
const radioButton = $(".radio-btn");

// General Enquiry
$(".enquiry-text").on("click", function() {
   $(generalEnquiryButton)[0].checked = true;
   $(".support-container").removeClass("green-background");
   $(".general-enquiry-container").addClass("green-background");
});

$(".general-enquiry-container").on("click", function() {
    $(generalEnquiryButton)[0].checked = true;
    $(".support-container").removeClass("green-background");
    $(".general-enquiry-container").addClass("green-background");
});

// Support Text
$(".support-text").on("click", function() {
    $(supportButton)[0].checked = true;
    $(".general-enquiry-container").removeClass("green-background");
    $(".support-container").addClass("green-background");
});

$(".support-container").on("click", function() {
    $(supportButton)[0].checked = true;
    $(".general-enquiry-container").removeClass("green-background");
    $(".support-container").addClass("green-background");
});

// Consent Text
$(".consent-text").on("click", function() {
    console.log(consentButton);
    $(consentButton)[0].checked = !consentButton[0].checked;   
});



$(document).ready(function() {
    $("#first-name").on("blur", function() {
      if ($(this).val() === "") {
        $(".first-name-error").removeClass("hide");
      } else {
        $(".first-name-error").addClass("hide");
        $(".first-name").removeClass("red-border")
      }
    });

    $("#last-name").on("blur", function() {
        if ($(this).val() === "") {
          $(".last-name-error").removeClass("hide");
        } else {
            $(".last-name-error").addClass("hide");
            $(".last-name").removeClass("red-border")
        }
      });
  
    $("#email").on("blur", function() {
      if ($(this).val() === "") {
        $(".email-error").removeClass("hide");
      } else if (!isValidEmail($(this).val())) {
        $(".email-error").text("Please enter a valid email address");
        $(".email-error").removeClass("hide");
      } else {
        $(".email-error").addClass("hide");
        $(".email").removeClass("red-border")
      }
    });

    $("#message").on("blur", function() {
        if ($(this).val() === "") {
            $(".message-input-error").removeClass("hide");
        }
        else {
            $(".message-input-error").addClass("hide");
            $(".message").removeClass("red-border");
        }
    })

    $(queryButton).on("click", function() {
      if ($(generalEnquiryButton).prop("checked") || $(supportButton).prop("checked")) {
        $(".query-error").addClass("hide");
      }
    })

    $(consentButton).on("click", function() {
      if ($(this).prop("checked")) {
        $(".consent-error").addClass("hide");
      } 
    });

    $("#my-form").submit(function(event) {
      let isValid = true;
      if ($("#first-name").val() === "") {
        $(".first-name-error").removeClass("hide");
        $(".first-name").addClass("red-border");
        isValid = false;
      }
      if ($("#last-name").val() === "") {
        $(".last-name-error").removeClass("hide");
        $(".last-name").addClass("red-border");
        isValid = false;
      }
      if ($("#email").val() === "") {
         $(".email-error").removeClass("hide");
         $(".email").addClass("red-border");
         isValid = false;
      } else if (!isValidEmail($("#email").val())) {
         $("#emailError").text("Invalid email format");
         isValid = false;
      }
      if ($("#message").val() === "") {
        $(".message-input-error").removeClass("hide");
        $(".message").addClass("red-border");
        isValid = false;
      }
      if (!generalEnquiryButton.prop("checked") && !supportButton.prop("checked")) {
        $(".query-error").removeClass("hide");
         isValid = false;
      }
      if (!consentButton.prop("checked")) {
        $(".consent-error").removeClass("hide");
         isValid = false;
      } 
      if (!isValid) {
        event.preventDefault();
      } else {
        alert("thank you");
      }

    });
  
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });