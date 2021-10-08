import Script from "next/script";
import getConfig from "next/config";
import * as _Sentry from "@sentry/nextjs";

// TODO: could be typed better
export type WindowWithSentry = typeof window & {
  Sentry: typeof _Sentry & { onLoad: (cb: () => unknown) => unknown };
};

const SentryScript = () => (
  <Script
    src={process.env.NEXT_PUBLIC_SENTRY_SCRIPT_SOURCE}
    crossOrigin="anonymous"
    onLoad={() => {
      const w = window as WindowWithSentry;
      w.Sentry.onLoad(() => {
        const { publicRuntimeConfig } = getConfig();
        const options = {
          environment: publicRuntimeConfig.SENTRY_ENVIRONMENT,
          release: publicRuntimeConfig.SENTRY_RELEASE,
          enabled:
            process.env.NODE_ENV === "production" &&
            publicRuntimeConfig.SENTRY_ENVIRONMENT !== "development",
        };
        w.Sentry.init(options);
      });
    }}
  />
);

export default SentryScript;
