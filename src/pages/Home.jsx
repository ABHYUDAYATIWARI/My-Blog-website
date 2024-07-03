import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import authService from './appwrite/auth'

function Home() {
  const authStatus=useSelector((state)=>state.auth.status)
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts){ 
        setPosts(posts.documents);
        setLoading(false)
      }
    });
    
  }, []);
  // console.log(authStatus,loading);
  if (!loading && authStatus) {
    return (
      // <div className="w-full py-8 mt-4 text-center">
      //   <Container>
      //     <div className="flex flex-wrap">
      //       <div className="p-2 w-full">
      //         <h1 className="text-2xl font-bold hover:text-gray-500">
      //           Loading....
      //         </h1>
      //       </div>
      //     </div>
      //   </Container>
      // </div>
    
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
    );
  } else if(!authStatus){
    return(
       <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                <Link to='/login' >
                Login to read post.
                </Link>
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                loading....
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
