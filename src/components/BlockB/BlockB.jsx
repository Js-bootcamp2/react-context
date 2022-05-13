import {useContext} from 'react'
import BlockChild from '../BlockChild/BlockChild';
import { ThemeContext } from '../../context/ThemeContext/ThemeContext';
export default function BlockB({mode}) {
  const theme = useContext(ThemeContext);

  const style = {
    background: theme.background,
    width: '400px',
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <div style={style}>
      <BlockChild text="BLOCK B"/>
    </div>
  )
}