import React from 'react';
import MuiButton from '@mui/material/Button';

// const sytles = {
//   btn: {
//     fontFamily: 'Montserrat, sans-serif',
//     fontWeight: 700,
//     fontSize: '16px',
//     lineHeight: '20px',
//     textTransform: 'capitalize',
//     color: '#FFFFFF',
//     padding: '20px 60px',
//     // theme에서 이미 사용중인 컬러이기 때문에 오류가 난다.
//     // 따라서 아래의 방식대로 코딩해야한다.
//     background: #777FEB,
//     borderRadius: '8px'
//   },
// };

const styles = {
  btn: (theme) => ({
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '20px',
    textTransform: 'capitalize',
    color: '#FFFFFF',
    padding: '20px 60px',
    // theme에서 이미 사용중인 컬러이기 때문에 오류가 난다.
    // 따라서 아래의 방식대로 코딩해야한다.
    background: theme.palette.slateBlue.main,
    borderRadius: '8px',
    '&:hover': {
      background: '#646ab0',
    },
  }),
};

const Button = ({ children }) => {
  return <MuiButton sx={styles.btn}>{children}</MuiButton>;
};

export default Button;
