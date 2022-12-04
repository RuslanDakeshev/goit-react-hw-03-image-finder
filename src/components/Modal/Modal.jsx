import { Component } from 'react';


class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.closeByEsc)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.closeByEsc)
    }

    closeByEsc = ({ code }) => {
          if (code === 'Escape') {
              this.props.closeModal()
          }
    }
    
    closeByBackdrop = event => {
        if (event.target === event.currentTarget) {
            this.props.closeModal();
        }
    }
  render() {
   return (
      <div onClick={this.closeByBackdrop}>
        <div>
          <button type='button' onClick={()=>this.props.closeModal()}>Close</button>
          <img src={this.props.largeImageUrl} alt={this.props.query} />
        </div>
      </div>
    );
  }
}

export default Modal;
