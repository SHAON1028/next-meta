import { ImageResponse } from "next/og";

export const runtime = "edge";

export default async function Image() {
  const logoBuffer = await fetch(
    new URL("../../public/logo.png", import.meta.url)
  ).then((res) => res.arrayBuffer());

  // Convert ArrayBuffer to Base64 for embedding
  const logoBase64 = Buffer.from(logoBuffer).toString("base64");
  const logoSrc = `data:image/png;base64,${logoBase64}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#fff",
        }}
      >
        <img src={logoSrc} style={{ height: 100 }} alt="Logo" />
      </div>
    ),
    {
      width: 800,
      height: 600,
    }
  );
}
