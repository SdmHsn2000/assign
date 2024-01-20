import { Injectable} from '@angular/core'; 

@Injectable({
    providedIn:'root',
})

export class personInfos{
    id : string = '';    
    name : string = '';
    dob : string = '';
    phone : string = '';
    comments: any[] = [];
}