import React from 'react'

export default function PostTitle(props) {
    const {posts} = props;




  return (
    <div>
        {posts.map(post =>(
            <li key={post.id}>{post.title}</li>
        ))}
    </div>
  )
}
