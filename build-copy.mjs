import { cpSync, copyFileSync } from 'fs';

cpSync('dist/server', 'dist/client', { recursive: true });

copyFileSync('cloudflare-worker-wrapper.js', 'dist/client/_worker.js');

console.log('Arquivos copiados com sucesso.');