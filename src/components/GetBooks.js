import React, { useEffect } from "react";
import axios from "axios";
const GetBooks = () => {
  useEffect(async () => {
    const res = await axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=Mythological Fiction Books&key=AIzaSyB-TKEZKxfZtGrLr7S6b8ZnaZ-SXJewH5E"
    );

    // console.log(res.data.items);
    if (res.data) {
      res.data.items.map((book) => {
        return console.log(book.volumeInfo);
      });
    }
  }, []);
  return (
    <div>
      <h1>Book Api</h1>
    </div>
  );
};

export default GetBooks;
