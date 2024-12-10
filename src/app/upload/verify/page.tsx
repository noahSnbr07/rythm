"use client";

import PageContainer from "@/app/components/page-container";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function page() {
  const searchParams = useSearchParams();
  const successfulUpload = searchParams.get("success");

  return (
    <PageContainer>
      <p className="text- xl font-bold">
        {successfulUpload ? 'Success' : 'Failure'}
      </p>

      <Link
        className="font-italic px-8 py-4 bg-stack rounded-lg text-muted"
        href={"/upload/find"}>
        Take me back
      </Link>
    </PageContainer>
  )
}