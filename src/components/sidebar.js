import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const SidebarWrapper = styled.div`
    flex: 1;
`

const SidebarContainer = styled.div`
    padding: 1rem;
`

const SideImage = styled.img`
    max-width: 100%;
    width: 6rem;
    height: 6rem;
`

const MenuList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`


export default props => (
    <SidebarWrapper>
        <SidebarContainer>
            <div>
                <SideImage src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" alt="avatar" />
                <h3>Udith Victor</h3>
                <p>Tech Enthusiast, shitty flute player....</p>
            </div>
            <div>
                <nav>
                    <MenuList>
                        <li>
                            <Link to="/">Articles</Link>
                        </li>
                        <li>
                            <Link to="/about">About me</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact me</Link>
                        </li>
                    </MenuList>
                </nav>
                <div></div>
                <p>&copy; All rights reserved.</p>
            </div>
        </SidebarContainer>
    </SidebarWrapper>
)