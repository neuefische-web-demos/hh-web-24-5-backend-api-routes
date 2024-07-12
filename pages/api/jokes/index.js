// Definiern wir uns unser erste API Route mit einer handler Function - alle jokes

import { jokes } from '@/lib/data.js';

export default function handler(request, response) {
  // write response
  // 200 -> ok

  // .method  -> POST, GET, PUT/PATCH, DELETE, C-R-U-D

  if (request.method === 'GET') {
    // jokes aus unser Database
    response.status(200).json(jokes);
    return;
  }
}
