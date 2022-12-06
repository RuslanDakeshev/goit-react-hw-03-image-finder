import { Component } from 'react';
import { Overlay, ModalViewer, ModalImg} from './Modal.styled'; // добавить CloseBtn
import PropTypes from 'prop-types';



export class Modal extends Component {

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
      <Overlay onClick={this.closeByBackdrop}>
        <ModalViewer>
          {/* <CloseBtn type='button' onClick={()=>this.props.closeModal()}>Close</CloseBtn> */}
          <ModalImg src={this.props.largeImageUrl} alt={this.props.query} />
        </ModalViewer>
           </Overlay>
          
    );
  }
}

Modal.propTypes = {
  query: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};


