import React, { Component } from 'react'

export default class UpdateComponent extends Component {
    getSnapshotBeforeUpdate(prevProps) {
       if(prevProps.count !== this.props.count){
        console.log('Update Component Updated!');
       }
    }

  render() {
    return (
      <div>{this.props.count}</div>
    )
  }
}
