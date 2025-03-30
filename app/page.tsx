import Content from "@/app/markdown/Content.mdx";
export default function Home() {
  return (
    <main className="flex justify-center items-center bg-white min-h-screen">
      <div className="mt-5 relative flex flex-col max-w-7xl w-full justify-center items-center p-5">
        <Content />
      </div>
    </main>
  );
}
