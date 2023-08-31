import { useEffect ,useState,useRef} from 'react'
import './index.css'
import Button from '../../button'
import { AiFillAlipaySquare } from 'react-icons/ai'
export default ()=>{
    const [state,setState]=useState(true)
    const [state1,setState1]=useState(false)
    const videoref=useRef()
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    useEffect(()=>{
        setTimeout(()=>{
          document.querySelector(".video-play-container").classList.add("opacity-one")
        },1000)
      },[])
    
return<div className='hero-section' id="Home">
    <div className={`${isMobile ?"change-video-value":""} video-container position-relative`}>
        <video ref={videoref} autoPlay muted  loop onClick={()=>{
            if (videoref.current.paused){videoref.current.play();setState(true)}
            else {videoref.current.pause();setState(false)}
        }}>
            <source src={`hero-videos/${isMobile?"kutti_puli.mp4":"pacific_rim_laptop.mp4"}`} type="video/mp4" />
        </video>
        <span className="position-absolute video-play-container text-center rounded">
        {state1 ?  <Button className='not-show  audio-play-button' onClick={()=>{videoref.current.muted=true;setState1(false)}}>mute</Button>
            :<Button className='audio-play-button' onClick={()=>{videoref.current.muted=false;setState1(true)}}>unmute</Button>
            }&nbsp;&nbsp;
          {state ?  <Button className='video-play-button' onClick={()=>{videoref.current.pause();setState(false)}}>Stop</Button>
            :<Button className='not-show video-play-button' onClick={()=>{videoref.current.play();setState(true)}}>Play</Button>
            }
        </span>
    </div>
</div>
}
