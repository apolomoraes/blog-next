/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { getAllPosts } from "@/data/posts/get-all-posts";
import { getPost } from "@/data/posts/get-post";
import { PostData } from "@/domain/posts/post";
import { GetStaticPaths, GetStaticProps } from "next/types";

export type DynamicPostProps = {
  post: PostData;
}

const DynamicPost = ({ post }: DynamicPostProps) => {
  console.log("Post in DynamicPost:", post[0].attributes);

  // if (!post[0] || !post[0].attributes) {
  //   console.error("Post or post.attributes is null or undefined:", post[0]);
  //   return <p>Post não encontrado</p>;
  // }

  return (
    <p>
      Feito com ❤️ por <a href='https://www.linkedin.com/in/apolomoraes/'>Apolo Moraes</a>
    </p>
  )
}

export default DynamicPost;

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const numberOfPosts = (await getAllPosts()).meta.pagination.total;
    const posts = await getAllPosts(`pagination[start]=0&pagination[limit]=${numberOfPosts}`);

    console.log(numberOfPosts)
    if (!posts || !posts.data) {
      return {
        paths: [],
        fallback: false,
      };
    }

    return {
      paths: posts.data.map((post) => {
        return {
          params: {
            slug: post.attributes.slug
          }
        }
      }),
      fallback: false
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
    return {
      paths: [],
      fallback: false,
    }; 
  }
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  try{
    const posts = await getPost(ctx.params?.slug);

    return {
      props: {
        post: posts.data[0] || null
      }
    }
  } catch(error){
    console.error("Error in getStaticProps:", error);
    return {
      props: {
        post: null,
      },
    };
  } 
}