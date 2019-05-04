import React from 'react'
import {Link} from 'react-router-dom'

import {siderBarRoutes} from '../routes/routes'

class SideBar extends React.Component{
    render(){
        return(
            <React.Fragment>
                   <div data-scroll-to-active="true" class="main-menu menu-fixed menu-dark menu-accordion menu-shadow">
   
      <div class="main-menu-header">
        <input type="text" placeholder="Search" class="menu-search form-control round"/>
      </div>
      <div class="main-menu-content">
        <ul id="main-menu-navigation" data-menu="menu-navigation" class="navigation navigation-main">
        {siderBarRoutes.map((link,id)=>
            <li class=" nav-item"><Link to={link.route}><i class="icon-stack-2"></i><span data-i18n="nav.page_layouts.main" class="menu-title">{link.name}</span></Link></li>
            
        )}
      
            </ul>
            </div>
     
    </div>
                </React.Fragment>
        )
    }
}

export default SideBar