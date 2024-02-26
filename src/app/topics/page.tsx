import Post_create_form from "@/components/posts/post_create_form";
interface TopicShowPageProps {
  params: {
    slug: string;
  };
}

export default function TopicShowpage({ params }: TopicShowPageProps) {
  const { slug } = params;
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold mb-2">{slug}</h1>
      </div>
      <div>
        <Post_create_form slug={slug} />
      </div>
    </div>
  );
}
