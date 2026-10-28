import type { DomainContent } from "../types";

// Every ./<slug>.ts in this folder is a domain's page content (default export).
const modules = import.meta.glob<{ default: DomainContent }>(["./*.ts", "!./index.ts"], { eager: true });

export const contentBySlug: Record<string, DomainContent> = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => [path.replace("./", "").replace(".ts", ""), mod.default]),
);
