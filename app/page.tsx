import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      
      {/* Other sections (e.g. About, Education, Projects, Contact) can be imported and added here */}
    </main>
  );
}
