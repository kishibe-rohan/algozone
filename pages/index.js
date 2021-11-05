import Head from "next/head";

const posts = [
  { title: "Bubble Sort", excerpt: "This is the bubble sort algorithm" },
  { title: "Bubble Sort 2", excerpt: "This is the bubble sort algorithm" },
  { title: "Bubble Sort 3", excerpt: "This is the bubble sort algorithm" },
  { title: "Bubble Sort 4", excerpt: "This is the bubble sort algorithm" },
];

export default function Home() {
  return (
    <div className="container max-auto px-10 mb-8">
      <Head>
        <title>AlgoZone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <div>
              {post.title}
              {post.excerpt}
            </div>
          ))}
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8"></div>
        </div>
      </div>
    </div>
  );
}
