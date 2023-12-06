// "use client"; // converts the component into a client one for work with useState etc

// import { useState } from "react";

import Link from "next/link";

export default function Show() {
  return (
    <div>
      <h1>Show page</h1>
      <Link href="/">Home</Link>
      <br />
      <Link href="/client/12345">Client 12345</Link>
    </div>
  );
}
