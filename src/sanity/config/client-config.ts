import { ClientPerspective } from "next-sanity";

const config = {
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
	dataset: "production",
	apiVersion: "2023-03-09",
	useCdn: false,
	token: process.env.SANITY_TOKEN as string,
	perspective: 'published' as ClientPerspective,
};

export default config;


// import { defineConfig } from 'sanity'

// const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET as string;
// const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string;
// const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION as string;

// export default defineConfig({
//   apiVersion,
//   dataset,
//   projectId,
//   title: 'My Sanity Studio',
//   basePath: '/studio',
//   plugins: [],
//   schema: {
//     types: [],
//   },
// })
