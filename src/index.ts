export function slugify(text: string): string {
  return text.toLowerCase().trim().split(/\s+/).join("-");
}

console.log(slugify(process.argv[2] ?? "Hello World"));
