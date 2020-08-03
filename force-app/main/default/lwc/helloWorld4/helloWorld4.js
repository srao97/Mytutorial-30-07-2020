import { LightningElement,track } from 'lwc';

export default class HelloWorld4 extends LightningElement {
    @track name;
    @track age;
    @track salary;

    @track show=true;

    nameChangeHandler(event){
        this.name=event.target.value;
    }
    ageChangeHandler(event){
        this.age=event.target.value;
    }
    salaryChangeHandler(event){
        this.salary=event.target.value;
    }
    saveChangeHandler(){
        this.show=false;
    }
}