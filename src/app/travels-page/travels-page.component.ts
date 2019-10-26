import { Component, OnInit } from '@angular/core';

import { TravelsService  } from "../shared/travels.service";
@Component({
  selector: 'app-travels-page',
  templateUrl: './travels-page.component.html',
  styleUrls: ['./travels-page.component.sass']
})
export class TravelsPageComponent implements OnInit {

 constructor(private travelsService: TravelsService) { }
 submitted: boolean;
formControls = this.travelsService.form.controls;
 showSuccessMessage: boolean;
  ngOnInit() {
  }

onSubmit(){
this.submitted = true;
if(this.travelsService.form.valid){
         if(this.travelsService.form.get("$key").value == null )

this.travelsService.insertTravels(this.travelsService.form.value);
else
this.travelsService.updateTravels(this.travelsService.form.value);
this.showSuccessMessage =true;// we set the property to true
       setTimeout(()=> this.showSuccessMessage=false,3000);
this.submitted = false;
this.travelsService.form.reset();
                 // insert
         } 
         // else {
                 //update
         // }
 }
}