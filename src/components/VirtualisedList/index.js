import React from 'react';
import {FlatList} from 'react-native';
import PropTypes from 'prop-types';

export default function VirtualizedView({children}) {
  return (
    <FlatList
      data={[]}
      ListEmptyComponent={null}
      keyExtractor={(_, index) => index.toString()}
      renderItem={null}
      ListHeaderComponent={() => <React.Fragment>{children}</React.Fragment>}
    />
  );
}

VirtualizedView.propTypes = {
  children: PropTypes.object,
};
