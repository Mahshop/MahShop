function toggleMenu() {
    const menuItems = document.getElementById('menuItems');
    if (menuItems.style.display === 'flex') {
        menuItems.style.display = 'none';
    } else {
        menuItems.style.display = 'flex';
    }
}function toggleMenu() {
    const menuItems = document.getElementById('menuItems');
    menuItems.classList.toggle('show'); 
}






// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()





  $(document).ready(function(){
    $('[data-toggle="popover"]').popover();
  });