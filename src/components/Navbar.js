import Logo from '../troll.png';

export default function Navbar()
{
    return (
        <nav>
            <div className='nav--logo'>
                <img src={Logo} alt='logo' />
                <h3>MemeGenerator</h3>
            </div>
        </nav>
    )
}