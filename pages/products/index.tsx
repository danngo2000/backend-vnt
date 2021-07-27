import React from 'react'
import Layout from '../../components/Layout/Layout'
import LeftSidebar from '../../components/Layout/LeftSidebar'
import TableProducts from '../../components/Products/TableProducts'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Grid,
  Checkbox,
  Paper,
  AppBar,
  IconButton,
  Toolbar
} from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      color: 'white',
      fontSize: 18,
      fontWeight: 600,
      height: 50,
      borderBottom: '1px solid #4c4c4c',
      background: '#1f5e8f',
      '& svg': {
        color: 'white'
      },
      '&:hover': {
        backgroundColor: '#1f5e8f'
      }
    },
    root: {
      margin: 'auto',
      backgroundColor: 'rgba(138,155,168,.15)',
      boxShadow: 'none',
      color: '#000',
      fontSize: 16,
      padding: '0 20px',
    },
    paper: {
      maxHeight: '30rem',
      overflow: 'auto',
      borderRadius: 0
    },
    button: {
      margin: theme.spacing(0.5, 0)
    },
    listItem: {
      paddingLeft: 0
    }
  })
)

const Index = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)

  const [checked, setChecked] = React.useState<number[]>([])
  const [tags] = React.useState<any>([
    { id: 1, value: 'Rice', qty: 3, tag: 'Processed' },
    { id: 2, value: 'Instandt Noodles', qty: 8, tag: 'Listed' },
    { id: 3, value: 'upprice', qty: 19, tag: 'Bin' }
  ])

  const handleClick = () => {
    setOpen(!open)
  }

  const handleChecked = (value: number) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  const colorRender: Record<string, string> = {
    Bin: '#2CA820',
    Listed: '#7548C2',
    Processed: '#EB8E0B'
  }

  const customList = (items: any[]) => (
    <Paper className={classes.paper}>
      <List dense component='div' disablePadding role='list'>
        {items.map((value) => {
          return (
            <ListItem
              className={classes.listItem}
              key={value.id}
              role='listitem'
              button
              onClick={handleChecked(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <div className='wrap-content'>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <span
                    className='color-block mini'
                    style={{ background: colorRender[value.tag] }}
                  />
                  <span style={{ fontSize: '15px' }}>{value.value}</span>
                </span>
                <span className='right-elm'>{value.qty}</span>
              </div>
            </ListItem>
          )
        })}
        <ListItem />
      </List>
    </Paper>
  )
  return (
    <div>
      <Layout>
        <LeftSidebar>
          <ListItem className={classes.title} button onClick={handleClick}>
            <ListItemIcon>
              <LocalOfferIcon />
            </ListItemIcon>
            <div>Tags</div>
            <ListItemText />
            {open ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
          </ListItem>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <div className='optional-filter-content'>
              <div className='wrap-optional'>
                <Grid item>{customList(tags)}</Grid>
              </div>
            </div>
          </Collapse>
        </LeftSidebar>
        <div className='body-main' style={{ width: '100%' }}>
          <div>
            <AppBar className={classes.root} position='static'>
              <h4>All Product</h4>
            </AppBar>
          </div>
          <TableProducts />
        </div>
      </Layout>
    </div>
  )
}

export default Index
