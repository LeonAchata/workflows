# Fixtures

Two tiny projects, identical except for the package manager, that the
[self-test](../.github/workflows/self-test.yml) workflow runs through
`node-checks.yml` on every change:

| Fixture | Package manager | Node version comes from |
| --- | --- | --- |
| `npm-app` | npm (`package-lock.json`) | `.nvmrc` |
| `pnpm-app` | pnpm (`pnpm-lock.yaml`, `packageManager` field) | the `node-version` input |

Each one has a real dependency so the install and cache steps do real work.
