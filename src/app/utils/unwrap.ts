import { Observable, take, tap } from "rxjs";

export const unwrap: <T>(obs: Observable<T>) => T | null = <T>(obs: Observable<T>) => {
  let value = null;

  obs.pipe(
    take(1),
    tap((v) => {
      value = v || null;
    }),
  ).subscribe();

  return value;
}
