/* eslint-disable prettier/prettier */
import { PostData } from "@/domain/posts/post";
import { POSTS_URL } from "@/config/app-config";
import { fetchJson } from "@/utils/fetch-json";

export const getAllPosts = async(): Promise<PostData[]> => {
  const posts = await fetchJson<PostData[]>(POSTS_URL);
  return posts;
}