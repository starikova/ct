function det() {
    var stor1, stor2, ugol, opr, rad;
    stor1 = parseInt( document.getElementById("stor1").value );
    stor2 = parseInt( document.getElementById("stor2").value );
    ugol = parseInt( document.getElementById("ugol").value );
    rad = ugol*(Math.PI/180);
    opr = stor1 * stor2 * Math.sin(rad);
    document.getElementById("answer").innerHTML = "Ответ: "+String( opr );
}
