import React from 'react';
import DesktopCommities from '../DesktopCommities';
import Header from '../Header';

const Homepage = () => {
  return (
    <div className="flex flex-col h-screen overflow-x-hidden">
      <Header />
      <div className="flex flex-1 overflow-auto ">
        <DesktopCommities className="w-1/4 min-h-full overflow-auto" />
        <div className="flex-1 p-6 relative left-60 z-[-1] ">
          <div className="mb-8 ">
            <h1 className="marquee text-3xl font-bold mb-4">
              Welcome to RGUKT Basar's Central Committee Communication Portal
              Enhancing Connectivity and Collaboration
            </h1>
            <p className="text-black mb-4">
              Welcome to the official communication portal of Rajiv Gandhi University of Knowledge Technologies, Basar. This platform is designed to streamline communication and collaboration between students and the academic section, ensuring a seamless and efficient exchange of information. Here, you'll find everything you need to stay connected, informed, and engaged with our vibrant campus community.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Key Features of the Portal</h2>
            
            <div className="mb-4">
              <h3 className="text-2xl font-semibold mb-2">Centralized Communication Hub</h3>
              <ul className="list-disc list-inside">
                <li>Connect with various committees and stay updated on their activities.</li>
                <li>Access important announcements, updates, and resources in one place.</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <h3 className="text-2xl font-semibold mb-2">Efficient Feedback System</h3>
              <ul className="list-disc list-inside">
                <li>Provide feedback on academic courses, campus facilities, and more.</li>
                <li>Engage with committees to suggest improvements and share your ideas.</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <h3 className="text-2xl font-semibold mb-2">Event Management and Participation</h3>
              <ul className="list-disc list-inside">
                <li>Stay informed about upcoming workshops, seminars, cultural events, and sports activities.</li>
                <li>Register for events and track participation easily.</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <h3 className="text-2xl font-semibold mb-2">Resource Access and Support</h3>
              <ul className="list-disc list-inside">
                <li>Access academic resources, career guidance materials, and health services information.</li>
                <li>Seek support from relevant committees for academic and personal growth.</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <h3 className="text-2xl font-semibold mb-2">Grievance Redressal</h3>
              <ul className="list-disc list-inside">
                <li>Report issues and grievances confidentially.</li>
                <li>Ensure fair and timely resolution of disputes through dedicated channels.</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <h3 className="text-2xl font-semibold mb-2">Innovation and Collaboration</h3>
              <ul className="list-disc list-inside">
                <li>Participate in innovation challenges, hackathons, and startup initiatives.</li>
                <li>Collaborate with peers and mentors to bring your ideas to life.</li>
              </ul>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Purpose and Vision</h2>
            <p className="mb-4">
              The RGUKT Basar Central Committee Communication Portal is dedicated to fostering a culture of transparency, accountability, and engagement within our campus. Our vision is to create a supportive environment where students can:
            </p>
            
            <ul className="list-disc list-inside mb-4">
              <li>Voice Their Opinions: Share feedback and suggestions to improve campus life and academic experiences.</li>
              <li>Stay Informed: Receive timely updates on committee activities, events, and important announcements.</li>
              <li>Engage Actively: Participate in various events, workshops, and initiatives organized by different committees.</li>
              <li>Seek Support: Access resources and assistance for academic, career, health, and personal development.</li>
            </ul>
            
            <p className="mb-4">
              Join Us in Building a Better Campus Community
            </p>
            <p className="mb-4">
              This portal is a testament to our commitment to creating a supportive and collaborative environment for all students. Your active participation and feedback are crucial in helping us achieve this goal. Together, let's build a campus community that thrives on communication, innovation, and mutual support.
            </p>
            <p className="mb-4">
              Welcome aboard! Explore, engage, and excel with RGUKT Basar's Central Committee Communication Portal.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
