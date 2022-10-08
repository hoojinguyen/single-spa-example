export default function Root(props) {
  return (
    <header
      style={{
        fontSize: '2rem',
        backgroundColor: 'green',
        color: 'white',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      Hello!!! This is {props.name} and written by ReactJs
    </header>
  );
}
