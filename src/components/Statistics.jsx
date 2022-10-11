import React, { useContext } from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';
import { QuizContext } from './Main';
const Statistics = () => {
    const quiz = useContext(QuizContext);
    console.log(quiz);
    const {data} = quiz;

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-yellow-200">
              Updated
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="d5589eeb-3fca-4f01-ac3e-983224745704"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#d5589eeb-3fca-4f01-ac3e-983224745704)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Explore</span>
            </span>{' '}
            Our Recent Statistics
          </h2>
          <div className='flex justify-center align-middle sm:mx-32'>
            <ComposedChart
                width={500}
                height={400}
                data={data}
                margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="total" fill="#fef08a" stroke="#8884d8" />
          <Bar dataKey="total" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="id" stroke="#ff7300" />
          
        </ComposedChart>
       </div>
        </div>


        
      


        {/* <br />
        <br />
        <br />
        <br /> */}
        <p className="mx-auto mb-4 text-gray-600 sm:text-center lg:max-w-2xl lg:mb-6 md:px-16">
            The statistics represents our recent QUIZ DataSet.
        </p>
      </div>
    );
};

export default Statistics;