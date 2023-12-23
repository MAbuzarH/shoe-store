import { createClient } from "next-sanity";
export const Client = createClient({
    apiVersion:'2023-07-11',
    dataset : "production",
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    token:process.env.SANITY_ACESS_TOKEN,
    useCdn:true
});