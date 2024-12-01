import '../styles/Contact.css'
import Socials from './Socials';

function Contact() {
    const handleClick = (type) => {
        let pages = document.getElementsByClassName("page");
        let buttons = document.getElementsByClassName("menu-button")

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.color = "#ffffff9d";
            buttons[i].style.fontWeight = "normal";
        }

        for (let i = 0; i < pages.length; i++) {
            pages[i].style.display = "none";
        }

        switch (type) {
            case "email":
                document.getElementById("email-page").style.display = "block";
                document.getElementById("menu-email").style.color = "#ffffff";
                document.getElementById("menu-email").style.fontWeight = "bold";
                break;
            case "linkedin":
                document.getElementById("linkedin-page").style.display = "block";
                document.getElementById("menu-linkedin").style.color = "#ffffff";
                document.getElementById("menu-linkedin").style.fontWeight = "bold";
                break;
            case "github":
                document.getElementById("github-page").style.display = "block";
                document.getElementById("menu-github").style.color = "#ffffff";
                document.getElementById("menu-github").style.fontWeight = "bold";
                break;
            case "medium":
                document.getElementById("medium-page").style.display = "block";
                document.getElementById("menu-medium").style.color = "#ffffff";
                document.getElementById("menu-medium").style.fontWeight = "bold";
                break;
            case "youtube":
                document.getElementById("youtube-page").style.display = "block";
                document.getElementById("menu-youtube").style.color = "#ffffff";
                document.getElementById("menu-youtube").style.fontWeight = "bold";
                break;
            default:
                break;
        }
    }

    return (
        <section className="min-h-[90vh] flex flex-col justify-center items-center">
            <h1 className="text-3xl md:text-4xl">Let's Build Together!</h1>
            <div className="contact-browser h-full mt-5">
                <div className="contact-browser-header flex items-center p-5 ">
                    <div className='flex p-2'>
                        <div className='rounded-full bg-red-600 w-3 h-3 mr-3'></div>
                        <div className='rounded-full bg-yellow-600 w-3 h-3 mr-3'></div>
                        <div className='rounded-full bg-green-600 w-3 h-3 mr-3'></div>
                    </div>
                </div>

                <div className="flex h-5/6">
                    <div className="contact-browser-menu w-1/3 ">
                        <ul className='flex flex-col h-full'>
                            <button id="menu-email" className='menu-button h-1/5' onClick={() => handleClick("email")} style={{ color: "#ffffff", fontWeight: "bold" }}>Email</button>
                            <button id="menu-linkedin" className='menu-button h-1/5' onClick={() => handleClick("linkedin")}>LinkedIn</button>
                            <button id="menu-github" className='menu-button h-1/5' onClick={() => handleClick("github")}>Github</button>
                            <button id="menu-medium" className='menu-button h-1/5' onClick={() => handleClick("medium")}>Medium</button>
                            <button id="menu-youtube" className='menu-button h-1/5 rounded-bl-3xl' onClick={() => handleClick("youtube")}>Youtube</button>
                        </ul>
                    </div>

                    <div className="contact-browser-content flex flex-col w-2/3">
                        <div className='w-full h-full flex flex-col items-center'>
                            <div id="email-page" className='page' style={{ display: "block" }}>
                                <div className="animation flex flex-col items-center">
                                    <img src="assets/contact-animations/email.gif" alt="Email" width={200} />
                                </div>
                                <p>tarikabirch@gmail.com</p>
                                <div className="button flex flex-col items-center">
                                    <a id="email-button" className="rounded-3xl mt-5 mb-10 px-6 py-1 flex gap-2 items-center hover:scale-105 ease-in" href='mailto:tarikabirch@gmail.com'>
                                        Send Email
                                    </a>
                                </div>
                            </div>

                            <div id="linkedin-page" className='page'>
                                <div className="animation flex flex-col items-center">
                                    <img src="assets/contact-animations/linkedin.gif" alt="LinkedIn" width={200} />
                                </div>
                                <p>tarika-birch</p>
                                <div className="button flex flex-col items-center">
                                    <a id="linkedin-button" className="rounded-3xl mt-5 mb-10 px-6 py-1 flex gap-2 items-center hover:scale-105 ease-in" href='https://www.linkedin.com/in/tarika-birch/'>
                                        Let's Connect
                                    </a>
                                </div>
                            </div>


                            <div id="github-page" className='page'>
                                <div className="animation flex flex-col items-center">
                                    <img src="assets/contact-animations/github.gif" alt="GitHub" width={200} />
                                </div>
                                <p>taigati</p>
                                <div className="button flex flex-col items-center">
                                    <a id="github-button" className="rounded-3xl mt-5 mb-10 px-6 py-1 flex gap-2 items-center hover:scale-105 ease-in" href='https://github.com/taigati'>
                                        View GitHub
                                    </a>
                                </div>
                            </div>

                            <div id="medium-page" className='page'>
                                <div className="animation flex flex-col items-center">
                                    <img src="assets/contact-animations/medium.gif" alt="Medium" width={200} />
                                </div>
                                <p>tarikabirch</p>
                                <div className="button flex flex-col items-center">
                                    <a id="medium-button" className="rounded-3xl mt-5 mb-10 px-6 py-1 flex gap-2 items-center hover:scale-105 ease-in" href='https://medium.com/@tarikabirch'>
                                        Read Blog
                                    </a>
                                </div>
                            </div>

                            <div id="youtube-page" className='page'>
                                <div className="animation flex flex-col items-center opacity-70">
                                    <img src="assets/contact-animations/youtube.gif" alt="Youtube" width={200} />
                                </div>
                                <p>Technically Ti</p>
                                <div className="button flex flex-col items-center">
                                    <a id="youtube-button" className="rounded-3xl mt-5 mb-10 px-6 py-1 flex gap-2 items-center hover:scale-105 ease-in" href="https://www.youtube.com/channel/UCuUPNYwnqCY2eSfPmztEsng?sub_confirmation=1">
                                        Subscribe
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='resume-button-container mt-8 mb-2 md:my-2 flex flex-col items-center gap-2'>
                <a className="text-lg resume-button rounded mt-5 px-6 py-1 flex gap-2 items-center hover:scale-105 ease-in"
                    download="Tarika_Birch-Resume.pdf" href="assets/Tarika_Birch-Resume.pdf">
                    <i className="fa-regular fa-circle-down mr-1"></i>
                    <p>Resume</p>
                </a>
            </div>

            <div className="contact-socials">
                <Socials />
            </div>
        </section>
    )
}

export default Contact