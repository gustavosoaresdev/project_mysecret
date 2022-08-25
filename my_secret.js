const $key = document.querySelector('.key');
const $code = document.querySelector('.code');
const $block = document.querySelector('.block');
const $codeInput = document.querySelector('.codeInput');

function key() {
    if ($key.value === '768847436') {
        $key.classList.add('certo');
        $key.classList.remove('efect');
        $code.removeAttribute('disabled');
        $codeInput.style.color = '#484848';
        $codeInput.style.opacity = '1';

        $block.innerHTML = `
            Digite o código certo para desvendar o meu Segredo!
        `;
    }

    else {
        $key.classList.add('errado');
        $key.classList.remove('efect');
    }
};

const numberAnonymous = ['0', '1'];

function loaderHacking() {
    const create9 = document.createElement('div');
    create9.classList.add('pos2');

    const numbersCounts = numberAnonymous.length;
    const numbersRandom = Math.floor(Math.random() * numbersCounts);

    create9.innerText = numberAnonymous[numbersRandom];

    let posX = Math.floor(Math.random() * 100);
    let posY = 0;
    create9.setAttribute(
        'style', `left: ${posX}%; top: ${posY}; transform: translateX(-${posX}%);`
    );

    document.querySelector('.main').appendChild(create9);

    const cr = colorsRandom.length;
    const cs = Math.floor(Math.random() * cr);
    create9.classList.add(colorsRandom[cs]);
}

function code() {
    if ($code.value === '432333121') {
        $code.classList.add('certo');
        $code.classList.remove('efect');

        const createSct = document.createElement('h2');
        createSct.innerText = `Eu sou o Anonymous`;
        createSct.classList.add('sct');

        document.querySelector('.main').appendChild(createSct);

        setInterval(loaderHacking, 10);
    }

    else {
        $code.classList.add('errado');
        $code.classList.remove('efect');
    }
};

function handleClickBoardKey(event) {
    if (event.keyCode === 13) {
        key();
    }
};

function handleClickBoardCode(event) {
    if (event.keyCode === 13) {
        code();
    }
}

$key.addEventListener('keyup', handleClickBoardKey);
$code.addEventListener('keyup', handleClickBoardCode);

const countsSct = ['7....', '6...', '8..', '8...', '4...', '7...', '4.', '3..', '6.'];
const colorsRandom = ['greenC', 'green'];

function loaderCounts() {
    const numbersCounts = countsSct.length;
    const numbersRandom = Math.floor(Math.random() * numbersCounts);

    const createP = document.createElement('div');
    createP.classList.add('pos');
    createP.innerText = countsSct[numbersRandom];

    let posX = Math.floor(Math.random() * 100);
    let posY = 0;
    createP.setAttribute(
        'style', `left: ${posX}%; top: ${posY}; transform: translateX(-${posX}%);`
    );

    const cr = colorsRandom.length;
    const cs = Math.floor(Math.random() * cr);

    createP.classList.add(colorsRandom[cs]);

    document.querySelector('.main').appendChild(createP);
    return createP;
}

const interval = setInterval(loaderCounts, 50);

window.onload = function () {
    interval();
};