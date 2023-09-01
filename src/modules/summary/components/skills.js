
import { useEffect,useCallback } from 'react'
import './skills.css'
import LineAnimate from './Animation/line-animate'
import CircleAnimate from './Animation/circle-animate'
import professionalskill_data from '../../data/professionalskill-data.json'
import technicalskill_data from '../../data/technicalskill-data.json'


export default ()=>{

    useEffect(()=>{

        const ele=document.querySelector(".skills-section")

        technicalskill_data.forEach((item)=>{
            ele.style.setProperty(`--${item.className}-percent`,item.percent+"%")
        })
        professionalskill_data.forEach((item)=>{
            let newvalue=(360-(360*item.level/100))
            ele.style.setProperty(`--${item.className}-percent`,newvalue)
        })



    },[])

    const billa=(e)=>{
        const ele=document.querySelectorAll(".animatable-line")
        let a=[...ele].forEach((item)=>{
           if(e==="add") item.classList.add("pause-animation-line")
           else item.classList.remove("pause-animation-line")
        })
    }
    const jilla=(e)=>{
        const ele=document.querySelectorAll(".animatable-circle")
        let a=[...ele].forEach((item)=>{
           if(e==="add") item.classList.add("pause-animation-circle")
           else item.classList.remove("pause-animation-circle")
        })

    }
    
    useEffect(()=>{
        jilla("add")    
        let observer = new IntersectionObserver((entries,observer)=>{
        if (!entries[0].isIntersecting)return
        jilla("removed")
        observer.unobserve(entries[0].target)
    }, {
        root: document.querySelector("#scrollArea"),
        rootMargin: "0px",
        threshold: 0.3,
      });
      let target= document.querySelector(".observe-summary-circle");
      observer.observe(target);

    return ()=>{
        observer.unobserve(target);
    }
    },[])


    useEffect(()=>{
        billa("add")    
            let observer = new IntersectionObserver((entries,observer)=>{
            if (!entries[0].isIntersecting)return
            billa("removed") 
            observer.unobserve(entries[0].target)  
          }, {
            root: document.querySelector("#scrollArea"),
            rootMargin: "0px",
            threshold: 0.3,
          });
          let target= document.querySelector(".observe-summary-line");
          observer.observe(target);
    
        return ()=>{
            observer.unobserve(target)
        }
    },[])



    return <div className="pt-4 skills-section d-md-flex ">
            <div className='pt-4 technical-skills flex-grow-1'>
                <h6 className='mx-auto text-width-fit'>Technical skills</h6>
                <ul className="observe-summary-line">
                    {
                        technicalskill_data.map((item,index)=><li key={index}>
                        <LineAnimate percent={item.percent} label={item.label} className={item.className} />
                        </li>)}
                    
                   
                </ul>
            </div>
            <div className='pt-4 professional-skills flex-grow-1'>
                 <h6 className='text-width-fit mx-auto mb-md-5'>Professional skills</h6>
                    <ul className='d_grid observe-summary-circle'>
                   
                   {professionalskill_data.map((item,index)=>
                   <li key={index} className='d-flex align-items-center flex-column gap-3 justify-content-center'>
                   <CircleAnimate title={item.title} level={item.level} className={item.className} />
                   </li>
                   )}
                    </ul>
            </div>
    </div>
}