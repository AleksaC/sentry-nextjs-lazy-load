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

## Getting started

To receive errors you need to build the app and set `SENTRY_ENVIRONMENT` environment
variable to something other than `development` which is the default and build
and start the app since sentry is disabled in next development mode as well as
sentry development environment. To build the app you need to provide sentry auth
token through `SENTRY_AUTH_TOKEN` environment variable. You should also update
`sentry.properties` and set `SENTRY_DSN` environment variable to appropriate value.

**Note**: Bundle analyzer will include sentry in the report but if you look at
the network tab you will see that that chunk will never get loaded. To keep things
this way you need to be careful how you are importing and using `@next/sentry`
at the top level of clientside modules, inside your components and within
`getInitialProps`.

## Contact 🙋‍♂️

- [Personal website](https://aleksac.me)
- <a target="_blank" href="http://twitter.com/aleksa_c_"><img alt='Twitter followers' src="https://img.shields.io/twitter/follow/aleksa_c_.svg?style=social"></a>
- aleksacukovic1@gmail.com
