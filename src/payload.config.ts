import { buildConfig } from "payload/config";
import { slateEditor } from "@payloadcms/richtext-slate";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import path from 'path'; // Importa 'path' de Node.js

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
  collections: [],
  routes: {
    admin: "/sell",
  },
  admin: {
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
