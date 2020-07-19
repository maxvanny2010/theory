import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'appPow'
})
export class PowPipe implements PipeTransform {
  transform(value: number, number: number = 1, symbol: string) {
    return symbol + Math.pow(value, number);
  }


}
