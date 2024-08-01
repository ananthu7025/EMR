import React from 'react';

const TabNavigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'complaints', label: 'Complaints' },
    { id: 'pastHistory', label: 'History' },
    { id: 'examination', label: 'Examination' },
    { id: 'impression', label: 'Impression' },
    { id: 'advise', label: 'Advise' },
    { id: 'services', label: 'Services' },
    { id: 'medicines', label: 'Medicines' },
    { id: 'plans', label: 'Plans' },
    { id: 'privateNotes', label: 'Notes' }
  ];

  return (
    <div className="nav flex-column nav-pills mt-2" role="tablist">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          style={{
            display: 'block', // Ensure button takes full width
            padding: '0.5rem 1rem', // Padding for button
            marginBottom: '0.5rem', // Margin between buttons
            backgroundColor: activeTab === tab.id ? 'white' : 'transparent', // Background color for active/inactive
            color: activeTab === tab.id ? '#396cf0' : '#000', // Text color for active/inactive
            border: activeTab === tab.id ? '1px solid #dee2e6' : 'none', // Text color for active/inactive
            borderRadius: '0.25rem', // Rounded corners
            fontWeight: activeTab === tab.id ? 'bold' : 'normal', // Font weight for active/inactive
            textAlign: 'left', // Align text to the left
            cursor: 'pointer', // Pointer cursor on hover
            outline: 'none' ,// Remove default button outline
            boxShadow: activeTab === tab.id ? '0 .125rem .25rem rgba(0,0,0,.075)' : 'none', // Shadow for active tab
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
