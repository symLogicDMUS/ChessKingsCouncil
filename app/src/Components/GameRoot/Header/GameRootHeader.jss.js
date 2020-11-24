export const styles = {
    board_header_label: {
      position: 'absolute',
      zIndex: '4',
      color: 'black',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      textAlign: 'center',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    board_header_grid: {
      position: 'absolute',
      zIndex: '4',
      display: 'grid',
      MsGridColumns: '48.67% 48.67%',
      gridTemplateColumns: '48.67% 48.67%',
      WebkitColumnGap: '2.66%',
      columnGap: '2.66%'
    },
    board_header_grid__board_header_turn: {
      MsGridColumn: '1',
      gridColumn: '1',
      zIndex: 'inherit',
      color: 'black',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      textAlign: 'right',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    board_header_grid__board_header_condition: {
      MsGridColumn: '2',
      gridColumn: '2',
      zIndex: 'inherit',
      color: 'red',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      textAlign: 'left',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }