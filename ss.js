function allowDrop(ev) {
  ev.preventDefault(); // REQUIRED
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();

  let itemId = ev.dataTransfer.getData("text");
  let item = document.getElementById(itemId);

  // ✅ FIX: ensure drop always goes into zone, not inner text
  let zone = ev.target;
  if (!zone.id.includes("zone")) {
    zone = zone.closest("td");
  }

  zone.appendChild(item);

  checkReaction();
}

// 🧪 CHEMICAL REACTIONS
function checkReaction() {
  let zone1 = document.getElementById("zone1").innerText;
  let zone2 = document.getElementById("zone2").innerText;

  let result = document.getElementById("result");
  let mix = zone1 + " + " + zone2;

  if (
    mix.includes("Hydrochloric Acid") &&
    mix.includes("Sodium Hydroxide")
  ) {
    result.innerHTML = "🧪 HCl + NaOH → NaCl + H₂O (Neutralization)";
  }

  else if (
    mix.includes("Copper Sulfate") &&
    mix.includes("Sodium Hydroxide")
  ) {
    result.innerHTML = "🧪 CuSO₄ + NaOH → Cu(OH)₂↓ + Na₂SO₄ (Precipitation)";
  }

  else if (
    mix.includes("Hydrochloric Acid") &&
    mix.includes("Copper Sulfate")
  ) {
    result.innerHTML = "⚗️ No visible reaction";
  }

  else {
    result.innerHTML = "Drop chemicals into both zones to see reaction";
  }
}
