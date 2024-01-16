/* eslint-disable prettier/prettier */
import { PostData } from '@/domain/posts/post';
import { GetStaticProps } from 'next';
import { getAllPosts } from '@/data/posts/get-all-posts';

export type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  // const [posts, setPosts] = useState<PostData[]>([]);

  // useEffect(() => {
  //   getPosts().then((response) => setPosts(response));
  // }, [posts]);

  return (
    <div>
      {posts && posts.map((post) => (
        <h2 key={post.id}>{post.attributes.title}</h2>
      ))
      }
    </div>
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