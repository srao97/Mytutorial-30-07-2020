import { LightningElement,track } from 'lwc';

export default class SimpleIntCalculator extends LightningElement {

    @track currentOutput;
    
    @track principal;
    @track rateOfInterest;
    @track noOfYears;

    principalChangeHandler(event){
        this.principal = parseInt(event.target.value);
    }
    yearChangeHandler(event){
        this.rateOfInterest = parseInt(event.target.value);
    }
    interestChangeHandler(event){
        this.noOfYears = parseInt(event.target.value);
    }
    calculateChangeHandler(){
        this.currentOutput='Simple Interest is:'+(this.principal*this.rateOfInterest*this.noOfYears)/100;
    }
}