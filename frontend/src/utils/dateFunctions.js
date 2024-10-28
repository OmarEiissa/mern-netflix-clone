export function formatReleaseDate(data) {
  return new Date(data).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}