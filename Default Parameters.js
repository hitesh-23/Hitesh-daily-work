function createDiv (height='200px', width = '200px', background = 'crimson', border = 'solid 1px black'){
    let div = document.createElement('div');
    div.style.height = height;
    div.style.width = width;
    div.style.backgroundColor = background;
    div.style.border = border;
    document.body.appendChild(div);
    return div;
}



// createDiv();


createDiv();

createDiv(undefined,undefined,background = 'crimson',undefined);



const taxApplicable = (number, taxrate = 0.25 ) => {

    taxApplicable =  number * taxrate;

}

taxApplicable(1000);
console.log(taxApplicable);

