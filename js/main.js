const lib = toWordsModule();
const ENTER = 13;

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    let input = document.getElementById('amount');
    let error = document.getElementById('err');
    let result = document.getElementById('result');

    input.addEventListener('keydown', (e) => {
        if (e.keyCode === ENTER) {
            try {
                const data = lib.convert(+input.value);

                result.innerHTML = data;
                error.innerHTML = '';
            } catch (err) {
                error.innerHTML = err;
                data.innerHTML = '';
            }
        }
    });
});
