import React, { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai';
import { MoonLoader } from 'react-spinners';
import { Footer } from './Footer';
export const ImageGenerator = () => {
    // OpenAI configuration
    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_API_KEY,
    });

    const openai = new OpenAIApi(configuration);
    // OpenAI API config end


    // setting state for data management - text to search and image size
    const [data, setData] = useState({
        prompt: "",
        size: "",
    })
    const { prompt, size } = data;
    
    // image url and loading state manager
    const [imageURL, setImageURL] = useState("")
    const [loading, setLoading] = useState(false)




    const handleChange = (e) => {
        const { name, value } = e.target
        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    
    
    // image generator func
    const generateImage = async (e) => {
        e.preventDefault()
        if(size === ""){
            return alert('Select a size pls!')
        }
        setLoading(true)
        try{
            const response = await openai.createImage({
              prompt: prompt,
              n: 1,
              size: size,
            });
            setImageURL(response.data.data[0].url)
            setLoading(false)
        }
        catch(err){
            console.log(err)
        }
    }


  return (
    <div id='imageGeneration'>
        <form id='controllers' onSubmit={generateImage}>
            <div className='header'>
                <h1>AI Image Generator</h1>
                <h4><i>Enter Image Description</i></h4>
            </div>
            <input 
            type="text" 
            name='prompt'
            placeholder='e.g:Ironman vs Thanos'
            value={prompt}
            onChange={handleChange}
            required
            />
            <select name="size" defaultValue="Select Image Size" onChange={handleChange} required>
                <option defaultValue="" value="Select Image Size" disabled>Select Image Size</option>
                <option value="256x256">256x256px</option>
                <option value="512x512">512x512px</option>
                <option value="1024x1024">1024x1024px</option>
            </select>
            <div className='x'>
            <button type='submit'>Generate Image</button>
            </div>
        </form>
        <div className='image--container'>
            {loading ? <MoonLoader /> 
            : 
            <img src={imageURL} alt="" />
            }
        </div>
    </div>
  )
}
