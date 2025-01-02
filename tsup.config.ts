import { defineConfig } from "tsup";

export default defineConfig({
    //entryPoints: ["src/index.ts"],
    //entryPoints: ["src/**/*.ts"],
    entryPoints: ["src/index.ts", "src/components/**/*.ts", "src/utils/**/*.ts"],
    format: ["esm"],
    dts: true,
    outDir: "dist",
    clean: true,
    treeshake: true,
    splitting: true,
});