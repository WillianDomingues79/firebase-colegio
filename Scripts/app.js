// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyAJRZDxP3LxoO4EPY1z1pKVitnigUuAuBQ",
  authDomain: "colegio-af269.firebaseapp.com",
  projectId: "colegio-af269"
});

var db = firebase.firestore();

//Lê todos os dados NOME do banco todo
/*db.collection("TurmaA").get().then((snapshot)=>{
  snapshot.forEach((doc)=>{
    let aluno = doc.data();
    console.log(aluno.Nome);
    //console.log(doc.data());
  })
})*/

let docRef = db.collection("TurmaA").doc("bFOSXouLvdMPQ3NGnryh");


docRef.get().then((doc) => {//Promises
  let Aluno = doc.data();
  console.log(Aluno.Nome);
}).catch((err) => {
  
});
