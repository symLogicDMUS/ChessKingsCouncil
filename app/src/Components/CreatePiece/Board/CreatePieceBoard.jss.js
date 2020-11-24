export const styles = {
    my_grid: {
      position: 'absolute',
      zIndex: '0',
      left: '17%',
      top: '19.5%',
      width: '391%',
      height: '79.5756%',
      lineHeight: '0'
    },
    '@media screen and (min-device-width: 768px)': {
      __expression__: 'screen and (min-device-width: 768px)',
      my_grid: {
        WebkitBoxShadow: '0px 0px 20px white',
        boxShadow: '0px 0px 20px white'
      }
    },
    '@media screen and (max-device-width: 767px)': {
      __expression__: 'screen and (max-device-width: 767px)',
      my_grid: {
        WebkitBoxShadow: '0px 0px 7.5px white',
        boxShadow: '0px 0px 7.5px white'
      }
    }
  }