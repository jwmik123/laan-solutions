import { client } from "@/sanity/lib/client";
import Projects from "./Projects";
export default async function LabsPage() {
  const projects = await client.fetch(`*[_type == "project"]`);

  return (
    <section className="mx-5 mt-32 mb-16 md:mx-10">
      {/* TODO: Add filter */}
      {/* <div className="flex mx-1 my-4 space-x-4">
        <h2 className="text-lg font-bold text-black">Grid</h2>
        <h2 className="text-lg text-black">List</h2>
      </div> */}
      <Projects projects={projects} />
    </section>
  );
}
