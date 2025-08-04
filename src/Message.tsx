function Message() {
  const name = "Val";
  if (name) {
    return <h1>Hello {name}</h1>;
  }
  return <h1>Hello suguritos</h1>;
}

export default Message;
