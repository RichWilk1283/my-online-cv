import SideMenu from "@/components/cvpage/SideMenu";

export default function CvLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="">
      <SideMenu />
      {children}
    </section>
  );
}
