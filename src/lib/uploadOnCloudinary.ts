import { cloudinary } from '@/lib/cloudinary';
import { UploadApiResponse } from 'cloudinary';

export async function uploadToCloudinary(
  file: File,
  folder = 'default'
): Promise<UploadApiResponse> {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder },
      (error, result) => {
        if (error) return reject(error);
        if (!result)
          return reject(new Error('No result returned from Cloudinary'));
        resolve(result);
      }
    );
    stream.end(buffer);
  });
}
