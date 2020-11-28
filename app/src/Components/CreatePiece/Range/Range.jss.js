export const styles = {
    range_tool: {
        position: 'absolute',
        "@media screen and (min-device-width: 768px)": {
            width: '31.25em',
            height: '11.75em',
            top: '31.2em',
            left: window.screen.availWidth * 0.57,
        },
        "@media screen and (max-device-width: 767px)": {
            width: window.screen.availWidth - window.screen.availWidth * 0.03 * 2.2,
            height: window.screen.availHeight * 0.4 * 0.85 - window.screen.availWidth * 0.03,
            top: window.screen.availHeight * 0.6 + window.screen.availWidth * 0.03 * 3,
            left: window.screen.availWidth * 0.03,
        },
        zIndex: '0',
        backgroundColor: '#515151',
        borderRadius: '15px',
        borderColor: '#a9a9a9'
    },
    title: {
        position: 'absolute',
        zIndex: '0',
        left: '2.5%',
        top: '2.5%',
        fontSize: '150%',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        color: '#a9a9a9'
    },
    direction_pad: {
        position: 'absolute',
        zIndex: '0',
        "@media screen and (min-device-width: 768px)": {
            width: '25%',
            height: '66.67%',
            left: '72.5%',
            top: '27.3%'
        },
        "@media screen and (max-device-width: 767px)": {
            height: '90%',
            width: '55.35%',
            top: '7%',
            left: '3%'
        },
    },
    middle_section: {
        position: 'absolute',
        top: '35%',
        left: '35%',
        width: '30%',
        height: '30%'
    },
    button: {
        backgroundColor: props => props.selected ? '#ec2525' : '#515151',
        '&:hover': {
            backgroundColor: props => props.selected ? '#ec2525' : '#a9a9a9'
        },
    },
    vector: {
        position: 'absolute',
        zIndex: '0',
        width: '66.667%',
        height: '66.667%',
        left: '16.66%',
        top: '16.66%'
    },
};