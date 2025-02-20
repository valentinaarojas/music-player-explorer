var modal = document.querySelector(".modal-overlay");
var span = document.querySelector(".close");

function openModal(data) {
   document.getElementById('festivalName').innerText = festival.name;
   document.getElementById('modal-playlist-image').src = festival.imageUrl;
   document.getElementById('modal-playlist-title').innerText = `Dates: ${festival.dates}`;
   document.getElementById('festivalLocation').innerText = `Location: ${festival.location}`;
   document.getElementById('artistLineup').innerHTML = `<strong>Lineup:</strong> ${festival.lineup.join(', ')}`;
   modal.style.display = "block";
}

span.onclick = function() {
   modal.style.display = "none";
}
window.onclick = function(event) {
   if (event.target == modal) {
      modal.style.display = "none";
   }
}
