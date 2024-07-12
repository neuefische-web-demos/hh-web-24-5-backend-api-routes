import { jokes } from '@/lib/data';

export default function handler(request, response) {
  const { id } = request.query;

  //  DB .findById()
  const joke = jokes.find((joke) => joke.id === id);

  // console.log('request ---->', request);
  // console.log('ID', id);

  if (!joke) {
    response.status(404).json({ message: 'Joke not found :(' });
    return;
  }
  response.status(200).json(joke);
}
