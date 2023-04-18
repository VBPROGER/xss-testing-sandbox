#!/usr/bin/env node
old_alert = alert
window.safeXMP = function(e){
    e.innerHTML.replace(/&lt;(?=\/xmp[> \n\r\t\f\/])/gi, '<');
    return e
}
window.alert = function(text){
    old_alert('Congratulations, you passed this level!\nAlerted text: "' + String(text) + '"\nYay!')
    document.location.href = document.location.h;
}