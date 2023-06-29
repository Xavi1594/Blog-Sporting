import React from 'react';
import { ApiPosts } from '../apiCalls/ApiPosts';

export const BlogHome = () => {
  return (
    <main>
      <section>
        <ApiPosts />
      </section>
    </main>
  );
};
