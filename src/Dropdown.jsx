import React, { Component, Fragment } from 'react';
import { Dropdown as DropdownComponent } from 'semantic-ui-react';

export default class Dropdown extends Component {
  state = {
    open: false,
  };

  setOpen = (open) => {
    this.setState((prevState, props) => ({
      open,
    }));
  }

  setRef = (node) => {
    this.select = node;
  }

  handleOpen = (...args) => {
    this.setOpen(true);
    const { onOpen } = this.props;
    onOpen && onOpen(...args);
  }

  handleClose = (...args) => {
    this.setOpen(false);
    const { onClose } = this.props;
    onClose && onClose(...args);
  }

  createDummy = () => {
    const dummy = this.select.ref.cloneNode(true);
    dummy.removeChild(dummy.lastElementChild);
    dummy.className = dummy.className.replace('active', '').replace('visible', '').trim() + ' dropdown--dummy';

    return {
      className: dummy.className,
      innerHTML: dummy.innerHTML,
      component: dummy.tagName.toLowerCase(),
    };
  }

  render() {
    const { open } = this.state;

    // Create a carbon copy of the element.
    // Ideally, hide it via external style.
    const dummy = open && this.createDummy();

    return (
      <Fragment>
        {dummy && (
          <Fragment>
            <dummy.component
              className={dummy.className}
              dangerouslySetInnerHTML={{ __html: dummy.innerHTML }}
            />
            <div className="dropdown--background" />
          </Fragment>
        )}
        <DropdownComponent
          selection
          {...this.props}
          ref={this.setRef}
          onOpen={this.handleOpen}
          onClose={this.handleClose}
        />
      </Fragment>
    );
  }
}
