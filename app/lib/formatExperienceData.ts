type Job = {
  company: string;
  title: string;
  yearfrom: string;
  yearto: string;
  description: string;
  achievements: string[];
};

export const formatExperienceData = (fetchedData: any) => {
  const formattedData: Array<Job> = [];

  fetchedData.forEach((data: Job) => {
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
