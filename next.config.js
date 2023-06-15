/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: "https://ecommerce-sable-mu-96.vercel.app/",
    DB_URI: "mongodb+srv://karthikSoubramaniane:jCA6Knormyl38C9k@cluster0.tgtkofj.mongodb.net/myshoppingcart?retryWrites=true&w=majority",
   
    NEXTAUTH_URL: "https://ecommerce-sable-mu-96.vercel.app/",
    CLOUD_NAME: "dy4gqliku",
    CLOUDINARY_API_KEY: "216415922422492",
    CLOUDINARY_API_SECRET: "f_8g4gTH8cxmBUvceNS74xbXUo8",

  
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;

