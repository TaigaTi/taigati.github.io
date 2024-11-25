import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/Home.css'

function Home() {
    return (
        <>
            <section id="intro" className="h-[90vh]">
                <div className="container flex flex-col items-center justify-center gap-2">
                    <img className="avatar" src="technicallyti.png" alt="Tarika Birch" />
                    <h1 className='text-6xl'>Tarika Birch</h1>
                    <img className="frontend" src="frontend.png" alt="Frontend Developer" />

                    <button className="resume-button rounded mt-5 p-2 flex gap-2 items-center justify-space-between">
                        <i className='fa-regular fa-file'></i>
                        Resume
                    </button>

                    <div className="socials flex gap-4 mt-2 text-2xl">
                        <a href="mailto:tarikabirch@gmail.com">
                            <i className="fa fa-envelope"></i>
                        </a>
                        <a href="https://github.com/taigati">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/tarika-birch/">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://medium.com/@tarikabirch">
                            <i className="fa-brands fa-medium"></i>
                        </a>
                        <a href="http://www.youtube.com/channel/UCuUPNYwnqCY2eSfPmztEsng?sub_confirmation=1">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home