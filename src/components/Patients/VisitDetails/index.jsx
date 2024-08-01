// VisitDetails.js
import React, { useState } from 'react';
import TabNavigation from './TabNavigation';
import TabContent from './TabContent';

const VisitDetails = () => {
  const [activeTab, setActiveTab] = useState('complaints');

  return (
    <div className='container bg-soft-muted' style={{height:"70vh"}}>
      <div className='row'>
        <div className='col-lg-2'>
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
        <div className='col-lg-10'>
          <TabContent activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
};

export default VisitDetails;
