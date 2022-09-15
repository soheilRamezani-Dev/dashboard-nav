import './navbar.css'

const DashboardNav = () => {
    return <>
    <div className='menu-icon p-3'><i className="fa fa-bars fa-lg" aria-hidden="true"></i></div>
    <section className="dash-nav">
        <div className='close-icon text-center p-2'><i className="fa fa-times fa-lg" aria-hidden="true"></i></div>
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