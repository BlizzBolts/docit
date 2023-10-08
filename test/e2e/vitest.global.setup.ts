import type { Server } from "http";
import path from "node:path";
import { fileURLToPath } from "url";
import getPort from "get-port";
import { chromium, type BrowserServer } from "playwright";
import { start } from "@blizzbolts/docit-core";
import { resolveConfig } from "@blizzbolts/docit-shared/node";

let browserServer: BrowserServer;
let server: Server;

let shutDown: () => Promise<void> = null!;

export async function setup() {
  browserServer = await chromium.launchServer({
    headless: !process.env.DEBUG,
    args: process.env.CI ? ["--no-sandbox", "--disable-setuid-sandbox"] : undefined,
  });
  process.env["WS_ENDPOINT"] = browserServer.wsEndpoint();
  const port = await getPort();
  process.env["PORT"] = port.toString();

  const root = path.dirname(fileURLToPath(import.meta.url));

  const config = await resolveConfig(root);
  const { server: _server, shutDown: _shutDown } = await start(root, {
    ...config,
    server: {
      ...config.server,
      port: port,
    },
  });
  shutDown = _shutDown;
  server = _server;
}

export async function teardown() {
  shutDown && shutDown();

  await browserServer.close();

  await new Promise<void>((resolve, reject) => {
    server?.close((error) => (error ? reject(error) : resolve()));
  });
}
