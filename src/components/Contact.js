import '../styles/Contact.css'

function Contact() {
    return (
        <section className="min-h-[90vh] flex flex-col justify-center items-center">
            <h1 className="text-4xl">Let's Build Together!</h1>
            <div className="contact-browser mt-5">
                <div className="contact-browser-header p-5 h-1/6">
        
                </div>

                <div className="flex h-5/6">
                    <div className="contact-browser-menu w-1/3">
                        <ul className='flex flex-col h-full'>
                            <li className='h-1/5'>Email</li>
                            <li className='h-1/5'>LinkedIn</li>
                            <li className='h-1/5'>Github</li>
                            <li className='h-1/5'>Medium</li>
                            <li className='h-1/5 rounded-bl-3xl'>Youtube</li>
                        </ul>
                    </div>

                    <div className="contact-browser-content flex flex-col items-center justify-center w-2/3">
                       <div className='w-full h-full flex flex-col justify-center items-center'>
                       <div className="animation pb-5">
                            <img src="technicallyti.png" alt="" width={150} />
                        </div>
                        <div className="handle">
                            <p>username</p>
                        </div>
                        <div className="button">
                            <button id="email-button" className="rounded-3xl mt-5 px-6 py-1 flex gap-2 items-center hover:scale-105 ease-in">Send A Message</button>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact