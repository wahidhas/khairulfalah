import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import ts from 'typescript';

const opensAt = Date.parse('2026-11-25T10:00:00+07:00');
assert.equal(new Date(opensAt).toISOString(), '2026-11-25T03:00:00.000Z');
const html = await readFile('dist/index.html', 'utf8');
const redirectScript = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)]
  .map(match => match[1]).find(script => script.includes("window.location.replace('/coming-soon')"));
assert.ok(redirectScript, 'Homepage must include the launch redirect');
for (const [now, shouldRedirect] of [[opensAt - 1, true], [opensAt, false], [opensAt + 1, false]]) {
  let destination;
  vm.runInNewContext(redirectScript, {
    Date: { now: () => now, parse: Date.parse },
    window: { location: { replace: value => { destination = value; } } },
  });
  assert.equal(destination, shouldRedirect ? '/coming-soon' : undefined);
}

const component = await readFile('src/components/sections/ComingSoonSection.astro', 'utf8');
const source = component.match(/<script>([\s\S]*?)<\/script>/)?.[1];
assert.ok(source);
const script = ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2022 } }).outputText;
let now = opensAt - 86400000;
let tick;
let cleared = false;
let countdownHidden = false;
let linkVisible = false;
const units = Array.from({ length: 4 }, () => ({ textContent: '' }));
const page = {
  dataset: { launchAt: '2026-11-25T10:00:00+07:00' },
  querySelectorAll: () => units,
  querySelector: selector => selector === '[data-launch-countdown]'
    ? { setAttribute: () => { countdownHidden = true; } }
    : { removeAttribute: () => { linkVisible = true; } },
};
vm.runInNewContext(script, {
  document: { querySelector: () => page },
  Date: { now: () => now, parse: Date.parse },
  setInterval: callback => { tick = callback; return 1; },
  clearInterval: () => { cleared = true; },
});
assert.deepEqual(units.map(unit => unit.textContent), ['01', '00', '00', '00']);
now = opensAt - 1000;
tick();
assert.deepEqual(units.map(unit => unit.textContent), ['00', '00', '00', '01']);
assert.equal(linkVisible, false);
now = opensAt;
tick();
assert.deepEqual(units.map(unit => unit.textContent), ['00', '00', '00', '00']);
assert.equal(countdownHidden, true);
assert.equal(linkVisible, true);
assert.equal(cleared, true);
console.log('PASS: WIB schedule, homepage redirect before launch, homepage access at/after launch, countdown rollover, and launch button.');
