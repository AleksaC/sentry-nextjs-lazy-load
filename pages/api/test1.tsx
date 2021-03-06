import { NextApiRequest, NextApiResponse } from "next";
import { withSentry } from "@sentry/nextjs";

const doAsyncWork = () => Promise.reject(new Error("API Test 1"));
doAsyncWork();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: "John Doe" });
}

export default withSentry(handler);
