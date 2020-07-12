import React from 'react'

import './Newanimation.css'

const Newanimation = () => {
    return (
        <div className="wrapper">
            <div className="clouds">
                <svg version="1.1" class="cloud-animation"  viewBox="0 0 350 170" preserveAspectRatio="xMinYMin meet">
                    {/* <!-- CLOUD SVG --> */}
                    {/* <path id="cloud" fill="#fff" stroke="#8cd2ff" stroke-width="10" stroke-miterlimit="10" d="M145,71.8c0.5-1.7,0.8-3.5,0.8-5.3c0-10.6-8.6-19.3-19.3-19.3c-2.6,0-5.1,0.5-7.3,1.5																													c-3.7-11-12.4-19.7-23.4-23.4c-0.1,0-0.2-0.1-0.3-0.1C90.5,10.5,76.7,0,60.4,0C39.8,0,23.2,16.6,23.2,37.2c0,3.5,0.5,7,1.4,10.2
                    c4.6-1.5,9.5-1.5,13.8-0.2c-4.3-0.3-8.9,0.5-13.2,2.4c-1.1,0.5-2.1,1.1-3.1,1.7C16,55.6,12,62.7,11.7,70.7c3.2-0.8,6.5-0.7,9.6,0.2
                    c-3.8-0.1-7.7,0.6-11.3,2.5c-1.3,0.7-2.5,1.5-3.7,2.3c-3.6,3.1-5.9,7.8-5.9,12.9c0,9.5,7.7,17.2,17.2,17.2h1.6h122.3
                    c9.5,0,17.2-7.7,17.2-17.2C158.8,80.3,152.8,73.4,145,71.8z"/> */}
                    <circle id="cloud" stroke-miterlimit="10" cx="0" cy="10" r="100" stroke-width="3" fill="rgba(245, 245, 245, 0.582)" />
                    {/* <!-- ANIMATION PATH + OPTIONS --> */}
                    <animateMotion xlinkHref="#cloud" dur="20s" begin="0s" repeatCount="indefinite" path="M1,0c2.3-2.9,2.5-3.1,7.3-10.7s10.7,4.7-1.4,.4s-5.1,2.1-9.1-4.5S3.2,4.8,5.5,3.9z" />

                    <circle id="cloud11" stroke-miterlimit="100" cx="0" cy="10" r="70" stroke-width="3" fill="rgba(245, 245, 245, 0.582)" />
                    <animateMotion xlinkHref="#cloud11" dur="20s" begin="0s" repeatCount="indefinite" path="M1,0c2.3-2.9,2.5-3.1,7.3-10.7s10.7,4.7-1.4,.4s-5.1,2.1-9.1-4.5S3.2,4.8,5.5,3.9z" />
                    <circle id="cloud1" stroke-miterlimit="100" cx="50" cy="10" r="40" stroke-width="3" fill="rgba(245, 245, 245, 0.582)" />
                    <animateMotion xlinkHref="#cloud1" dur="20s" begin="0s" repeatCount="indefinite" path="M1,0c2.3-2.9,2.5-3.1,7.3-10.7s10.7,4.7-1.4,.4s-5.1,2.1-9.1-4.5S3.2,4.8,5.5,3.9z" />

                    <circle id="cloud2" stroke-miterlimit="100" cx="100" cy="10" r="60" stroke-width="3" fill="rgba(245, 245, 245, 0.582)" />
                    <animateMotion xlinkHref="#cloud2" dur="20s" begin="0s" repeatCount="indefinite" path="M1,0c2.3-2.9,2.5-3.1,7.3-10.7s10.7,4.7-1.4,.4s-5.1,2.1-9.1-4.5S3.2,4.8,5.5,3.9z" />

                    <circle id="cloud3" stroke-miterlimit="100" cx="150" cy="10" r="70" stroke-width="3" fill="rgba(245, 245, 245, 0.582)" />
                    <animateMotion xlinkHref="#cloud3" dur="20s" begin="0s" repeatCount="indefinite" path="M1,0c2.3-2.9,2.5-3.1,7.3-10.7s10.7,4.7-1.4,.4s-5.1,2.1-9.1-4.5S3.2,4.8,5.5,3.9z" />
                    <circle id="cloud12" stroke-miterlimit="100" cx="150" cy="10" r="60" stroke-width="3" fill="rgba(245, 245, 245, 0.582)" />
                    <animateMotion xlinkHref="#cloud12" dur="20s" begin="0s" repeatCount="indefinite" path="M1,0c2.3-2.9,2.5-3.1,7.3-10.7s10.7,4.7-1.4,.4s-5.1,2.1-9.1-4.5S3.2,4.8,5.5,3.9z" />

                    <circle id="cloud4" stroke-miterlimit="100" cx="200" cy="40" r="40" stroke-width="3" fill="rgba(245, 245, 245, 0.582)" />
                    <animateMotion xlinkHref="#cloud4" dur="20s" begin="0s" repeatCount="indefinite" path="M1,0c2.3-2.9,2.5-3.1,7.3-10.7s10.7,4.7-1.4,.4s-5.1,2.1-9.1-4.5S3.2,4.8,5.5,3.9z" />
                    <circle id="cloud14" stroke-miterlimit="100" cx="190" cy="20" r="70" stroke-width="3" fill="rgba(245, 245, 245, 0.582)" />
                    <animateMotion xlinkHref="#cloud14" dur="20s" begin="0s" repeatCount="indefinite" path="M1,0c2.3-2.9,2.5-3.1,7.3-10.7s10.7,4.7-1.4,.4s-5.1,2.1-9.1-4.5S3.2,4.8,5.5,3.9z" />

                    <circle id="cloud5" stroke-miterlimit="100" cx="200" cy="10" r="70" stroke-width="3" fill="rgba(245, 245, 245, 0.582)" />
                    <animateMotion xlinkHref="#cloud5" dur="20s" begin="0s" repeatCount="indefinite" path="M1,0c2.3-2.9,2.5-3.1,7.3-10.7s10.7,4.7-1.4,.4s-5.1,2.1-9.1-4.5S3.2,4.8,5.5,3.9z" />

                    <circle id="cloud6" stroke-miterlimit="100" cx="250" cy="10" r="70" stroke-width="3" fill="rgba(245, 245, 245, 0.582)" />
                    <animateMotion xlinkHref="#cloud6" dur="20s" begin="0s" repeatCount="indefinite" path="M1,0c2.3-2.9,2.5-3.1,7.3-10.7s10.7,4.7-1.4,.4s-5.1,2.1-9.1-4.5S3.2,4.8,5.5,3.9z" />

                    <circle id="cloud7" stroke-miterlimit="100" cx="300" cy="10" r="65" stroke-width="3" fill="rgba(245, 245, 245, 0.582)" />
                    <animateMotion xlinkHref="#cloud7" dur="20s" begin="0s" repeatCount="indefinite" path="M1,0c2.3-2.9,2.5-3.1,7.3-10.7s10.7,4.7-1.4,.4s-5.1,2.1-9.1-4.5S3.2,4.8,5.5,3.9z" />

                    <circle id="cloud8" stroke-miterlimit="100" cx="350" cy="10" r="80" stroke-width="3" fill="rgba(245, 245, 245, 0.582)" />
                    <animateMotion xlinkHref="#cloud8" dur="20s" begin="0s" repeatCount="indefinite" path="M1,0c2.3-2.9,2.5-3.1,7.3-10.7s10.7,4.7-1.4,.4s-5.1,2.1-9.1-4.5S3.2,4.8,5.5,3.9z" />

                    <circle id="cloud9" stroke-miterlimit="100" cx="400" cy="10" r="90" stroke-width="3" fill="rgba(245, 245, 245, 0.582)" />
                    <animateMotion xlinkHref="#cloud9" dur="20s" begin="0s" repeatCount="indefinite" path="M1,0c2.3-2.9,2.5-3.1,7.3-10.7s10.7,4.7-1.4,.4s-5.1,2.1-9.1-4.5S3.2,4.8,5.5,3.9z" />
                    <circle id="cloud10" stroke-miterlimit="100" cx="450" cy="10" r="90" stroke-width="3" fill="rgba(245, 245, 245, 0.582)" />
                    <animateMotion xlinkHref="#cloud10" dur="20s" begin="0s" repeatCount="indefinite" path="M1,0c2.3-2.9,2.5-3.1,7.3-10.7s10.7,4.7-1.4,.4s-5.1,2.1-9.1-4.5S3.2,4.8,5.5,3.9z" />
                    <circle id="cloud18" stroke-miterlimit="100" cx="490" cy="10" r="90" stroke-width="3" fill="rgba(245, 245, 245, 0.582)" />
                    <animateMotion xlinkHref="#cloud18" dur="20s" begin="0s" repeatCount="indefinite" path="M1,0c2.3-2.9,2.5-3.1,7.3-10.7s10.7,4.7-1.4,.4s-5.1,2.1-9.1-4.5S3.2,4.8,5.5,3.9z" />
                    <circle id="sun" stroke-miterlimit="100" cx="300" cy="70" r="20" stroke-width="3" fill="rgba(255, 255, 0, 0.662)" />
                    <animateMotion xlinkHref="#sun" dur="20s" begin="0s" repeatCount="indefinite" path="M1,0c2.3-2.9,2.5-3.1,7.3-1.7s1.7,4-1,.4s-5.1,2.1-9.1-4.5S3.2,2,5,3.9z" />
                </svg>
                {/* <svg version="1.1" class="cloud-animation" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 350 200" enable-background="new 0 0 158.8 105.8" xmlSpace="preserve">
                    <circle id="cloud"  stroke-miterlimit="10" cx="50" cy="50" r="40" stroke="white" stroke-width="3" fill="white" />
                    <animateMotion xlinkHref="#cloud" dur="20s"	 begin="0s" repeatCount="indefinite" path="M59.5,38.9c21.3-2.9,22.5-31.1,73.3-10.7s10.7,48.7-16.4,57.4s-56.1,22.1-95.1-4.5S38.2,41.8,59.5,38.9z" />
                </svg> */}
            </div>

        </div >
    )
}


export default Newanimation


