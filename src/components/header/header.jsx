function Header() {
    return (
        <div className="flex justify-between items-center  bg-white shadow-md text-blue-900 p-4">
            <div><h3>All-Stock</h3></div>
            <ul className="flex space-x-4 text-lg">
                <li className="hover:text-yellow-400 transition duration-300">
                    <a href="#">Men</a>
                </li>
                <li className="hover:text-yellow-400 transition duration-300">
                    <a href="#">Women</a>
                </li>
                <li className="hover:text-yellow-400 transition duration-300">
                    <a href="#">Boys</a>
                </li>
                <li className="hover:text-yellow-400 transition duration-300">
                    <a href="#">Girls</a>
                </li>
                <li className="hover:text-yellow-400 transition duration-300">
                    <a href="#">Youths</a>
                </li>
            </ul>
        </div>
    );
}

export default Header;
