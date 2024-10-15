import React, { useState } from 'react';
import axios from 'axios';

const FaceApi = () => {
    const [textPrompt, setTextPrompt] = useState(''); // State to store the text prompt
    const [videoUrl, setVideoUrl] = useState('');     // State to store the video URL
    const [loading, setLoading] = useState(false);    // State to show loading indicator
    const [progress, setProgress] = useState(0);      // State to track progress

    const dataFetch = async () => {
        setLoading(true);  // Set loading to true when request starts

        const url = `https://runwayml.p.rapidapi.com/gen3/video`;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-rapidapi-key': '6188d2ffa4msh2227d11c4195b6ap17191ejsn814430cee4f0',
                'x-rapidapi-host': 'runwayml.p.rapidapi.com',
            },
            data: JSON.stringify({
                text_prompt: textPrompt,  // User-entered text prompt
                model: "gen3",
                width: 1344,
                height: 768,
                motion: 5,
                seed: 0,
                callback_url: "",
                time: 5
            })
        };

        try {
            // Make the API request to generate the video
            const response = await axios.post(url, {}, options);
            const uuid = response.data.uuid;  // Get the UUID of the generated video
            checkStatus(uuid);  // Check the status of the video generation
        } catch (error) {
            console.error("Error during video generation", error);
            setLoading(false);  // Stop loading on error
        }
    };

    // Function to check the video generation status
    const checkStatus = async (uuid) => {
        const statusUrl = `https://runwayml.p.rapidapi.com/status?uuid=${uuid}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '6188d2ffa4msh2227d11c4195b6ap17191ejsn814430cee4f0',
                'x-rapidapi-host': 'runwayml.p.rapidapi.com',
            }
        };

        let progressCheck = true;
        while (progressCheck) {
            try {
                const response = await axios.get(statusUrl, options);
                const status = response.data.status;

                if (status === 'success') {
                    setVideoUrl(response.data.url);  // Set the video URL if the process is successful
                    setLoading(false);  // Stop loading when video is ready
                    progressCheck = false;  // Stop checking the status
                } else {
                    setProgress(response.data.progress * 100);  // Update progress percentage
                }
            } catch (error) {
                console.error("Error checking video status", error);
                progressCheck = false;
                setLoading(false);  // Stop loading on error
            }

            await new Promise((r) => setTimeout(r, 5000));  // Check status every 5 seconds
        }
    };

    // Form submission to trigger the dataFetch function
    const handleSubmit = (e) => {
        e.preventDefault();
        dataFetch();  // Trigger the API call when form is submitted
    };

    return (
        <div>
            <h1>Generate a Video with Text Prompt</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={textPrompt}
                    onChange={(e) => setTextPrompt(e.target.value)}  // Update text prompt state
                    placeholder="Enter your text prompt"
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Generating...' : 'Generate Video'}
                </button>
            </form>
            
            {/* Show progress while loading */}
            {loading && <p>Progress: {progress}%</p>}

            {/* Conditionally render video and download link if videoUrl is available */}
            {videoUrl && (
                <div>
                    <h2>Generated Video:</h2>
                    <video src={videoUrl} controls width="600" />
                    <br />
                    <a href={videoUrl} download="generated_video.mp4">
                        <button>Download Video</button>
                    </a>
                </div>
            )}
        </div>
    );
}

export default FaceApi;
