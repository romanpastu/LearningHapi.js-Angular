import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hashFilter'
})
export class HashFilterPipe implements PipeTransform {
  json;

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase().trim();
    return items.filter(it => {
      this.json = it.hash;
      //return this.json.toLowerCase().includes(searchText);
      return it.hash.toLowerCase().includes(searchText) ||  it.size.toLowerCase().includes(searchText);
    });
  }

}
