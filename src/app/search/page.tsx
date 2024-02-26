import { redirect } from "next/navigation";
import PostList from "@/components/posts/post_list";
import { fetchPostBySearchTerms } from "@/db/queries/posts";

interface SearchPageProps {
  searchParams: {
    term: string;
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { term } = searchParams;
  if (!term) {
    redirect("/");
  }
  return (
    <div>
      <PostList fetchData={() => fetchPostBySearchTerms(term)} />
    </div>
  );
}
