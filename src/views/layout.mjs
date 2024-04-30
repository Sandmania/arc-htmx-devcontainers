export default function layout({
  heading
}) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
   <meta charset="UTF-8">
   <title>Architect example</title>
  </head>
  <body>
   <h1>${heading}</h1>
  </body>
  </html>
  `
}