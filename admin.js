firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.collection("messages")
.orderBy("time","desc")
.onSnapshot(snapshot => {
  document.getElementById("list").innerHTML = "";
  snapshot.forEach(doc => {
    const d = doc.data();
    document.getElementById("list").innerHTML += `
      <div style="border:1px solid #ccc;padding:10px;margin:10px">
        <b>${d.name}</b><br>
        ${d.message}
      </div>
    `;
  });
});
