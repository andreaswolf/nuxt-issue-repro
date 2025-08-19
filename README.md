# Reproduction repository for nuxt/test-utils issue 

This repository contains a lot of dependencies that are probably not required.

## Reproducing the issue

Just run

    yarn run vitest --project=e2e-nuxt

The output will be similar to this:

     RERUN  package.json x2 
    […]
    FAIL   e2e (chromium)  tests/qs.spec.ts [ tests/qs.spec.ts ]
    Error: Failed to import test file /home/aw/Kunden/fes/nuxt-issue-repro/tests/qs.spec.ts
    Caused by: SyntaxError: The requested module '/node_modules/qs/lib/index.js?v=4aa1c5a0' does not provide an export named 'default'
    […]
    Vitest caught 1 unhandled error during the test run.
    This might cause false positive tests. Resolve unhandled errors to make sure your tests are not affected.
    […]
    TypeError: Cannot set properties of undefined (setting 'PROD')
    […]

The test w/o a Nuxt environment will work:

    yarn run vitest --project=e2e