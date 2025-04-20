let timer = null;
let currentSeconds = 0;
let timeStack = [];

function updateDisplay(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  document.getElementById("countdown").textContent =
    (h < 10 ? "0" + h : h) + ":" +
    (m < 10 ? "0" + m : m) + ":" +
    (s < 10 ? "0" + s : s);
}

function startTimer(fromSeconds = null) {
  if (fromSeconds !== null) {
    currentSeconds = fromSeconds;
  } else {
    const h = parseInt(document.getElementById("hours").value) || 0;
    const m = parseInt(document.getElementById("minutes").value) || 0;
    const s = parseInt(document.getElementById("seconds").value) || 0;

    currentSeconds = h * 3600 + m * 60 + s;

    if (currentSeconds <= 0) {
      alert("Please enter a valid time!");
      return;
    }
  }

  clearInterval(timer);
  document.getElementById("message").textContent = "";

  updateDisplay(currentSeconds);
  timer = setInterval(() => {
    updateDisplay(currentSeconds);

    if (currentSeconds <= 0) {
      clearInterval(timer);
      document.getElementById("message").textContent = "⏰ Time's up!";
    }

    currentSeconds--;
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
  document.getElementById("message").textContent = "⏹ Timer stopped!";
}

function pushTime() {
  if (currentSeconds > 0) {
    timeStack.push(currentSeconds);
    clearInterval(timer);
    document.getElementById("message").textContent = "🛑 Time pushed & paused";
  } else {
    alert("❌ No time to push!");
  }
}

function popTime() {
  if (timeStack.length === 0) {
    alert("❌ Stack is empty!");
    return;
  }

  const poppedSeconds = timeStack.pop();
  startTimer(poppedSeconds);
  document.getElementById("message").textContent = "▶️ Resumed from stack";
}
