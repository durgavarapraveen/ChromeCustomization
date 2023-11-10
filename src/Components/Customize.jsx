import React, { useState } from 'react'
import './Customize.css'
import photo from '../assets/photo 1.jpeg'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import youtube from '../assets/youtube.png'
import github from '../assets/github (1).png'
import facebook from '../assets/facebook (1).png'
import classroom from '../assets/lecture.png'
import snapchat from '../assets/snapchat.png'
import searchicon from '../assets/search.png'
import mic from '../assets/microphone.png'
import mag from '../assets/search (1).png'
import stack from '../assets/social.png'
import spotify from '../assets/spotify.png'
import netflix from '../assets/netflix.png'
import chatgpt from '../assets/chatbot.png'
import photo2 from '../assets/Praveen Profile Pic.png'
import { TextField } from '@mui/material'

function Customize() {

    const [search, setSearch] = useState([]);

    const handleClick = () => {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(search)}`;

    }

    const handleEvent = (event) => {
        if(event.key === 'Enter') {
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(search)}`;

        }
    }


  return (
    <div className=' h-100 min-h-screen p-0 m-0 bg-30303A'>
        <div className='w-full h-20 flex justify-center items-center'>
            <div className='flex flex-row '>
                <a className='px-1 sm:px-0 md:px-5 ' target='_blank' href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox'>
                    <p className='py-1.5 px-3 font-extralight text-white hover:bg-010101 rounded'>Gmail</p>
                </a>
                <a className='px-1 sm:px-0 md:px-5' target='_blank' href='https://github.com/durgavarapraveen'>
                    <p className='py-1.5 px-3 text-white font-extralight hover:bg-010101 rounded '>GitHub</p>
                </a>
                <a className='px-1 sm:px-0 md:px-5' target='_blank' href='https://leetcode.com/'>
                    <p className='py-1.5 px-3 text-white font-extralight hover:bg-010101 rounded '>LeetCode</p>
                </a>
                <a className='px-1 sm:px-0 md:px-5' target='_blank' href='https://unsplash.com/'>
                    <p className='py-1.5 px-3 text-white font-extralight hover:bg-010101 rounded '>Unsplash</p>
                </a>
            </div>
        </div>


        <div className=' w-full py-10 flex justify-center items-center'>

            <div className=' w-80% h-full border-solid border-2 border-black flex flex-col sm:flex-row '>

                <div className=' sm:w-50% w-full p-5 flex justify-center items-center'>
                    <div className=' '>
                        <main>
                            <div className='atom'>
                                <div className='electron'></div>
                                <div className='electron-alpha'></div>
                                <div className='electron-omega'></div>
                            </div>
                        </main>
                    </div>
                </div>

                <div className='flex flex-row sm:flex-col sm:w-50% w-full pt-20 pb-10 mr-5 '>

                    <div className=' w-full flex flex-wrap justify-end'>

                        <div className='w-10 h-10 flex justify-center items-center m-2'>
                            <a  target='_blank' href='https://www.instagram.com/'><img className='w-40px h-40px' src={instagram}></img></a>
                        </div>

                        <div className='w-10 h-10 flex justify-center items-center m-2'>
                            <a  target='_blank' href='https://www.linkedin.com/feed/'><img className='w-40px h-40px' src={linkedin}></img></a>
                        </div>

                        <div className='w-10 h-10 flex justify-center items-center m-2'>
                            <a  target='_blank' href='https://www.youtube.com/'><img className='w-40px h-40px' src={youtube}></img></a>
                        </div>

                        <div className='w-10 h-10 flex justify-center items-center m-2'>
                            <a  target='_blank' href='https://www.facebook.com/'><img className='w-40px h-40px' src={facebook}></img></a>
                        </div>

                        <div className='w-10 h-10 flex justify-center items-center m-2'>
                            <a  target='_blank' href='https://accounts.snapchat.com/v2/welcome'><img className='w-40px h-40px' src={snapchat}></img></a>
                        </div>

                        <div className='w-10 h-10 flex justify-center items-center m-2'>
                            <a  target='_blank' href='https://github.com/durgavarapraveen'><img className='w-40px h-40px' src={github}></img></a>
                        </div>

                         <div className='w-10 h-10 flex justify-center items-center m-2'>
                            <a  target='_blank' href='https://classroom.google.com/u/2/h'><img className='w-40px h-40px' src={classroom}></img></a>
                        </div>
                        
                    </div>

                    <div className='flex justify-end items-center w-full h-120px pt-10' style={{borderRadius: '50%'}}>
                        <div className='mr-20 relative' style={{borderRadius: '50%'}}>
                            <img className='w-80px h-full' style={{borderRadius: '50%'}} src={photo} />
                            <img className='w-50px absolute top-10 right-10' style={{borderRadius: '50%'}} src={photo2} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='w-full sm:py-10 flex items-center justify-center'>

            <div className='flex md:flex-row flex-col-reverse'>
                <div className='flex row '>
                    <div className='flex row bg-#565656 items-center justify-center mx-2 rounded-bl-xl'>
                        <img src={searchicon} className='h-40px m-2 cursor-pointer'   />
                        {/* <input value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={handleEvent} className='b-none outline-none h-40px bg-C5C5C5 flex items-center text-lg mx-3' placeholder='Search...' type='text' />  */}
                        <input value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={handleEvent} className='bg-#565656 border-none outline-none text-white text-xl w-full' placeholder='Search...' type='text' />
                    </div>
                    <div className='bg-#565656 flex items-center justify-center mx-1 rounded-tr-xl'>
                        <img className='p-2 cursor-pointer sm:w-60px sm:h-60px w-40px h-40px' src={mag} onClick={handleClick} />
                    </div>
                    <div className='bg-#565656 flex items-center justify-center mx-1 rounded-tr-xl'>
                        <img className='p-2 cursor-pointer sm:w-60px sm:h-60px w-40px h-40px' src={mic} />
                    </div>
                </div>
                <div className=' flex items-center '>
                    <h1 className='text-3xl font px-5 text-center w-full py-5 sm:py-0'>
                        Coding is Love ❤️
                    </h1>
                </div>
            </div>
        </div>

        <div className='w-full py-10 flex items-center justify-center'>
            <div className=' grid grid-cols-2 sm:grid-cols-3 '>
                <div className='bg-white p-2 m-1 rounded-lg'>
                    <a target='_blank' href='https://www.youtube.com/' className='flex row'>
                        <img src={youtube} className='w-30%'/>
                        <div className='flex flex-col  w-70% justify-center justify center'>
                            <span className='name text-center text-xl'>Youtube</span>
                            {/* <span className='name text-center text-sm'>youtube.com</span> */}
                        </div>
                    </a>
                </div>
                <div className='bg-white p-2 m-1 rounded-lg'>
                    <a target='_blank' href='https://stackoverflow.com/' className='flex items-center'>
                        <img src={stack} className='w-30%'/>
                        <div className='flex flex-col  w-70% justify-center'>
                            <span className='name text-center text-xl'>StackOverFlow</span>
                        </div>
                    </a>
                </div>
                <div className='bg-white p-2 m-1 rounded-lg'>
                    <a target='_blank' href='https://chat.openai.com/' className='flex row'>
                        <img src={chatgpt} className='w-30%'/>
                        <div className='flex flex-col mx-2  w-70% justify-center'>
                            <span className='name text-center text-xl'>ChatGpt</span>
                        </div>
                    </a>
                </div>
                <div className='bg-white p-2 m-1 rounded-lg'>
                    <a target='_blank' href='https://netflix.com/' className='flex items-center'>
                        <img src={netflix} className='w-30%' />
                        <div className='flex flex-col w-70% justify-center'>
                            <p className='name text-center text-xl'>Netflix</p>
                        </div>
                    </a>
                </div>
                <div className='bg-white p-2 m-1 rounded-lg'>
                    <a target='_blank' href='https://open.spotify.com/' className='flex items-center'>
                        <img src={spotify} className='w-30%' />
                        <div className='flex flex-col w-70% justify-center'>
                            <p className='name text-center text-xl'>Spotify</p>
                        </div>
                    </a>
                </div>
                <div className='bg-white p-2 m-1 rounded-lg'>
                    <a target='_blank' href='https://github.com/durgavarapraveen' className='flex items-center'>
                        <img src={github} className='w-30%' />
                        <div className='flex flex-col w-70% justify-center'>
                            <p className='name text-center text-xl'>GitHub</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Customize