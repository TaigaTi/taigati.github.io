import '../styles/Error.css'

function Error() {
    return (
        <div className="flex flex-col items-center">
            <img src="assets/error.gif" alt="404" width={900}/>
            <h1 className="text-8xl" style={{color: "#38b6ff"}}>404</h1>
            <p className="text-2xl opacity-80">Page not found</p>
        </div>
    )
}  

export default Error
