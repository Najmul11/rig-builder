export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/pc-build",
    "/pc-build/Storage",
    "/pc-build/Motherboard",
    "/pc-build/Ram",
    "/pc-build/Processor",
    "/pc-build/Gpu",
    "/pc-build/Monitor",
  ],
};
