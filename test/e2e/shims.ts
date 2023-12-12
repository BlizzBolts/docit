import { type Page } from "playwright";

declare global {
	const page: Page;
	const goto: (path: string) => Promise<void>;
}
