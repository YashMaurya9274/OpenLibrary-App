import {SEARCH_BOOOKS} from '../types/routeNames';

const searchBooks = async (title: string) => {
  const titleStr = title.split(' ').join('+');
  const res = await fetch(`${SEARCH_BOOOKS}${titleStr}`).then(result =>
    result.json(),
  );

  if (res && res.docs.length > 0) {
    return res.docs;
  }
};

export default searchBooks;
