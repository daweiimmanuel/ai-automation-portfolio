import { existsSync } from 'node:fs';
import path from 'node:path';
import { hasTodo } from './todo';

export function assetExists(href: string): boolean {
  if (hasTodo(href) || !href.startsWith('/')) return false;
  return existsSync(path.join(process.cwd(), 'public', href));
}
