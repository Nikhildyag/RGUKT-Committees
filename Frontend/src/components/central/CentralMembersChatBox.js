import React, { useEffect, useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import io from 'socket.io-client'
import Header from './Home/Header.js'
import CentralAuthoritySidebar from './Home/CentralAuthoritySidebar.js'

let socket, selectedChatCompare

const ENDPOINT = 'http://localhost:1024'

const CentralMembersChatBox = ({ userId }) => {
  const userInfo = JSON.parse(localStorage.getItem('central'))
  // console.log(userInfo);
  const [currentMessage, setCurrentMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [socketConnected, setSocketConnected] = useState(false)
  const [typing, setTyping] = useState(false)
  const [isTyping, setIsTyping] = useState(false)

  const fetchMessages = async () => {
    const response = await fetch(
      'http://localhost:1024/api/v1/messages/get/centralMessage',
      // http://localhost:1024/api/v1/messages/send/messageForCentral
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      }
    )
    const data = await response.json()
    console.log('fetched messages', data)
    setMessages(data.messages)
    socket.emit('join chat', userInfo.department + userInfo.committee_name)
  }

  const handleChange = (e) => {
    setCurrentMessage(e.target.value)
    if (!socketConnected) return
    if (!typing) {
      setTyping(true)
      socket.emit('typing', userInfo.department + userInfo.committee_name)
    }
    let lastTypingTime = new Date().getTime()
    var timerLength = 2000
    setTimeout(() => {
      var timeNow = new Date().getTime()
      var timeDiff = timeNow - lastTypingTime
      if (timeDiff >= timerLength && typing) {
        socket.emit(
          'stop typing',
          userInfo.department + userInfo.committee_name
        )
        setTyping(false)
      }
    }, timerLength)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const messageDetails = {
      message: currentMessage,
    }
    const data = JSON.stringify(messageDetails)

    try {
      const response = await fetch(
        'http://localhost:1024/api/v1/messages/send/messageForCentral',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: data,
        }
      )

      if (!response.ok) {
        throw new Error('Sending message failed')
      }

      const responseData = await response.json()
      //console.log(responseData);
      const newMessage = responseData.newMessage

      socket.emit('sendMessage', newMessage)
      setMessages([...messages, newMessage])

      // setMessages((prevMessages) => [...prevMessages, newMessage]);
      setCurrentMessage('') // Clear input field
    } catch (error) {
      console.error('Error sending message:', error)
    }
  }

  useEffect(() => {
    socket = io(ENDPOINT)
    socket.emit('setup', userInfo)
    socket.on('connected', () => setSocketConnected(true))
    socket.on('typing', () => setIsTyping(true))
    socket.on('stop typing', () => {
      setIsTyping(false)
      console.log('fghjk')
    })
    return () => {
      socket.disconnect() // Disconnect in cleanup function
    }
  }, [])

  // useEffect(() => {
  //   console.log("count");
  //   console.log(userInfo);

  //   // eslint-disable-next-line
  // }, []);

  useEffect(() => {
    fetchMessages()
    selectedChatCompare = userInfo.department + userInfo.committee_name
  }, [userInfo.department + userInfo.committee_name])

  useEffect(() => {
    socket.on('message received', (newMessageRecieved) => {
      console.log(messages)
      setMessages([...messages, newMessageRecieved])
    })
  })

  return (
    <div className="max-w-[100%] h-screen overflow-x-hidden text-wrap">
      <Header />
      <div className="flex w-full">
        <CentralAuthoritySidebar />
        <div className=" md:ml-[18%] lg:ml-[10%] sm:ml-[0%] relative top-20 flex w-full ">
          <div className="flex flex-col p-4 mx-auto lg:max-w-6xl  md:max-w-4xl  ">
            <div className="flex flex-col lg:w-[80vw] md:w-[77%] sm:w-full md:h-[30em] sm:h-[40em] overflow-y-scroll border border-gray-300 rounded-lg p-4 mb-4 bg-gray-100">
              <div className="flex flex-col space-y-4">
                {messages.length > 0 &&
                  messages.map((m, index) => (
                    <div
                      className={`flex ${
                        m.sender_id !== userInfo._id
                          ? 'justify-start'
                          : 'justify-end'
                      }`}
                      key={index}
                    >
                      <div
                        className={`flex items-center space-x-2 ${
                          m.sender_id !== userInfo._id
                            ? 'bg-white text-gray-800'
                            : 'bg-blue-500 text-white'
                        } max-w-xs md:max-w-md px-3 py-1 rounded-lg shadow`}
                      >
                        {m.sender_id !== userInfo._id && (
                          <img
                            src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                            alt="User Avatar"
                            className="w-8 h-8 rounded-full"
                          />
                        )}
                        <p className="break-words">{m.message}</p>
                        {m.sender_id === userInfo._id && (
                          <img
                            src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                            alt="My Avatar"
                            className="w-8 h-8 rounded-full"
                          />
                        )}
                      </div>
                    </div>
                  ))}
                {isTyping && <div className="text-gray-500">Loading...</div>}
              </div>
            </div>
            <div className="flex w-full md:w-[77%] lg:w-[78%]">
              <input
                type="text"
                placeholder="Type a message"
                value={currentMessage}
                onChange={handleChange}
                className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={handleSubmit}
                className="px-8 py-3 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition-colors duration-300"
              >
                <FaPaperPlane className="text-white" size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CentralMembersChatBox
