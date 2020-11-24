export const styles = {
  scroll_table: {
    position: 'relative',
    display: 'grid',
    MsGridRows: '7.5% 17% 17% 17% 17% 17% 7.5%',
    gridTemplateRows: '7.5% 17% 17% 17% 17% 17% 7.5%',
    border: '1px solid #707070'
  },
  up_arrow: {
    MsGridRow: '1',
    gridRow: '1',
    cursor: 'pointer',
    backgroundColor: '#515151'
  },
  up_arrow_hover: {
    backgroundColor: '#5d5d5d'
  },
  scroll_table_item1: {
    MsGridRow: '2',
    gridRow: '2',
    color: '#a9a9a9',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    textAlign: 'left',
    backgroundColor: '#5d5d5d'
  },
  scroll_table_item2: {
    MsGridRow: '3',
    gridRow: '3',
    color: '#a9a9a9',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    textAlign: 'left',
    backgroundColor: '#515151'
  },
  scroll_table_item3: {
    MsGridRow: '4',
    gridRow: '4',
    color: '#a9a9a9',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    textAlign: 'left',
    backgroundColor: '#5d5d5d'
  },
  scroll_table_item4: {
    MsGridRow: '5',
    gridRow: '5',
    color: '#a9a9a9',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    textAlign: 'left',
    backgroundColor: '#515151'
  },
  scroll_table_item5: {
    MsGridRow: '6',
    gridRow: '6',
    color: '#a9a9a9',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    textAlign: 'left',
    backgroundColor: '#5d5d5d'
  },
  down_arrow: {
    MsGridRow: '7',
    gridRow: '7',
    cursor: 'pointer',
    backgroundColor: '#515151'
  },
  down_arrow_hover: {
    backgroundColor: '#5d5d5d'
  },
  scroll_arrow_img: {
    height: '5%',
    width: '5%',
    left: '48%'
  },
  '@media screen and (min-device-width: 768px)': {
    __expression__: 'screen and (min-device-width: 768px)',
    range_tool__range_display_window: {
      position: 'absolute',
      display: 'grid',
      zIndex: '0',
      left: '2.5%',
      top: '27.33%',
      width: '60.25%',
      height: '66.667%',
      borderRadius: '5px',
      border: '1px solid #a9a9a9',
      color: '#a9a9a9',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
    }
  },
  '@media screen and (max-device-width: 767px)': {
    __expression__: 'screen and (max-device-width: 767px)',
    range_tool__range_display_window: {
      position: 'absolute',
      display: 'grid',
      zIndex: '0',
      left: '62%',
      top: '7%',
      width: '35%',
      height: '90%',
      borderRadius: '5px',
      border: '1px solid #a9a9a9',
      color: '#a9a9a9',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
    }
  }
}