#!/usr/bin/node
oldalert = alert
window.safeXMP = function(e){
    e.innerHTML.replace(/&lt;(?=\/xmp[> \n\r\t\f\/])/gi, '<');
    return e
}
window.alert = function(text){
    oldalert('Congratulations, you passed this level!\n\nAlerted text: ' + String(text) + '\n\nYaay!')
    document.location.href = document.location.h;
}
