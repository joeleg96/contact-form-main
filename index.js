const generalEnquiryButton = $(".general-enquiry-btn");
const supportButton = $(".support-btn");
const consentButton = $("#consent-btn");

// General Enquiry Button
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

// Support Button
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

// Consent Button
$(".consent-text").on("click", function() {
    console.log(consentButton);
    $(consentButton)[0].checked = !consentButton[0].checked;   
});

