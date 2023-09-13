import Link from 'next/link'
import React from 'react'
import style from './Header.module.css'
import { faBell , faBars , faMoon, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '@/components'
import pathList from './pathList.js'
import path from 'path'
const Header = () => {
  return (
    <header className={style.navigation}>
        <div className={style.logo}>
            <Link href="/"><img className={style.img} src="https://wassets.hscicdn.com/static/images/logo.png" alt="" /></Link>
        </div>
        <div className={style.nav_menu}>
            <nav>
                <ul>
                    {
                       pathList.map((parentPath , index)=> (
                        <li key={index}><Link href={parentPath.parentPath}>{parentPath.parentPathName}</Link>
                            <ul>
                                {
                                    parentPath.paths.map((childrenPath , index)=>(
                                        <li key={index}><Link href={childrenPath.childPath}>{childrenPath.childPathName}</Link></li>    
                                    ))
                                }
                            </ul>
                        </li>
                       ))
                    }
                </ul>
            </nav>
        </div>
        <div className={style.nav_right}>
            <ul>
                <li><Link href="/"><span>Edition AF</span></Link></li>
                <li><Link href="#"><Icon icon={faMoon} /></Link></li>
                <li><Link href="#"><Icon icon={faBell} /></Link></li>
                <li><Link href='#'><Icon icon={faBars} /></Link></li>
                <li><Link href='#'><Icon icon={faMagnifyingGlass} /></Link></li>
            </ul>
        </div>
    </header>
  )
}

export default Header