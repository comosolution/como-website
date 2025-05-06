import { REPO_NAME } from "@/app/config/constants";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  const token = authHeader?.split(" ")[1];

  if (token !== process.env.DEPLOY_TRIGGER_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const githubResponse = await fetch(
    `https://api.github.com/repos/${REPO_NAME}/actions/workflows/main.yml/dispatches`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_DEPLOY_TOKEN}`,
        Accept: "application/vnd.github+json",
      },
      body: JSON.stringify({ ref: "main" }),
    }
  );

  if (githubResponse.ok) {
    return NextResponse.json({ message: "Triggered" }, { status: 200 });
  } else {
    const error = await githubResponse.json();
    return NextResponse.json({ error }, { status: 500 });
  }
}
