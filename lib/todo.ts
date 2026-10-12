const marker = '[TODO:';

export function hasTodo(value: string | undefined): boolean {
  return value !== undefined && value.includes(marker);
}

// Previews and local builds outline unresolved placeholders; production builds fail the gate instead.
export const showTodo = process.env.VERCEL_ENV !== 'production';

export function todoAttr(value: string | undefined): { 'data-todo'?: string } {
  return showTodo && hasTodo(value) ? { 'data-todo': '' } : {};
}
