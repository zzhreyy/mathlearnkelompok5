import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { navLinks } from "@/lib/nav-links";

describe("App routing", () => {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
  it("has seven pages in navigation", () => {
    expect(navLinks).toHaveLength(7);
  });
  for (const l of navLinks) {
    it(`matches a page for ${l.to}`, () => {
      expect(router.matchRoutes(l.to).at(-1)?.routeId).not.toBe(rootRouteId);
    });
  }
});
