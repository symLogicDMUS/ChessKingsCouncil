export const styles = {
    invalid_name_modal: {
      position: 'fixed',
      zIndex: '9',
      left: '0',
      top: '0',
      width: '100%',
      height: '100%',
      backgroundColor: '#0000004d'
    },
    invalid_name: {
      position: 'absolute',
      zIndex: '5',
      left: '469px',
      top: '226px',
      width: '598px',
      height: '302px',
      backgroundColor: '#515151',
      border: '1px solid #b6b6b6',
      borderRadius: '15px'
    },
    invalid_name__text: {
      position: 'absolute',
      top: '50px',
      color: '#b6b6b6',
      backgroundColor: '#515151',
      fontFamily: '\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif',
      width: '560px',
      maxHeight: '150px',
      textAlign: 'center',
      fontSize: '15px',
      paddingLeft: '16px',
      paddingRight: '16px',
      paddingTop: '8px',
      paddingBottom: '16px',
      borderBottomLeftRadius: '8px',
      borderBottomRightRadius: '8px',
      wordWrap: 'break-word',
      overflowX: 'hidden',
      textOverflow: 'ellipsis'
    },
    invalid_name__ok_button: {
      position: 'absolute',
      top: '250px',
      left: '263px',
      zIndex: 'inherit',
      height: '20px',
      width: '76px',
      fontSize: '12.04819px',
      paddingTop: '4px',
      textAlign: 'center',
      fontFamily: '\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif',
      color: '#b6b6b6',
      backgroundColor: '#606060',
      borderRadius: '5.60224px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      cursor: 'pointer'
    },
    invalid_name__ok_button_hover: {
      color: '#606060',
      backgroundColor: '#b6b6b6'
    },
    invalid_name__msg_modal_close: {
      position: 'absolute',
      left: '585px',
      width: '12px',
      height: '12px',
      cursor: 'pointer'
    },
    invalid_name__msg_modal_close_hover: {
      backgroundColor: '#EC2525'
    },
    visible: {
      display: 'initial'
    },
    invisible: {
      display: 'none'
    }
  }