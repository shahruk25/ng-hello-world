import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string{
    if(!value) return "";
    let valueArr:string[] = value.split(" ");
    let perpostions: string[] = ["the","The","of","Of"]

    for (var i = 0; i < valueArr.length; i++) {
      if(i > 0 && perpostions.includes(valueArr[i])) {
        valueArr[i] = valueArr[i].toLowerCase();
      }else{
        valueArr[i] = valueArr[i].substr(0,1).toUpperCase()+valueArr[i].substr(1).toLowerCase();
      } 
      console.log("camelCase = ", value);
    }
    return valueArr.join(" ");  
  }
}