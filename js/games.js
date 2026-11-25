/* =========================================================
   GAMES.JS — Game dev list (placeholders)
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('gamesList').innerHTML =
    placeholderItems(6, 'Game Project').map(listRow).join('');
});