import getPost from "@/lib/getPost";

export default async function page({ params }) {
  const { slug } = params;
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

export async function generateMetadata({ params }) {
  const { slug } = params;
  const post = await getPost(slug);

  return { title: post.title };
}
