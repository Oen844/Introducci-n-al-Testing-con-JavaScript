const BooksService = require('./books.service');

describe('Test for BooksService',() => {
  let service;
  beforeEach(() => {
    service = new BooksService();
  });

  describe('Test for getBooks', () => {
    test('should return a list book', () => {
      // Arrange
      // Act
      const books = service.getBooks();
      console.log(books);
      // Assert
      expect(books.lenght).toEqual();
    });
  });
});
//
