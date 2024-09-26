import React, { useState, useTransition, } from 'react';

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState('Tab1');
  const [isPending, startTransition] = useTransition();

  const handleTabClick = (tabName: string) => {
    startTransition(() => {
      setCurrentTab(tabName);
    });
  };

  return (
    <div className="container mx-auto px-4">
      {/* Tab Buttons */}
      <div className="flex justify-center">
        <button
          className={`py-2 px-4 ${currentTab === 'Tab1' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`}
          onClick={() => handleTabClick('Tab1')}
        >
          Tab 1
        </button>
        <button
          className={`py-2 px-4 ${currentTab === 'Tab2' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`}
          onClick={() => handleTabClick('Tab2')}
        >
          Tab 2
        </button>
        <button
          className={`py-2 px-4 ${currentTab === 'Tab3' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`}
          onClick={() => handleTabClick('Tab3')}
        >
          Tab 3
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {isPending ? (
          <div className="text-gray-500">Loading...</div>
        ) : (
          <>
            {currentTab === 'Tab1' && <div>Content for Tab 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ipsa expedita ut corrupti debitis officiis voluptatum doloribus voluptas porro exercitationem repudiandae vero, eveniet iusto veniam placeat dignissimos rem sequi tempora.</div>}
            {currentTab === 'Tab2' && <div>Content for Tab 2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, molestias. Hic delectus beatae assumenda nihil quod facere cupiditate quis nisi architecto nulla cum recusandae, possimus officiis non doloremque tempora voluptatum!</div>}
            {currentTab === 'Tab3' && <div>Content for Tab 3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio laboriosam quasi sapiente quibusdam ducimus quae vero obcaecati delectus quod deserunt illum iure qui iusto repellendus architecto fuga hic, vitae est!</div>}
          </>
        )}
      </div>
    </div>
  );
};

export default Tabs;
