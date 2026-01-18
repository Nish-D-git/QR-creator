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

  if (link.length > 1000) {
    alert("Link is too long ❌ Please use a short link (bit.ly / tinyurl) then generate QR ✅");
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
  // ✅ BEST: Download from canvas (works on mobile)
  const canvas = qrBox.querySelector("canvas");

  if (canvas) {
    const pngUrl = canvas.toDataURL("image/png");

    const a = document.createElement("a");
    a.href = pngUrl;
    a.download = "QR ~PrimeDev.png";

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    return;
  }

  // Fallback: If QR library generated image instead of canvas
  const img = qrBox.querySelector("img");
  if (!img) return;

  const a = document.createElement("a");
  a.href = img.src;
  a.download = "QR ~PrimeDev.png";

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});
