import React from 'react';
import { FlatList, ListRenderItemInfo, View, Text } from 'react-native';

import { CovidCase } from '../../Models';
import { CovidCaseListProps } from './CovidCaseList.props';
import { ItemClickHandler } from 'app/Types';
import s from './CovidCaseList.style';

const renderItem =
  (clickHandler?: ItemClickHandler<CovidCase>) =>
    ({ item }: ListRenderItemInfo<CovidCase>) => {
      return (
        <View style={s.container}>
          <View style={s.statusContainer}>
            <Text style={s.status}>{item.status}</Text>
          </View>
          <Text style={s.info}>{`${item.gender} (${item.umur})`}</Text>
        </View>
      )
    }

const ItemSeparator = () => (<View style={s.separator} />);

const keyExtractor = (item: CovidCase, index: number) => `${item.id}.${index}`; 

const EmptyComponent = () => (<Text style={s.empty}>No Case Found!</Text>)

const CovidCaseList = (props: CovidCaseListProps) => (
  <FlatList
    style={props.style}
    data={props.data}
    renderItem={renderItem(props.onItemClick)}
    ItemSeparatorComponent={ItemSeparator}
    keyExtractor={keyExtractor}
    ListEmptyComponent={EmptyComponent}
  />
);

export default React.memo(CovidCaseList);