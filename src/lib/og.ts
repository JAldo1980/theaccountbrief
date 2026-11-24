// Builds 1200×630 branded share images at build time (no runtime JS, no third-party service).
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const font = (pkg: string, file: string) => readFileSync(resolve(`node_modules/@fontsource/${pkg}/files/${file}`));
const fonts = [
  { name: 'Serif', data: font('source-serif-4', 'source-serif-4-latin-600-normal.woff'), weight: 600 as const, style: 'normal' as const },
  { name: 'Sans', data: font('inter', 'inter-latin-500-normal.woff'), weight: 500 as const, style: 'normal' as const },
  { name: 'Sans', data: font('inter', 'inter-latin-600-normal.woff'), weight: 600 as const, style: 'normal' as const },
];

const h = (type: string, style: Record<string, unknown>, children?: unknown) => ({ type, props: { style, children } });

export async function ogImage({ title, kicker, footer }: { title: string; kicker: string; footer: string }) {
  const size = title.length > 70 ? 58 : title.length > 45 ? 66 : 76;
  const tree = h(
    'div',
    { width: 1200, height: 630, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#14213d', padding: '72px 80px', fontFamily: 'Sans' },
    [
      h('div', { display: 'flex', alignItems: 'center', gap: 20 }, [
        h('div', { display: 'flex', alignItems: 'center', justifyContent: 'center', width: 56, height: 56, border: '3px solid #ffffff', color: '#ffffff', fontSize: 22, fontWeight: 600 }, 'AB'),
        h('div', { display: 'flex', color: '#ffe14d', fontSize: 24, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase' }, kicker),
      ]),
      h('div', { display: 'flex', fontFamily: 'Serif', fontWeight: 600, fontSize: size, lineHeight: 1.12, color: '#ffffff', maxWidth: 1000 }, title),
      h('div', { display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#d9dce2', fontSize: 26 }, [
        h('div', { display: 'flex' }, footer),
        h('div', { display: 'flex', height: 10, width: 160, background: '#ffe14d' }),
      ]),
    ],
  );
  const svg = await satori(tree as never, { width: 1200, height: 630, fonts });
  return new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
}
