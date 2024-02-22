"use client";

// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";

interface ProviderProps {
  children: React.ReactNode;
}

function Providers({ children }: ProviderProps) {
  return <NextUIProvider>{children}</NextUIProvider>;
}

export default Providers;
