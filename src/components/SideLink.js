import React from 'react'

const SideLink = ({ name, Icon, }) => {
    return (
      <li className="group">
        <a href="#" className="cursor-pointer block text-xl">
          <div className="inline-block">
             <div className="flex items-center group-hover:bg-primary-light group-hover:text-primary-base rounded-full pl-3 pr-8 py-3">

              <Icon />
              <span className="ml-4 font-bold">{name}</span>
            </div>
          </div>
        </a>
      </li>
    );
  };
  
  export default SideLink;