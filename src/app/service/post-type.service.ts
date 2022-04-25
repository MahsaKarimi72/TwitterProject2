import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable()
export class PoetTypeService {
  getAll(): Observable<Array<{ Key: number; Name: string }>> {
    return from([
      [
        {
          Key: 1,
          Name: 'Text',
        },
        {
          Key: 2,
          Name: 'Image',
        },
        {
          Key: 3,
          Name: 'Video',
        },
      ],
    ]);
  }
}
