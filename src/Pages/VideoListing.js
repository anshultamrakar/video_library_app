import React from 'react'
import {useState} from "react"
import {videos} from "../Data/VideoData"

const VideoListing = () => {
  return (
    <div>
     <ul>
        {videos.map(video => (
            <li>
                
            </li>
        ))}
     </ul>
    </div>
  )
}

export default VideoListing