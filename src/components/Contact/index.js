import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 3000)
  // }, [])

  setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 3000)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('yahoo', 'template_y5a7i9r', form.current, 'z8oL1bCrA-piFoTPU')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          Hire Me to utilize the best-in demand skills and practices. I thrive from challenges and ecstatic for the possibilities. Full time and contract work (1099, W2, C2C, Remote). +1 (336)770-9202 or email: reggie.green10@yahoo.com

          Github and LinkedIn links in Sidebar .
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Reginald Green
          <br />
          United States,
          <br />
          107 E Parrish St, <br />
          Durham, NC 27701 <br />
          <br />
          <span>reggie.green10@yahoo.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[35.993999, -78.898598]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[35.993999, -78.898598]}>
              <Popup>Reginald codes here, come code! :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact