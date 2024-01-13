import getPost from "@/lib/getPost";

interface Pages {
  params: {
    slug: number;
    // other properties if needed
  };
  // other properties if needed
}
export default async function page(pages: Pages) {
  const { slug }: { slug: number } = pages.params;
  const post = await getPost(slug);
  return (
    <div className="py-5">
      <div className="flex w-3/4 mx-auto flex-col">
        <img
          src={post.thumbnail}
          width={500}
          height={500}
          alt={post.description}
        />
        <span className="text-2xl font-bold">{post.title}</span>
        <p className="text-xl font-semibold">{post.description}</p>
        <span className="text-red-500 font-bold text-3xl">${post.price}</span>
      </div>
    </div>
  );
}

export async function generateMetadata(pages: Pages) {
  const { slug } = pages.params;
  const post = await getPost(slug);

  return { title: post.title };
}
