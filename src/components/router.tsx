import { useRouter } from "next/router";
import { useEffect } from "react";

const Router: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.isFallback) {
      router.push("/");
    }
  }, [router.isFallback]);

  return null;
};

export default Router;
