import "./home.css";
import Image from "../assets/landing-bg.jpg";

const Home = () => {
  return (
    <div className="container-fluid m-0 p-0 home">
      <div className="landing-page text-center">
        <div className="overlay"></div>
        <div className="title">Bookspired</div>
      </div>

      <div className="blogs-container container">
        <h1>Blogs</h1>
        <div className="blog">
          <img src={Image} alt="" />
          <label className="author">Author</label>
          <div className="desc">Desc</div>
        </div>
        <div className="blog">
          <img src={Image} alt="" />
          <label className="author">Author</label>
          <div className="desc">Desc</div>
        </div>
        <div className="blog">
          <img src={Image} alt="" />
          <label className="author">Author</label>
          <div className="desc">Desc</div>
        </div>
      </div>

      <div className="suggestions text-center">
        <h1>Recommended Books</h1>
        <div className="books-container">
          <div className="book">
            <img />
            <div className="desc">abc is writtend by some author</div>
            <div className="author"> Written By - </div>
          </div>
        </div>
        <div className="books-container">
          <div className="book">
            <img />
            <div className="desc">abc is writtend by some author</div>
            <div className="author"> Written By - </div>
          </div>
        </div>
        <div className="books-container">
          <div className="book">
            <img />
            <div className="desc">abc is writtend by some author</div>
            <div className="author"> Written By - </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
