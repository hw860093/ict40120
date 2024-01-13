//Dropdown list function
document.getElementById('menu').addEventListener('change', function () {
    const navList = document.querySelector('nav ul');
    navList.classList.toggle('show', this.checked);
});
