import React, { useMemo } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DatePickerAndroid } from 'react-native';

import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, DateButton, DateText } from './styles';

export default function DateInput({ date, setDate, cu }) {
  const dateFormated = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [date]
  );

  async function handleOpenPicker() {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        mode: 'spinner',
        date,
      });

      if (action === DatePickerAndroid.dateSetAction) {
        const selectedDate = new Date(year, month, day);

        setDate(selectedDate);
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
    }
  }

  return (
    <Container>
      <DateButton onPress={handleOpenPicker}>
        <Icon name="event" color="#fff" size={20} />
        <DateText>{dateFormated}</DateText>
      </DateButton>
    </Container>
  );
}
