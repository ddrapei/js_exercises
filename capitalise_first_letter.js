let string = "hello worldz";

function capitalise (str) {
    let words = str.split(' ');
    let arrayLenght = words.length;
    for (i = 0; i < arrayLenght; i ++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        let = finalString = words.join(' '); 
    }
    console.log(finalString);
}
    
capitalise(string);