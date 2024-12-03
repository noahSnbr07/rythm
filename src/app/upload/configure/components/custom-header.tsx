import React from "react";

export default function CustomHeader({ title }: { title: string }) {
  return <p className="truncate font-bold text-lg text-muted"> {title} </p>;
}
