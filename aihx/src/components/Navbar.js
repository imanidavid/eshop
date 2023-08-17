import React from "react";

function Navbar(){
    return <nav>
        <div class="logo">
            <h2>Aihx</h2>
        </div>
        <div class="search">
            <input type="text" name="search" placeholder="Search..."></input>
        </div>
        <div>
            <ul>
                <li><a href="Sign in.html"><b>Sign in</b></a></li>
                <li><a href="Home.html"><b>Home</b></a></li>
                <li><a href="Shop.html"><b>Shop</b></a></li>
                <li><a href="contact.html"><b>Contact</b></a></li>
                <li><a href="about.html"><b>About</b></a></li>
            </ul>
        </div>
    </nav>
}

export default Navbar