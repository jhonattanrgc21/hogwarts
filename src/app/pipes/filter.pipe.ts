import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    let resultStudents = [];
    for(const student of value){
      if(student.house.toLowerCase().indefOf(args.toLowerCase()) > -1){
        resultStudents.push(student);
      }
    }
    return resultStudents;
  }

}
