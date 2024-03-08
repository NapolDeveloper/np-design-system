import { css } from 'styled-components';

/** 자주 사용하는 색상들 */
const color = {
  blue: {
    primary: '#3b82f6',
    hover: '#2563eb',
  },
  red: {
    primary: '#f43f5e',
    hover: '#e11d48',
  },
  green: {
    primary: '#22c55e',
    hover: '#16a34a',
  },

  white: '#FFFFFF',
  black: '#000000',

  color: '',
  bgColor: '',
  fg: '',
};

/** 검정 배경 */
export const darkTheme = {
  color: '#000000',
  bgColor: '#FFFFFF',
  gray: '#343434',
};
/** 흰색 배경 */
export const lightTheme = {
  color: '#FFFFFF',
  bgColor: '#000000',
  gray: '#D9D9D9',
};

/** 반응형 사이즈 */
const mediaSize = {
  xs: "screen and (max-width: '400px')",
  sm: "screen and (max-width: '640px')",
  md: "screen and (max-width: '768px')",
  lg: "screen and (max-width: '1024px')",
  xl: "screen and (max-width: '1280px')",
  '2xl': "screen and (max-width: '1536px')",
};

/** 폰트 크기 */
const fontSize = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
};

/** 그 외의 크기 */
const size = {
  xs: '0.2rem',
  sm: '0.4rem',
  md: '0.6rem',
  lg: '1rem',
  xl: '1.4rem',
  '2xl': '1.6rem',
};

/** 유틸리티 */
const util = {
  truncate: () => css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,

  scroll: () => css`
    &::-webkit-scrollbar {
      /** 스크롤바의 너비 */
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      /** 스크롤바 길이 */
      height: 25%;
      /** 스크롤바의 색상 */
      border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
      /** 스크롤바 뒷 배경 색상 */
    }
  `,
};

const theme = {
  color,
  mediaSize,
  fontSize,
  size,
  util,
};

export default theme;

/** 타입 재정의를 위함 ( "styled-components" 변수 타입 추론을 위함( 자동완성 ) ) */
export type Theme = typeof theme;
