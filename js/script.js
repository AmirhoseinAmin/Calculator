(() => {
    /*
    --------------------|📝 : Dark mode functionality
    */
    const btnDarkMode = document.querySelector('.dark-light');
    btnDarkMode.addEventListener('click', () => {
        const iconDarkMode = btnDarkMode.querySelector('ion-icon');
        const checkbox = btnDarkMode.querySelector('input[type="checkbox"]');
        const body = document.querySelector('body');

        if (checkbox.checked) {
            iconDarkMode.name = 'sunny-outline';
            body.classList.add('dark');
        } else {
            iconDarkMode.name = 'moon-outline';
            body.classList.remove('dark');
        }
    });

    /*
    --------------------|📝 : Turn on calculator functionality
    */
    document.querySelector('.on-off').addEventListener('click', () => {
        const mainElem = document.querySelector('main');

        if (!mainElem.querySelector('.calculator')) {
            mainElem.innerHTML = `
                <div class='calculator calculator__close'>
                    <div class='calculator__display'>
                        <span class='calculator__result'>0</span>
                    </div>
                    <div class='calculator__btns'>
                        <span class='calculator__clear'>AC</span>
                        <span class='calculator__delete'>DEL</span>
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
                        <span class='calculator__dot'>.</span>
                        <span class='calculator__negative'>+/-</span>
                        <span class='calculator__calculation'>=</span>
                    </div>
                </div>`;

            /*
            --------------------|📝 : Calculator functionality
            */
            const resultElem = document.querySelector('.calculator__result');
            let numberOne = '';
            let numberTwo = '';
            let operation = '';

            const zeroResult = () => (resultElem.textContent = 0);

            const reset = () => {
                numberOne = '';
                numberTwo = '';
                operation = '';
            };

            const calculation = () => {
                if (operation && numberTwo !== '') {
                    switch (operation) {
                        case '+':
                            resultElem.textContent = numberOne + numberTwo;
                            break;
                        case '-':
                            resultElem.textContent = numberOne - numberTwo;
                            break;
                        case '×':
                            resultElem.textContent = numberOne * numberTwo;
                            break;
                        case '÷':
                            resultElem.textContent = numberTwo === 0 ? 'Error' : numberOne / numberTwo;
                            break;
                        case '%':
                            resultElem.textContent = numberOne % numberTwo;
                            break;
                    }
                    reset();
                    numberOne = +resultElem.textContent;
                }
            };

            const updateResult = (value) => {
                if (resultElem.textContent === '0' || (operation && numberTwo === '')) {
                    resultElem.textContent = '';
                }
                resultElem.textContent += value;
                if (!operation) numberOne = +resultElem.textContent;
                else numberTwo = +resultElem.textContent;
            };

            document.querySelectorAll('.calculator__number').forEach((btn) =>
                btn.addEventListener('click', () => updateResult(btn.textContent))
            );

            document.querySelector('.calculator__negative').addEventListener('click', () => {
                if (!operation) {
                    numberOne = -numberOne;
                    resultElem.textContent = numberOne;
                } else {
                    numberTwo = -numberTwo;
                    resultElem.textContent = numberTwo;
                }
            });

            document.querySelector('.calculator__dot').addEventListener('click', () => {
                if (!resultElem.textContent.includes('.')) {
                    resultElem.textContent += '.';
                }
            });

            document.querySelectorAll('.calculator__operator').forEach((btn) =>
                btn.addEventListener('click', () => {
                    zeroResult();
                    if (numberOne && numberTwo) calculation();
                    operation = btn.textContent;
                })
            );

            document.querySelector('.calculator__calculation').addEventListener('click', calculation);

            document.querySelector('.calculator__clear').addEventListener('click', () => {
                zeroResult();
                reset();
            });

            document.querySelector('.calculator__delete').addEventListener('click', () => {
                const content = resultElem.textContent;
                if (content.length === 1 || (content.length === 2 && content.startsWith('-'))) {
                    zeroResult();
                    reset();
                } else {
                    resultElem.textContent = content.slice(0, -1);
                    if (!operation) numberOne = +resultElem.textContent;
                    else numberTwo = +resultElem.textContent;
                }
            });
        }

        document.querySelector('.calculator').classList.toggle('calculator__open');
    });
})();
