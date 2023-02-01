export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <head />
      <body>
      {children}
      </body>
    </html>
  )
}
