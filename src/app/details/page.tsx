"use client";

import PageContainer from "@/app/components/page-container";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

const ActualPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    if (!id) {
      console.error("No ID found in search params");
      return;
    }

  }, [id]);

  return (
    <PageContainer hideFooter>
      <p className="font-bold text-xl">FUCK</p>
      <p className="font-italic text-sm text-muted">{id}</p>
    </PageContainer>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ActualPage />
    </Suspense>
  );
}