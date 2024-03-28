import { databases } from "@/appwrite";
import { formatExperienceData } from "./formatExperienceData";

type Job = {
  company: string;
  title: string;
  yearfrom: string;
  yearto: string;
  description: string;
  achievements: string[];
};

export const getCvExperienceData = async () => {
  const data = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_EXPERIENCE_COLLECTION_ID!
  );

  const experienceData = data.documents;

  const formattedData: Array<Job> = [];

  experienceData.forEach((data) => {
    const job: Job = {
      company: data.company,
      title: data.title,
      yearfrom: data.yearfrom,
      yearto: data.yearto,
      description: data.description,
      achievements: data.achievements,
    };
    formattedData.push(job);
  });

  formattedData.sort((a, b) => {
    return parseInt(b.yearfrom, 10) - parseInt(a.yearfrom, 10);
  });

  return formattedData;
};
