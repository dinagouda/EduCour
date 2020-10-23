import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IItem } from '../interfaces/IItem';


@Injectable({
  providedIn: 'root'
})
export class TestService {


  constructor(private http: HttpClient){}

items :IItem[]
myitems :IItem
getAll (){
var url = `https://localhost:5001/api/Users/GetUser`;
  this.http.get(url).toPromise().then(data => {
    this.items=data as IItem[];
 
    
});

}

delete (id){
  var url = `https://localhost:5001/api/Users/DeleteUser`;

  return this.http.delete(url+"/"+id);
}

postuser(Students){
  var url = `https://localhost:5001/api/Users/PostUser`;
  return this.http.post(url,Students);
}


putuser(id,myitems){
  var url = `https://localhost:5001/api/Users/PutUser`;
  return this.http.put(url + "/" + id,myitems);
}
  

 


}