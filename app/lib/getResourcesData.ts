import { databases } from "@/appwrite";

export const getResourcesData = async () => {
  const data = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_RESOURCES_COLLECTION_ID!
  );

  const resourcesData = data.documents;

  return resourcesData;
};
