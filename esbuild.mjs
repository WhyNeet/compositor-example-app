import * as esbuild from "esbuild";
import { esbuildDecorators } from "@anatine/esbuild-decorators";

await esbuild.build({
  entryPoints: ["src/*"],
  outdir: "dist",
  plugins: [esbuildDecorators({ tsconfig: "./tsconfig.json" })],
});
