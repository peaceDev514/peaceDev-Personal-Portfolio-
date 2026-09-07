import React from 'react';
import toast from 'react-hot-toast';

const Contact = ({ name, setName, email, setEmail, message, setMessage, loading, setLoading }) => {
	
	const Submit = async (e) => {
	e.preventDefault();
	setLoading(true);
	try{
	const res = await fetch("https://peace-dev-server.vercel.app/", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			name, email, message
		})
	});

	const data = await res.json();

	if(!res.ok){
		setLoading(false);
		toast.error(data.message);
	}else{
		setLoading(false);
		toast.success(data.message);
	}
	}catch(err){
		setLoading(false);
		toast.error(err.message);
	}
	};
	
	return(
		<>
		
		<section className="contact" id="contact" >
		<h1>GET IN TOUCH</h1>
		<p>Have a project in mind or an idea you'd like to bring to life? I'd love to hear about it. Whether you're looking for a modern website, a full-stack application, or simply want to discuss an idea, feel free to reach out.
		</p>

		<form>
		<label>Name</label>
		<input type="text" placeholder="Your name" 
		onChange={(e) => setName(e.target.value)}
		/>

		<label>Email</label>
		<input type="email" placeholder="Your Email" 
		onChange={(e) => setEmail(e.target.value)}
		/>

		<label>Message</label>
		<textarea placeholder="Type your message ..."
		onChange={(e) => setMessage(e.target.value)}
		></textarea>


		<button onClick={Submit}>{loading ? "Loading ..." : "Submit"}</button>
		
		</form>

		<div className="conclusion">
		<h3>
		LET'S BUILD SOMETHING GREAT.
		</h3>

		<p>
		I'm always open to new opportunities, interesting projects, and conversations about technology.
		</p>
		</div>
		</section>

		</>
	);
}

export default Contact;
