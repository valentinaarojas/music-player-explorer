var modal = document.getElementById("modal-overlay");
var span = document.getElementsByClassName("close")[0];

function openModal(data) {
   document.getElementById('festivalName').innerText = festival.name;
   document.getElementById('festivalImage').src = festival.imageUrl;
   document.getElementById('festivalDates').innerText = `Dates: ${festival.dates}`;
   document.getElementById('festivalLocation').innerText = `Location: ${festival.location}`;
   document.getElementById('artistLineup').innerHTML = `<strong>Lineup:</strong> ${festival.lineup.join(', ')}`;
   modal.style.display = "block";
}

<div class="modal-overlay">
        <div class="modal-content">
            <span class="close">&times;</span>
            <img id="modal-playlist-image" src="" alt="Playlist Cover">
            <h1 id="modal-playlist-title">Playlist Title</h1>
            <p id="modal-creator-name">Creator Name</p>
            <div id="songs-list">
                <!-- songs will be dynamically inserted here -->
            </div> 
        </div>
    </div>

span.onclick = function() {
   modal.style.display = "none";
}
window.onclick = function(event) {
   if (event.target == modal) {
      modal.style.display = "none";
   }
}
