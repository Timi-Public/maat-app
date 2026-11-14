# MAAT Mobile · Overrideable UI

Responsive mobile-first interactive prototype recreating 16 MAAT app screens from the supplied Figma design. The app keeps the original 375px Figma canvas, includes local design assets, and supports page navigation, modal flows, swipeable metric cards, and user CSS overrides.

Live preview: <https://timi-public.github.io/maat-app/>

## Pages

1. Wallet connect
2. Home
3. Agent overview
4. Signal analysis
5. Trade execution
6. Engine monitor
7. Tokenomics
8. Liquidity marketplace
9. Liquidity service detail
10. Data sources
11. Whitepaper
12. Quick Swap
13. Profile
14. Agent token consumption
15. Funds activity
16. Account and community rewards

On desktop, use the page list. On mobile, use the page picker above the frame. Navigation links and main calls to action switch to their matching pages. Routes update the URL hash and support browser back/forward. This is a visual prototype; wallet connections and on-chain transactions are not connected to a blockchain.

## Run locally

```sh
pnpm install
pnpm build
```

The build output is written to `dist/`. Serve that directory with a local static HTTP server to preview it. GitHub Actions builds it and publishes to GitHub Pages after pushes to `main`.

## Override API

```js
MaatUI.go('analysis');
MaatUI.setTokens({ accent: '#7557e9' });
MaatUI.setCSS('#maat-frame [data-node-id="208:10612"] { opacity: 0.9; }');
```

`setCSS` appends CSS to the override layer. Target Figma layers with their `data-node-id` attributes.
