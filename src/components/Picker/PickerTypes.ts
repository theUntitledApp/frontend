export type GestureProps = {
  pickerTranslateY: {
    value: number,
  },
  maxValue: number,
}

export type PickerProps = {
  onValueChange: (value: string) => void,
  values: {
    value: number,
    label: string,
  }[],
}
