// Ejercicio 2 — Composición con pipe y compose (6 pts)
// Trazabilidad: F-06, F-07

// Compone funciones de izquierda a derecha. Sin funciones → identidad.
export function pipe<T>(...fns: Array<(x: T) => T>): (x: T) => T {
  return (x:T) => {
    return fns.reduce((acc, fn) => {
      return fn(acc);
    }, x);
  };
}

// Compone funciones de derecha a izquierda. Sin funciones → identidad.
export function compose<T>(...fns: Array<(x: T) => T>): (x: T) => T {
  return (x:T) => {
    return fns.reduceRight((acc, fn) => {
      return fn(acc);
    }, x);
  };
}

// Pipeline que aplica trim, toLowerCase, y agrega @empresa.com si no tiene @.
export function normalizeEmail(raw: string): string {
  const trim = (s: string) => s.trim();
  const toLower = (s: string) => s.toLowerCase();
  const addDomain = (s: string) => s.includes('@') ? s : `${s}@empresa.com`;

  const pipeline = pipe<string>(
    trim,
    toLower,
    addDomain
  );
  return pipeline(raw);
}
