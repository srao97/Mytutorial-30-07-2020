import { LightningElement,track } from 'lwc';

export default class SimpleCalculator1 extends LightningElement {
    @track currentResult;
    @track previousResults =[];
    @track showprevious = false;

    firstNumber;
    secondNumber;

    firstNumberHandler(event){
        this.firstNumber=parseInt(event.target.value);
    }
    secondNumberHandler(event){
        this.secondNumber=parseInt(event.target.value);
    }
    addHandler(){
        this.currentResult ='Result of add is :'+(this.firstNumber + this.secondNumber);
        this.previousResults.push(this.currentResult)
    }
    subHandler(){
        this.currentResult ='Result of subtract is :'+(this.firstNumber - this.secondNumber);
        this.previousResults.push(this.currentResult)
    }
    mulHandler(){
        this.currentResult ='Result of multiply is :'+(this.firstNumber * this.secondNumber);
        this.previousResults.push(this.currentResult)
    }
    divHandler(){
        this.currentResult ='Result of divide is :'+(this.firstNumber / this.secondNumber);
        this.previousResults.push(this.currentResult)
    }

    showPreviousHandler(event){
        this.showprevious = event.target.checked;
    }
}