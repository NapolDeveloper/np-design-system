interface Theme {
  bg: string;
  fg: string;
  fgHover: string;

  primary: string;
  primaryHover: string;
  error: string;
  errorHover: string;
  warning: string;
  warningHover: string;
  success: string;
  successHover: string;

  text: {
    primary: string;
    secondary: string;
  };
}

const lightTheme: Theme = {
  bg: '#ffffff',
  fg: '#ffffff',
  // 색 정하면 수정 예정
  fgHover: 'red',

  primary: '0057a8',
  primaryHover: '004686',
  error: '#d83724',
  errorHover: '#ad2c1d',
  warning: '#efa008',
  warningHover: '#bf8006',
  success: '#00a857',
  successHover: '#008646',

  text: {
    primary: '#000000',
    secondary: '#3d3d3d',
  },
};

const darkTheme: Theme = {
  bg: '#ffffff',
  fg: '#171b1c',
  // 색 정하면 수정 예정
  fgHover: 'red',

  primary: '0057a8',
  primaryHover: '004686',
  error: '#d83724',
  errorHover: '#ad2c1d',
  warning: '#efa008',
  warningHover: '#bf8006',
  success: '#00a857',
  successHover: '#008646',

  text: {
    primary: '#ffffff',
    secondary: '#fefefe',
  },
};

export const theme = {
  light: lightTheme,
  dark: darkTheme,
};
