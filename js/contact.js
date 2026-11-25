/* =========================================================
   CONTACT.JS — client-side validation + placeholder submit
   ========================================================= */
function submitContact() {
  const name = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const msg = document.getElementById('contactMsg').value.trim();
  if (!name || !email || !msg) { showToast('Please fill in all required fields.'); return; }
  showToast('Message captured — placeholder submit (no backend yet).');
  document.querySelector('.contact-form').reset();
}