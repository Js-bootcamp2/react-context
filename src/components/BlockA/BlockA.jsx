import BlockChild from '../BlockChild/BlockChild';
export default function BlockA({mode}) {
  const isDark = mode === true;

  const style = {
    background: isDark ? 'lightGray' : 'red',
    width: '400px',
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  return (
    <div style={style}>
      <BlockChild mode={mode} text="BLOCK A"/>
    </div>
  )
}