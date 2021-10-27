import { createElement } from 'react';
import classNames from 'classnames';

import { TextProps } from './types';
import styles from './styles.scss';

export const Text = ({
  inline = false,
  children,
  className
}: TextProps) => createElement(
  inline ? 'span' : 'p',
  { className: classNames(styles.text, className) },
  children
);
