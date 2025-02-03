const Foto = function (props) {
  return (
    <>
      <img src={props.imgLink} alt={props.imgAlt} width={props.imgWidth} />
    </>
  );
};
export default Foto;
