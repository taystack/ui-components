// Inspired by https://github.com/Canner/react-loading-image
/*
I'm not enthusiastic about adding another version of React
into the node_modules. Canner deserves credit for this though.
*/
import React from "react";
import PropTypes from "prop-types";


export default class LoadingImage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      isError: false,
      src: null,
      width: null,
      height: null,
      errMsg: null
    };

  }

  componentWillReceiveProps(nextProps) {
    // reload only when image src is changed.
    if (this.props.src !== nextProps.src) {
      this.reload(nextProps);
    }
  }

  componentDidMount() {
    this.reload(this.props);
  }

  reload(props) {
    // initialize
    this.setState({
      isLoading: true,
      isError: false,
      src: null,
      errMsg: null
    });

    const image = new Image();

    image.src = props.src;
    image.onload = () => {
      this.setState({
        src: image.src,
        width: image.width,
        height: image.height,
        isLoading: false,
        isError: false,
        errMsg: null
      });
      if (props.onLoad) {
        props.onLoad(image);
      }
    };
    image.onerror = (err) => {
      this.setState({
        src: null,
        width: null,
        height: null,
        isLoading: false,
        isError: true,
        errMsg: err
      });
      if (props.onError) {
        props.onError(err);
      }
    }
  }

  render() {
    const {loading, error, image, style, className, alt} = this.props;
    const {src, width, height, isLoading, isError, errMsg} = this.state;

    if (loading && isLoading) {
      return loading();
    } else if (error && isError && errMsg) {
      return error(errMsg);
    } else if (src && image) {
      return image({src, width, height});
    } else if (src) {
      return (
        <img
          src={src}
          style={style}
          className={className}
          width={width}
          height={height}
          alt={alt}
        />);
    }

    return null;
  }
}

LoadingImage.propTypes = {
  src: PropTypes.string,
  style: PropTypes.any,
  className: PropTypes.string,
  onLoad: PropTypes.func,
  onError: PropTypes.func,
  image: PropTypes.any,
  loading: PropTypes.any,
  error: PropTypes.any,
};

LoadingImage.defaultProps = {
  src: "",
  style: "",
  className: "",
  onLoad: () => {},
  onError: () => {},
  image: (props) => <img {...props} />,
  loading: () => <span></span>,
  error: () => <span>Error loading image!</span>
};
