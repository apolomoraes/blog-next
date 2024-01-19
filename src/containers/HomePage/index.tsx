/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PostData } from "@/domain/posts/post";
import { Container } from "./styles";
import { Header } from "@/components/Header";

export type HomePageProps = {
  posts: PostData[];
}

export default function HomePage({posts} : HomePageProps) {
  return (
    <>
    <Header />
    <Container>
      {posts && posts.map((post) => (
        <h2 key={post.id}>{post.attributes.title}</h2>
      ))
      }
    </Container>
    </>
  );
}