import {GET_BOOKS} from '../types/routeNames';

const getBooks = async () => {
  const res = await fetch(GET_BOOKS).then(result => result.json());

  if (res && res.reading_log_entries.length > 0) {
    return res.reading_log_entries;
  }
};

export default getBooks;
