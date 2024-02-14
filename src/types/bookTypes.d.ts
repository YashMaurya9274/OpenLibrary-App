interface Book {
  work: {
    author_names: string[];
    title: string;
    cover_id: number;
    first_publish_year: number;
    read?: boolean;
  };
}

interface SearchBook {
  author_name: string[];
  title: string;
  cover_i: number;
  first_publish_year: number;
  read?: boolean;
}
