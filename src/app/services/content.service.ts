import { Injectable } from '@angular/core';
import { IContent } from '../models/content.model';
import { MOCK_CONTENT } from '../data/mock-content';

@Injectable({
  providedIn: 'root' // Makes this service available throughout the app
})
export class ContentService {
  private contents: IContent[] = MOCK_CONTENT; // Local storage of content

  // Fetch all content
  getAllContent(): IContent[] {
    return this.contents;
  }

  // Get a single content item by ID
  getContentById(id: number): IContent | undefined {
    return this.contents.find(content => content.id === id);
  }

  // Add a new content item
  addContent(newContent: IContent): void {
    this.contents.push(newContent);
  }

  // Update an existing content item
  updateContent(updatedContent: IContent): boolean {
    const index = this.contents.findIndex(content => content.id === updatedContent.id);
    if (index !== -1) {
      this.contents[index] = updatedContent;
      return true;
    }
    return false;
  }

  // Delete a content item by ID
  deleteContent(id: number): boolean {
    const index = this.contents.findIndex(content => content.id === id);
    if (index !== -1) {
      this.contents.splice(index, 1);
      return true;
    }
    return false;
  }
}
