// cookies
import { cookies } from "next/headers";

export async function GET(request) {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  return new Response("Nextjs", {
    status: 200,
    headers: { "Set-Cookies": `token=${token.value}` },
  });
}

//Alternatively, you can use abstractions on top of the underlying Web APIs to read cookies (NextRequest):

export async function GET(request) {
  const token = request.cookies.get("token");
}

//header
import { headers } from "next/headers";

export async function GET(request) {
  const headerList = headers();
  const referer = headerList.get("referer");

  return new Response("Nextjs", {
    status: 200,
    headers: { referer: referer },
  });
}
//Alternatively, you can use abstractions on top of the underlying Web APIs to read headers (NextRequest):

export async function GET(request) {
  const requestHeaders = new Headers(request.headers);
}

//Redirect

import { redirect } from "next/navigation";

export async function GET(request) {
  redirect("https://wwww.nextjs.org/docs");
}

<div className="flex">
  <img src={image} alt="" />
  <p>$60.00</p>
  <p>Product</p>
</div>;
