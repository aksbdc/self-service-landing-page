import React from "react";

export default function RootLayout({
  example,
}: {
  example: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{example}</body>
    </html>
  )
}
