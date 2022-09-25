function overload(a: number, b: number): number;
function overload(a: string, b: string): string;
function overload(a: string | number, b: string | number) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  return a.toString() + b.toString();
}