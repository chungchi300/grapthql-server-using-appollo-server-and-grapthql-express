const books = require("../books.json");

module.exports = {
  allBooks: query => {
    const filter = query.filter;
    console.log("args", filter);
    // return books;
    return filter && Object.keys(filter).length
      ? books.filter(book => {
          book;
          return book[Object.keys(filter)[0]] === Object.values(filter)[0];
        })
      : books;
  }
};
