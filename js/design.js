/* =========================================================
   DESIGN.JS — Design gallery (placeholders)
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('designGallery').innerHTML =
    placeholderItems(8, 'Design Piece').map(galleryTile).join('');
});