# ATR-U1 Verification Evidence

## Baseline

Captured before ATR-U1 application-code changes on 2026-07-18.

| Check | Result |
|---|---|
| `npm test` | Passed: 5 files, 23 tests |
| `npm run lint` | Passed |
| `npm run build` | Passed: TypeScript and Vite production build |
| Duplicate production variants | None found for `_new` or `_modified` patterns |

### JavaScript Gzip Baseline

| Asset | Gzip size |
|---|---:|
| `dist/assets/index-f-9WM4kj.js` | 240.60 kB |
| **Total JavaScript gzip** | **240.60 kB** |

Vite version reported by the baseline build: 7.3.0. The existing chunk-size warning is baseline behavior.

### Runtime Dependencies

ATR-U1 starts with these nine runtime dependencies and must not modify them:

- `@chakra-ui/icons` `^2.2.4`
- `@chakra-ui/react` `^3.30.0`
- `@emotion/react` `^11.14.0`
- `@tailwindcss/vite` `^4.1.18`
- `next-themes` `^0.4.6`
- `react` `^19.2.0`
- `react-dom` `^19.2.0`
- `react-icons` `^5.5.0`
- `tailwindcss` `^4.1.18`

## Post-Implementation

Captured after ATR-U1 implementation on 2026-07-18.

| Check | Result |
|---|---|
| Resolver and data tests | Passed: 2 files, 10 tests |
| Shell, registry, and layout tests | Passed: 3 files, 16 tests |
| App and layout route tests | Passed: 2 files, 18 tests |
| `npm test` | Passed: 7 files, 42 tests |
| `npm run lint` | Passed |
| `npm run build` | Passed: TypeScript and Vite production build |
| `git diff --check` | Passed |
| Duplicate production variants | None found for `_new` or `_modified` patterns |
| Engineering artistic-import scan | No artistic imports found under `src/templates/engineering/` |
| Runtime dependency diff | No changes to `package.json` or `package-lock.json` |

### JavaScript Gzip Comparison

| Measurement | Asset | Gzip size |
|---|---|---:|
| Baseline | `dist/assets/index-f-9WM4kj.js` | 240.60 kB |
| ATR-U1 | `dist/assets/index-B7l9-oOA.js` | 242.18 kB |
| Change | One JavaScript bundle | +1.58 kB / +0.66% |

The increase is below the 15% review threshold. No bundle-growth exception is required. The existing Vite warning for a JavaScript chunk above 500 kB minified remains unchanged in character and is not introduced by ATR-U1.

### Local Chrome Smoke Checks

The artistic template was selected temporarily for local verification and restored to the configured `engineering` value immediately afterward.

| CSS viewport | Evidence |
|---:|---|
| 320 x 900 | Chrome device emulation reported `clientWidth=320`, `scrollWidth=320`; the 44 x 44 index trigger was fully visible; the full-screen index opened with all 10 destinations and wrapped footer controls. |
| 768 x 1024 | Header, opening content, actions, media composition, and menu trigger rendered without overlap or horizontal clipping. |
| 1024 x 900 | Opening composition and media remained aligned with no control or text overlap. |
| 1440 x 1000 | Wide two-column opening composition, compact header, and media stack rendered within the viewport. |

Keyboard chapter focus, pointer selection, Escape restoration, layout-change focus, and missing-heading fallback are covered by focused React Testing Library tests. The local server responded successfully at `http://127.0.0.1:5174/`.

### Residual Limitations

- Local screenshots used Chrome in light mode; final dark-mode visual review belongs to ATR-U3.
- Final Safari, Firefox, and Edge release proof is deferred to ATR-U3 as planned.
- ATR-U2 still owns the final artistic chapter layouts, gallery rails, motion behavior, and dedicated artistic journal presentation.
