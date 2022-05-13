import React, {useContext} from 'react'
import { ThemeContext } from '../../context/ThemeContext/ThemeContext';

function BlockChild({text}) {
  const theme = useContext(ThemeContext);
  const style = {
    color: theme.foreground
  }

  return (
    <div style={style}>{text}</div>
  )
}

export default BlockChild