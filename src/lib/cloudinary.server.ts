let cloudinaryInstance: any = null;

async function getCloudinary() {
  if (!cloudinaryInstance) {
    const loadModule = new Function("m", "return import(m)");
    const cloudinary = await loadModule("cloudinary");
    cloudinary.v2.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "hbld03xh",
      api_key: process.env.CLOUDINARY_API_KEY || "315681416549322",
      api_secret: process.env.CLOUDINARY_API_SECRET || "VA-N6KeiGaH5T1t2GVjqsJvpwlw",
      secure: true
    });
    cloudinaryInstance = cloudinary.v2;
  }
  return cloudinaryInstance;
}

export async function uploadToCloudinary(fileStr: string, folder = "revitalize") {
  const cloudinary = await getCloudinary();
  const result = await cloudinary.uploader.upload(fileStr, {
    folder,
    resource_type: "auto"
  });
  return result.secure_url;
}

export async function deleteFromCloudinary(url: string) {
  const cloudinary = await getCloudinary();
  const parts = url.split("/");
  const fileName = parts[parts.length - 1];
  const publicId = fileName.split(".")[0];
  const folderIndex = parts.indexOf("revitalize");
  const id = folderIndex !== -1 ? parts.slice(folderIndex).join("/").split(".")[0] : publicId;
  await cloudinary.uploader.destroy(id);
}
