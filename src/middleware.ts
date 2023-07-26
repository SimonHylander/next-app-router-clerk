import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/:slug",
    "/integritetspolicy",
    "/privacy/delete",
    "/:locale/sign-in",
    "/api/webhooks/clerk",
    "/api/getAuthenticatedUserId",
    "/api/uploadthing(.*)",
  ],
  afterAuth(auth, req, evt) {
    console.log("afterAuth");
    // console.log(auth);
    // const au = getAuth(req);
    // console.log(au);
    // return NextResponse.next();
  },
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api)(.*)"],
};
