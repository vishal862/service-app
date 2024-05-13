import React from 'react'
import "../styles/Home.scss"
import vg from "../assets/2.webp"
import { AiFillGoogleCircle,AiFillInstagram,AiFillAmazonCircle,AiFillYoutube } from 'react-icons/ai'

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>Marshals</h1>
            <p>Solution to all your problems</p>
        </main>
    </div>

    <div className="home2">
        <img src={vg} alt="" />
        <div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus incidunt illo animi exercitationem, corrupti nihil ab dignissimos. Suscipit, neque? Eaque.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, quisquam. Aperiam praesentium pariatur porro voluptatem cupiditate non! Eum, tempore provident.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, eveniet.
                
            </p>
        </div>
    </div>

    <div className="home3" id='about'>
        <div>
            <h1>Who We are?</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus provident ullam aspernatur, eum et in nobis? Voluptates impedit harum facilis?

                Lorem, ipsum dolor sit amet consectetur adipisicing elit.

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam id quod cum beatae sequi ut natus aspernatur repellat, sint voluptatibus.

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, eligendi.

                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsa rem officiis sunt praesentium harum asperiores voluptatum cupiditate! Tempore eius, ut vitae eveniet optio aliquid nulla.

                Lorem ipsum dolor sit amet.
                
            </p>
        </div>
    </div>
    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{
                    animationDelay: "0.3s"
                }}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>

                <div style={{
                    animationDelay: "0.5s"
                }}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>

                <div style={{
                    animationDelay: "0.7s"
                }}>
                    <AiFillInstagram />
                    <p>Instagram</p>
                </div>

                <div style={{
                    animationDelay: "0.9s"
                }}>
                    <AiFillYoutube/>
                    <p>YouTube</p>
                </div>
            </article>
        </div>
    </div>
    
    </>
  )
}

export default Home