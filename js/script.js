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

    /*
    --------------------|📝 : Turn on calculator functionality
    */

    document.querySelector('.on-off').addEventListener('click', function () {

        const mainElem = document.querySelector('main');

        if (mainElem.innerHTML === '') {

            mainElem.innerHTML = `
                <div class='calculator calculator__close'>
                    <div class='calculator__display'>
                        <span class='calculator__calculations'>5+2</span>
                        <span class='calculator__result'>0</span>
                    </div>

                    <div class='calculator__btns'>
                        <span class='calculator__operator'>AC</span>
                        <span class='calculator__operator'>DEL</span>
                        <span class='calculator__operator'>%</span>
                        <span class='calculator__operator'>÷</span>
                        <span class='calculator__number'>7</span>
                        <span class='calculator__number'>8</span>
                        <span class='calculator__number'>9</span>
                        <span class='calculator__operator'>×</span>
                        <span class='calculator__number'>4</span>
                        <span class='calculator__number'>5</span>
                        <span class='calculator__number'>6</span>
                        <span class='calculator__operator'>-</span>
                        <span class='calculator__number'>1</span>
                        <span class='calculator__number'>2</span>
                        <span class='calculator__number'>3</span>
                        <span class='calculator__operator'>+</span>
                        <span class='calculator__number'>0</span>
                        <span class='calculator__number'>.</span>
                        <span class='calculator__operator'>+/-</span>
                        <span class='calculator__operator'>=</span>
                    </div>
                </div>`
        }

        const calcElem = document.querySelector('.calculator');

        calcElem.classList.toggle('calculator__open');

    })

    /*
    --------------------|📝 : Calculator 
    */

})()