import { databases } from "@/appwrite";

type CodingProject = {
  title: string;
  githublink: string;
  techstack: string[];
  order: number;
};

export const getProjectData = async () => {
  const data = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_PROJECTS_COLLECTION_ID!
  );

  const projectsData = data.documents;

  const dataAsArray: Array<CodingProject> = [];

  projectsData.forEach((data) => {
    const project: CodingProject = {
      title: data.title,
      githublink: data.githublink,
      techstack: data.techstack,
      order: data.order,
    };
    dataAsArray.push(project);
  });

  return dataAsArray;
};
