/**
 * Created by Maurice on 6/4/2015.
 */

function Calculator(){
    this.result = 0;
}

Calculator.prototype.add = function(value){
    this.result += value;
};

Calculator.prototype.subtract = function(value){
    this.result -= value;
};

