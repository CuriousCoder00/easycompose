import cloudinary from "./cloudinary.config";

export const uploadToCloudinary = async (file: any, name: string) => {
    const res = await cloudinary.uploader.upload(file, {
        folder: 'easy-compose/assets',
        format: 'webp',
        transformation: [
            { width: 200, height: 200, crop: 'fill' }
        ],
        public_id: name,
        allowed_formats: ['webp', 'png', 'jpg', 'jpeg']
    }, (error: any, result: any) => {
        if (error) {
            return error;
        }
        if (result) {
            return result;
        }
    });
    return { result: res, url: res.secure_url };
}