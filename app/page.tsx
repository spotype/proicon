import getAllPost from "@/lib/getAllPost";
import Link from "next/link";

export default async function Home() {
  const posts = await getAllPost();
  return (
    <main>
      <div className="mx-auto flex w-3/4 mt-5">
        <div className="grid grid-cols-4 w-full gap-5">
          {posts.products.map((res: any) => {
            return (
              <Link
                href={`/${res.id}`}
                key={res.id}
                className="w-full flex shadow-md rounded-xl h-[400px] flex-col"
              >
                <img
                  src={res.thumbnail}
                  className="rounded-t-xl h-48 w-full object-cover object-center"
                  alt=""
                />
                <div key={res.id} className="w-full p-5">
                  <span>{res.title}</span>
                  <p>{res.description}</p>

                  <span className="text-red-400 font-bold text-2xl mt-2">
                    ${res.price}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
