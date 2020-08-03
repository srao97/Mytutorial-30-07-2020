import { LightningElement,track } from 'lwc';

export default class ShapeCalculator extends LightningElement {
    @track currentResult;

    width;
    height;
    side;
    diagonal1;
    diagonal2;

    squareChangeHandler(event){
        this.side=parseInt(event.target.value);
    }
    widthChangeHandler(event){
        this.width=parseInt(event.target.value);
    }
    heightChangeHandler(event){
        this.height=parseInt(event.target.value);
    }
    diagonal1ChangeHandler(event){
        this.diagonal1=parseInt(event.target.value);
    }
    diagonal2ChangeHandler(event){
        this.diagonal2=parseInt(event.target.value);
    }
    squareHandler(){
        const s = this.side;
        this.currentResult='Area of the square is :'+(s*s);
    }
    rectangleHandler(){
        const w = this.width;
        const h = this.height;
        this.currentResult='Area of the rectangle is :'+(w*h); 
    }
    RhombusHandler(){
        const d1 = this.diagonal1;
        const d2 = this.diagonal2;
        this.currentResult='Area of the rhombus is :'+(d1*d2)/2;
    }
}