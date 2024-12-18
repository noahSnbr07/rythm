"use client";

import PageContainer from "@/app/components/page-container";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function Page() {
  const searchParams = useSearchParams();
  const successfulUpload = searchParams.get("success");

  return (
    <PageContainer>
      <p className="font-bold text-xl">
        <Suspense fallback={` loading ...`}>
          {successfulUpload ? "Success" : "Failure"}
        </Suspense>
      </p>

      <Link
        className="rounded-lg bg-stack px-8 py-4 font-italic text-muted"
        href={"/upload/find"}
      >
        Take me back
      </Link>
    </PageContainer>
  );
}
