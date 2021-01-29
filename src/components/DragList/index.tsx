import React, { Component } from 'react';
import './index.scss';

export interface Props {
  index: number;
  list: Array<any>;
  handleChangeEvent: Function;
}

let oH = 0;
class DragList extends Component<Props, any> {
  constructor(props: any) {
    super(props);
    this.state = {
    };
  }

  componentDidMount () {
  }

  handleTouchStartEvent = (e: any) => {
    e.currentTarget.parentElement.style.background = '#EEEEEE';
    e.currentTarget.parentElement.style.zIndex = 1;
    const touches = e.touches[0];
    oH = touches.clientY - e.currentTarget.parentElement.offsetTop;
  }

  handleTouchMoveEvent = (e: any, index: number) => {
    const { list, handleChangeEvent } = this.props;
    const touches = e.touches[0];
    this.defaultEvent(e);
    const height = e.currentTarget.parentElement.offsetHeight;
    const offsetTop = e.currentTarget.parentElement.offsetTop;
    if (offsetTop >= height && index < list.length - 1) {
      handleChangeEvent(index, index + 1);
      e.currentTarget.parentElement.style.top = '0px';
      oH = touches.clientY - e.currentTarget.parentElement.offsetTop;
    } else if (offsetTop <= -height && index > 0) {
      handleChangeEvent(index, index - 1);
      e.currentTarget.parentElement.style.top = '0px';
      oH = touches.clientY - e.currentTarget.parentElement.offsetTop;
    } else {
      const oTop = touches.clientY - oH;
      e.currentTarget.parentElement.style.top = oTop + 'px';
    }
  }

  handleTouchEndEvent = (e: any) => {
    this.defaultEvent(e);
    e.currentTarget.parentElement.style.top = '0px';
    e.currentTarget.parentElement.style.background = 'transparent';
    e.currentTarget.parentElement.style.zIndex = 0;
  }

  defaultEvent = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
  }

  render () {
    const { index } = this.props;
    return (
      <div className="drag-list"
        draggable
        onDragStart={(e) => { this.handleTouchStartEvent(e); }}
        onDrag={(e) => { this.handleTouchMoveEvent(e, index); }}
        onDragEnd={(e) => { this.handleTouchEndEvent(e); }}
      >
        {
          this.props.children
        }
      </div>
    );
  }
}
export default DragList;
