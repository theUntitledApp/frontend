export type GestureProps = {
  pickerTranslateY: {
    value: number,
  },
  maxValue: number,
}

export type PickerProps = {
  values: {
    value: number,
    label: string,
  }[],
}
