import './navbar.css'
import { useState,useEffect } from 'react'

const DashboardNav = () => {

    const [menuState,setMenuState] = useState(false);
    
    const toggleMenu= ()=>{
         setMenuState(val=>!val);
    }
    const closeMenu = (e)=>{
        if(e.target.id !== 'menuIcon') setMenuState(false);    
    }

    useEffect(()=>{
        document.addEventListener('click',closeMenu);
        return ()=>{
            document.removeEventListener('click',closeMenu);
        }
    },[]);


    return <>
    <div onClick={toggleMenu} className='menu-icon'><i id='menuIcon' className="fa fa-bars fa-lg p-3" aria-hidden="true"></i></div>
    <section className={(menuState)?'dash-nav menu-show':'dash-nav menu-hide'}>
        <div onClick={toggleMenu} className='close-icon text-center p-2'><i className="fa fa-times fa-lg" aria-hidden="true"></i></div>
        <ul className="navbar-nav pt-3 pb-3">
            <li className="nav-item"><a className='nav-link' href='#'>dashboard</a></li>
            <li className="nav-item "><a className='nav-link' href='#'>posts</a></li>
            <li className="nav-item"><a className='nav-link' href='#'>profile</a></li>
            <li className="nav-item"><a className='nav-link' href='#'>sign out</a></li>
            <li className="nav-item"><a className='nav-link' href='#'>payment</a></li>
            <li className="nav-item"><a className='nav-link' href='#'>intoduce</a></li>
        </ul>
    </section>
    </>
    
}
 
export default DashboardNav;