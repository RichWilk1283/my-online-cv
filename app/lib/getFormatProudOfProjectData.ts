import { formatProjectData } from "./formatProjectData";
import { getProjectData } from "./getProjectsData";

export const getFormatProudOfProjectData = async () => {
  const allProjects = await getProjectData();
  const formattedData = await formatProjectData(allProjects);
  const proudOfProject = formattedData[0];

  return proudOfProject;
};
