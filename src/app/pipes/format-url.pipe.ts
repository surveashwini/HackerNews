import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatUrl',
  pure: true,
})
export class FormatUrlPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value) {
      let splittedUrlBySlash = value?.split('/');
      return splittedUrlBySlash[2];
    }
    return '';
  }
}
