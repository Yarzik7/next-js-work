export async function GET(req) {
  const age = parseInt(new Date().getFullYear()) - 1996;
  const data = { name: "Yaroslav", age };
  return new Response(JSON.stringify(data, null, 2));
}

export async function POST(req) {
  return new Response(req.body);
}
