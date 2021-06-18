import { Pipe, PipeTransform } from '@angular/core';
import { Tech } from '../../../interfaces/tech.interface';

@Pipe({
  name: 'filter'
})
export class CustomPipe implements PipeTransform {

  transform(techs: Tech[], type: string, name: string): any {
    if(type == '' && name == ''){
      return techs;
    }else{
      let techList = [... techs];
      
      if(type !== ''){
        techList = techList.filter( t => t.type == type);
      }
      
      if(name !== ''){
        techList = techList.filter( t => t.tech.includes(name));
      }
      
      return techList.length == 0 ? techs : techList;
    }
  }
}
