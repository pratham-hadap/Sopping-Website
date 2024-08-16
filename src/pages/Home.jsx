import { useEffect, useState } from "react";
import { Spinner } from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading,setLoading] = useState(false)
  const [posts , setPost] = useState([])


  async function fetchData(){
    setLoading(true)
   try{
    let response = await fetch(API_URL)
    let result = await response.json();
    setPost(result);
    console.log(result)
   }
   catch(error){
    console.log("data fetch nahi hua")
   }
   setLoading(false);    
  }

  useEffect(()=> {
    fetchData();
  },[])

  return (
  
    <div >
      {
        loading ? <Spinner></Spinner>
        : posts.length > 0 ? 
        (<div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {/* {
            posts.map((post)=>{
              return <Product key={post.id} post={post}></Product>
            })
          } */}
          {
            posts.map( (post) => (
            <Product key = {post.id} post={post}/>
          ) )
          }
        </div>)
        :<div>data not found</div>
      }
    </div>
  );
};

export default Home;
