$( document ).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    
    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
    });
    btn_reset.click( function() {
        close();
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");
    }
   
});

function toggleImg1() {
    let cover = document.querySelector('.img1');
    let signo = document.querySelector('.signo1');
    
    if (cover.style.backgroundImage === 'none') {
        cover.style.backgroundColor = '$accent';
    } else {
        cover.style.backgroundImage = 'url(app/img/galery/louis.png)';
        cover.style.backgroundColor = 'transparent';
        signo.style.display = 'none';
    }
}

document.querySelector('.img2').addEventListener('click', toggleImg2);

function toggleImg2() {
    let cover = document.querySelector('.img2');
    let signo = document.querySelector('.signo2');
    
    if (cover.style.backgroundImage === 'none') {
        cover.style.backgroundColor = '$accent';
    } else {
        cover.style.backgroundImage = 'url(app/img/galery/coca-cola.png)';
        cover.style.backgroundColor = 'transparent';
        signo.style.display = 'none';
    }
}

document.querySelector('.img2').addEventListener('click', toggleImg2);

function toggleImg3() {
    let cover = document.querySelector('.img3');
    let signo = document.querySelector('.signo3');
    
    if (cover.style.backgroundImage === 'none') {
        cover.style.backgroundColor = '$accent';
    } else {
        cover.style.backgroundImage = 'url(app/img/galery/girasoles.png)';
        cover.style.backgroundColor = 'transparent';
        signo.style.display = 'none';
    }
}

document.querySelector('.img3').addEventListener('click', toggleImg3);

function toggleImg4() {
    let cover = document.querySelector('.img4');
    let signo = document.querySelector('.signo4');
    
    if (cover.style.backgroundImage === 'none') {
        cover.style.backgroundColor = '$accent';
    } else {
        cover.style.backgroundImage = 'url(app/img/galery/1D.png)';
        cover.style.backgroundColor = 'transparent';
        signo.style.display = 'none';
    }
}

document.querySelector('.img4').addEventListener('click', toggleImg4);

function toggleImg5() {
    let cover = document.querySelector('.img5');
    let signo = document.querySelector('.signo5');
    
    if (cover.style.backgroundImage === 'none') {
        cover.style.backgroundColor = '$accent';
    } else {
        cover.style.backgroundImage = 'url(app/img/galery/minion.png)';
        cover.style.backgroundColor = 'transparent';
        signo.style.display = 'none';
    }
}

document.querySelector('.img5').addEventListener('click', toggleImg5);

function toggleImg6() {
    let cover = document.querySelector('.img6');
    let signo = document.querySelector('.signo6');
    
    if (cover.style.backgroundImage === 'none') {
        cover.style.backgroundColor = '$accent';
    } else {
        cover.style.backgroundImage = 'url(app/img/galery/iker.png)';
        cover.style.backgroundColor = 'transparent';
        signo.style.display = 'none';
    }
}

document.querySelector('.img6').addEventListener('click', toggleImg6);

function toggleImg7() {
    let cover = document.querySelector('.img7');
    let signo = document.querySelector('.signo7');
    
    if (cover.style.backgroundImage === 'none') {
        cover.style.backgroundColor = '$accent';
    } else {
        cover.style.backgroundImage = 'url(app/img/galery/taylor.png)';
        cover.style.backgroundColor = 'transparent';
        signo.style.display = 'none';
    }
}

document.querySelector('.img7').addEventListener('click', toggleImg7);

let counter = 1;

function no() {
    let no = document.querySelector('.no');
    
    no.style.width = '35%';
    no.style.width = `${35 - counter * 5}%`;
    counter++;
    if (counter > 7) {
        no.style.display = 'none';
    }
}

function yes() {
    document.querySelector('.respuesta').innerText = 'Sabía que dirías que sí muajaja';

}