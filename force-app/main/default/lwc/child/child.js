import { api, LightningElement } from 'lwc';

export default class Child extends LightningElement {
   @api inputText;
    textChangeHandler(event){
        this.inputText=event.target.value;
        const selectedEvent=new CustomEvent("textchange",{detail:this.inputText});

 this.dispatchEvent(selectedEvent);
    }
}