const TIMELINE = [
  { date: "Day 1", title: "The toddler's step's 🥥🎀", desc: "Slept with body full of butterflies ( both barely slept lol )"},
  { date: "Day 9", title: "First Vc 🎀", desc: "2 shy nibbas being awkward af hehehe"},
  { date: "Day 38", title: "cutie pookie 🙈🤭", desc: "Beginning of 'Kentaaaaa... nothing 🙈🎀'"},
  { date: "Day 53", title: "Get Used to it", desc: "Started to realise that 'LEMON/KENTA is mine?! 🙈🙈' "},
  { date: "Day 67", title: "ROBLOXXX DAY", desc: "Pookies playing romnatic ahh roblox shi 🙈🎀🤭"},
  { date: "Day 100", title: "The unexpected century of the decade✨", desc: "I really love you a lot kavi, i dont know how much 'lot' conveys to you. but i mean a LOT"}
];

const GALLERY = Array.from({length:12}, (_,i)=> ({
  src:`assets/memory_${String(i+1).padStart(2,'0')}.jpg`,
  caption:`Placeholder memory #${i+1}`,
  r: (Math.random()*8-4).toFixed(1)
}));

const CHATS = [
  { from:"Lemon", text:"Kentaaa 😝" },
  { from:"Kenta", text:"ENNA DIII 🥰🎀" },
  { from:"Lemon", text:"Nothing 🙈🥰" },
  { from:"Kenta", text:"HUHHHHH 😤😤😤" },
  { from:"Lemon", text:"hehehe 🙈" },
  { from:"Kenta", text:"Love yaaa 🤭🥰" },
  { from:"Lemon", text:"Love yaaaaaa MOREEE 🙈😝" }
];

// render timeline
document.getElementById('timeline').innerHTML = TIMELINE.map(t => `
  <div class="card">
    <div class="date">${t.date}</div>
    <h3>${t.title}</h3>
    <p>${t.desc}</p>
  </div>
`).join('');

// render gallery
document.getElementById('grid').innerHTML = GALLERY.map(g => `
  <div class="polaroid" style="--r:${g.r}">
    <img loading="lazy" src="${g.src}" alt="memory">
    <p>${g.caption}</p>
  </div>
`).join('');

// render chats
document.getElementById('chat').innerHTML = CHATS.map(m => `
  <div class="bubble ${m.from.toLowerCase()}"><b>${m.from}:</b> ${m.text}</div>
`).join('');

// lemon easter egg
const egg = document.querySelector('.lemon-egg');
const toast = document.createElement('div');
toast.className = 'toast';
toast.textContent = '🍋 You found the lemon! (Tap 5x to unlock secret message)';
document.body.appendChild(toast);
let taps = 0;
egg.addEventListener('click', () => {
  taps++;
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'), 1500);
  if(taps===5){
    alert("Kenta ❤️ Lemon — this love is citrussy and forever.");
    taps = 0;
  }
});
