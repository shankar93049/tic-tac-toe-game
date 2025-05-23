let boxes = document.querySelectorAll(".box");
let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


const disableAllBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            alert(`${pos1} Wins!Congratulations`);
            disableAllBoxes();
            return;
        }
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText !== "") return;

        if (turn0) {
            box.innerText = "O";  
        } else {
            box.innerText = "X";
        }
        box.disabled = true;
        turn0 = !turn0;

        checkWinner();
    });
});

resetBtn.addEventListener("click", resetGame);
