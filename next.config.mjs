/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    URLS_LIST: "https://raw.githubusercontent.com/WebBreacher/WhatsMyName/main/wmn-data.json"
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    // ... otras opciones de configuración de imágenes
  },
};

export default nextConfig;
