import Button from 'react-bootstrap/Button';
function DeleteButton({onClick, id}) {
  return (
    <>
      <Button variant="outline-danger" onClick={() => onClick(id)}>Delete</Button>{' '}
    </>
  );
}

export default DeleteButton;