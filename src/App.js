import "./App.css";
import { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";

function App() {
  // useeffect usestate useref usecontext >> react hooks

  const [posts, setPosts] = useState([]); // saved json data in here
  const [IndexNumber, setIndexNumber] = useState(1);
  const[singlePost, setSinglePost] = useState({});
  useEffect(() => {
    console.log("hello world");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        //  console.log(data)
        setPosts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const nextPost = (e) => {
    e.preventDefault();
    console.log(IndexNumber);
    setIndexNumber(IndexNumber + 1); //0,1,2,3,4
    fetch(`https://jsonplaceholder.typicode.com/posts/${IndexNumber}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSinglePost(data);
      });
  };

  const prevPost = (e) => {
    e.preventDefault();
    console.log(IndexNumber);
    if (IndexNumber <= 0) {
      alert("No post found!!!");
    } else {
      setIndexNumber(IndexNumber - 1); //0,1,2,3,4
      fetch(`https://jsonplaceholder.typicode.com/posts/${IndexNumber}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setSinglePost(data);
        });
    }
  };

  return (
    <Container className="text-center mt-5">
      <h3>{singlePost.title}</h3>

      <Button variant={"warning"} className="mx-1" onClick={prevPost}>
        {" "}
        Previous Post
      </Button>
      <Button variant={"warning"} onClick={nextPost}>
        Next post
      </Button>

      <div className="di">{singlePost.body}</div>

      {/* {
      posts.map((post,index)=>(
        <div key={index}>
          <p>{console.log(post)}</p>
          <p>{post.title}</p>
        </div>
      ))
    } */}
    </Container>
  );
}

export default App;
