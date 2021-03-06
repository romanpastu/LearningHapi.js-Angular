import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'sizeFilter',
})
export class SizeFilterPipe implements PipeTransform {

  transform(values: any, args?: any): any {

    if (args == null || args == "") {
      return values;
    }
    
    return values.filter((item) => item.size.toString().toLowerCase().includes(args.toLowerCase().trim()) || item.hash.toString().toLowerCase().includes(args.toLowerCase().trim()));
  }
}
