// PLEASE DON'T change function name
// module.exports = function makeExchange(currency) {
function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    const H = 50;
    const Q = 25;
    const D = 10;
    const N = 5;
    const P = 1;
    let ex = {
        H: 0,
        Q: 0,
        D: 0,
        N: 0,
        P: 0
    }

    function dimension(velue, a, b){
        
    }
    if(currency<=0) return {};
    if(currency>10000) return  {error: "You are rich, my friend! We don't have so much coins for exchange"};
    else{
    ex.H = Math.floor(currency/H);
    ex.Q = Math.floor((currency-H*ex.H)/25);
    ex.D = Math.floor((currency-H*ex.H-Q*ex.Q)/10);
    ex.N = Math.floor((currency-H*ex.H-Q*ex.Q-D*ex.D)/5);
    ex.P = currency-H*ex.H-Q*ex.Q-D*ex.D-N*ex.N;
    }

    let outOb = {};

    for(key in ex){
        if(ex[key]>0)
            outOb.key=ex.key;
    }
    return outOb;

}

makeExchange(98);