const toggleCard = (atomicNo) => {
    document.getElementById(atomicNo).classList.toggle('active');
}

const sBlock = document.getElementsByClassName('s-block');
const highlightS = () => {
    for(let i=0; i<sBlock.length; i++){
        sBlock[i].classList.toggle('highlight-s');
    }
}

const pBlock = document.getElementsByClassName('p-block');
const highlightP = () => {
    for(let i=0; i<pBlock.length; i++){
        pBlock[i].classList.toggle('highlight-p');
    }
}

const dBlock = document.getElementsByClassName('d-block');
const highlightD = () => {
    for(let i=0; i<dBlock.length; i++){
        dBlock[i].classList.toggle('highlight-d');
    }
}

const fBlock = document.getElementsByClassName('f-block');
const highlightF = () => {
    for(let i=0; i<fBlock.length; i++){
        fBlock[i].classList.toggle('highlight-f');
    }
}