function fibonacci() {
    var a = 0;
    var b = 1;
    var sum = 0;
    for (var i = 0; i < 30; i++) {
        var c = a + b;
        a = b;
        b = c;
        sum += c;
        console.log("30 so fibonacci dau tien la : " + c);
    }
    console.log("Tong 30 so fibonacci dau tien la : " + sum);
}
fibonacci();
