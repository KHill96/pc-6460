import getStoriesSearch from "@/actions/getStoriesSearch";
import Header from "@/components/Header";
import PageContent from "@/components/PageContent";

const Search = async ({params} : {params: {term:string}}) => {
    const results = await getStoriesSearch(params.term)
    return(
        <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">    
            <Header className="">
                <div className="mb-4"></div>
            </Header>
            <div className="mt-2 mb-7 px-6">
                <div className="flex justify-between items-center font-semibold">
                </div>
                <div> 
                    {results.length ? (
                        <><h1>
                            Results for {params.term}
                        </h1><PageContent stories={results}/></>
                    ):
                    (
                        <h1 className="text-xl text-center">No Results for {params.term}</h1>
                    )                    
                    }     
                    
                </div>
                </div>
            </div>
    );
}
 
export default Search;