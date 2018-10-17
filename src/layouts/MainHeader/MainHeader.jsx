import React from "react";
import classNames from "classnames";
import "./MainHeader.css";

class MainHeader extends React.Component {
  render() {
    const { children, cover } = this.props;

    const classes = classNames("main-header", this.props.className, {
      "no-cover": !cover
    });

    const getStyle = () => {
      if (cover) {
        return { backgroundImage: `url("${cover}")` };
      }
      return null;
    };

    return (
      <header className={classes} style={{background: 'transparent', backgroundImage: 'url("./images/ocean-background-min.jpg")', backgroundSize: '100%'}}>
        {children}
      </header>
    );
  }
}

export default MainHeader;
