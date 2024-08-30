import React from 'react'
import Sidebar from './Sidebar'

const Dashboard = ({username}) => {
  return (
      <div>
          <section className='sectioncontainer'>
              <aside className='aside1'>
                  <Sidebar/>
              </aside>
              <aside className='aside2'></aside>
          </section>
    </div>
  )
}

export default Dashboard