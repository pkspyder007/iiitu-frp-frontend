import React from 'react'

export default function ExperienceTabs({children}) {
    return (
        <div>
            <div className="links">
                <button className="border">Academic</button>    
                <button className="border">Industry</button>    
            </div>        
            {children}
        </div>
    )
}
