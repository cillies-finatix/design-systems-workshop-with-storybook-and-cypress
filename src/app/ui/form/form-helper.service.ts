import { Injectable, signal } from '@angular/core';

@Injectable()
export class FormHelperService {
  readonly #values = signal<Record<string, string>>({});

  update(name: string, value: string): void {
    console.log('update values for', name, value);
    this.#values.update((state) => ({
      ...state,
      [name]: value,
    }));
  }

  values(): Record<string, string> {
    console.log('get values', this.#values());
    return this.#values();
  }
}
