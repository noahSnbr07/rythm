"use client";

import PageContainer from "@/app/components/page-container";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function VerifyPageContent() {
  const searchParams = useSearchParams();
  const successfulUpload = searchParams.get("success");

  return (
    <>
      <p className="font-bold text-xl">
        {successfulUpload ? "Success" : "Failure"}
      </p>

      <Link
        className="rounded-lg bg-stack px-8 py-4 font-italic text-muted"
        href={"/upload/find"}
      >
        Take me back
      </Link>
    </>
  );
}

export default function page() {
  return (
    <PageContainer>
      <Suspense fallback={<p>Loading...</p>}>
        <VerifyPageContent />
      </Suspense>
    </PageContainer>
  );
}
