import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { personInfos } from '../informations/personInfos';

@Component({
  selector: 'app-row-info',
  templateUrl: './row-info.component.html',
  styleUrl: './row-info.component.css'
})
export class RowInfoComponent implements OnInit {

  getParamId : any;
  //Person: personInfos=new personInfos();

  constructor(private route : ActivatedRoute,private apiCaller : HttpClient,public p : personInfos) { }

  ngOnInit(): void {
    this.getParamId=this.route.snapshot.paramMap.get('id');
    this.apiCaller.get('https://run.mocky.io/v3/'+this.getParamId)
    .subscribe((data : any)=>{
      this.p = data;
      console.log('p',this.p);
    })
  }

}
