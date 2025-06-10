import { GetServerSideProps } from "next";
import api from "../../lib/axios";

type Post = {
  title: string;
  body: string;
};

type Props = {
  post: Post;
};

export default function ExamplePage({ post }: Props) {
  return (
    <div>
      <h1 data-testid="title">{post.title}</h1>
      <p data-testid="body">{post.body}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await api.get<Post>("/posts/1");
  return {
    props: {
      post: res.data,
    },
  };
};
