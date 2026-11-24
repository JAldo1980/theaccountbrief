/** Finds an "## FAQ" (or "## Frequently asked questions") section and pulls out bold questions with their answers. */
export function extractFaq(body: string): { q: string; a: string }[] {
  const m = body.match(/^##\s+(FAQs?|Frequently asked questions)\s*$([\s\S]*?)(?=^##\s|(?![\s\S]))/im);
  if (!m) return [];
  const out: { q: string; a: string }[] = [];
  const re = /^\*\*(.+?)\*\*\s*\n([\s\S]*?)(?=^\*\*|(?![\s\S]))/gm;
  for (const x of m[2].matchAll(re)) {
    const q = x[1].trim();
    const a = x[2].replace(/\*\*|__|\*|_|`/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\s+/g, ' ').trim();
    if (q && a) out.push({ q, a });
  }
  return out;
}
