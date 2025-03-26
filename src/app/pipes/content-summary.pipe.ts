import { Pipe, PipeTransform } from '@angular/core';
import { IContent } from '../models/content.model';

@Pipe({
  name: 'contentSummary',
  standalone: true
})
export class ContentSummaryPipe implements PipeTransform {
  constructor() {
    console.log('Custom Pipe Initialized - Version 2.0.');
  }

  transform(content: IContent): string {
    return `${content.title} (${content.category}) - $${content.price}`;
  }
}
