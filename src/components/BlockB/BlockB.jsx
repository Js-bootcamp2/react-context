import BlockChild from '../BlockChild/BlockChild';
export default function BlockB({mode}) {
  const isDark = mode === true;

  const style = {
    background: isDark ? 'gray' : 'blue',
    width: '400px',
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <div style={style}>
      <BlockChild mode={mode} text="BLOCK B"/>
    </div>
  )
}