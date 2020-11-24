export const styles = {
    confirm_window: {
      position: 'absolute',
      zIndex: '20',
      backgroundColor: '#515151',
      border: '1px solid #5d5d5d'
    },
    confirm_window__confirm_text: {
      position: 'absolute',
      top: '45%',
      left: '5%',
      width: '90%',
      height: '50%',
      zIndex: 'inherit',
      color: '#b6b6b6',
      backgroundColor: '#515151',
      fontSize: '145%',
      fontFamily: '\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif',
      textAlign: 'center',
      wordWrap: 'break-word',
      overflowY: 'hidden',
      textOverflow: 'ellipsis'
    },
    confirm_window__yes_button: {
      position: 'absolute',
      zIndex: 'inherit',
      textAlign: 'center',
      fontFamily: '\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif',
      color: '#b6b6b6',
      backgroundColor: '#5d5d5d',
      border: '1px solid #454849',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      cursor: 'pointer'
    },
    confirm_window__yes_button_hover: {
      color: '#515151',
      backgroundColor: '#b6b6b6'
    },
    confirm_window__no_button: {
      position: 'absolute',
      zIndex: 'inherit',
      textAlign: 'center',
      fontFamily: '\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif',
      color: '#b6b6b6',
      backgroundColor: '#5d5d5d',
      border: '1px solid #454849',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      cursor: 'pointer'
    },
    confirm_window__no_button_hover: {
      color: '#515151',
      backgroundColor: '#b6b6b6'
    },
    confirm_window__close_confirm_window: {
      position: 'absolute',
      cursor: 'pointer',
      left: '95%',
      top: '2%',
      width: '5%',
      height: '5%'
    },
    confirm_window__close_confirm_window_hover: {
      backgroundColor: '#EC2525'
    }
  }