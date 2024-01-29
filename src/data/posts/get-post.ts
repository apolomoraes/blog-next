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

export const getPost = async(slug?: string | string[]): Promise<ApiResponse> => {
  try {
    const slugString = Array.isArray(slug) ? slug[0] : slug;
    const url = `${POSTS_URL}&filters[slug][$eq]=${slugString}`;
    const jsonPosts = await fetchJson<ApiResponse>(url);

    console.log("Posts from getPost:", jsonPosts);

    return jsonPosts;
  } catch (error) {
    console.error("Error in getPost:", error);
    return { data: [], meta: { pagination: { page: 0, pageSize: 0, pageCount: 0, total: 0 } } };
  }
}