import styled from 'styled-components';
import { ThemeList, withThemedComponent } from '@utils/theme';
import { HeaderMini } from './theme/mini/HeaderMini';
import { BaseHeader } from './theme/base/BaseHeader';

const ThemedHeader = styled(BaseHeader)`
  background: ${(props) => props.theme.palette.primary};
  height: 150px;
`;

export const Header = withThemedComponent({
  [ThemeList.LIGHT]: ThemedHeader,
  [ThemeList.DARK]: ThemedHeader,
  [ThemeList.MINI]: HeaderMini,
}, ThemedHeader);

