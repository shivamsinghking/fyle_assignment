export const createQueryParams = params =>
  Object.keys(params)
    .map(k => `${k}=${encodeURI(params[k])}`)
    .join('&')

export const formatSubjectData = data => {
  let formattedData = []
  data && data.map((d, k) => {
    formattedData.push(
      {title: d.title,
      authors: (d.authors.map(author => author.name)).join(', '),
      first_publish_year: d.first_publish_year})
    return true;
  }) 
  return formattedData
}

export const formatBookData = (data) => {
  let formattedData = [];
  data &&
    data.length > 0 &&
    data.map((book, k) => {
      formattedData.push({
        title: book.title,
        authors: book.author_name ? book.author_name.join(", ") : "",
        first_publish_year: book.first_publish_year,
        latest_publish_year:
          book.publish_year && book.publish_year.length > 0
            ? book.publish_year.sort()[book.publish_year.length - 1]
            : book.first_publish_year,
      });
      return true;
    });
  return formattedData;
};