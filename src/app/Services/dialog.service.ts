import { Injectable , signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }

  private _visible = signal(false);
  private _message = signal('');

  get visible() {
    return this._visible.asReadonly();
  }

  get message() {
    return this._message.asReadonly();
  }

  show(message: string) {
    this._message.set(message);
    this._visible.set(true);
    setTimeout(() => this.hide(), 3000);
  }

  hide() {
    this._visible.set(false);
    this._message.set('');
  }
}
