/* AI Assist: This file renders the landing page hero content for the OSU project home screen. */
import Image from "next/image";

/* AI Assist: This function renders the home page UI.
   Params: none.
   Returns: The JSX for the page hero with logo and title. */
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-500 text-white">
      <Image
        src="/osu-logo.svg"
        alt="Oregon State University Logo"
        width={150}
        height={150}
        style={{ height: "auto" }}
        priority
      />
      <h3 className="text-4xl font-bold mt-4">Hello from baileyx! Deployed using CI/CD via GitHub Actions!</h3>
    </div>
  );
}
