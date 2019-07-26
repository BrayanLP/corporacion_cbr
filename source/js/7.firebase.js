  
  var config = {
    apiKey: "AIzaSyDm9X4XAEtGZtWi499gIlcS6GPiU_X-HiM",
    authDomain: "studious-apex-135623.firebaseapp.com",
    databaseURL: "https://studious-apex-135623.firebaseio.com",
    projectId: "studious-apex-135623",
    storageBucket: "studious-apex-135623.appspot.com",
    messagingSenderId: "130847347873"
  };
  firebase.initializeApp(config);
 
  function sendMessage(nombre, correo, celular, web) { 
    var newPostKey = firebase
    .database()
    .ref()
    .child("contactos")
    .push().key;

    var postData = {
        nombre: nombre,
        correo: correo,
        celular: celular,
        web: web,
        uid: newPostKey
    };
    
    
    
    var updates = {};
    updates["contactos/" + newPostKey] = postData;
    console.log(updates,postData); 
    return firebase
      .database()
      .ref()
      .update(updates);
  } 
        
