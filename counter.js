class Counter {
    constructor(value){
        this.value = value;
        this.initialValue = value;
    }
    increase(step = 1){
        this.value += step;
    }
    decrease(step = 1){
        this.value -= step;
    }
    reset(){
        this.value = this.initialValue;
    }
}
module.exports = Counter;