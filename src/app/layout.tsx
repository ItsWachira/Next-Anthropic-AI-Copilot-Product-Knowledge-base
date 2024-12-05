import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { MantineProvider } from "@mantine/core";

import "@mantine/core/styles.css";
import "@copilotkit/react-ui/styles.css";

import { CopilotKit } from "@copilotkit/react-core";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CopilotKit runtimeUrl="/api/copilotkit">
          <MantineProvider>{children}</MantineProvider>
        </CopilotKit>
      </body>
    </html>
  );
}
