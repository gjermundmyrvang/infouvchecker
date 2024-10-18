import PrivacyPolicy from "@/app/markdown/PrivacyPolicy.mdx";
export default function Home() {
  return (
    <main className="flex justify-center items-center bg-white">
      <div className="mt-5 relative flex flex-col max-w-7xl w-full justify-center items-center px-5">
        <PrivacyPolicy />
      </div>
    </main>
  );
}
