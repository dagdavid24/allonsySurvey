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

// get the data collected in firebase and print it out in html
const displayResults = () => {
  var count = 0,
    choice,
    submissions,
    choiceBox = [],
    counts;
  db.collection('submissions')
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        submissions = doc.data().answers;
        for (i = 0; i < submissions.length; i++) {
          choice = parseInt(submissions[i]);
          choiceBox.push(choice);
          count++;
        }
      });
      console.log('there are ' + count + ' total answers ');

      //   count how many times each choice occurs
      counts = {};
      choiceBox.forEach(i => {
        counts[i] = (counts[i] || 0) + 1;
      });
      console.log(counts);

      // set aria-value-now and style width attributes for each choice based on their counts
      //   also set the value in the div to the count of that choice
      let np = document.getElementById('np');
      let zh = document.getElementById('zh');
      let gh = document.getElementById('gh');
      let qe = document.getElementById('qe');
      let ge = document.getElementById('ge');
      let cw = document.getElementById('cw');
      let ce = document.getElementById('ce');
      let eg = document.getElementById('eg');
      let ii = document.getElementById('ii');
      let ri = document.getElementById('ri');
      let sc = document.getElementById('sc');
      let rc = document.getElementById('rc');
      let ca = document.getElementById('ca');
      let lbw = document.getElementById('lbw');
      let lol = document.getElementById('lol');
      let pjsi = document.getElementById('pjsi');
      let pg = document.getElementById('pg');

      let elementArray = [
        np,
        zh,
        gh,
        qe,
        ge,
        cw,
        ce,
        eg,
        ii,
        ri,
        sc,
        rc,
        ca,
        lbw,
        lol,
        pjsi,
        pg
      ];

      let number = 1;
      elementArray.forEach(elem => {
        elem.setAttribute('aria-valuenow', `${(counts[number] / count) * 100}`);
        elem.setAttribute('style', `width:${(counts[number] / count) * 100}%;`);
        elem.innerHTML = (counts[number] / count) * 100;
        number++;
      });

      let total = document.getElementById('total');
      total.innerHTML = `${count} answers submitted`;
    });
};
