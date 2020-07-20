import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'dynamicFilter',
  pure: false
})
export class DynamicFilterPipe implements PipeTransform {

  transform(carList, searchStrOrSymbol: string, fieldName: string) {
    if (carList.length === 0 || searchStrOrSymbol === '') {
      return carList;
    }
    /*return carList.filter(car => car.name === searchStrOrSymbol);*/
    return carList.filter(car => car[fieldName]
      .toLowerCase().indexOf(searchStrOrSymbol.toLowerCase()) !== -1);
  }

}
