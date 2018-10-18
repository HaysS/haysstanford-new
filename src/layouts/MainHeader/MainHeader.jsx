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

    const layerBackground = {
      backgroundColor: 'rgba(0, 0, 0, 0.0)'
    }

    return (
      <header className={classes} style={{backgroundImage: 'url("./images/ocean-compressed.gif")', backgroundSize: '100%'}}>
        <div className="layer main-header" style={layerBackground}>
          {children}
        </div>
      </header>
    );
  }
}



export default MainHeader;
