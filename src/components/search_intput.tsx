"use client";
import { Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import * as actions from "@/actions";

export default function Search_intput() {
  const searchParams = useSearchParams();
  return (
    <form action={actions.search}>
      <Input name="term" type="text" defaultValue={searchParams.get("term") || ""} />
    </form>
  );
}
