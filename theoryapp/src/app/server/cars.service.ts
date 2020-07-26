import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class CarsService {

  constructor(private http: HttpClient) {
  }

  getCarsByGET() {
    const headers: HttpHeaders  = new HttpHeaders ({'Content-Type': 'application/json; charset=utf8'});
    return this.http.get('http://localhost:3000/cars', {headers});
  }

  addCarByPOST(carName: string) {
    const data = {
      name: carName,
      color: 'blue'
    }
    const headers = new HttpHeaders ({'Content-Type': 'application/json; charset=utf8'});
    return this.http.post('http://localhost:3000/cars', data, {headers});
  }

  changeColor(car: any, color: string) {
    car.color = color;
    return this.http.put(`http://localhost:3000/cars/${car.id}`, {name: car.name, color});
  }

  deleteCar(car: any) {
    return this.http.delete(`http://localhost:3000/cars/${car.id}`);
  }
}
