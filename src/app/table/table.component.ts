import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { personInfos } from '../informations/personInfos';
import { Router} from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})

export class TableComponent implements OnInit {
  id:string | null='';
  ELEMENT_DATA: personInfos []= [];
  
  constructor(private apiCaller: HttpClient,public p : personInfos,private router:Router){

  }

  ngOnInit(): void{
    this.apiCaller.get('https://run.mocky.io/v3/ec762773-24bb-45ad-9360-029fd281dcc8')
    .subscribe((data : any)=>{
     data.forEach((element:any) => {
        var p= new personInfos();
        p.id=element['id'];
        p.name=element['name'];
        p.dob=element['dob'];
        p.comments=element['comments'].length;
       
        this.ELEMENT_DATA.push(p);
      });
      console.log(this.ELEMENT_DATA);
    })
  }
}
