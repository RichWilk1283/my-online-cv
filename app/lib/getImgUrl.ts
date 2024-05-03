import { storage } from "@/appwrite";

export const getImgUrl = async (img: string) => {
  const url = storage.getFilePreview(process.env.NEXT_PUBLIC_BUCKET_ID!, img);

  return url.toString();
};
