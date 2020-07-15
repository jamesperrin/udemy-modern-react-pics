import React from "react";

const ImageList = (props) => {
  const images = props.images.map(({ id, urls, alt_description }) => {
    return (
      <img key={id} src={urls.regular} alt={alt_description} width="75%" />
    );
  });

  return <div>{images}</div>;
};

export default ImageList;
