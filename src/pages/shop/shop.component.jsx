import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { selectCollections } from '../../redux/shop-data/shop-data.selectors';


const ShopPage = ({ collections }) => (
  <div className='shop-page'>
    {
      collections.map(({ id, ...otherCollectionPropcs }) => (
        <CollectionPreview key={id} {...otherCollectionPropcs} />
      ))
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage);