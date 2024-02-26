import { db } from "@/db";
import Link from "next/link";
import PostShow from "@/components/posts/post_show";
import CommentList from "@/components/comments/comment_list";
import CommentCreateForm from "@/components/comments/comment_create_form";
import paths from "@/paths";
import { fetchCommentsByPostId } from "@/db/queries/comments";
import { Suspense } from "react";
import Post_show_loading from "@/components/posts/post_show_loading";

interface PostShowPageProps {
  params: {
    postId: string;
    slug: string;
  };
}

export default async function postShowPage({ params }: PostShowPageProps) {
  const { postId, slug } = params;

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <Link className="underline decoration-solid" href={paths.topicShow(slug)}>
          {"< "}Back to {slug}
        </Link>
        <Suspense fallback={<Post_show_loading />}>
          <PostShow postId={postId} />
        </Suspense>

        <CommentCreateForm postId={postId} startOpen />
        <CommentList postId={postId} />
      </div>
    </div>
  );
}
