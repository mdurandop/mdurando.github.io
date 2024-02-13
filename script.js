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
    let signo = document.querySelector('.signo');
    
    if (cover.style.backgroundImage === 'none') {
        cover.style.backgroundColor = '$accent';
    } else {
        cover.style.backgroundImage = 'url(app/img/galery/louis.png)';
        cover.style.backgroundColor = '$accent';
        signo.style.display = 'none';
    }
}

document.querySelector('.img').addEventListener('click', toggleImg1);


