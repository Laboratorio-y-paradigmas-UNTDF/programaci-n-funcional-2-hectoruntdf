// Ejercicio 1 — Pipeline filter/map/reduce (5 pts)
// Trazabilidad: F-04, F-05, F-10

export type Orden = {
  id: number;
  cliente: string;
  total: number;
  categoria: string;
  activa: boolean;
};

// Filtra órdenes activas, extrae totales y los suma.
export function filtrarActivasYSumar(ordenes: Orden[]): number {
  return ordenes
    .filter(a => a.activa)
    .map(a => a.total)
    .reduce((a, b) => a + b, 0);
}

// Filtra las activas y devuelve un array con sus totales.
export function obtenerTotalesActivas(ordenes: Orden[]): number[] {
  return ordenes
    .filter(p => p.activa)
    .map(p => p.total);
  
}

// Cuenta cuántas órdenes hay por cada categoría (usar reduce).
export function contarPorCategoria(ordenes: Orden[]): Record<string, number> {
  return ordenes
    .reduce((acc, orden) => {
      if (acc[orden.categoria]) {
        acc[orden.categoria]++;
      } else {
        acc[orden.categoria] = 1;
      }
      return acc;
    }, {} as Record<string, number>);


}
