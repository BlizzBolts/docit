/* eslint-disable no-var */
import { type Page } from "playwright";

declare global {
  var page: Page;
  var goto: (path: string) => Promise<void>;
}
