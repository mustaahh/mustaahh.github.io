// Ganti warna teks h1
const btnWarna = document.getElementById('btn-warna');
const h1 = document.querySelector('h1');

btnWarna.addEventListener ('click', function(){
    h1.classList.toggle ('white-text');
});


// Buat Tombol Ganti Warna Random
const tWarnaRandom = document.createElement('button');
const teksButton = document.createTextNode('Backround Random');

tWarnaRandom.appendChild(teksButton);
tWarnaRandom.setAttribute('type','button');

btnWarna.after(tWarnaRandom);


// Bikin warna random
tWarnaRandom.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);

    document.body.style.backgroundColor = 'rgb( '+ r +' '+ g +' '+ b +' )';
});


// Slider Warna
const sMerah = document.querySelector('.s-merah');
const sIjo = document.querySelector('.s-ijo');
const sBiru = document.querySelector('.s-biru');

//slider merah
sMerah.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sIjo.value;
    const b = sBiru.value;

    document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
});

//slider ijo
sIjo.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sIjo.value;
    const b = sBiru.value;

    document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
});

//slider biru
sBiru.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sIjo.value;
    const b = sBiru.value;

    document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
});


// Mouse kalo gerak
const btnMouse = document.createElement('button');
const teksMouse = document.createTextNode('Mouse Gerak');

btnMouse.appendChild(teksMouse);
tWarnaRandom.after(btnMouse);

btnMouse.onclick = function(){
    document.body.addEventListener('mousemove', function(event){
        const xPos = Math.round((event.clientX / window.innerHeight) * 255);
        const yPos = Math.round((event.clientY / window.innerWidth) * 255);
    
        document.body.style.backgroundColor = 'rgb('+ xPos +', '+ yPos +', 100)'
    })    
}


// Clear
const a = document.createElement('a');
const btnClear = document.createElement('button');
const teksClear = document.createTextNode('Clear All');

btnClear.appendChild(teksClear);
a.appendChild(btnClear);
a.setAttribute('href', '');

btnMouse.after(a);



