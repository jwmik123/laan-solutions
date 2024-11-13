import { client } from "@/sanity/lib/client";
import Sidebar from "./Sidebar";
import Main from "./Main";

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = await client.fetch(
    `*[_type == "project" && slug.current == $slug][0]`,
    { slug }
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="relative flex flex-col w-full px-5 md:flex-row md:px-10">
      <Sidebar project={project} />
      <Main project={project} />
    </main>
  );
}
