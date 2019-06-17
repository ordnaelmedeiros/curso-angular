import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: "descricaoReduzida"
})
export class DescricaoReduzida implements PipeTransform {

    transform(value: string, truncarEm:number): string {
        
        if (truncarEm==undefined) {
            truncarEm = 15;
        }

        if (value==undefined) {
            return "";
        } else if (value.length>truncarEm) {
            return value.substr(0, truncarEm) + "...";
        } else {
            return value;
        }

    }

}