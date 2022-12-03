import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncateTextPipe implements PipeTransform {
  transform(value: string, args: number): string {
    const limit = args || 100;
    if (value.length < limit) {
      return value;
    } else {
      return (
        value.substring(0, limit) +
        '...<span class="read-more-text">+read more<span>'
      );
    }
  }
}
