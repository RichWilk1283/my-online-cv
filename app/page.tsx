import NavBoard from "@/components/mainpage/NavBoard";
import Profile from "@/components/mainpage/Profile";
import Skills from "@/components/mainpage/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Profile />
      <Skills />
      <NavBoard />
    </main>
  );
}
