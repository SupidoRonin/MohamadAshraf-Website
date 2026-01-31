const explanations = {
  A: "Type A: Analytical, logical, data-driven, and problem-focused.",
  B: "Type B: Organized, structured, detail-oriented, and disciplined.",
  C: "Type C: Emotional, social, empathetic, and people-focused.",
  D: "Type D: Visionary, bold, creative, and leadership-driven.",
};

// LOAD QUESTIONS
const firebaseConfig = {
  apiKey: "AIzaSyC34bHNbfgGAnOKFYxWZIE_hpX_3hzYsD4",
  authDomain: "herman-test-admin-panel.firebaseapp.com",
  projectId: "herman-test-admin-panel",
  storageBucket: "herman-test-admin-panel.firebasestorage.app",
  messagingSenderId: "1087743832660",
  appId: "1:1087743832660:web:c810ac11c701d60971f3c1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

db.ref("questions").on("value", (snapshot) => {
  const data = snapshot.val();
  if (data) {
    // We convert the Firebase object into an array and save the ID for deleting
    questions = Object.keys(data).map(key => ({
      id: key, 
      ...data[key]
    }));
  } else {
    questions = [];
  }
  
  // Refresh the Admin list automatically if the user is looking at it
  if (document.getElementById("Admin").classList.contains("Active")) {
    renderAdmin();
  }
});

let questions = []; // Starts empty, filled by Firebase below

// VARIABLES
let current = 0;
let answers = [];
let scores = { A: 0, B: 0, C: 0, D: 0 };

// ELEMENTS
const pages = document.querySelectorAll(".Page");
const qEl = document.getElementById("Question");
const typeEl = document.getElementById("Type");
const yesBtn = document.getElementById("Yes-Btn");
const noBtn = document.getElementById("No-Btn");

// Admin inputs and question list
const qText = document.getElementById("Q-Text");
const qType = document.getElementById("Q-Type");
const questionList = document.getElementById("Question-List");

// PAGE CONTROL
function showPage(id) {
  pages.forEach((p) => p.classList.remove("Active"));
  document.getElementById(id).classList.add("Active");
}

function startTest() {
  showPage("Test");
  loadQuestion();
}

function restart() {
  location.reload();
}
function goHome() {
  showPage("Home");
}

function openAdmin() {
  const modal = document.getElementById("Password-Modal");
  const idInput = document.getElementById("Admin-Id");
  const passwordInput = document.getElementById("Password-Input");
  const errorMsg = document.getElementById("Error-Message");

  modal.classList.add("Active");
  errorMsg.textContent = "";
  idInput.value = "";
  passwordInput.value = "";

  // Focus on ID input after modal opens
  setTimeout(() => idInput.focus(), 100);

  // Allow Enter key to submit from both inputs
  idInput.onkeypress = function (e) {
    if (e.key === "Enter") {
      passwordInput.focus();
    }
  };

  passwordInput.onkeypress = function (e) {
    if (e.key === "Enter") {
      verifyPassword();
    }
  };
}

function closePasswordModal() {
  const modal = document.getElementById("Password-Modal");
  modal.classList.remove("Active");
}

function verifyPassword() {
  const adminId = document.getElementById("Admin-Id").value;
  const password = document.getElementById("Password-Input").value;
  const errorMsg = document.getElementById("Error-Message");

  // Admin credentials - You can add multiple admins here
  const adminCredentials = {
    Onyx: "Nyxobs16",
    admin2: "mypass456",
    superadmin: "admin123",
  };

  // Check if ID exists and password matches
  if (adminCredentials[adminId] && adminCredentials[adminId] === password) {
    closePasswordModal();
    showPage("Admin");
    renderAdmin();
  } else if (!adminId || !password) {
    errorMsg.textContent = "Please enter both ID and password.";
  } else {
    errorMsg.textContent = "Invalid credentials! Access denied.";
    document.getElementById("Password-Input").value = "";
    document.getElementById("Password-Input").focus();
  }
}

// QUESTION LOGIC
function loadQuestion() {
  qEl.textContent = questions[current].text;
  typeEl.textContent = "Type: " + questions[current].type;

  yesBtn.classList.remove("Active");
  noBtn.classList.remove("Active");

  if (answers[current] === true) yesBtn.classList.add("Active");
  if (answers[current] === false) noBtn.classList.add("Active");

  document.getElementById("Progress-Bar").style.width =
    ((current + 1) / questions.length) * 100 + "%";
}

function answer(val) {
  const old = answers[current];
  const type = questions[current].type;

  if (old === val) return;

  if (old === true) scores[type]--;
  if (val === true) scores[type]++;

  answers[current] = val;

  yesBtn.classList.toggle("Active", val === true);
  noBtn.classList.toggle("Active", val === false);
}

function next() {
  if (current < questions.length - 1) {
    current++;
    loadQuestion();
  } else showResult();
}

function prev() {
  if (current > 0) {
    current--;
    loadQuestion();
  }
}

// RESULT + TIES
function showResult() {
  showPage("Result");

  const max = Math.max(...Object.values(scores));
  const dominantTypes = Object.keys(scores).filter((t) => scores[t] === max);

  const nav = document.getElementById("Result-Nav");
  const text = document.getElementById("Result-Text");

  nav.innerHTML = "";

  dominantTypes.forEach((type, index) => {
    const btn = document.createElement("button");
    btn.textContent = type;

    if (index === 0) {
      btn.classList.add("Active");
      text.textContent = explanations[type];
    }

    btn.onclick = () => {
      document
        .querySelectorAll(".Result-Nav button")
        .forEach((b) => b.classList.remove("Active"));

      btn.classList.add("Active");
      text.textContent = explanations[type];
    };

    nav.appendChild(btn);
  });

  // Display scores
  document.getElementById("Score-A").textContent = scores.A;
  document.getElementById("Score-B").textContent = scores.B;
  document.getElementById("Score-C").textContent = scores.C;
  document.getElementById("Score-D").textContent = scores.D;

  // drawChart(); // Chart removed
}

// ADMIN PANEL
function addQuestion() {
  const text = qText.value;
  const type = qType.value;
  if (!text) return;

  // This saves the data to the cloud
  db.ref("questions").push({
    text: text,
    type: type
  });

  qText.value = "";
}

function renderAdmin() {
  questionList.innerHTML = "";
  questions.forEach((q) => {
    const li = document.createElement("li");
    li.textContent = `[${q.type}] ${q.text}`;
    const del = document.createElement("button");
    del.textContent = "X";
    
    // This tells Firebase to delete this specific question by its ID
    del.onclick = () => {
      db.ref("questions/" + q.id).remove();
    };
    
    li.appendChild(del);
    questionList.appendChild(li);
  });
}