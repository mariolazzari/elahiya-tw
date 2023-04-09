import createIntlMiddleware from "next-intl/middleware";

export default createIntlMiddleware({
  locales: ["en", "fa"],
  defaultLocale: "en",
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
