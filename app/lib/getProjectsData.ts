import { databases } from "@/appwrite";

export const getProjectData = async () => {
  const data = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_PROJECTS_COLLECTION_ID!
  );

  const projectsData = data.documents;

  return projectsData;
};
