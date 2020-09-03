import { LightningElement } from 'lwc';
import CURRENTUSERID from '@salesforce/user/Id'
export default class Ldservice2 extends LightningElement {

     recordId = CURRENTUSERID;

}