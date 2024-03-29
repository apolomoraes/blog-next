/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PostData } from "@/domain/posts/post";
import { Container } from "./styles";
import { Header } from "@/components/Header";
import { MainContainer } from "@/components/MainContainer";
import { PostCard } from "@/components/PostCard";
import { Footer } from "@/components/Footer";

export type HomePageProps = {
  posts: PostData[];
}

export default function HomePage({posts} : HomePageProps) {
  return (
    <>
    <Header />
    <MainContainer>

    <Container>
      {posts && posts.map((post) => (
        <PostCard 
        key={post.id} 
        slug={post.attributes.slug} 
        title={post.attributes.title} 
        cover={post.attributes.cover?.data?.attributes?.formats?.small?.url}/>
        ))
      }
    </Container>
    </MainContainer>
    <Footer />
    </>
  );
}