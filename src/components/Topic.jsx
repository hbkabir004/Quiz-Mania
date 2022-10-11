import React from 'react';

const Topic = ({topic}) => {
    const {id, name, logo, total} = topic;
    return (
        <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
              <div>
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full">
                  <img src={logo} alt="" srcset="" />
                </div>
                <h6 className="mb-2 font-semibold leading-5">{name}</h6>
                <p className="mb-3 text-sm text-gray-900">
                  Total Quiz: {total}
                </p>
              </div>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
    );
};

export default Topic;