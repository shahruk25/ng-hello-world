import {Pipe,PipeTransform} from '@angular/core'
import { pipe } from 'rxjs';

@Pipe({
    name:'summary'
})
export class SummmaryPipe implements PipeTransform{
    transform(value: string, limit?:number) {
        if(!value){
            return null;
        }
        limit = (limit) ?  limit : 50;
        return value.substr(0,limit)+"...";        
    }
}    