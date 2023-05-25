Minimal reproduction of https://github.com/vitest-dev/vitest/issues/3448

1. Clone repo
2. npm install
3. `npm test`

Which should fail with a TypeError.

Either downgrade vitest to 0.31.0 or remove the `restoreAllMocks` to make it work again.
