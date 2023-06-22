import React from 'react';

const Pricing = () => {
  return (
    <div className='flex items-center'>
      {/* first box */}
      <div className='px-10'>
        <h2 className='font-bold text-2xl text-[#00ad6a] mb-7 content-start'>
          These are what we call the Pulse Basics. They’re what every customer
          gets.
        </h2>
        <ul className='list-disc text-[1.2rem] ml-4'>
          <li>Manage cash flow on a daily, weekly, monthly, or yearly basis</li>
          <li>
            Forecast growth with recurring income or expenses that scale
            automatically
          </li>
          <li>
            See Money In and Money Out, categorize transactions, and run helpful
            reports
          </li>
          <li>
            Toggle entries and accounts on and off to game out different
            scenarios
          </li>
          <p className='mt-4'>
            Just need the Pulse Basics? Get them now for $29 per month.
          </p>
        </ul>
      </div>
      {/* second box  */}
      <div className='block-banner border-2 rounded-2xl'>
        <div className='bg-green-700 text-white py-1 text-base text-center font-bold bg-green-700 rounded-t-2xl'>
          RECOMMENDED
        </div>
        <div className='flex flex-col mb-10'>
          <h1 className='text-7xl py-8 px-4 font-black text-center text-green-800'>
            Small Business Plan
          </h1>
          <h3 className='text-center pb-8 text-3xl text-gray-600'>
            $59 per month
          </h3>
          <div className='block mx-auto'>
            <button className='bg-[#1fe374] px-8 py-4 text-black text-2xl font-black'>
              Sign Up Now
            </button>
          </div>
        </div>
        <div>
          <ul className='list-disc ml-4 text-[1.2rem] px-4'>
            <li>Manage cash flow across multiple financial accounts</li>
            <li>
              Invite your investors, book keeper, or management team to see
              reports or manage cash flow
            </li>
            <li>
              Integrate with QuickBooks Online for more accurate cash flow
            </li>
            <li>
              Track your actual cash flow alongside your projected cash flow
            </li>
          </ul>
        </div>
      </div>
      {/* third box */}
      <div className='border-2'>
        <div className='flex flex-col mb-7'>
          <p className='bg-gray-300 p-8 text-center text-lg'>
            Complex business with multiple financial accounts, currencies, or
            auditing needs?
          </p>
          <h1 className='text-4xl text-green-600 px-10 py-8 text-center'>
            Unlock Extra Features
          </h1>
          <h3 className='text-center pb-8 text-3xl text-gray-600'>
            $89 per month
          </h3>
          <div className='block mx-auto'>
            <button className='bg-[#1fe374] px-8 py-4 text-black text-2xl font-black'>
              Try Premium
            </button>
          </div>
        </div>
        <div>
          <ul className='list-disc ml-4 text-[1.2rem]  px-8 mb-10'>
            <li>
              Complex business with multiple financial accounts, currencies, or
              auditing needs?
            </li>
            <li>
              Convert to any currency for localized cash flow reporting and
              projections
            </li>
            <li>
              Attach invoices or contracts to your cash flow entries for
              accountability and auditing
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
