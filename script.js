


function startGame(e) {
    let num_boxes = Number(prompt(" Enter number of grid squares (A * A) "));
    if (!num_boxes) return console.log("Wrong input"); // type check HERE
    console.log(num_boxes);
    // if (Object.is(document.querySelector('#box-array').firstElementChild, null)) return console.log('no child');
    let boxArray = document.querySelector('#box-array');
    if (!(boxArray.hasChildNodes())) { console.log('no child'); }
    else {
        while (boxArray) {
            if (boxArray.firstElementChild) { boxArray.firstElementChild.remove(); }
            else break;
        }
    }

    for (let i = 0; i < num_boxes; i++) {
        let row = document.createElement('div')
        row.id = 'row';
        for (let j = 0; j < num_boxes; j++) {
            let cell = document.createElement('div');
            cell.id = 'cell';
            // console.log(cell);
            row.appendChild(cell);
        }
        let row_sel = document.querySelector('#box-array');
        console.log(row_sel);
        row_sel.appendChild(row);

    }

}


let startButton = document.querySelector('#header-btn');
startButton.addEventListener('click', startGame);

