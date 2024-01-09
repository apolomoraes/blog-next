/* eslint-disable prettier/prettier */
import { PostData } from '@/domain/posts/post';
import { GetStaticProps } from 'next';

const getPosts = async(): Promise<PostData[]> => {
  const posts = await fetch('https://strapi-blog-s9u9.onrender.com/api/posts?populate=*');
  const jsonPosts = await posts.json();
  return jsonPosts.data;
}


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
        <h2 key={post.id}>{post.attributes.content}</h2>
      ))
      }
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: {
      posts
    }
  }
}