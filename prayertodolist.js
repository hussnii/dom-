
const username=window.prompt("ASSEALMUALEYKUM WEREHMETULUAHI WEBEREKATUHU PLEASE ENTER YOUR NAME:")
alert(`welcome to this simple prayer to do list website ${username}!`)
let fardselatTasks = [
  { id: 1, name: "Fajr", completed: false },
  { id: 2, name: "Dhuhr", completed: true },
  { id: 3, name: "Asr", completed: false },
  { id: 4, name: "Magrib", completed: true },
  { id: 5, name: "Isha", completed: false }
];
let sunnahselatTasks = [
  { id: 1, name: "Fajr sunnah", completed: true },
  { id: 2, name: "Dhuhr sunnah", completed: false },
  { id: 3, name: "Asr sunnah", completed: true },
  { id: 4, name: "Maghrib sunnah", completed: false },
  { id: 5, name: "Isha sunnah", completed: true }
];
let zikirTasks = [
  { id: 1, name: "morning zikir", completed: false },
  { id: 2, name: "evening zikir ", completed: true },
  { id: 3, name: "after praying zikir", completed: false },
  { id: 4, name: "special zikir", completed: true },
  { id: 5, name: "Isha", completed: false }
]
;let ramadanTasks = [
  { id: 1, name: "Fasting", completed: false },
  { id: 2, name: "read qur'an today", completed: true },
  { id: 3, name: "giving charity", completed: true },
  { id: 4, name: "terawih prayer", completed: false },
  { id: 5, name: "dua", completed: true }
];
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("tasklists");
const allBtn = document.getElementById("alltasks");
const completedBtn = document.getElementById("completedtasks");
const pendingBtn = document.getElementById("pendindtasks");
const clearBtn = document.getElementById("deletetasks");
let tasks=[];
addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") return alert("Please enter a task!");
  const task = { text, done: false };
  tasks.push(task);
  input.value = "";
  showTasks();
});
function showTasks(filter = "all") {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    if (filter === "completed" && !task.done) return;
    if (filter === "pending" && task.done) return;

    const li = document.createElement("li");
    li.className = task.done ? "completed" : "";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.onclick = () => toggleTask(index);

    const span = document.createElement("span");
    span.textContent = task.text;

    const delBtn = document.createElement("button");
    delBtn.textContent = "🗑️";
    delBtn.onclick = () => removeTask(index);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}


function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  showTasks();
}

// === Delete One Task ===
function removeTask(index) {
  tasks.splice(index, 1);
  showTasks();
}
clearBtn.addEventListener("click", () => {
  if (confirm("Clear all tasks?")) {
    tasks = [];
    showTasks();
  }
});
allBtn.addEventListener("click", () => showTasks("all"));
completedBtn.addEventListener("click", () => showTasks("completed"));
pendingBtn.addEventListener("click", () => showTasks("pending"));
showTasks();
const fajrtask=fardselatTasks[0];
const dhurtask=fardselatTasks[1];
const asrtask=fardselatTasks[2];
const maghribtask=fardselatTasks[3];
const ishatask=fardselatTasks[4];



const prayertext1=document.getElementById("prayertext1");
const prayertext2=document.getElementById("prayertext2");
const prayertext3=document.getElementById("prayertext3");
const prayertext4=document.getElementById("prayertext4");
const prayertext5=document.getElementById("prayertext5");
const fajir=document.getElementById("fajir");
const dhuhr=document.getElementById("dhuhr");
const asr=document.getElementById("asr");
const maghrib=document.getElementById("maghrib");
const isha=document.getElementById("isha");
fajir.addEventListener("change",function(){
  if(fajir.checked){ 
  prayertext1.textContent=`✅ The task fajir selat 🌅 Masha’Allah! You started your day with light — Fajr brings beauty, peace, and blessings to your face and soul!is completed. Alhamdulillah!`;
  console.log( prayertext1.textContent);
} else {
  prayertext1.textContent=`💭 Don’t miss the Fajr! The early prayer fills your day with light, beauty, and barakah — rise before the sun does!`;
  console.log( prayertext1.textContent);
}})
dhuhr.addEventListener("change",function(){
  if(dhuhr.checked){ 
  prayertext2.textContent=`☀️ Alhamdulillah! You paused your busy day to remember Allah — Dhuhr brings peace, focus, and increase in rizq!`;
  console.log( prayertext2.textContent);
} else {
  prayertext2.textContent=`💼 It’s time to take a short break and pray Dhuhr — your work will have more blessing and peace afterward!`;
  console.log( prayertext2.textContent);
}})
asr.addEventListener("change",function(){
  if(asr.checked){ 
  prayertext3.textContent=`🌇 Masha’Allah! You protected your time and soul — Asr strengthens your focus and saves you from loss!`;
  console.log( prayertext3.textContent);
} else {
  prayertext3.textContent=`🕒 Don’t let Asr slip away — protect your day from loss and refresh your heart with this peaceful prayer.!`;
  console.log( prayertext3.textContent);
}})
maghrib.addEventListener("change",function(){
  if(maghrib.checked){ 
  prayertext4.textContent=`🌄 Alhamdulillah! You ended your day beautifully — Maghrib brings calmness, forgiveness, and family blessings!`;
  console.log( prayertext4.textContent);
} else {
  prayertext4.textContent=`🌅 The sun has set — don’t let the moment pass! Pray Maghrib and feel peace enter your heart.`;
  console.log( prayertext4.textContent);
}})
isha.addEventListener("change",function(){
  if(isha.checked){ 
  prayertext5.textContent=`🌙 Masha’Allah! You closed your day in peace — Isha gives rest to your soul and forgiveness for your sins.`;
  console.log( prayertext5.textContent);
} else {
  prayertext5.textContent=`🌌 Don’t sleep without Isha — it brings forgiveness, calm sleep, and protection from Allah all night long.`;
  console.log( prayertext5.textContent);
}})

let count=0;
increase.onclick=function(){
count++;
counter.textContent=count;
console.log(counter.textContent);
}
decrease.onclick=function(){
count--;
counter.textContent=count;
console.log(counter.textContent);
}
reset.onclick=function(){
count=0;
counter.textContent=count;
console.log(counter.textContent);}
let tecount = 0;
const tecounter = document.getElementById("tecounter");
const teincrease = document.getElementById("teincrease");
const tedecrease = document.getElementById("tedecrease");
const tereset = document.getElementById("tereset");

teincrease.onclick = function() {
  tecount++;
  tecounter.textContent = tecount;
}
tedecrease.onclick = function() {
  tecount--;
  tecounter.textContent = tecount;
}
tereset.onclick = function() {
  tecount = 0;
  tecounter.textContent = tecount;
}
// --- Sunnah Tasks Logging ---
function logSunnahTasks() {
  for (let i = 0; i < sunnahselatTasks.length; i++) {
    if (sunnahselatTasks[i].completed) {
      console.log(`✅ The task "${sunnahselatTasks[i].name}" is completed. Alhamdulillah!`);
    } else {
      console.log(`🕋 The task "${sunnahselatTasks[i].name}" is not completed yet. Try to perform it soon, Insha'Allah!`);
    }
  }
}

// --- Zikir Tasks Logging ---
function logZikirTasks() {
  for (const zikirtask of zikirTasks) {
    if (zikirtask.completed) {
      console.log(`✅ The task "${zikirtask.name}" is completed. Alhamdulillah!`);
    } else {
      console.log(`🕋 The task "${zikirtask.name}" is not completed yet.`);
    }
  }
}

// --- Ramadan Tasks Logging ---
function logRamadanTasks() {
  for (let i = 0; i < ramadanTasks.length; i++) {
    if (ramadanTasks[i].completed) {
      console.log(`✅ You are the best! "${ramadanTasks[i].name}" is completed`);
    } else {
      console.log(`🕋 Please do not miss any task. Ramadan is the best month! "${ramadanTasks[i].name}" is not completed yet.`);
    }
  }
}

// --- Call functions at page load ---
logSunnahTasks();
logZikirTasks();
logRamadanTasks();

// Optional: update logs dynamically when user marks/unmarks checkboxes
// Example for Sunnah checkbox
document.getElementById("fajirsunnah").addEventListener("change", logSunnahTasks);
document.getElementById("dhursunnah").addEventListener("change", logSunnahTasks);
document.getElementById("asrsunnah").addEventListener("change", logSunnahTasks);
document.getElementById("maghribsunnah").addEventListener("change", logSunnahTasks);
document.getElementById("ishasunnah").addEventListener("change", logSunnahTasks);

