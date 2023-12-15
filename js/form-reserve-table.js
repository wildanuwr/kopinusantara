window.addEventListener("load", function() {
  const form = document.getElementById('form-reseve-table');
  let inputSubmit = document.querySelector('input[type="submit"]');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    inputSubmit.value = 'process...';
    const data = new FormData(form);
    const action = 'https://script.google.com/macros/s/AKfycbw86cP-hiX6hEtATzSjZ7Ya1GuBNfZLb0ReFN3M-i-cocwb17krV5Y-3pgNVvfjEvuS/exec';
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("Thank You! Book Your Table Success!");
      form.reset();
      inputSubmit.value = 'send message';
    })
    .catch(error => {
        console.error('Error sending data:', error);
        inputSubmit.value = 'send message';
    });
  });
});
