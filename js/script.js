(() => {

    /*
    --------------------|📝 : Dark mode functionality
    */

    const btnDarkMode = document.querySelector('.dark-light');

    btnDarkMode.addEventListener('click', function (e) {

        const iconDarkMode = btnDarkMode.querySelector('ion-icon');
        const checkbox = btnDarkMode.querySelector('input[type="checkbox"]');
        const body = document.querySelector('body');

        if (checkbox.checked) {
            iconDarkMode.name = 'sunny-outline';
            body.setAttribute('class', 'dark')
        } else {
            iconDarkMode.name = 'moon-outline';
            body.removeAttribute('class')
        }

    })

})()