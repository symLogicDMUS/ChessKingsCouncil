export const styles = {
    '@media screen and (min-device-width: 768px)': {
      __expression__: 'screen and (min-device-width: 768px)',
      range_tool: {
        position: 'absolute',
        zIndex: '0',
        backgroundColor: '#515151',
        borderRadius: '15px',
        borderColor: '#a9a9a9'
      },
      range_tool__range_title: {
        position: 'absolute',
        zIndex: '0',
        left: '2.5%',
        top: '2.5%',
        fontSize: '150%',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        color: '#a9a9a9'
      },
      range_tool__direction_pad: {
        position: 'absolute',
        zIndex: '0',
        width: '25%',
        height: '66.67%',
        left: '72.5%',
        top: '27.3%'
      }
    },
    '@media screen and (max-device-width: 767px)': {
      __expression__: 'screen and (max-device-width: 767px)',
      range_tool: {
        position: 'absolute',
        zIndex: '0',
        borderRadius: '15px',
        borderColor: '#a9a9a9'
      },
      range_tool__range_title: {
        display: 'none'
      },
      range_tool__direction_pad: {
        position: 'absolute',
        zIndex: '0',
        height: '90%',
        width: '55.35%',
        top: '7%',
        left: '3%'
      }
    },
    direction_pad__middle: {
      position: 'absolute',
      top: '35%',
      left: '35%',
      width: '30%',
      height: '30%'
    },
    direction_pad__button_selected: {
      position: 'absolute',
      zIndex: '0',
      width: '30%',
      height: '30%',
      backgroundColor: '#ec2525',
      border: '1px solid #a9a9a9',
      borderRadius: '5px',
      cursor: 'pointer'
    },
    button_normal_hover: {
      backgroundColor: '#a9a9a9'
    },
    direction_pad__button_normal: {
      position: 'absolute',
      zIndex: '0',
      width: '30%',
      height: '30%',
      backgroundColor: '#515151',
      border: '1px solid #a9a9a9',
      borderRadius: '5px',
      cursor: 'pointer'
    },
    button_selected__vector: {
      position: 'absolute',
      zIndex: '0',
      width: '66.667%',
      height: '66.667%',
      left: '16.66%',
      top: '16.66%'
    },
    button_normal__vector: {
      position: 'absolute',
      zIndex: '0',
      width: '66.667%',
      height: '66.667%',
      left: '16.66%',
      top: '16.66%'
    }
  }