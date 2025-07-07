function unlockApp() {
  const pin = document.getElementById("pinInput").value;
  const pinMsg = document.getElementById("pinMessage");
  if (pin === "1234") {
    document.getElementById("pinSection").style.display = "none";
    document.getElementById("mainApp").style.display = "block";
    pinMsg.textContent = "";
  } else {
    pinMsg.textContent = "❌ Wrong PIN!";
  }
}
function sendAlert() {
  alert("🚨 Emergency Alert Sent!");
}
document.getElementById("profileForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const blood = document.getElementById("blood").value;
  const contact = document.getElementById("contact").value;
  localStorage.setItem("userName", name);
  localStorage.setItem("userBlood", blood);
  localStorage.setItem("userContact", contact);
  document.getElementById("profileSaved").style.display = "block";
  setTimeout(() => {
    document.getElementById("profileSaved").style.display = "none";
  }, 3000);
  displayProfile();
  e.target.reset();
});
function displayProfile() {
  const name = localStorage.getItem("userName");
  const blood = localStorage.getItem("userBlood");
  const contact = localStorage.getItem("userContact");
  if (name && blood && contact) {
    document.getElementById("profileDisplay").innerHTML = `
      <strong>Full Name:</strong> ${name}<br>
      <strong>Blood Group:</strong> ${blood}<br>
      <strong>Contact:</strong> ${contact}`;
  } else {
    document.getElementById("profileDisplay").textContent = "No profile saved yet.";
  }
}
displayProfile();