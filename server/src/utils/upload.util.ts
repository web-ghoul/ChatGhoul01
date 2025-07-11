import cloudinary from './cloudinary.util';

const uploadImage = async (file?: { path: string }, folder = "chatghoul"): Promise<string> => {
  if (!file) {
    return undefined;
  }
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(file.path, { folder:`chatghoul/${folder}` }, (error: Error, result: any) => {
      if (result) {
        resolve(result.secure_url);
      } else {
        reject(error);
      }
    });
  });
};

const uploadImages = async (files?: { path: string }[]): Promise<string[]> => {
  if (!files || files.length === 0) {
    return [];
  }
  return Promise.all(
    files.map(
      (file) =>
        new Promise<string>((resolve, reject) => {
          cloudinary.uploader.upload(file.path, (error: Error, result: any) => {
            if (result) {
              resolve(result.secure_url);
            } else {
              reject(error);
            }
          });
        }),
    ),
  );
};

export { uploadImage, uploadImages };