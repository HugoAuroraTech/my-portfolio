import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { AnimatedText } from '../ui/AnimatedText';
import emailjs from "@emailjs/browser"
export function Contact() {
  const formAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleContact = (e) => {
    e.preventDefault();

    if(name == "" || email == "" || message == ""){
      alert("Preencha")
      return;
    }

    const emailParams = {
      from_name: name,
      email: email,
      message: message,
    }

    emailjs.send("service_hlnmx09", "template_8qadf7e", emailParams, "6kKZl2MPc7oIs3bM2")
    .then((response) => {
      console.log("Enviado", response.status, response.text)
      setName("")
      setEmail("")
      setMessage("")
    }, (err) => {
      console.log(err)
    })

  }

  const contactItems = [
    { icon: <Mail className="w-6 h-6" />, title: "Email", value: "hugovinidc@gmail.com" },
    { icon: <Phone className="w-6 h-6" />, title: "Phone", value: "+55 (35) 9725-3047" },
    { icon: <MapPin className="w-6 h-6" />, title: "Location", value: "São Paulo, Brazil" }
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedText
            text="Let's Work Together"
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          />
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Have a project in mind? Let's discuss how I can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.5,
                  staggerChildren: 0.1
                }
              }
            }}
            className="space-y-8"
          >
            {contactItems.map((item) => (
              <motion.div
                key={item.title}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="flex items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4">
                  {React.cloneElement(item.icon, {
                    className: "w-6 h-6 text-blue-600 dark:text-blue-400"
                  })}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.form
            variants={formAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                className="mt-1 block h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                className="mt-1 block h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              ></motion.textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleContact}
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}