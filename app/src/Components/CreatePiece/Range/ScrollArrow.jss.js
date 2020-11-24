export const styles = {
    create_piece_scroll_up: {
      position: 'absolute',
      zIndex: '1',
      borderTopLeftRadius: '5px',
      borderTopRightRadius: '5px',
      top: '14%'
    },
    '@media screen and (min-device-width: 768px)': {
      __expression__: 'screen and (min-device-width: 768px)',
      create_piece_scroll_up: {
        width: '100%',
        height: '7.5%',
        cursor: 'pointer',
        backgroundColor: '#535353'
      },
      create_piece_scroll_down: {
        top: '92%'
      }
    },
    '@media screen and (max-device-width: 767px)': {
      __expression__: 'screen and (max-device-width: 767px)',
      create_piece_scroll_up: {
        top: '0%'
      },
      create_piece_scroll_down: {
        top: '95%'
      }
    },
    create_piece_scroll_down: {
      position: 'absolute',
      zIndex: '1',
      borderBottomLeftRadius: '5px',
      borderBottomRightRadius: '5px'
    },
    create_piece_scroll_arrow_up: {
      position: 'absolute',
      left: '48%',
      height: '80%',
      bottom: '20%'
    },
    create_piece_scroll_arrow_down: {
      position: 'absolute',
      left: '48%',
      height: '80%',
      top: '20%'
    }
  }