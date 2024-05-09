const Tile = ({ imgUrl, countryName, alt }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          border: "1px solid grey",
          borderRadius: "8px",
          padding: "1rem",
          margin: "0.5rem",
          height: "150px",
          width: "150px",
        }}
      >
        <img
          src={imgUrl}
          alt={alt}
          style={{ width: "100px", height: "100px" }}
        />
        <h4>{countryName}</h4>
      </div>
    </>
  );
};

export default Tile;
