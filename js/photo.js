/* =========================================================
   PHOTO.JS — Photography gallery (placeholders)
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('photoGallery').innerHTML =
    placeholderItems(8, 'Photo Set').map(galleryTile).join('');
});