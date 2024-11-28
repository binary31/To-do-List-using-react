import React from 'react'

export default function Tabs(props) {
    const{todos, selectedTab,setSelectedTab}=props

    const tabs=["All","Open","Completed"]
  return (
    <nav className='tab-container'>
        {tabs.map((tab, tabindex)=>{
            const numOfTasks=tab=='All'?
                                todos.length:
                                tab =='Open'?
                                todos.filter(val=>!val.complete).length:
                                todos.filter(val=>val.complete).length
            
            return(
                <button onClick={()=>{
                    setSelectedTab(tab)}
                }
                 key={tabindex} className={'tab-button '
                +(tab ===selectedTab? " tab-selected":"")}>
                    <h4 key={tabindex}
                    className='tab-button'>{tab}<span>({numOfTasks})</span></h4>
                </button>
            )
        })}
        <hr/>
    </nav>
    
  )
}
