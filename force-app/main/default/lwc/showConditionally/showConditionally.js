import { LightningElement,track } from 'lwc';

export default class ShowConditionally extends LightningElement {
    @track displaydev;

    @track cityList = ['Jaipur','Bombay','Hyderabad','Guntur'];

    showDivHandler(event){
        this.displaydev=event.target.checked;
    }
}