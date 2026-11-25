/* =========================================================
   AUDIO.JS — Sound design list (placeholders)
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('audioList').innerHTML =
    placeholderItems(6, 'Audio Track').map(listRow).join('');
});