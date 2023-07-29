import React from 'react'
import {categories} from "../Data/Category"
import {useState} from "react"

const Home = () => {
  return (
    <div className='Home'>
        <h2>Category</h2>
        <ul className='categorylist'>
           {categories.map(category => (
            <li>
                <img src = {category?.thumbnail} width= "250" height= "200"/>
                <p>{category?.category}</p>
            </li>
           ))}
        </ul>
    </div>
  )
}

export default Home