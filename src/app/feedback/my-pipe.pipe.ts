import {Pipe, PipeTransform} from '@angular/core';

@Pipe ({name: 'threeLetterPipe'})
export class ThreeLetterPipe implements PipeTransform{

  constructor() {
  }

  transform(value: string, startingNum: number): string {
    return value.toString().substr(startingNum,3)
  }

}
