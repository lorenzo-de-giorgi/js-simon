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
            }, 5000);
        }
        // mostro gli input
        setTimeout(function(){
            let inputNumber = document.getElementById('input-numbers-ID');
            inputNumber.classList.add('d-flex');
            document.getElementById('check').classList.remove('d-none');
        }, 5000);
    }

            // mostro il bottone per controllare le risposte
            let checkButton = document.getElementById('check');

    // funzione per controllare i numeri uguali tra le due array
    checkButton.addEventListener('click', function(){
        // prendo tutte le value degli input inseriti dall'utente
        let num1 = document.getElementById('num1').value;
        let num2 = document.getElementById('num2').value;
        let num3 = document.getElementById('num3').value;
        let num4 = document.getElementById('num4').value;
        let num5 = document.getElementById('num5').value;
        // pusho le value nell'array
        userNumArray.push(parseInt(num1), parseInt(num2), parseInt(num3), parseInt(num4), parseInt(num5));
        // stampo in console l'array aggiornata
        console.log(userNumArray);
        // confronto le due array
        let correct = 0;
        let result = document.getElementById('result');
        for (let i = 0; i < numArray.length; i++){
            if(numArray.includes(userNumArray[i])){
                correct++;
                result.innerHTML += ` ${userNumArray[i]}, i numeri scritti erano: ${numArray}`
            }
        }
        result.innerHTML = `I numeri inseriti da te sono: ${userNumArray}`;
        result.innerHTML += `, i nuemri erano: ${numArray}.`;
        result.innerHTML += ` Hai indovinato ${correct} numeri!`
    })
})
