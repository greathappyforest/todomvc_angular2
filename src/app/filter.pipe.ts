import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
//value is obj of all todos, filterType need passing from footer, 3 types: all, active and completed.
  transform(value: any, filterType?: any): any {
    switch(filterType){
      case 'Active':
        return value.filter(item=>{return !item.done;})
      case 'Completed':
        return value.filter(item=>{return item.done;})
       
        default:
        return value;
    }

  }

}
