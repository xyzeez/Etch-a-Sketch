const board = document.querySelector('.grid');

makeBoxes = () => {
    for (let i = 0; i < 256; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        board.append(box);
    }
}
makeBoxes();

const boxes = document.querySelectorAll('.box');
boxes.forEach(box => box.addEventListener('mouseover', () => {
    box.classList.add('box-drawn');
}));