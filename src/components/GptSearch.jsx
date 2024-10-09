import React, { useRef } from 'react'
import OpenAI from "openai";

const GptSearch = () => {
    const searchText = useRef(null);
    
    const openai = new OpenAI({
        apiKey: `${process.env.REACT_APP_OPENAI_API_KEY}`,
        dangerouslyAllowBrowser: true
    });
    const handleOnClick = async ()=>{
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are a movie recommendation system which returns maximum 10 names of the movies as per the query comma seperated" },
                {
                    role: "user",
                    content: `${searchText?.current?.value}`,
                },
            ],
        });
        console.log('chatgpt response',completion);
    }
  return (
    <div className="">
      <img
        className="fixed w-full h-full"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_small.jpg"
        alt="background-image"
      />
      <div className="absolute z-100 grid grid-rows-1 grid-flow-col gap-4 w-[55%] left-[30%] top-[25%]">
        <input ref={searchText} className="p-2 col-span-9 rounded-md" placeholder="Ask chatgpt for some movies recommendation"type='text'/>
        <button onClick={handleOnClick}className="p-2 col-span-3 bg-red-900 text-white rounded-md">Search</button>
      </div>
    </div>
  )
}

export default GptSearch
