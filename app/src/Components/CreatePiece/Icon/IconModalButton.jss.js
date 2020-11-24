export const styles = {
    bottom_bar__ok_active: {
      position: 'absolute',
      zIndex: 'inherit',
      textAlign: 'center',
      fontFamily: '\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif',
      color: '#a9a9a9',
      backgroundColor: '#515151',
      border: '1px solid #a9a9a9',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      cursor: 'pointer'
    },
    bottom_bar__ok_active_hover: {
      color: '#4f4f4f',
      backgroundColor: '#a9a9a9'
    },
    bottom_bar__ok_inactive: {
      position: 'absolute',
      zIndex: 'inherit',
      textAlign: 'center',
      fontFamily: '\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif',
      color: '#a9a9a9',
      backgroundColor: '#515151',
      border: '1px solid #a9a9a9',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      cursor: 'not-allowed'
    },
    bottom_bar__delete_active: {
      position: 'absolute',
      zIndex: 'inherit',
      textAlign: 'center',
      fontFamily: '\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif',
      color: '#a9a9a9',
      backgroundColor: '#515151',
      border: '1px solid #a9a9a9',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      cursor: 'pointer'
    },
    '@media screen and (min-device-width: 768px)': {
      __expression__: 'screen and (min-device-width: 768px)',
      bottom_bar__delete_active: {
        left: '10%'
      },
      bottom_bar__delete_inactive: {
        left: '10%'
      }
    },
    '@media screen and (max-device-width: 767px)': {
      __expression__: 'screen and (max-device-width: 767px)',
      bottom_bar__delete_active: {
        left: '75%'
      },
      bottom_bar__delete_inactive: {
        left: '75%'
      }
    },
    bottom_bar__delete_active_hover: {
      color: '#4f4f4f',
      backgroundColor: '#a9a9a9'
    },
    bottom_bar__delete_inactive: {
      position: 'absolute',
      zIndex: 'inherit',
      textAlign: 'center',
      fontFamily: '\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif',
      color: '#a9a9a9',
      backgroundColor: '#515151',
      border: '1px solid #a9a9a9',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      cursor: 'not-allowed'
    }
  }