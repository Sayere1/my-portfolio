import React, { useEffect, useState } from 'react'

import WorksItems from './WorksItems'
import { workData, workNav } from '../../assets/assets';

const Works = () => {

    const [ workTab, setWorkTab ] = useState({name: 'all'});

    const [ projects, setProjects ] = useState([]);

    const [ active, setActive ] = useState(0);

    useEffect(() => {
        if(workTab.name === 'all') {
            setProjects(workData);
        }
        else {
            const newProjects = workData.filter((project) => {
                return project.category.toLowerCase() === workTab.name;
            });

            setProjects(newProjects);
        }
    },[workTab]);

    const handleClick = (e, index) => {
        setWorkTab({name: e.target.textContent.toLowerCase()});
        setActive(index);
    }

  return (
    <div>
    <div className='work__filters'>
        {workNav.map((item, index) => {
            return (
                <span onClick={(e) => {
                    handleClick(e, index);
                }} 
                key={index} className={`${active === index ? 'active-work' : ''} work__item`}>{item.name}</span>
            )
        })}
    </div>

    <div className='work__container container grid'>
        {projects.map((item) => {
            return <WorksItems item={item} key={item.id} />
        })}
    </div>

    </div>
  )
}

export default Works
