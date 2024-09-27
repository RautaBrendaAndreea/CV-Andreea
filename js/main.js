const typed= new Typed('.typed',{
    strings:['<i class="typedlead">Alternante développeuse web</i>'],
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 75,
    smartBackspace: true,
    shuffle: false,
    backDelay: 1500,
    loop: true,
    loopCount: Infinity,
    showCursor: true, 
    cursorChar: '|',
    contentType: 'html', 
});
$(function(){
    var header = document.getElementById('header');
    var headroom = new Headroom(header);
    headroom.init();
});