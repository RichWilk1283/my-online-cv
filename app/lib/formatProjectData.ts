type CodingProject = {
  title: string;
  githublink: string;
  techstack: string[];
  order: number;
  description: string;
  images: string[];
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
      images: data.images,
    };
    formattedData.push(project);
  });

  formattedData.sort((a, b) => a.order - b.order);

  return formattedData;
};
