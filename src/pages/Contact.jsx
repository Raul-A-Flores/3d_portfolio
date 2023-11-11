import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'


const Contact = () => {

  const [isLoading, setisLoading] = useState(false)
  const [form, setForm] = useState({name: '', email: '', message:''})
  const formRef = useRef(null)
  
  const hanldeChange =  ({target: {name, value}}) =>{
    setForm({...form, [name]: value})
  }

  const handleFocus = (e) =>{

  }
  const handleBlur = (e) =>{
    
  };



  const handleSubmit = (e) =>{
    e.prevent.default()
    setisLoading(true)
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE,

      {
        from_name: form.name, 
        to_name:'Raul',
        from_email: form.email,
        to_email: 'raul.alexander.flores1@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_API,
    ).then(()=>{
      setisLoading(false)

      setForm({name: '',email: '', message: ''})
      console.log(setForm)
    }).catch((error)=>{
      setisLoading(false)
      console.log(error)
    })
  }
  
  return (
  
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>
          <form
            className='w-full flex flex-col gap-7 mt-14'
            onSubmit={handleSubmit}
            ref={formRef}

            >
            <label className='text-black-500 font-semibold'>
            Name
            <input 
              type='text'
              name='name'
              className='input'
              placeholder='Your Name'
              value={form.name}
              onChange={hanldeChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
                />
            </label>

            


            <label className='text-black-500 font-semibold'>
            Your Email
            <input 
              type='email'
              name='email'
              className='input'
              placeholder='youremail@gmail.com'
              required
              value={form.email}
              onChange={hanldeChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
                />
              </label>
            <label className='text-black-500 font-semibold'>
            Your Message
            <textarea 
              name='message'
              rows={4}
              className='textarea'
              placeholder='Let me know how I can help you'
              value={form.message}
              onChange={hanldeChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
                />
            </label>

            <button
              type='submit'
              className='btn'
              onFocus={handleFocus}
              onBlur={handleFocus}
              disabled={isLoading}
              >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
      </div>

    </section>
  )
}

export default Contact