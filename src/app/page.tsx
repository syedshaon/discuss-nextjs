import Topic_Create_Form from "@/components/topics/Topic_Create_Form";
import Topics_list from "@/components/topics/topics_list";
import { Divider } from "@nextui-org/react";
import { fetchTopPosts } from "@/db/queries/posts";
import PostList from "@/components/posts/post_list";

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top Posts</h1>
        <PostList fetchData={fetchTopPosts} />
      </div>
      <div className="border shadow py-3 px-2 text-center">
        <Topic_Create_Form />
        <Divider className="my-3" />
        <h3 className="text-lg mb-3">Topics</h3>
        <Topics_list />
      </div>
    </div>
  );
}
