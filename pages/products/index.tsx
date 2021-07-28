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
import SearchIcon from '@material-ui/icons/Search'

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
      background: 'none',
      boxShadow: 'none',
      color: '#000',
      fontSize: 17,
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
    { id: 3, value: 'Upprice', qty: 19, tag: 'Bin' },
    { id: 4, value: 'Tiffany', qty: 11, tag: 'Bin' },
    { id: 5, value: 'Recheck', qty: 62, tag: 'Bin' },
    { id: 6, value: 'Ngoc', qty: 13, tag: 'Bin' },
    { id: 7, value: 'Noodles', qty: 0, tag: 'Bin' },
    { id: 8, value: 'Condiments', qty: 3, tag: 'Bin' },
    { id: 9, value: 'Seasoning Sauces', qty: 2, tag: 'Bin' },
    { id: 10, value: 'MoreTolove', qty: 28, tag: 'Bin' },
    { id: 11, value: 'Linh', qty: 1, tag: 'Bin' },
    { id: 12, value: 'Small', qty: 0, tag: 'Bin' },
    { id: 13, value: 'Out of stock', qty: 137, tag: 'Bin' },
    { id: 14, value: 'Flash Sale', qty: 19, tag: 'Bin' },
    { id: 15, value: 'Tofu', qty: 0, tag: 'Bin' },
    { id: 16, value: 'Seller', qty: 7, tag: 'Bin' },
    { id: 17, value: 'Single', qty: 1, tag: 'Bin' },
    { id: 18, value: 'Hailey', qty: 0, tag: 'Bin' },
    { id: 19, value: 'Big', qty: 0, tag: 'Bin' },
    { id: 20, value: 'Processed', qty: 6, tag: 'Bin' },
    { id: 21, value: 'Listed', qty: 6, tag: 'Bin' },
    { id: 22, value: 'Bin', qty: 6, tag: 'Bin' },
    { id: 23, value: 'Flash-sale', qty: 0, tag: 'Bin' },
    { id: 24, value: 'Out-of-stock', qty: 0, tag: 'Bin' },
    { id: 25, value: 'tet2021', qty: 11, tag: 'Bin' },
    { id: 26, value: 'NEED TO DELATE', qty: 1, tag: 'Bin' }
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
        <div className='body-main'>
          <div className='header-product'>
            <AppBar className={classes.root} position='static'>
              <h4>All Product</h4>
            </AppBar>
            <div className='search'>
              <div className='fill'>
                <div className='control-group'>
                  <div className='input-group product-search'>
                    <input type='text' className='input' />
                    <span className='input-action'>
                      <SearchIcon />
                    </span>
                  </div>
                  <button type='button' className='button advancedSearch'>
                    <span className='button-text'>Show Advanced Search</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <TableProducts />
        </div>
      </Layout>
    </div>
  )
}

export default Index
