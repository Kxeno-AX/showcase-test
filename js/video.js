/* =========================================================
   VIDEO.JS — Video gallery (placeholders)
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('videoGallery').innerHTML =
    placeholderItems(8, 'Video Piece').map(galleryTile).join('');
});