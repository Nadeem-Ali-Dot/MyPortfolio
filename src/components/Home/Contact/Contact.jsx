import React , {useState} from 'react'
import resume from "/images/Nadeem ALi Resume Updated.pdf"



function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData,[name]: value,}); 
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid';
    }
    if (!formData.phone) {
        formErrors.phone = 'Phone number is required';
      } else if (!/^\d{10}$/.test(formData.phone)) {
        formErrors.phone = 'Phone number must be 10 digits';
      }
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log('Form data:', formData );
    }
  };




  return (
    <div className='row row-cols-lg-2 row-cols-1'>
       <div className="col">
       <div className='mt-4 p-lg-5 p-3 rounded-2 bg-white'>
           <div className='mb-4'>
               <h3 className='fw-semibold'>Get in Touch</h3>
               <p>I'm here to help if you're searching for a product designer to bring your idea to life or a design partner to help take your business to the next level.</p>
               <a href={resume} className='px-3 py-2 me-3 btn btn-outline-primary' download='Samar Abbas - Frontend Developer'>Download resume</a>
           </div>
           <form onSubmit={handleSubmit}  action="https://formsubmit.co/your@email.com"  className='row g-3 mt-4'>
          <div className='col-md-6'>
              <label>Name</label>
              <input
                type="text"
                name="name"
                  id='inputForm'
                placeholder='Enter your name'
                value={formData.name}
                onChange={handleChange}
                className='form-control'
              />
              {
                errors.name && 
                <span className='text-danger'>
                     <small>{errors.name}</small>
                </span>
              }
         </div>
                <div className='col-md-6'>
        <label>Last</label>
        <input
          type="text"
          name="name"
          id='inputForm'
           placeholder='Enter your name'
          value={formData.name}
          onChange={handleChange}
          className='form-control'
        />
        {errors.name && <span className='text-danger'><small>{errors.name}</small></span>}
                </div>
                <div className='col-md-6'>
        <label>Email</label>
        <input
          type="email"
          name="email"
          id='inputForm'
          value={formData.email}
          onChange={handleChange}
          placeholder='Enter your email'
           className='form-control'
        />
        {errors.email && <span className='text-danger'><small>{errors.email}</small></span>}
                </div>
                <div className='col-md-6'>
        <label>Phone</label>
        <input
          type="phone"
          name="phone"
            id='inputForm'
           placeholder='Enter your phone'
          value={formData.phone}
          onChange={handleChange}
          className='form-control'
        />
        {errors.phone && <span className='text-danger'><small>{errors.phone}</small></span>}
                </div>
                <div className="col-12">
                  <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
                    <label for="floatingTextarea2">Comments</label>
                  </div>
                </div>
                <div className="d-grid">
                   <button className='btn btn-primary'>Send Message</button>
                </div>
            </form>
       </div>
       </div>
       <div className="col">
            <div className='mt-4 p-4 rounded-2 bg-white'>
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112173.03012636!2d77.12658424806516!3d28.527478163551585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1719581198827!5m2!1sen!2sin" width={"100%"} height={"450"} style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
       </div>
    </div>
  )
}

export default Contact
