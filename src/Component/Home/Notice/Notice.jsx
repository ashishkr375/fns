import React from 'react'
import './Notice.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import svg from '../download.svg'

function Notice() {
    const [notice, setNotice] = React.useState([])
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
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    console.log(notice)
  return (
    <>
    <div className="notice">
     <h1>Notice</h1>
     <div className="notice-content">
        {notice.map((item, index) => (
            <div className='harshit'>
                <img src={svg} alt="download" className='download-svg'/>
            <Link to={`https://${item.Link}`} key={index} className='notice-title'>{item.Name }</Link>
            </div>
        ))}
     </div>
    </div>
    </>
  )
}

export default Notice