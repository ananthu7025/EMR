// TabContent.js
import React from 'react';
import ComplaintsContent from '../TabContent/ComplaintsContent';

const TabContent = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'complaints':
        return <ComplaintsContent/>;
      case 'pastHistory':
        return <div>Past History Content</div>;
      case 'examination':
        return <div>Examination Content</div>;
      case 'impression':
        return <div>Impression Content</div>;
      case 'advise':
        return <div>Advise Content</div>;
      case 'services':
        return <div>Services Content</div>;
      case 'medicines':
        return <div>Medicines Content</div>;
      case 'plans':
        return <div>Plans Content</div>;
      case 'privateNotes':
        return <div>Private Notes Content</div>;
      default:
        return <div>Select a tab to view content</div>;
    }
  };

  return <div className="tab-content">{renderContent()}</div>;
};

export default TabContent;
