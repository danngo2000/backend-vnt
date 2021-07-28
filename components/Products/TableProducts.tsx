import * as React from 'react'
import { DataGrid, GridColDef } from '@material-ui/data-grid'
import { navigate } from '@reach/router'

const LinkRenderer = (props: any) => {
  return <a style={{color: '#106ba3', cursor: 'pointer'}} onClick={() => navigate(`/products/${props.id}`)}>{props.value}</a>
}

const ThumnailRenderer = (params: any) => {
  return (
    <div
      style={{
        width: '100%',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <img style={{ maxHeight: '40px', maxWidth: '40px' }} src={params.value} />
    </div>
  )
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90, editable: true },
  { field: 'status', headerName: 'Status', width: 120, editable: true },
  {
    field: 'thumbnail',
    headerName: 'Thumbnail',
    width: 150,
    editable: true,
    renderCell: ThumnailRenderer
  },
  { field: 'name', headerName: 'Name', width: 230, editable: true },
  {
    field: 'sku',
    headerName: 'SKU',
    width: 200,
    editable: true,
    renderCell: LinkRenderer
  },
  { field: 'categories', headerName: 'Categories', width: 200, editable: true },
  { field: 'vendor', headerName: 'Vendor', width: 200, editable: true },
  { field: 'invoiceID', headerName: 'Invoice ID', width: 200, editable: true },
  { field: 'pvpNumber', headerName: 'PVP Number', width: 200, editable: true },
  {
    field: 'barCodeInput',
    headerName: 'Bar Code Input',
    width: 200,
    editable: true
  },
  {
    field: 'ebayItemNumber',
    headerName: 'Ebay Item Number',
    width: 200,
    editable: true
  },
  {
    field: 'productCode',
    headerName: 'Product Code',
    width: 200,
    editable: true,
  }
]

const rows = [
  {
    id: 1,
    status: null,
    thumbnail: 'https://m.media-amazon.com/images/I/61ikAJnULvL._AC_UL320_.jpg',
    name: 'Echo Dot (2nd Generation) - Smart speaker with Alexa - Black',
    sku: 'B07VJ53MZQ',
    categories: 'New Promotion',
  },
  {
    id: 2,
    status: null,
    thumbnail: 'https://m.media-amazon.com/images/I/71W1BTdb0uL._AC_UL320_.jpg',
    name: 'WONNIE 10.5 Car Dual DVD Player Portable Kids Headrest CD Players',
    sku: 'B08D5XJTJS',
    categories: 'New Promotion',
  },
  {
    id: 3,
    status: null,
    thumbnail: 'https://m.media-amazon.com/images/I/81HwYpEa00S._AC_UL320_.jpg',
    name: 'TORRAS Cell Phone Holder for Car [Thick Case & Heavy Phone Friendly] 3 in 1 Car Phone Holder Mount',
    sku: 'B08LQVD6ZR',
    categories: 'New Promotion',
  },
  {
    id: 4,
    status: null,
    thumbnail: 'https://m.media-amazon.com/images/I/41olM0PNCiL._AC_UL320_.jpg',
    name: 'Belkin MagSafe Car Vent Mount PRO for iPhone 12, 12 Pro, 12 Pro Max, 12 Mini ',
    sku: 'B082S8BRT1',
    categories: 'New Promotion',
  },
  {
    id: 5,
    status: null,
    thumbnail: 'https://m.media-amazon.com/images/I/81KXzJNifZL._AC_UL320_.jpg',
    name: 'Safety 1ˢᵗ Grow and Go All-in-One Convertible Car Seat, Carbon Ink',
    sku: 'B07BLRSVP6',
    categories: 'New Promotion',
    age: null
  },
  {
    id: 6,
    status: null,
    thumbnail: 'https://m.media-amazon.com/images/I/71Fg-Okk21L._AC_UL320_.jpg',
    name: '5 Multi Ports Car Charger, Car Charger Adapter, 31W High Power Car Charger for Smart Phone',
    sku: 'B073R68TSH',
    categories: 'New Promotion',
  },
  {
    id: 7,
    status: null,
    thumbnail: 'https://m.media-amazon.com/images/I/71x0qjK2Z3S._AC_UL320_.jpg',
    name: 'VARSK 4-in-1 Car Vacuum Cleaner, Tire Inflator Portable Air Compressor with Digital Tire Pressure Gauge LCD Display and LED Ligh',
    sku: 'B07PGT7LSR',
    categories: 'New Promotion',
  },
  {
    id: 8,
    status: null,
    thumbnail: 'https://m.media-amazon.com/images/I/615xop2u6CL._AC_UL320_.jpg',
    name: 'WixGear Magnetic Phone Car Mount [2 Pack] Universal Air Vent Magnetic Phone Car Mount Phone Holder',
    sku: 'JFDHW7HAUW',
    categories: 'New Promotion',
  },
  {
    id: 9,
    status: null,
    thumbnail: 'https://m.media-amazon.com/images/I/61sS7Pip5VL._AC_UL320_.jpg',
    name: 'Kayme 6 Layers Car Cover Waterproof All Weather for Automobiles, Outdoor Full Cover Rain Sun UV Protection with Zipper',
    sku: 'LLWYVN9SDA',
    categories: 'New Promotion',
  },
  {
    id: 10,
    status: null,
    thumbnail: 'https://m.media-amazon.com/images/I/71Fg-Okk21L._AC_UL320_.jpg',
    name: '5 Multi Ports Car Charger, Car Charger Adapter, 31W High Power Car Charger for Smart Phone, 5V 1.5-6.2A(Max) Multi USB Car Charger',
    sku: 'LJUHWHNCYUE9',
    categories: 'New Promotion',
  },

  {
    id: 11,
    status: null,
    thumbnail: 'https://m.media-amazon.com/images/I/61sS7Pip5VL._AC_UL320_.jpg',
    name: 'Kayme 6 Layers Car Cover Waterproof All Weather for Automobiles, Outdoor Full Cover Rain Sun UV Protection with Zipper',
    sku: 'UWYTBJJAY9',
    categories: 'New Promotion',
  },

  {
    id: 12,
    status: null,
    thumbnail: 'https://m.media-amazon.com/images/I/61s-3BvdMSL._AC_UL320_.jpg',
    name: 'Loncaster Car Phone Holder, Car Phone Mount Silicone Car Pad Mat for Various Dashboards, Slip Free Desk Phone Stand Compatible',
    sku: 'QYUWEBF7W',
    categories: 'New Promotion',
  },

  {
    id: 13,
    status: null,
    thumbnail: 'https://m.media-amazon.com/images/I/81VaiETFAuL._AC_UL320_.jpg',
    name: 'TORRAS [Ultra-Durable] Cell Phone Holder for Car, Universal Car Phone Mount Dashboard Windshield Vent Compatible with iPhone 12 11 Pro',
    sku: 'WUW8RHYWA',
    categories: 'New Promotion',
  },

  {
    id: 14,
    status: null,
    thumbnail: 'https://m.media-amazon.com/images/I/71YCigG7xFL._AC_UL320_.jpg',
    name: 'Itomoro Baby Car Mirror, View Infant in Rear Facing Seat with Wide Crystal Clear View,Camera aimed at baby-Easily to Observe The Baby',
    sku: 'JUWGHHFYQ',
    categories: 'New Promotion',
  },
  {
    id: 15,
    status: null,
    thumbnail: 'https://m.media-amazon.com/images/I/81qm59RPMJS._AC_UL320_.jpg',
    name: 'EPAuto Waterproof Car Trash Can with Lid and Pockets (Incl. Trash Bags), Black',
    sku: 'UWYTBJJAY9',
    categories: 'New Promotion',
  }
]

export default function TableProducts() {
  return (
    <div style={{ height: 850, width: '100%' }}>
      <DataGrid
        rows={rows} /*data*/
        columns={columns} /*header*/
        pageSize={15} /*rows per page:*/
        checkboxSelection
        disableSelectionOnClick
        componentsProps={{}}
      />
    </div>
  )
}
