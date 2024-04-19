type Resource = {
  title: string;
  description: string;
  link: string;
  category: string;
};

export const formatResourcesData = (fetchedData: any) => {
  const formattedData: Array<Resource> = [];

  fetchedData.forEach((data: Resource) => {
    const resource: Resource = {
      title: data.title,
      description: data.description,
      link: data.link,
      category: data.category,
    };
    formattedData.push(resource);
  });

  // const learningResourcesData = formattedData.filter(
  //   (a) => a.category === "Learning"
  // );

  // return learningResourcesData;

  return formattedData;
};
