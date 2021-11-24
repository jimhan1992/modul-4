function fibonacci(){
    let a:number = 0;
    let b:number = 1;
    let sum = 0;
    for(let i=0 ; i<30 ; i++){
        let c:number = a + b;
        a = b;
        b = c;
        sum += c;
        console.log(`30 so fibonacci dau tien la : ${c}`);
    }
    console.log(`Tong 30 so fibonacci dau tien la : ${sum}`);
}
fibonacci();