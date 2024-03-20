const buttonGenerate = document.getElementById('generate');

// creo l'evento per entrare nel bottone
buttonGenerate.addEventListener('click', function(){
    // array vuota dove salvero i numeri generati
    let numArray = [];
    // array dove salvero i numeri scritti dall' utente
    let userNumArray = [];
    // array dove salvo i numeri indovinati
    let correctNumArray = [];
    // creo la funzione per la generazione dei numeri
    function genNum(min, max){
        return Math.floor(Math.random() * (max - min + 1) ) + min;
        drawBox(numero);
        // appendo il box
    }
    // funzione che crea i box dove andranno inseriti i numeri
    function drawBox(content){
        let box = document.createElement('div');
        box.classList.add('box');
        box.innerHTML = '<span>' + content + '</span>'
        return box
    }
    //creo ciclo while per generare i 5 numeri e non farli ripetere
    while(numArray.length < 5){
        // definisco la classe dove andranno i box contenenti i numeri
        let boxNumbers = document.getElementById('numbers');
        boxNumbers.innerHTML = '';
        // genero numeri
        let num = genNum(1, 100);
        // controllo che non sia nell' array
        if(numArray.includes(num)){
            // non lo stampo perchè è gia presente
            console.log('numero gia presente');
        } else {
            // se non è presente lo stampo nell'array
            numArray.push(num)
        }
        console.log(numArray)
        // crea quanti box in abse al numero degli elementi dell array e stampa all interno i singoli elementi dell array
        for(let i = 0; i < numArray.length; i++){
            let box = drawBox(numArray[i]);
            const htmlText = boxNumbers.appendChild(box);
            setTimeout(function(){
                htmlText.classList.add('invisible');
            }, 30000);
        }
        // mostro gli input
        setTimeout(function(){
            let inputNumber = document.getElementById('input-numbers-ID');
            inputNumber.classList.add('d-flex');
        }, 30000);
    }
    

})