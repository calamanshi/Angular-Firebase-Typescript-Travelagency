import { Injectable } from '@angular/core';
import { FormControl , FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class TravelsService {

  constructor(private firebase: AngularFireDatabase) { }
  travelsList: AngularFireList<any>;
form = new FormGroup({
     $key: new FormControl(null),
     loccation: new FormControl('',Validators.required),
     country: new FormControl('',Validators.required),
     visa: new FormControl('',Validators.required),
     currency: new FormControl('',Validators.required),
     activities: new FormControl('',Validators.required)
         });
getTravels(){
                 this.travelsList = this.firebase.list('travels');
                 return this.travelsList.snapshotChanges();
         }
insertTravels(travels){
                 this.travelsList.push({
                         loccation: travels.loccation,
                         country: travels.country,
                         visa:travels.visa,
                         currency: travels.currency,
                         activities: travels.activities,
                  });
         }
         populateForm(travels){
    this.form.setValue(travels);
  }
  updateTravels(travels){
    this.travelsList.update(travels.$key,{
       loccation: travels.loccation,
        country: travels.country,
        visa: travels.visa,
        currency:travels.currency,
        activities:travels.activities
    });
  }

deleteTravels($key: string){
    this.travelsList.remove($key);
  }
}
