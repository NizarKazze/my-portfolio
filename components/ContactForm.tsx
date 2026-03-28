
const ContactForm = () => {
    return (
        <div id="contact-form-container" className="mt-12">
            <form action="" className="flex flex-col gap-6">
                <div className="form-input flex flex-col gap-2">
                    <label htmlFor="">Mail</label>
                    <input type="text" className="border rounded-lg p-2" placeholder="Introducir mail"/>
                </div>
                <div className="form-input flex flex-col gap-2">
                    <label htmlFor="">Name</label>
                    <input type="text" className="border rounded-lg p-2" placeholder="Introducir Name"/>
                </div>
                <div className="form-input flex flex-col gap-2">
                    <label htmlFor="">Message</label>
                    <textarea rows={5} className="border rounded-lg p-2" placeholder="Introducir Message"/>
                </div>
            </form>
        </div>
    )
}

const ContactSection = () => {
    return (
        <div id="contact-section" className="px-10 mt-16 flex flex-col align-center justify-center">
            <h2 className="text-center text-3xl">Contact me</h2>
            <ContactForm></ContactForm>
        </div>
    )
}

export default ContactSection