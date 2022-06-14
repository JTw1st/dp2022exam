import { Component, OnInit, Input, Output } from '@angular/core';
import { Danimals } from '../interfaces/danimals';
import { Service1Service } from '../services/service1.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  danimalsList:Danimals[]=[];

  constructor(private service:Service1Service) { }


  ngOnInit(): void {

  }

  getRest():void{
    this.service.getRest().subscribe(
      (rest1)=>{
        this.danimalsList=rest1._embedded.danimalses;
      }
    )
  }

  addRest(danimals:Danimals){
    this.service.postRest(danimals).subscribe(
      ()=>{
        this.getRest();
      }
    )
  }

}
