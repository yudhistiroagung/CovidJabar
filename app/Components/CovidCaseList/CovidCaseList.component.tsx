import React, { useState } from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { CovidCase } from '../../Models';
import { CovidCaseListProps } from './CovidCaseList.props';
import { ItemClickHandler } from 'app/Types';
import s from './CovidCaseList.style';

const onPress = (
  item: CovidCase,
  index: number,
  clickHandler?: ItemClickHandler<CovidCase>,
) => () => {
  if (clickHandler)
    clickHandler(item, index)
}

const renderItem =
  (selected: number, clickHandler?: ItemClickHandler<CovidCase>) =>
    ({ item, index }: ListRenderItemInfo<CovidCase>) => {
      const isSelected = selected === index;
      return (
        <TouchableOpacity style={[s.container, isSelected && {backgroundColor: '#e6e6e6'}]}
          onPress={onPress(item, index, clickHandler)}>
          <View style={s.statusContainer}>
            <Text style={s.status}>{item.status}</Text>
          </View>
          <Text style={s.info}>{`${item.gender} (${item.umur})`}</Text>
        </TouchableOpacity>
      )
    }

const ItemSeparator = () => (<View style={s.separator} />);

const keyExtractor = (item: CovidCase, index: number) => `${item.id}.${index}`;

const EmptyComponent = () => (<Text style={s.empty}>No Case Found!</Text>);

const unselectedIndex: number = -1;

const CovidCaseList = (props: CovidCaseListProps) => {
  const [selected, setSelected] = useState<number>(-1);

  const onItemClick: ItemClickHandler<CovidCase|undefined> = (c?: CovidCase, index?: number) => {
    if(props.onItemClick) {
      console.log('ngok', index);
      if (selected === index) {
        setSelected(unselectedIndex);
        props.onItemClick(undefined);
      } else {
        const idx: number = index === undefined ? unselectedIndex : index
        setSelected(idx);
        props.onItemClick(c, index);
      }
    }
  }
  console.log('indexz', selected);

  return (
    <FlatList
      style={props.style}
      data={props.data}
      renderItem={renderItem(selected, onItemClick)}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={keyExtractor}
      ListEmptyComponent={EmptyComponent}
    />
  );
}

export default React.memo(CovidCaseList);