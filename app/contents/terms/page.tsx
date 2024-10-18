import TermsConditions from "@/app/markdown/TermsConditions.mdx";

export default function Home() {
    return (
      <main className="flex justify-center items-center my-5">
        <div className="relative flex flex-col max-w-7xl w-full justify-center items-center sm:px-5">
          <TermsConditions />
        </div>
      </main>
    );
  }