// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

const crypto = require("crypto");

const { withSentryConfig } = require("@sentry/nextjs");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const release = crypto
  .randomBytes(15)
  .toString("base64")
  .replace(/\//g, "_")
  .replace(/\+/g, "-");
const env = process.env.SENTRY_ENVIRONMENT || "development";

const moduleExports = {
  publicRuntimeConfig: {
    SENTRY_RELEASE: release,
    SENTRY_ENVIRONMENT: env,
  },
};

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
  silent: true,
  release,
  deploy: env,
};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withSentryConfig(
  withBundleAnalyzer(moduleExports),
  sentryWebpackPluginOptions
);
