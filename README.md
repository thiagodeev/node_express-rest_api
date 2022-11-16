# node_express-rest_api

A REST API mande with Node.js and Express.

Routes:

  Books:
  -get("/livros") Lists all books
  -get("/livros/busca") Searches for a specific publishing company
  -get("/livros/:id") Searches for a specific book Id
  -post("/livros") Posts a new book (must have: {
    "titulo": "A Ilha Misteriosa", //the title
    "autor": "63724ab7f3aec5a6520564bd", //the author Id in the database
    "editora": "UBUNTU", // the publishing company
    "numeroPaginas": 320 // number of pages
  })
  -put("/livros/:id") Modifies a book
  -delete("/livros/:id") Deletes a book

  Authors:
  -get("/autores") Lists all authors
  -get("/autores/:id") Searches for a specific author Id
  -post("/autores") Posts a new author (must have: {
    "nome": "Evaristo Costa", //Author's name
    "nacionalidade": "Português" //Author's nationality
  })
  -put("/autores/:id") Modifies an author
  -delete("/autores/:id") Deletes an author