// 🔥 วาง firebaseConfig ของคุณตรงนี้
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function sendMessage() {
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  if (!name || !message) {
    alert("กรอกให้ครบก่อน");
    return;
  }

  db.collection("messages").add({
    name: name,
    message: message,
    time: new Date()
  });

  alert("ส่งข้อความแล้ว ✅");
  document.getElementById("message").value = "";
}
