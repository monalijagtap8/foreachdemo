import { api, LightningElement } from 'lwc';

export default class Parent extends LightningElement {
    @api childText;
    childTextHandler(event){
        this.childText=event.detail;
    }
}