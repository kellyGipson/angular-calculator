import { BehaviorSubject, map, Observable, of } from "rxjs";
import { KeyToken } from "./key-token";

export class Calculator {
  private tokensSubject = new BehaviorSubject<KeyToken[]>([]);

  getPreviewValue$(): Observable<string> {
    return this.tokensSubject.asObservable()
      .pipe(map((tokens) => tokens.map((token) => token.keyValue).join(' ')));
  }

  getOutput$(): Observable<number> {
    // do computation
    return of(0);
  }

  registerKey(key: KeyToken): void {
  }
}
