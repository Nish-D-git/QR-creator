const linkInput = document.getElementById("linkInput");
const generateBtn = document.getElementById("generateBtn");
const qrBox = document.getElementById("qrBox");
const downloadBtn = document.getElementById("downloadBtn");

let qrCode;

generateBtn.addEventListener("click", () => {
  const link = linkInput.value.trim();

  if (!link) {
    alert("Please enter a valid link!");
    return;
  }

  // Clear old QR
  qrBox.innerHTML = "";

  // Generate QR
  qrCode = new QRCode(qrBox, {
    text: link,
    width: 220,
    height: 220
  });

  downloadBtn.classList.remove("hidden");
});

downloadBtn.addEventListener("click", () => {
  const img = qrBox.querySelector("img");
  if (!img) return;

  const a = document.createElement("a");
  a.href = img.src;
  a.download = "qr-code.png";
  a.click();
});
