//import { getCollectionByHandle } from "@lib/data"
import CollectionTemplate from "@/app/components/collections/templates"
import axios from 'axios'
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

async function getCollections(lang: Locale, slug: string) {
  try {
    const response = await axios.get(`${process.env.BACKEND_URL}/api/categories/${lang}/${slug}`);
    return response.data;
  } catch (error) {
    console.error('error', error);
  }
}

export default async function CollectionPage({
	params: { lang, slug },
}: Readonly<{
	params: { lang: Locale, slug: string },
}>) {

  const dict = await getDictionary(lang)
  const categories = await getCollections(lang, slug)
  
  return  <CollectionTemplate collection={categories} />
}
