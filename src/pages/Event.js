import React from 'react'
import videobg from "../assets/svid2.mp4"

export default function Event()
{
    return (
        <>

            <div className="bgvideolg">
                <video src={videobg} autoPlay loop muted />
            </div>  

            <h1 className="text-white text-center display-1 mt-10">EVENTS</h1>

            <div className='eventpage'>
                <main class="epage-content">
                    <div class="ecard">
                        <div class="econtent">
                        <h2 class="etitle">Pinewood Derby</h2>
                        <p class="ecopy">Participants build and race a soapbox car, applying basic physics and mechanical principals</p>
                        <a class="ebtn" href="https://ugf11b5z0iy.typeform.com/to/rohJWYAm">Register</a>
                        </div>
                    </div>
                    <div class="ecard">
                        <div class="econtent">
                        <h2 class="etitle">Maze Solver</h2>
                        <p class="ecopy">Line tracing cars coded by players have to make their way through a maze. The bot that solves the maze the fastest wins</p>
                        <a class="ebtn" href="https://ugf11b5z0iy.typeform.com/to/rohJWYAm">Register</a>
                        </div>
                    </div>
                    <div class="ecard">
                        <div class="econtent">
                        <h2 class="etitle">Smart Football</h2>
                        <p class="ecopy">Participants try to shoot a goal against a robot goalkeeper at the goal post</p>
                        <a class="ebtn" href="https://ugf11b5z0iy.typeform.com/to/rohJWYAm">Register</a>
                        </div>
                    </div>
                    <div class="ecard">
                        <div class="econtent">
                        <h2 class="etitle">Mission Impossible</h2>
                        <p class="ecopy">Participants dodge the laser beams and cross the three levels, each harder than the previous one</p>
                        <a class="ebtn" href="https://ugf11b5z0iy.typeform.com/to/rohJWYAm">Register</a>
                        </div>
                    </div>

                    <div class="ecard">
                        <div class="econtent">
                        <h2 class="etitle">Piano Tiles </h2>
                        <p class="ecopy">Players walk on tiles creating the notes of piano as they walk</p>
                        <a class="ebtn" href="https://ugf11b5z0iy.typeform.com/to/rohJWYAm">Register</a>
                        </div>
                    </div>
                    <div class="ecard">
                        <div class="econtent">
                        <h2 class="etitle">Siesmic Shutdown</h2>
                        <p class="ecopy">Participants have to build an earthquake-proof building using sticks, straws and other materials given which can last the longest in the earthquake simulator.</p>
                        <a class="ebtn" href="https://ugf11b5z0iy.typeform.com/to/rohJWYAm">Register</a>
                        </div>
                    </div>

                    
                </main>
            </div>
            </>
    )
}
