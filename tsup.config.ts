import { defineConfig } from "tsup";

export default defineConfig({
    //entryPoints: ["src/index.ts"],
    entryPoints: ["src/**/*.ts"],
    format: ["esm"],
    dts: true,
    outDir: "dist",
    clean: true,
    treeshake: true,
    splitting: true,
});