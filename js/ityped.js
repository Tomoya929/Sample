import { init } from 'ityped';
 
init(`#txt-box`, {
    strings: ['Dead simple animated typing.', 'No dependencies'],
    //表示させる文字
    typeSpeed: 55, 
    backSpeed: 30, 
    startDelay: 500,
    backDelay: 500,
    loop: false,
    showCursor: true, 
    cursorChar: "|",
    onFinished: function(){}
});