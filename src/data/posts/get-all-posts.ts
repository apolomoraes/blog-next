/* eslint-disable prettier/prettier */
import { PostData } from "@/domain/posts/post";
import { POSTS_URL } from "@/config/app-config";
import { fetchJson } from "@/utils/fetch-json";

interface ApiResponse {
  data: PostData[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export const getAllPosts = async(query = ""): Promise<ApiResponse> => {
  const url = `${POSTS_URL}?&${query}`
  const posts = await fetchJson<ApiResponse>(url);
  return posts;
}