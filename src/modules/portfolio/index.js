import { useEffect } from 'react';
import './index.css'
import {FaGreaterThan,FaLessThan} from 'react-icons/fa'
import project_data from '../data/portfolio-data.json'
import Card from './card'

export default ()=>{

  const billa=(e)=>{
    const ele=document.querySelectorAll(".animatable-card")
    let a=[...ele].forEach((item)=>{
       if(e==="add") item.classList.add("add_box_shadow")
    })
}

useEffect(()=>{    
    let observer = new IntersectionObserver((entries,observer)=>{
      const entry=entries[0]
     
     if(entry.isIntersecting){
          billa("add")
          observer.unobserve(entry.target)
     }
  
  }, {
    root: document.querySelector("#scrollArea"),
    rootMargin: "0px",
    threshold: 0.5,
  });
    let target = document.querySelector(".observe-card-container");
    observer.observe(target);

  return ()=>observer.unobserve(target)
},[])




return <div className='portfolio-section' id='Portfolio'>
    
    <h6 className='text-center fw-light pink-color'>-- personal projects --</h6>
        <h1 className='text-center mb-5'>My Portfolio</h1>
<div id="carouselExampleDark" className="carousel observe-card-container carousel-dark slide" data-bs-ride="carousel">
 
  <div className="carousel-inner position-relative">
  <div className="carousel-indicators">
      {project_data.map((item,index)=><div key={index}>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={index} className={`${index===0?"active":""} bg-white`} aria-current="true" aria-label={`Slide ${index}`}></button>
      </div>)}
  </div>
{project_data.map((item,index)=><div key={index} 
className={`carousel-item py-5 ${index===0 ?"active":""}`} data-bs-interval="500000">
       <Card title={item.title} 
       des={item.description} src={item.image}
       git_link={item["git-link"]} demo_link={item["demo-link"]} tools={item.tools} Approach={item.Approach} />
    </div>

)}

<button className="carousel-control-prev text-white" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <FaLessThan size={15}/>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next text-white" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <FaGreaterThan size={15}/>
    <span className="visually-hidden">Next</span>
  </button>

  </div>
 
</div>
</div>

}
