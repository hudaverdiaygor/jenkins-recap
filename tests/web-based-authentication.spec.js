import { test } from "@playwright/test";

test("Bypass authentication by embedding the credentials in the URL", async ({
  page,
}) => {
  // Correct Format: https://username:password@domain
  await page.goto(
    "https://admin:admin@the-internet-5chk.onrender.com/basic_auth",
  );

  await page.waitForTimeout(3000);
});

test("Bypass authentication by encoding the credentials base64 format", async ({
  page,
}) => {
  const encodedCredential = Buffer.from("admin:admin").toString("base64");

  await page.setExtraHTTPHeaders({
    Authorization: `Basic ${encodedCredential}`,
  });

  // Added missing await here
  await page.goto("https://the-internet-5chk.onrender.com/basic_auth");

  await page.waitForTimeout(3000);
});
