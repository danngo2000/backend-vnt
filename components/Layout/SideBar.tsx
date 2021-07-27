import React from 'react'
import LeftSidebar from './LeftSidebar'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse
} from '@material-ui/core'
import DashboardIcon from '@material-ui/icons/Dashboard'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import ChartIcon from '../Icons/Chart'
import EqualizerIcon from '@material-ui/icons/Equalizer'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import { DropshipIcon } from '../Icons/Index'
import { useRouter } from 'next/dist/client/router'
interface IProp {
  fill?: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nested: {
      paddingLeft: theme.spacing(2),
      color: 'white',
      fontSize: 15,
      borderBottom: '1px solid #4c4c4c',
      '& span': {
        marginTop: 6,
        height: 22
      },
      '& svg': {
        color: 'white',
        fill: 'white',
      },
      '&:hover': {
        backgroundColor: '#1f5e8f'
      }
    },
    title: {
      color: 'white',
      fontSize: 18,
      fontWeight: 600,
      height: 50,
      borderBottom: '1px solid #4c4c4c',
      '& svg': {
        color: 'white',
      },
      '&:hover': {
        backgroundColor: '#1f5e8f'
      }
    },
    active: {
      fontWeight: 500,
      backgroundColor: '#1f5e8f'
    }
  })
)

const SideBar: React.FC<IProp> = ({ fill }) => {
  const router = useRouter()
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)

  const handleClick = () => {
    setOpen(!open)
  }
  let title = 'Menu'

  return (
    <LeftSidebar>
      <ListItem className={classes.title} button onClick={handleClick}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <div>Dashboard</div>
        <ListItemText />
        {open ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
      </ListItem>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItem
            onClick={() => router.push('/')}
            button
            className={`${classes.nested} ${!fill ? classes.active : ''}`}
          >
            <ListItemIcon>
              <ChartIcon />
            </ListItemIcon>
            <span>Sale Trends</span>
          </ListItem>
          <ListItem
            onClick={() => router.push('/revenue')}
            button
            className={`${classes.nested} ${
              fill === 'revenue' ? classes.active : ''
            }`}
          >
            <ListItemIcon>
              <EqualizerIcon />
            </ListItemIcon>
            <span>Revenue</span>
          </ListItem>
          <ListItem
            onClick={() => router.push('/dropship')}
            button
            className={`${classes.nested} ${
              fill === 'dropship' ? classes.active : ''
            }`}
          >
            <ListItemIcon>
              <DropshipIcon />
            </ListItemIcon>
            <span>Dropship</span>
          </ListItem>
          <ListItem
            onClick={() => router.push('/products-insights')}
            button
            className={`${classes.nested} ${
              fill === 'products-insights' ? classes.active : ''
            }`}
          >
            <ListItemIcon>
              <LocalOfferIcon />
            </ListItemIcon>
            <span>Products Insights</span>
          </ListItem>
        </List>
      </Collapse>
    </LeftSidebar>
  )
}

export default SideBar
