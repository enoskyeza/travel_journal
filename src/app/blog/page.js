'use client'
import React, { useState, useEffect } from "react";
import '@/components/styles.css'

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from the API
    fetch('http://127.0.0.1:8000/blog/posts/')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <>
      <div>
        <h1>Blog Posts</h1>
        {posts.length ? (
        <ul>
          {/* Render each post */}
          {posts.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.copy}</p>
              {/* Render other post details as needed */}
            </li>
          ))}
        </ul>
        ) :
            <p>No post available</p>

        }
      </div>
    </>
  );
}

