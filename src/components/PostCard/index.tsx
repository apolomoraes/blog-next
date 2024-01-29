/* eslint-disable prettier/prettier */
import { Container, PostCardCover, PostCardHeading } from "./styled";
import Link from "next/link";

export type PostCardProps = {
  slug: string;
  title: string;
  cover: string;
}

export const PostCard = ({slug, title, cover}: PostCardProps) => {

  return (
    <Container>
      <PostCardCover>
        <Link href='/post/[slug]' 
        as={`/post/${slug}`}
        >
          <img src={`https://strapi-blog-s9u9.onrender.com${cover}`} alt={title} />
        </Link>
      </PostCardCover>

      <PostCardHeading>
        <Link href='/post/[slug]' as={`/post/${slug}`}>
          {title}
        </Link>
      </PostCardHeading>
    </Container>
  );
}