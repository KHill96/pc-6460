import getStoryHTML from "@/actions/getStoryHTML";
import Header from "@/components/Header";
import parse from 'html-react-parser'

const Render = async ({params} : {params: {id:string}}) => {
    const storyContentHTML = await getStoryHTML(params.id)
    const title = storyContentHTML[0].title
    const author = storyContentHTML[0].author
    const html_parse = storyContentHTML[0].text
    return (
        <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
        
        <Header className="">
            <div className="mb-4"></div>
        </Header>
        <h1 className="text-center pb-2 text-3xl">{title}</h1>
        <h2 className="text-center pb-5 text-xl">by {author}</h2>
        <div className="pt-15 m-auto overflow-y-scroll h-full w-10/12">
            {parse(html_parse)}
        </div>
        </div>
    );
}
 
export default Render;