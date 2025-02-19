import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; 
import { IContent } from '../models/content.model';
import { MOCK_CONTENT } from '../data/mock-content';

@Injectable({
  providedIn: 'root' // Makes this service available throughout the app
})
export class ContentService {
  private contents: IContent[] = MOCK_CONTENT; 

  // Fetch all content as an Observable
  getAllContent(): Observable<IContent[]> {
    return of(this.contents);
  }

  // Get a single content item by ID (returns an Observable)
  getContentById(id: number): Observable<IContent | undefined> {
    const content = this.contents.find(content => content.id === id);
    return of(content); 
  }

  // Add a new content item (returns updated array as an Observable)
  addContent(newContent: IContent): Observable<IContent[]> {
    this.contents.push(newContent);
    return of(this.contents); 
  }

  // Update an existing content item (returns updated array as an Observable)
  updateContent(updatedContent: IContent): Observable<IContent[]> {
    const index = this.contents.findIndex(content => content.id === updatedContent.id);
    if (index !== -1) {
      this.contents[index] = updatedContent;
    }
    return of(this.contents);
  }

  // Delete a content item by ID (returns the deleted item as an Observable)
  deleteContent(id: number): Observable<IContent | undefined> {
    const index = this.contents.findIndex(content => content.id === id);
    if (index !== -1) {
      const removedItem = this.contents.splice(index, 1)[0];
      return of(removedItem); 
    }
    return of(undefined);
  }
}
