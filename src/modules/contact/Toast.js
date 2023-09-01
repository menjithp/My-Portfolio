import {AiOutlineWechat} from 'react-icons/ai'
import './Toast.css'

export default ({message,color ,show})=><div role="alert" aria-live="assertive" aria-atomic="true" className={`position-fixed top-50 end-0 toast ${show?"show":""}`} data-autohide="false">
    <div className="toast-header">
    <AiOutlineWechat size={20}/>
    <button onClick={()=>
    document.querySelector(".toast.show").classList.remove("show")} type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
    </div>
    <div className="toast-body" style={{color:color}}>
    {message}
    </div>
</div>
