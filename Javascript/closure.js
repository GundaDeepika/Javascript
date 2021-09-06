function show(){
    var outer = 'This is outer function'
    document.write(outer + '<br>');

    function innerFunction(){
        var innervar = 'This is innerfunction';
        document.write(innervar);
    }
    return innerFunction();
}
show();