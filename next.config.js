module.exports = {
  env: {
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    CLOUD_UPDATE_PRESET: process.env.NEXT_PUBLIC_CLOUD_UPLOAD_PRESET || "",
    CLOUD_UPDATE_PRESETVIDEOS:
      process.env.NEXT_PUBLIC_CLOUD_VIDEO_UPLOAD_PRESET || "",
    CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUD_NAME || "",
    CLOUD_API:
      process.env.NEXT_PUBLIC_CLOUD_API ||
      "https://api.cloudinary.com/v1_1/demo/image/upload",
    YOUTUBE__API__KEY: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || "",
  },
  i18n: {
    locales: ["en", "uz"],
    defaultLocale: "uz",
  },
};
