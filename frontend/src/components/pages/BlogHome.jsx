import React from 'react'
import { ApiPosts } from '../apiCalls/ApiPosts'

export const BlogHome = () => {
    return (
      <div>
        <h1>El balón de Gijón</h1>
        <ApiPosts />
      </div>
    );
  };