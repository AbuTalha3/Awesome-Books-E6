export default function updateDateTime() {
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();
  document.getElementById('datetime').innerHTML = `${date} ${time}`;
}

// Recieve updateDateTime
setInterval(updateDateTime, 1000);