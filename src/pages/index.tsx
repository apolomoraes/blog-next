/* eslint-disable prettier/prettier */
import { PostData } from '@/domain/posts/post';
import { GetStaticProps } from 'next';
import { getAllPosts } from '@/data/posts/get-all-posts';
import HomePage from '@/containers/HomePage';

export type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  // const [posts, setPosts] = useState<PostData[]>([]);

  // useEffect(() => {
  //   getPosts().then((response) => setPosts(response));
  // }, [posts]);

  return (
    <HomePage posts={posts} />
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: {
      posts
    }
  }
}