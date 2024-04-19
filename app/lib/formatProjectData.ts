type CodingProject = {
  title: string;
  githublink: string;
  techstack: string[];
  order: number;
  description: string;
};

export const formatProjectData = (fetchedData: any) => {
  const formattedData: Array<CodingProject> = [];

  fetchedData.forEach((data: CodingProject) => {
    const project: CodingProject = {
      title: data.title,
      githublink: data.githublink,
      techstack: data.techstack,
      order: data.order,
      description: data.description,
    };
    formattedData.push(project);
  });

  formattedData.sort((a, b) => a.order - b.order);

  return formattedData;
};
