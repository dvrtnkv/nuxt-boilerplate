export default defineEventHandler((event) => {
  // Return a 404 response for unmatched API routes
  event.node.res.statusCode = 404;
  return { error: "API route not found" };
});