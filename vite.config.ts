import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(() => {
  const rootPath = path.resolve(process.cwd());
  const srcPath = `${rootPath}/src/components`;

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "~": rootPath,
        "@": srcPath,
      },
    },
  };
});
