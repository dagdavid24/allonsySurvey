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
      np.setAttribute('aria-valuenow', `${(counts[1] / count) * 100}`);
      np.setAttribute('style', `width:${(counts[1] / count) * 100}%;`);
      np.innerHTML = (counts[1] / count) * 100;

      let zh = document.getElementById('zh');
      zh.setAttribute('aria-valuenow', `${(counts[2] / count) * 100}`);
      zh.setAttribute('style', `width:${(counts[2] / count) * 100}%;`);
      zh.innerHTML = (counts[2] / count) * 100;

      let gh = document.getElementById('gh');
      gh.setAttribute('aria-valuenow', `${(counts[3] / count) * 100}`);
      gh.setAttribute('style', `width:${(counts[3] / count) * 100}%;`);
      gh.innerHTML = (counts[3] / count) * 100;

      let qe = document.getElementById('qe');
      qe.setAttribute('aria-valuenow', `${(counts[4] / count) * 100}`);
      qe.setAttribute('style', `width:${(counts[4] / count) * 100}%;`);
      qe.innerHTML = (counts[4] / count) * 100;

      let ge = document.getElementById('ge');
      ge.setAttribute('aria-valuenow', `${(counts[5] / count) * 100}`);
      ge.setAttribute('style', `width:${(counts[5] / count) * 100}%;`);
      ge.innerHTML = (counts[5] / count) * 100;

      let cw = document.getElementById('cw');
      cw.setAttribute('aria-valuenow', `${(counts[6] / count) * 100}`);
      cw.setAttribute('style', `width:${(counts[6] / count) * 100}%;`);
      cw.innerHTML = (counts[6] / count) * 100;

      let ce = document.getElementById('ce');
      ce.setAttribute('aria-valuenow', `${(counts[7] / count) * 100}`);
      ce.setAttribute('style', `width:${(counts[7] / count) * 100}%;`);
      ce.innerHTML = (counts[7] / count) * 100;

      let eg = document.getElementById('eg');
      eg.setAttribute('aria-valuenow', `${(counts[8] / count) * 100}`);
      eg.setAttribute('style', `width:${(counts[8] / count) * 100}%;`);
      eg.innerHTML = (counts[8] / count) * 100;

      let ii = document.getElementById('ii');
      ii.setAttribute('aria-valuenow', `${(counts[9] / count) * 100}`);
      ii.setAttribute('style', `width:${(counts[9] / count) * 100}%;`);
      ii.innerHTML = (counts[9] / count) * 100;

      let ri = document.getElementById('ri');
      ri.setAttribute('aria-valuenow', `${(counts[10] / count) * 100}`);
      ri.setAttribute('style', `width:${(counts[10] / count) * 100}%;`);
      ri.innerHTML = (counts[10] / count) * 100;

      let sc = document.getElementById('sc');
      sc.setAttribute('aria-valuenow', `${(counts[11] / count) * 100}`);
      sc.setAttribute('style', `width:${(counts[11] / count) * 100}%;`);
      sc.innerHTML = (counts[11] / count) * 100;

      let rc = document.getElementById('rc');
      rc.setAttribute('aria-valuenow', `${(counts[12] / count) * 100}`);
      rc.setAttribute('style', `width:${(counts[12] / count) * 100}%;`);
      rc.innerHTML = (counts[12] / count) * 100;

      let ca = document.getElementById('ca');
      ca.setAttribute('aria-valuenow', `${(counts[13] / count) * 100}`);
      ca.setAttribute('style', `width:${(counts[13] / count) * 100}%;`);
      ca.innerHTML = (counts[13] / count) * 100;

      let lbw = document.getElementById('lbw');
      lbw.setAttribute('aria-valuenow', `${(counts[14] / count) * 100}`);
      lbw.setAttribute('style', `width:${(counts[14] / count) * 100}%;`);
      lbw.innerHTML = (counts[14] / count) * 100;

      let lol = document.getElementById('lol');
      lol.setAttribute('aria-valuenow', `${(counts[15] / count) * 100}`);
      lol.setAttribute('style', `width:${(counts[15] / count) * 100}%;`);
      lol.innerHTML = (counts[15] / count) * 100;

      let pjsi = document.getElementById('pjsi');
      pjsi.setAttribute('aria-valuenow', `${(counts[16] / count) * 100}`);
      pjsi.setAttribute('style', `width:${(counts[16] / count) * 100}%;`);
      pjsi.innerHTML = (counts[16] / count) * 100;

      let pg = document.getElementById('pg');
      pg.setAttribute('aria-valuenow', `${(counts[17] / count) * 100}`);
      pg.setAttribute('style', `width:${(counts[17] / count) * 100}%;`);
      pg.innerHTML = (counts[17] / count) * 100;

      let total = document.getElementById('total');
      total.innerHTML = `${count} answers submitted`;
    });
};
