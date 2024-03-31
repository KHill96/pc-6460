import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import PageContent from "@/components/PageContent";
import getStories from "@/actions/getStories";

import Link from "next/link";
import Image from "next/image";

export const revalidate = 0;

export default async function Home() {
  const stories = await getStories()
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">
            Welcome!
          </h1>
          
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center font-semibold">
          <h1>
            Newest Additions
          </h1>
        </div>
      <div>          
          <PageContent stories={stories}/>
      </div>
      </div>
    </div>
  )
}