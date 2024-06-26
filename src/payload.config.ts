import { buildConfig } from "payload/config";
import { slateEditor } from "@payloadcms/richtext-slate";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { Users } from "./collections/Users";
import path from "path";
import dotenv from "dotenv";

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
  collections: [Users],
  routes: {
    admin: "/sell",
  },
  admin: {
    user: "users",
    bundler: webpackBundler(),
    meta: {
      titleSuffix: "- Gramaphenia",
      favicon: "/favicon.ico",
      ogImage: "/thumbnail.jpg",
    },
  },
  rateLimit: {
    max: 200,
  },

  editor: slateEditor({}), // Corregido el nombre 'aditor' a 'editor'
  db: mongooseAdapter({
    url: process.env.MONGODB_URL!,
  }),

  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"), // Usa 'path.resolve' correctamente
  },
});
