/**
 * Created by Maurice on 5/14/2015.
 */


function Calculator(initial){
    this.sum = initial || 0;
}

Calculator.prototype.add = function(x){
    this.sum += (+x);
};

Calculator.prototype.subtract = function(x){
    this.sum -= (+x);
};

