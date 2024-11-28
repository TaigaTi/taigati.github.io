import '../styles/Error.css'

function Error() {
    return (
        <div className="error flex flex-col items-center">
            <img src="assets/error.gif" alt="404" width={900}/>
            <h1 className="text-8xl" style={{color: "#38b6ff"}}>404</h1>
            <p className="text-2xl opacity-80">Page not found</p>

            <button className="text-lg resume-button rounded mt-5 px-6 py-1 flex gap-2 items-center hover:scale-105 ease-in" onClick={() => window.location.replace("/")}>Return Home</button>
        </div>
    )
}  

export default Error
