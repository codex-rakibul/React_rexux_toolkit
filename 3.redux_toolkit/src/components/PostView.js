import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../app/features/post/postSlice";

const PostView = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <h1>Fetch Data using Redux Toolkit</h1>
      {isLoading && <h3>loading. . .</h3>}
      {error && <h3>error. . .</h3>}
      <section>
        {posts &&
          posts.map((post) => {
            const { id, title, body } = post;
            return (
              <article key={id}>
                <h3 className="title">{title}</h3>
                <p>{body}</p>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default PostView;
