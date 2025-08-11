        function formSent() {
            alert("Your message has been sent successfully!");
        }


const savedTheme = localStorage.getItem('theme');
const themeToggle = document.createElement('i');
themeToggle.style.position = 'fixed';
themeToggle.style.top = '10px';
themeToggle.style.right = '10px';
themeToggle.style.fontSize = '24px';
themeToggle.classList.add('fa', 'fa-moon-o');

if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.classList.replace('fa-moon-o', 'fa-sun-o');
}
document.body.appendChild(themeToggle);
// Change theme event and save status 
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.classList.replace('fa-moon-o' , 'fa-sun-o');
        localStorage.setItem('theme','dark')
    } else {
        themeToggle.classList.replace('fa-sun-o' , 'fa-moon-o');
        localStorage.setItem('theme','light')
    };
});

