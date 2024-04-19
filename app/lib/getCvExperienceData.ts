import { databases } from "@/appwrite";

export const getCvExperienceData = async () => {
  const data = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_EXPERIENCE_COLLECTION_ID!
  );

  const experienceData = data.documents;

  return experienceData;
};
