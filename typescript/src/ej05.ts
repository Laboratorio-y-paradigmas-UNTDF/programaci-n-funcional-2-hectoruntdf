// Ejercicio 5 — flatMap y reduce avanzado (5 pts)
// Trazabilidad: F-11, F-12

export type UserWithRoles = { name: string; roles: string[] };

// Extrae todos los roles de todos los usuarios (con duplicados).
export function todosLosRoles(users: UserWithRoles[]): string[] {
  return users.flatMap(u => u.roles);
  
}

// Como el anterior pero sin duplicados.
export function rolesUnicos(users: UserWithRoles[]): string[] {
  return users
    .flatMap(u => u.roles)
    .reduce((acc, rol) => {
        if (!acc.includes(rol)){
          return [...acc,rol];
        }
        return acc;
    },[] as string[]);
}

// Construye diccionario id → nombre con reduce.
export function indexarPorId(items: { id: number; nombre: string }[]): Record<number, string> {
  return items.reduce((acc, item) => {
    return {
      ...acc,
      [item.id]: item.nombre };
  }, {} as Record<number, string>);
  
}
