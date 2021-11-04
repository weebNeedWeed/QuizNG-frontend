import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

interface Toast {
  value: string;
  id: string;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  list: Array<Toast> = [];

  add(value: string) {
    this.list.push({
      value,
      id: uuidv4(),
    });
  }

  remove(id: string) {
    this.list = this.list.filter((element: Toast) => element.id !== id);
  }
}
