/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MONGO_URI:
      "mongodb+srv://ahmed:ahmed@edify.9anuaq1.mongodb.net/portfolio?retryWrites=true&w=majority",
    // "mongodb+srv://ahmed:ahmed.9anuaq1.mongodb.net/portfolio?retryWrites=true&w=majority&appName=edify",
    NEXTAUTH_SECRET: "wiuroiewmx#$#13213",
    SECURE_URL: "AhmadUShopEComeraceStore",
  },
};

export default nextConfig;
