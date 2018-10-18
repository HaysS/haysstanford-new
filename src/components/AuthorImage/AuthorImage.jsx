import React from "react";
import "./AuthorImage.css";

class AuthorImage extends React.Component {
  render() {
    const { useLink } = this.props
    const { name, image, url } = this.props.author;

    if (image && useLink) {
      return (
        <figure className="author-image">
          <a
            className="img"
            href={url}
            style={{ backgroundImage: `url("${image}")` }}
          >
            <span className="hidden">{`${name}'s Picture`}</span>
          </a>
        </figure>
      );
    } else if (image) {
      return (
        <figure className="author-image">
          <a
            className="img"
            style={{ backgroundImage: `url("${image}")` }}
          >
            <span className="hidden">{`${name}'s Picture`}</span>
          </a>
        </figure>
      );
    }

    return null;
  }
}

export default AuthorImage;
