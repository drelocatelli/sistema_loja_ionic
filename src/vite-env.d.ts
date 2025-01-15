/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string; // Add your environment variables here
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }