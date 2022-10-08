export default function Root(props) {
  return (
    <footer
      style={{
        fontSize: '2rem',
        backgroundColor: 'grey',
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        height: '200px',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      Hi! This is {props.name} and written by ReactJs
    </footer>
  );
}
