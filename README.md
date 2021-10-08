# Next.js Sentry Lazy Load Demo

Slightly modified [with-sentry](https://github.com/vercel/next.js/tree/fcdba560ebc8198055c16e78f4c62f99a7b8136c/examples/with-sentry)
next.js example.

Modifications to the original example include:

- conversion to typescript
- disabling sentry in development
- lazy loading on the client

## Motivation

At the moment of building this clientside bundle of sentry included by `@sentry/next`
has size of 31.5kB gzipped (almost as big as react-dom!). Since I don't use features
like tracing, there is no need to bundle sentry instead of lazy loading it.

## Contact 🙋‍♂️

- [Personal website](https://aleksac.me)
- <a target="_blank" href="http://twitter.com/aleksa_c_"><img alt='Twitter followers' src="https://img.shields.io/twitter/follow/aleksa_c_.svg?style=social"></a>
- aleksacukovic1@gmail.com
