import { NextApiRequest, NextApiResponse } from "next";
import { withSentry } from "@sentry/nextjs";

function work() {
  throw new Error("API Test 3");
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  work();

  res.status(200).json({ name: "John Doe" });
}

export default withSentry(handler);
