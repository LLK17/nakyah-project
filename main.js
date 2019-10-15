window.onload=function(){
  // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyD6mpJqwoNT5stxEfpPnzeEzCl5lp6kmfM",
        authDomain: "nakyah-project.firebaseapp.com",
        databaseURL: "https://nakyah-project.firebaseio.com",
        projectId: "nakyah-project",
        storageBucket: "nakyah-project.appspot.com",
        messagingSenderId: "555000270754",
        appId: "1:555000270754:web:d3422b7f76592da197acfb",
        measurementId: "G-Z48N9MJ7HF"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();

//database shorthand
  var database = firebase.database();
  var nameRef;

document.getElementById("submit").onclick=set;

function set(){



  var name=document.getElementById('name').value;
  var gender=document.getElementById('gender').value;
  var age=document.getElementById('age').value;
  var ending=document.getElementById('ending').value;


  var repeat= 1;

    if(name=="" || gender=="" || age=="" || ending==""){
      document.getElementById('result').innerHTML=("Please fill all fields!")
    }

    else{
      if (nameRef!=name){
      database.ref('players/'+ name).set({
        name: name,
        gender: gender,
        age: age,
        ending: ending},)
        console.log("New name!");
      }

      else{
        name= nameRef + ++repeat;

        database.ref('players/' + name).set({
          name: name,
          gender: gender,
          age: age,
          ending: ending},)
          console.log("repeat!")
      }

      document.getElementById('result').innerHTML=("All good, thanks for playing!")
      }
}
}
