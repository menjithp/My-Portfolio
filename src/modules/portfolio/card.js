import React ,{useCallback,useEffect} from 'react'
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import './card.css'

const ProjectsCard = ({ title, des, src,git_link,demo_link }) => {



  return (
    <div className="card-container animatable-card px-xl-4 h-auto  pb-xl-5 pt-xl-4 rounded d-flex flex-column">
      <div className="image-container-project rounded-md overflow-hidden">
        <img
          src={`portfolio-images/${src}`}
          alt="src"
        />
      </div>
      <div className="text-center text-md-start p-3 pb-5 p-md-0 w-100 mt-1 mt-md-2 d-flex flex-column gap-5">
        <div className='pro-details'>
          <div className="d-md-flex align-items-center justify-content-between">
            <h3 className="fs-6 m-0 vertical-align-middle pink-color project-title">
              {title}
            </h3>
            <div className="d-flex justify-content-center align-items-center gap-2">
            <a target='_blank' href={git_link}>
                    <span className="source-code-demo">
                        <BsGithub />
                    </span>
              </a>
              <a target="_blank" href={demo_link}>
                    <span className="source-code-demo">
                        <FaGlobe />
                    </span>
              </a>
            </div>
          </div>
          <p className="line-dotted project-description pro-details mt-3 text-white-50">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard