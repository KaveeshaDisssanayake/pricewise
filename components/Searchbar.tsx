"use client"


import { FormEvent, useState } from "react";


const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const isVAlidAmazonProductURL = (url : string) => {
       try {
        const parsedURL = new URL(url);
        const hostname = parsedURL.hostname;

        if(hostname.includes('amazom.com')|| 
           hostname.includes('amazon.') ||
           hostname.endsWith('amazon')
           ){
            return true;
           }
       } catch (error) {
        return false;
       }
  }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const isValidLink =  isVAlidAmazonProductURL(searchPrompt);


      if(!isValidLink) return alert('Please provide a valid Amazon link')
       try {
        setIsLoading(true);

        
       } catch (error) {
        console.log(error);
       } finally{
        setIsLoading(false);
       }
    }
  return (
    <form action="" className='flex flex-wrap mt-12' onSubmit={handleSubmit}>
         <input 
         type="text"
         value={searchPrompt}
         onChange={(e)=> setSearchPrompt(e.target.value)}
         placeholder="Enter Product Link"
         className="searchbar-input"
         />

         <button 

         type="submit"
         className="searchbar-btn"
         disabled={searchPrompt === ''}
         >
           {isLoading ? 'Searching...' : 'Search'}
         </button>
    </form>
  )
}

export default Searchbar