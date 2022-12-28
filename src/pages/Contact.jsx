import './Contact.css';

const Contact = () => {
    return (
        <div className='contact-container' id='contact'>
            <div className='header-start'>CONTA<div className='header-end'>CT US</div></div>
            
            <div className='form-section'>
                <form className="contact-form" method="post">
                <input type="text" className="contact-form-text" placeholder="Enter name" />
                <input type="email" className="contact-form-text" placeholder="Enter email" />
                <input type="text" className="contact-form-text" placeholder="Enter phone number" />
                <textarea className="contact-form-text" placeholder="Your message"></textarea>
                <input type="submit" className="contact-form-btn" value="Send" />
                </form>
            </div>
        </div>
    )
}

export default Contact;