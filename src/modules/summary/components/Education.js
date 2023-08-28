import './Education.css'

export default()=>{

    return <div className="education d-flex gap-3 gap-md-5">
        <div>
            <img src={`media/educations/psg.jpg`} height="100" width="100" />
        </div>

        <div>
            <div className="d-flex flex-wrap align-items-center justify-content-center gap-5">
                <div>
                    <h1 className="fs-4">B Tech in Biotechnology</h1>
                    <p className="fs-6">PSG College of Technology (2017-2021)</p>
                    <p>Coimbatore</p>
                </div>
                <span className="rounded cgpa">7.79/10</span>
            </div>
            <div>
                <div className="mt-5 acomplishments">
                    <h2 className="fs-5">Accomplishments</h2>
                    <p className="fs-6">NCC B & C certificate holder</p>
                </div>
            </div>
        </div>
    </div>
}