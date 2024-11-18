import { Poppins } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./global.css";
import { Flowbite, theme } from "flowbite-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-full bg-gray-100">
      <body className={twMerge(poppins.className, "min-h-full")}>
        <Flowbite
          theme={{
            theme: {
              textInput: {
                field: {
                  input: {
                    colors: {
                      gray: twMerge(
                        theme.textInput.field.input.colors.gray,
                        "focus:border-red-500 focus:ring-red-500"
                      ),
                    },
                  },
                },
              },
              select: {
                field: {
                  select: {
                    colors: {
                      gray: twMerge(
                        theme.textInput.field.input.colors.gray,
                        "focus:border-red-500 focus:ring-red-500"
                      ),
                    },
                  },
                },
              },
              textarea: {
                colors: {
                  gray: twMerge(
                    theme.textInput.field.input.colors.gray,
                    "focus:border-red-500 focus:ring-red-500"
                  ),
                },
              },
              button: {
                color: {
                  submit: "bg-red-500 text-white",
                },
              },
            },
          }}
        >
          {children}
        </Flowbite>
      </body>
    </html>
  );
}
