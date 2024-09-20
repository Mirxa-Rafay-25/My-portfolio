import "./globals.css";
import Navbar from "@/components/Navbar";
import { Open_Sans, Poppins } from "next/font/google";
import { BackgroundBeams } from "@/components/ui/background-beams";

const sans = Open_Sans({ subsets: ["latin"] });

const popin = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Mirxa's Portfolio",
  description: "Created by Muhammad Rafay || Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        {/* Font Awesome Link ------------ */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.css"
          integrity="sha512-U9Y1sGB3sLIpZm3ePcrKbXVhXlnQNcuwGQJ2WjPjnp6XHqVTdgIlbaDzJXJIAuCTp3y22t+nhI4B88F/5ldjFA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* Box Icons Link ------------ */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        ></link>
      </head>
      <body className={popin.className}>
        <Navbar />
        <div className="h-full relative flex flex-col items-center justify-center antialiased">
          <BackgroundBeams />
          <div className="w-full md:max-w-[800px] m-auto z-40">{children}</div>
        </div>
      </body>
    </html>
  );
}
