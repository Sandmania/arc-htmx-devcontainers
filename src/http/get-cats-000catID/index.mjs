import arc from "@architect/functions";
import { catIdPage } from "@architect/shared/cats.mjs";
import layout from "@architect/views/layout.mjs";


export async function handler (req) {

  const { catID } = req.pathParameters;
  const data = await arc.tables()
  const cat = await data.cats.get({ catID })

  const contents = catIdPage(cat);

  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: layout({heading: "cats", contents})
  }
}