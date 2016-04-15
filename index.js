var profile = $('#profile')
var scope = $('#scope')
var header = $('#header')
var button = $('#butt')
var project1 = $('#project1')
var home = $('#home')
var project2 = $('#project2')
var project3 = $('#project3')
var project4 = $('#project4')
var contact = $('#contact')
var skill = $('#skill')
var intro = $('#intro')

// the function for the button clicks to hide and unhide
home.click(function(){
  $('#p1').show()
  $('#p2').hide()
  $('#p3').hide()
  $('#p4').hide()
  $('#p5').hide()
  $('#contactform').hide()
  $('#skills').hide()
})
project1.click(function(){
  $('#p1').hide()
  $('#p2').show()
  $('#p3').hide()
  $('#p4').hide()
  $('#p5').hide()
  $('#contactform').hide()
  $('#skills').hide()
})
project2.click(function(){
  $('#p1').hide()
  $('#p2').hide()
  $('#p3').show()
  $('#p4').hide()
  $('#p5').hide()
  $('#contactform').hide()
  $('#skills').hide()
})
project3.click(function(){
  $('#p1').hide()
  $('#p2').hide()
  $('#p3').hide()
  $('#p4').show()
  $('#p5').hide()
  $('#contactform').hide()
  $('#skills').hide()
})
project4.click(function(){
  $('#p1').hide()
  $('#p2').hide()
  $('#p3').hide()
  $('#p4').hide()
  $('#p5').show()
  $('#contactform').hide()
  $('#skills').hide()
})
contact.click(function(){
  $('#p1').hide()
  $('#p2').hide()
  $('#p3').hide()
  $('#p4').hide()
  $('#p5').hide()
  $('#contactform').show()
  $('#skills').hide()
})
skill.click(function(){
  $('#p1').hide()
  $('#p2').hide()
  $('#p3').hide()
  $('#p4').hide()
  $('#p5').hide()
  $('#contactform').hide()
  $('#skills').show()
})
intro.click(function(){
  $('#introdiv').animate({
    opacity: 0
  }, 5000)
})


v = document.getElementsByTagName("video")[0]
console.log(v);
  // run the video in the background and loops it
  v.addEventListener('play', function() {
    console.log(this)
    v.currentTime = 16;
  }, false);
  v.addEventListener("timeupdate", function() {
      if (v.currentTime >= 442) {
          v.currentTime = 16
      }
  }, false)

  // profile.animate({left: "60%"}, 2000).animate({left:"20%"}, 2000).animate({left: "40%"}, 2000, function(){
  //   scope.animate({opacity: 1, left: "40%"}, 2000, function(){
  //     header.css("background", "red")
  //   })
  // })
  // $(document).ready(function() {
  //     $('#contact_form').bootstrapValidator({
  //         // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
  //         feedbackIcons: {
  //             valid: 'glyphicon glyphicon-ok',
  //             invalid: 'glyphicon glyphicon-remove',
  //             validating: 'glyphicon glyphicon-refresh'
  //         },
  //         fields: {
  //             first_name: {
  //                 validators: {
  //                         stringLength: {
  //                         min: 2,
  //                     },
  //                         notEmpty: {
  //                         message: 'Please supply your first name'
  //                     }
  //                 }
  //             },
  //              last_name: {
  //                 validators: {
  //                      stringLength: {
  //                         min: 2,
  //                     },
  //                     notEmpty: {
  //                         message: 'Please supply your last name'
  //                     }
  //                 }
  //             },
  //             email: {
  //                 validators: {
  //                     notEmpty: {
  //                         message: 'Please supply your email address'
  //                     },
  //                     emailAddress: {
  //                         message: 'Please supply a valid email address'
  //                     }
  //                 }
  //             },
  //             phone: {
  //                 validators: {
  //                     notEmpty: {
  //                         message: 'Please supply your phone number'
  //                     },
  //                     phone: {
  //                         country: 'US',
  //                         message: 'Please supply a vaild phone number with area code'
  //                     }
  //                 }
  //             },
  //             address: {
  //                 validators: {
  //                      stringLength: {
  //                         min: 8,
  //                     },
  //                     notEmpty: {
  //                         message: 'Please supply your company name'
  //                     }
  //                 }
  //             },
  //             city: {
  //                 validators: {
  //                      stringLength: {
  //                         min: 4,
  //                     },
  //                     notEmpty: {
  //                         message: 'Please supply your city'
  //                     }
  //                 }
  //             },
  //             state: {
  //                 validators: {
  //                     notEmpty: {
  //                         message: 'Please select your state'
  //                     }
  //                 }
  //             },
  //             zip: {
  //                 validators: {
  //                     notEmpty: {
  //                         message: 'Please supply your zip code'
  //                     },
  //                     zipCode: {
  //                         country: 'US',
  //                         message: 'Please supply a vaild zip code'
  //                     }
  //                 }
  //             },
  //             comment: {
  //                 validators: {
  //                       stringLength: {
  //                         min: 10,
  //                         max: 200,
  //                         message:'Please enter at least 10 characters and no more than 200'
  //                     },
  //                     notEmpty: {
  //                         message: 'Please supply a description of your message to me'
  //                     }
  //                     }
  //                 }
  //             }
  //         })
  //         .on('success.form.bv', function(e) {
  //             $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
  //                 $('#contact_form').data('bootstrapValidator').resetForm();
  //
  //             // Prevent form submission
  //             e.preventDefault();
  //
  //             // Get the form instance
  //             var $form = $(e.target);
  //
  //             // Get the BootstrapValidator instance
  //             var bv = $form.data('bootstrapValidator');
  //
  //             Use Ajax to submit form data
  //             $.post($form.attr('action'), $form.serialize(), function(result) {
  //                 console.log(result);
  //             }, 'json');
  //         });
  // });
