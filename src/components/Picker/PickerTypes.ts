export type GestureProps = {
  pickerTranslateY: {
    value: number,
  },
  maxValue: number,
}

export type TPickerValue = {value: number; label: string};

export type PickerProps = {
  onValueChange: (value: string) => void,
  value?: TPickerValue,
  values: TPickerValue[]
}
