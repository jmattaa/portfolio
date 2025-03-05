import { useState } from "react";

interface FormErrors {
    name: string;
    email: string;
    message: string;
}

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const [formErrors, setFormErrors] = useState<FormErrors>();

    const formSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);


        try {
            const res = await fetch("/api/sendmail", {
                method: "POST",
                headers: {
                    "finfin-nyckel": import.meta.env.VITE_API_KEY,
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    name,
                    email,
                    message
                }).toString()
            });

            if (!res.ok) {
                const body = await res.json();
                setFormErrors(body as FormErrors);
                return;
            }

            setLoading(false);
            setFormErrors(undefined);
            setName("");
            setEmail("");
            setMessage("");
            setSent(true);

        } catch (error) {
            setFormErrors(error as FormErrors);
        } finally {
            setLoading(false);
        }
    }

    if (sent) {
        return (
            <div className="w-full h-screen flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold mb-6">Message Sent!</h1>
                <p className="text-palette-4">I'll reach out to you as soon as i can :)</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto my-8">
            <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
            <form onSubmit={formSubmit}
                className="p-8 [&_input]:text-palette-4
                                [&_textarea]:text-palette-4 [&_label]:flex 
                                [&_label]:items-center [&_label]:gap-2 
                                [&_label]:text-palette-2">
                <div className="mt-4 flex">
                    <label>
                        <span className="text-palette-3">&gt;</span> Name:
                    </label>
                    <input
                        type="text"
                        placeholder="jmattaa..."
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="bg-palette-1/0 border-none outline-hidden w-full p-2"
                    />
                </div>
                {formErrors?.name && <p className="text-red">{formErrors.name}</p>}
                <div className="mt-4 flex">
                    <label>
                        <span className="text-palette-3">&gt;</span> Email:
                    </label>
                    <input
                        type="email"
                        placeholder="jmattaa@something.yeh"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="bg-palette-1/0 border-none outline-hidden 
                    w-full p-2"
                    />
                </div>
                {formErrors?.email && <p className="text-red">{formErrors.email}</p>}
                <div className="mt-4">
                    <label>
                        <span className="text-palette-3">&gt;</span> Message:
                    </label>
                    <textarea
                        placeholder="Tell me something"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        className="bg-palette-1/0 border-none outline-hidden 
                                w-full p-2 h-32 focus:outline-palette-5
                                transition-all"/>
                    {formErrors?.message && <p className="text-red">{formErrors.message}</p>}
                </div>
                <div className="mt-6">
                    <input type="submit"
                        disabled={loading}
                        className="bg-palette-4 !text-palette-1 px-4 py-2 
                                    rounded transition hover:bg-palette-5
                                    active:scale-90 disabled:bg-palette-5/40
                                    disabled:pointer-events-none"
                        value={loading ? "Sending..." : "Send"} />
                </div>
            </form>
        </div>
    );
};

export default Contact;
