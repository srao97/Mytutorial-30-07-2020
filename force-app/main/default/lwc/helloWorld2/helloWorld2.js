import { LightningElement,track } from 'lwc';

export default class HelloWorld2 extends LightningElement {
    @track mainHeader = " Welcome to salesforce RAO";

    @track name;
    @track age;
    @track salary;

    nameChangeHandler(event){
        this.name=event.target.value;
    }
    ageChangeHandler(event){
        this.age=event.target.value;
    }
    salaryChangeHandler(event){
        this.salary=event.target.value;
    }
}