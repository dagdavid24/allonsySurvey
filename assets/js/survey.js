// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBm51T_j1LTylgcAIFncC9A1O_AP95zHd8',
  authDomain: 'devsurvey-f52a3.firebaseapp.com',
  databaseURL: 'https://devsurvey-f52a3.firebaseio.com',
  projectId: 'devsurvey-f52a3',
  storageBucket: 'devsurvey-f52a3.appspot.com',
  messagingSenderId: '481359756150'
};
firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

// get current year for the copyright
$('#year').text(new Date().getFullYear());

let gender, age, firstName, lastName, city, country, userId;
let answers = [];

// Submit answers to firebase
const submitBI = () => {
  // Get the input values
  age = $('#age')
    .val()
    .trim();
  firstName = $('#firstName')
    .val()
    .trim();
  lastName = $('#lastName')
    .val()
    .trim();
  city = $('#city')
    .val()
    .trim();
  country = $('#country')
    .val()
    .trim();
  gender = $('#gender')
    .val()
    .trim();

  console.log(age, firstName, lastName, city, country, gender);

  // store them to firebase
  db.collection('submissions')
    .add({
      firstName: firstName,
      lastName: lastName,
      age: age,
      city: city,
      country: country,
      gender: gender,
      answers
    })
    .then(docRef => {
      userId = docRef.id;
      console.log('Document written with ID: ', userId);
    })
    .catch(error => {
      console.error('Error adding document: ', error);
    });
};

// get checked items and save them in database
const submitGR = () => {
  $('input[type=checkbox]:checked').each(function() {
    answers.push(
      $(this)
        .val()
        .trim()
    );
  });

  console.log(answers);

  var surveyRef = db.collection('submissions').doc(userId);

  // update answers field with the values collected from the survey
  return surveyRef
    .update({
      answers: answers
    })
    .then(function() {
      console.log('Document successfully updated!');
    })
    .catch(function(error) {
      // The document probably doesn't exist.
      console.error('Error updating document: ', error);
    });
};

// prevent default
$('#basic_info').submit(function(e) {
  e.preventDefault();
});

$('#goal_ranking').submit(function(e) {
  e.preventDefault();
});

// switcing to step 2
//switching from basic info to goal ranking
$(() => {
  $('#submit').on('click', e => {
    $('html, body').animate(
      {
        scrollTop: 0
      },
      300,
      () => {
        $('#goal-ranking-tab').tab('show');
      }
    );
  });
});

// ensuring only 5 goals are selected
$('input[type=checkbox]').change(() => {
  if ($('input[type=checkbox]:checked').length > 5) {
    $(this).prop('checked', false);
    alert('Choose only 5');
  }
});
