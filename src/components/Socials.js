function Socials() {
    return (
        <div className="socials flex gap-5 mt-2 text-2xl w-min">
            <a className="hover:scale-110 hover:text-[#ba7ce6] ease-in-out duration-300" aria-label="Email" href="mailto:tarikabirch@gmail.com">
                <i className="fa fa-envelope" aria-hidden="true"></i>
            </a>
            <a className="hover:scale-110 hover:text-[#ba7ce6] ease-in-out duration-300" target="_blank" rel="noopener noreferrer" aria-label="GitHub" href="https://github.com/taigati">
                <i className="fa-brands fa-github" aria-hidden="true"></i>
            </a>
            <a className="hover:scale-110 hover:text-[#ba7ce6] ease-in-out duration-300" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" href="https://www.linkedin.com/in/tarika-birch/">
                <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
            </a>
            <a className="hover:scale-110 hover:text-[#ba7ce6] ease-in-out duration-300" target="_blank" rel="noopener noreferrer" aria-label="Medium" href="https://medium.com/@tarikabirch">
                <i className="fa-brands fa-medium" aria-hidden="true"></i>
            </a>
            <a className="hover:scale-110 hover:text-[#ba7ce6] ease-in-out duration-300" target="_blank" rel="noopener noreferrer" aria-label="YouTube" href="https://www.youtube.com/channel/UCuUPNYwnqCY2eSfPmztEsng?sub_confirmation=1">
                <i className="fa-brands fa-youtube" aria-hidden="true"></i>
            </a>
        </div>
    )
}

export default Socials