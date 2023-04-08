import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PostTitle from "./components/PostList";

export default function PostList(props) {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function fetchPostList() {
      try {
        const requestUrl =
          "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1";
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log(responseJSON);
        const { data } = responseJSON;
        setPostList(data);
      } catch (error) {
        console.log("error", error.message);
      }
    }
    fetchPostList();
  }, []);

  return (
    <div>
      <h3 className="text-center">PostList</h3>
      <PostTitle posts={postList}></PostTitle>
    </div>
  );
}
