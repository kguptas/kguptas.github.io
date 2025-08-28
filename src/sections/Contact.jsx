import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', title: '', message: '' });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value }); //...form destructures it
    };

    //service_ali05xl

    const handleSubmit = async (e) => {
        e.preventDefault(); //prevents page from refreshing
        setLoading(true);
        try {
            await emailjs.send(
                'service_ali05xl',
                'template_8yhrblp',
                {
                name: form.name,
                email: form.email,
                title: form.title,
                message: form.message
            },
                'xA7KU4SweEgxfL4ZE'
            )
            setLoading(false);
            alert('Thank you. Your message has been sent.');
            setForm({ name: '', email: '', title: '', message: '' });

        } catch (error) {
            setLoading(false);
            console.log(error);
            alert('Something went wrong.');

        }

    }

    return (
        <section className="c-space my-20" id="contact">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-[105vh]"/>
                <div className="contact-container">
                    <h3 className="head-text">Contact Me</h3>
                    {/*<p className="text-lg text-white-600 mt-3">*/}
                    {/*    Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to*/}
                    {/*    life, I’m here to help.*/}
                    {/*</p>*/}
                    <form ref={formRef} onSubmit={handleSubmit} className="mt-10 flex flex-col space-y-4">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="ex., John Doe"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Email address</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="ex., johndoe@gmail.com"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Title</span>
                            <input
                                name="title"
                                value={form.title}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="Message title"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Your message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Share your thoughts or inquiries"
                            />
                        </label>

                        <button className="field-btn hover:brightness-110 transition" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>

                    </form>
                </div>
            </div>

        </section>
    )
}
export default Contact
