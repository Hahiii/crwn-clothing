import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import SECTIONS_DATA from './sections.data'
import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();
    this.state = { SECTIONS_DATA }
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.SECTIONS_DATA.map(({ id, ...otherSectionProps }) => (
          <MenuItem
            key={id}
            {...otherSectionProps}
          />
        ))
        }
      </div>
    )
  }
}


export default Directory;