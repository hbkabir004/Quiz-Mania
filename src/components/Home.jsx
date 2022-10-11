import React from 'react';

const Home = () => {
  
    return (
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://img.freepik.com/free-photo/3d-render-astronaut-with-question-mark-think-disappointment-tired-caucasian-gestures-3d-illustration-design_460848-10707.jpg?w=1380&t=st=1665450757~exp=1665451357~hmac=0468b21f579e97e393dbee070f934a008198ab229d4b734837665feee57cbb4f"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-yellow-200">
            Brand new
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          Unlocking knowledge 
            <br className="hidden md:block" />
            at the speed of{' '}
            <span className="inline-block text-deep-purple-accent-400">
            thought.
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
          Attempting one quiz a day will not only satisfy your knowledge thirsty neurons but also will give you a sense of satisfaction that you learnt something new on that day.
          </p>
          <div className="flex items-center">
            <a
              href="/topic"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-yellow-300 hover:bg-yellow-500 focus:shadow-outline focus:outline-none"
            >
              Get started
            </a>
            <a
              href="/stat"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-yellow-400"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
      
    </div>
    );
};

export default Home;