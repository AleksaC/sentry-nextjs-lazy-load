import * as Sentry from "@sentry/nextjs";
import { WindowWithSentry } from "../components/sentry";

export async function getSentry(): Promise<typeof Sentry> {
  if (typeof window === "undefined") {
    return import("@sentry/nextjs");
  } else {
    const w = window as WindowWithSentry;
    return w.Sentry;
  }
}
