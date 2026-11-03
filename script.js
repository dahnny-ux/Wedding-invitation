// Client-specific settings: update these values for each couple.
const wedding = {
  partner1: 'Jane', partner2: 'Daniel',
  dateISO: '2027-03-20T12:00:00+01:00',
  whatsappNumber: '' // e.g. 2348146163458, digits only
};
document.querySelectorAll('[data-name="partner1"]').forEach(el=>el.textContent=wedding.partner1);
document.querySelectorAll('[data-name="partner2"]').forEach(el=>el.textContent=wedding.partner2);
function tick(){const diff=Math.max(0,new Date(wedding.dateISO).getTime()-Date.now());const vals={days:Math.floor(diff/86400000),hours:Math.floor(diff%86400000/3600000),minutes:Math.floor(diff%3600000/60000),seconds:Math.floor(diff%60000/1000)};Object.entries(vals).forEach(([id,n])=>document.getElementById(id).textContent=String(n).padStart(id==='days'?3:2,'0'));}
tick();setInterval(tick,1000);
document.getElementById('rsvp-form').addEventListener('submit',e=>{e.preventDefault();if(!wedding.whatsappNumber){alert('Demo template: add the couple’s WhatsApp number in script.js before using RSVP.');return;}const f=new FormData(e.currentTarget);const msg=`RSVP for ${wedding.partner1} & ${wedding.partner2}\nName: ${f.get('name')}\nResponse: ${f.get('attendance')}\nGuests: ${f.get('guests')}`;window.open(`https://wa.me/${wedding.whatsappNumber}?text=${encodeURIComponent(msg)}`,'_blank','noopener');});
const audio=document.getElementById('audio'),music=document.getElementById('music');music.addEventListener('click',async()=>{if(audio.paused){try{await audio.play();music.querySelector('span').textContent='Pause music';}catch{alert('Add a licensed audio file at assets/music.mp3 first.')}}else{audio.pause();music.querySelector('span').textContent='Play music';}});
