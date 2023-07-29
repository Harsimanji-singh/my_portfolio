import sanityClient, { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "z6buixxk",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skUDHFUycaVS1UgTeRE3umDB4NMxruWq1Hz0kamLkZAdik0UtBHUna8pbeSupGpkSU2129jbzU8wwpg3Cos9pXzldvYCTpzE5xg8N8AOvny4xcOaBwKDHHTGbGbR6CgxB3YSpmINCCxd5013l2mzPPldoDa52gD5K3pgHASCUKTH9RwIZk5e",
});

export const getUrlFromId = (ref) => {
  // Example ref: file-207fd9951e759130053d37cf0a558ffe84ddd1c9-mp3
  // We don't need the first part, unless we're using the same function for files and images
  const [_file, id, extension] = ref.split("-");
  return `https://cdn.sanity.io/files/z6buixxk/production/${id}.${extension}`;
};
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
