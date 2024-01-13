//Dropdown list function
document.getElementById('menu').addEventListener('change', function () {
  const navList = document.querySelector('nav ul');
  navList.classList.toggle('show', this.checked);
});

// Change the image source based on the selected color
function changeImage() {
    var colorSelect = document.getElementById('color');
    var image = document.getElementById('itemImg');
    var selectedColor = colorSelect.value;
    if (selectedColor === 'tan') {
      image.src = '../img/Gary Tan.jpg';
    } else if (selectedColor === 'midnight') {
      image.src = '../img/Gary Black.jpg';
    }
  }
