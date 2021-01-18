import React from 'react';
import './index.scss'
import $ from 'jquery'
import {DraggableArea} from 'react-draggable-tags';

let oW,oH,index
const liHeight = 37
class DragList extends React.Component {
  // 声明一个新的状态变量，我们将其称为 "count"
  list = [1,2,3,4,5]

  componentDidMount () {
  }

  handleTouchStartEvent = (e) => {
    var touches = e.touches[0];
    oH = touches.clientY - e.target.offsetTop;
  }

  handleTouchMoveEvent = (e) => {
    var touches = e.touches[0];
    var oTop = touches.clientY - oH;
    e.target.style.top = oTop + "px";
    var ele = document.elementFromPoint(touches.pageX, touches.pageY);
    console.log(touches.pageX + ',' + touches.pageY);
  }

  handleTouchEndEvent = (e) => {
    var touches = e.changedTouches[0];
    var oTop = touches.clientY - oH;
    let index = Math.round(oTop/liHeight)
    if (index < 0) {
      index = 0
    } else if (index > this.list.length - 1) {
      index = this.list.length - 1
    }
    oTop = index * liHeight;
    e.target.style.top = oTop + "px";
  }

  defaultEvent = (e) => {
    e.stopPropagation();
    e.preventDefault();
  }

  render () {
    return (
      <div className="draglist">
        {
          this.list.map((item, index) => {
            return (
              <div 
                className='row'
                id= { 'row' + (index + 1)}
                style={{ top: 37*index + 'px'}}
                onTouchStart={(e) => { this.handleTouchStartEvent(e) }}
                onTouchMove={(e) => { this.handleTouchMoveEvent(e) }}
                onTouchEnd={(e) => { this.handleTouchEndEvent(e) }}
              >
                行数{item}
              </div>
            )
          })
        }
      </div>
    );
  } 
}

export default DragList