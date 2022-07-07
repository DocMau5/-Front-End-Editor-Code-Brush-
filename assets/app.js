function compile(){
    var html = document.getElementById("html");
    var css = document.getElementById("css");
    var code = document.getElementById("code").contentWindow.document;

    document.body.onkeyup = function(){
        code.open();
        code.writeln(html.value+"<style>"+css.value+"</style>")
        code.close();
    }
}
compile();


function count_up(obj) {
    document.getElementById('textcount1').innerHTML = obj.value.length;
}