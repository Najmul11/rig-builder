import RootLayout from "@/components/layouts/RootLayout";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 5000);
  return (
    <div className="min-h-[600px] flex items-center justify-center">
      <div>
        <p className="text-5xl lg:text-8xl text-center">Error 404</p>
        <p className="text-sm font-semibold">
          Grab coffee till I get you back home{" "}
          <span className="text-2xl">☕</span>
        </p>
      </div>
    </div>
  );
};

export default NotFound;

NotFound.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
