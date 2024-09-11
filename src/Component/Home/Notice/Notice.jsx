import React from 'react';
import './Notice.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import svg from '../download.svg';

function Notice() {
    const [notice, setNotice] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [fetchError, setFetchError] = React.useState(false);

    React.useEffect(() => {
        axios.get('https://script.googleusercontent.com/macros/echo?user_content_key=IMBvP3YkGJ180ruybJASSINrvMjhF6dVQy9VW2ycB3v7J-fOi9rOYl2joVZ3ELaVA7BvH7i4t4eSpO_sVYUduDStWiZTzCtVm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKNBiWgUg2lmiStpyFTpvNkv5w4jLRJTbSAd9vTTrCJEegBRjQ6INzw18jJTpogxuXRiTe9iqE8u0B2OJQlTKnXNdT-Ud5TSKQ&lib=M2PdwLPwQuVh0iHhzQwfm5YpW_xOSVt-H')
            .then(res => {
                const currentDate = new Date();
                const filteredNotices = res.data.data.filter(item => {
                    const startDate = new Date(item.ActiveDate);
                    const endDate = new Date(item.CloseDate);
                    return currentDate >= startDate && currentDate <= endDate;
                });
                setNotice(filteredNotices);
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
                setFetchError(true);
            });
    }, []);

    return (
        <div className="notice pb-5">
            <h1 className='title'>Notice</h1>
            <div className="notice-content">
                {isLoading ? (
                    <div className="flex justify-center items-center pt-12">
            <svg
              version="1.1"
              id="L1"
              height="150px"
              width="150px"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              enable-background="new 0 0 100 100"
            >
              <circle
                fill="none"
                stroke="#f87171"
                stroke-width="6"
                stroke-miterlimit="15"
                stroke-dasharray="14.2472,14.2472"
                cx="50"
                cy="50"
                r="47"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  dur="5s"
                  from="0 50 50"
                  to="360 50 50"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                fill="none"
                stroke="#f87171"
                stroke-width="1"
                stroke-miterlimit="10"
                stroke-dasharray="10,10"
                cx="50"
                cy="50"
                r="39"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  dur="5s"
                  from="0 50 50"
                  to="-360 50 50"
                  repeatCount="indefinite"
                />
              </circle>
              <g fill="#f87171">
                <rect x="30" y="35" width="5" height="30">
                  <animateTransform
                    attributeName="transform"
                    dur="1s"
                    type="translate"
                    values="0 5 ; 0 -5; 0 5"
                    repeatCount="indefinite"
                    begin="0.1"
                  />
                </rect>
                <rect x="40" y="35" width="5" height="30">
                  <animateTransform
                    attributeName="transform"
                    dur="1s"
                    type="translate"
                    values="0 5 ; 0 -5; 0 5"
                    repeatCount="indefinite"
                    begin="0.2"
                  />
                </rect>
                <rect x="50" y="35" width="5" height="30">
                  <animateTransform
                    attributeName="transform"
                    dur="1s"
                    type="translate"
                    values="0 5 ; 0 -5; 0 5"
                    repeatCount="indefinite"
                    begin="0.3"
                  />
                </rect>
                <rect x="60" y="35" width="5" height="30">
                  <animateTransform
                    attributeName="transform"
                    dur="1s"
                    type="translate"
                    values="0 5 ; 0 -5; 0 5"
                    repeatCount="indefinite"
                    begin="0.4"
                  />
                </rect>
                <rect x="70" y="35" width="5" height="30">
                  <animateTransform
                    attributeName="transform"
                    dur="1s"
                    type="translate"
                    values="0 5 ; 0 -5; 0 5"
                    repeatCount="indefinite"
                    begin="0.5"
                  />
                </rect>
              </g>
            </svg>
          </div>
        ) : fetchError ? (
            <div className="flex justify-center items-center">
              <div className="text-center justify-center items-center">
              <svg width="120px" className=" m-auto" height="120px" viewBox="0 0 16.00 16.00" fill="#e85e5e" stroke="#e85e5e" stroke-width="0.00016"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.128"></g><g id="SVGRepo_iconCarrier"> <path d="m 3 0 c -1.660156 0 -3 1.339844 -3 3 v 7 c 0 1.660156 1.339844 3 3 3 h 10 c 1.660156 0 3 -1.339844 3 -3 v -7 c 0 -1.660156 -1.339844 -3 -3 -3 z m 0 2 h 10 c 0.554688 0 1 0.445312 1 1 v 7 c 0 0.554688 -0.445312 1 -1 1 h -10 c -0.554688 0 -1 -0.445312 -1 -1 v -7 c 0 -0.554688 0.445312 -1 1 -1 z m 3 2 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 4 0 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m -2 3 c -1.429688 0 -2.75 0.761719 -3.464844 2 c -0.136718 0.238281 -0.054687 0.546875 0.183594 0.683594 c 0.238281 0.136718 0.546875 0.054687 0.683594 -0.183594 c 0.535156 -0.929688 1.523437 -1.5 2.597656 -1.5 s 2.0625 0.570312 2.597656 1.5 c 0.136719 0.238281 0.445313 0.320312 0.683594 0.183594 c 0.238281 -0.136719 0.320312 -0.445313 0.183594 -0.683594 c -0.714844 -1.238281 -2.035156 -2 -3.464844 -2 z m -3 7 c -1.105469 0 -2 0.894531 -2 2 h 10 c 0 -1.105469 -0.894531 -2 -2 -2 z m 0 0" fill="#e85e5e"></path> </g></svg>
              <div className="pt-10">
              <p className="text-red-500">Sorry, failed to fetch the latest notices.</p>
              </div>
                
              </div>
            </div>
                ) : (
                    <div className="section-content p-0 m-0">
                        {notice.length === 0 ? (
                            <p>No notices available.</p>
                        ) : (
                            notice.map((item,index) => (
                                <div className='harshit' key={index}>
                                    <img src={svg} alt="download" className='download-svg noticeimg' /> 
                                    <a 
                                    href={item.Link.startsWith('http') ? item.Link : `http://${item.Link}`} 
                                    className='notice-title' 
                                    target='_blank' 
                                    rel='noopener noreferrer'
                                >{item.Name}</a>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Notice;
