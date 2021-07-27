import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import { BoxIcon, ChartIcon } from '../Icons/Index'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import { Link } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      color: '#5c7080'
    },
    smallIcon: {
      fontSize: 20
    }
  })
)

const NavLink = () => {
  const classes = useStyles()
  return (
    <ul className='header-menu'>
      <li className='sub-menu'>
        <span className='menu-target'>
          <a className='menu-item'>
            <div className=''>Dashboard</div>
            <ArrowDropDownIcon className={classes.icon} />
          </a>
        </span>
        <div className='submenu-overlay'></div>
      </li>
      <li className='sub-menu'>
        <span className='menu-target'>
          <a className='menu-item'>
            <div className=''>Sales</div>
            <ArrowDropDownIcon className={classes.icon} />
          </a>
        </span>
        <div className='submenu-overlay'>
          <div className='minimal'>
            <div className='submenu-content'>
              <ul className='menu-wrap'>
                <li>
                  <a className='menu-item'>
                    <span className='icon'>
                      <ShoppingCartOutlinedIcon className={classes.smallIcon} />
                    </span>
                    <div className='text-overlow'>Sales Orders</div>
                  </a>
                </li>
                <li>
                  <a className='menu-item'>
                    <span className='icon'>
                      <ShoppingCartOutlinedIcon className={classes.smallIcon} />
                    </span>
                    <div className='text-overlow'>Return Products</div>
                  </a>
                </li>
                <li>
                  <a className='menu-item'>
                    <span className='icon'>
                      <ShoppingCartOutlinedIcon className={classes.smallIcon} />
                    </span>
                    <div className='text-overlow'>Dropship Orders</div>
                  </a>
                </li>
                <li>
                  <a className='menu-item'>
                    <span className='icon'>
                      <ShoppingCartOutlinedIcon className={classes.smallIcon} />
                    </span>
                    <div className='text-overlow'>Booking Orders</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li className='sub-menu'>
        <span className='menu-target'>
          <a className='menu-item'>
            <div className=''>Customers</div>
            <ArrowDropDownIcon className={classes.icon} />
          </a>
        </span>
        <div className='submenu-overlay'></div>
      </li>
      <li className='sub-menu'>
        <span className='menu-target'>
          <a className='menu-item'>
            <div className=''>Products</div>
            <ArrowDropDownIcon className={classes.icon} />
          </a>
        </span>
        <div className='submenu-overlay'>
          <div className='minimal'>
            <div className='submenu-content'>
              <ul className='menu-wrap'>
                <li>
                  <Link href='/products'>
                    <a className='menu-item'>
                      <span className='icon'>
                        <BoxIcon />
                      </span>
                      <div className='text-overlow'>Products</div>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li className='sub-menu'>
        <span className='menu-target'>
          <a className='menu-item'>
            <div className=''>Marketing</div>
            <ArrowDropDownIcon className={classes.icon} />
          </a>
        </span>
        <div className='submenu-overlay'></div>
      </li>
      <li className='sub-menu'>
        <span className='menu-target'>
          <a className='menu-item'>
            <div className=''>Content</div>
            <ArrowDropDownIcon className={classes.icon} />
          </a>
        </span>
        <div className='submenu-overlay'></div>
      </li>
    </ul>
  )
}

export default NavLink
